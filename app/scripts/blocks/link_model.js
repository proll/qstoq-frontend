qst.Link = Backbone.Model.extend({
	url: '/v1/links/',
	defaults: {
		// "id": XXX,
		// "name": "Pencil Icon PSD",
		// "description": "I made this for fun."
		// counter_view:0,
		// counter_ship:0,

		// "price": 100,
		// "currency": "rur",
		// "url_short": "https://host.ru/l/XXX",
		// "url": [исходная ссылка],
		// "url_qr": "https://host.ru/assets/qr-link-XXX.png",
		// "url_preview": [url на предпросмотр],
		// "with_preview": [если url_preview задан, имеет значение 1, иначе 0],
		// "active": 1,
		// "user": {
		//     "name": "some",
		//     "id": <user_id>,
		// }
	},
	initialize: function (options) {
		this.view = new qst.LinkView({model:this});
	},
	fetch: function () {
		if (parseInt(this.get('counter_ship'))) {
			this.set('ctr', this.get('counter_view')/ this.get('counter_ship'));
		} else{
			this.set('ctr', 0);
		}
		this.set('overall', this.get('price') * this.get('counter_ship'));
		this.view.render();

		this.on('change:active', this.toggleActive, this);
	},

	toggleActive: function (model, value) {
		options = {};
		options.url = this.url + this.get('id');
		options.type = 'post';
		options.data = options.data || {
			active: !!(this.get('active'))?1:0
		};

		return Backbone.Model.prototype.fetch.call(this, options);
	},


	deleteItem: function (options) {
		var opts = {
			url: 			'/v1/links/' + this.get('id'),
			method: 		'delete',
			content: 		qst.localize('Do you want to delete this item?','itemlist'),
			ok_title: 		qst.localize('Ok','itemlist'),
			close_title: 	qst.localize('Cancel','itemlist'),
			success_title: 	qst.localize('Item deleted.','itemlist'),
			error_title: 	qst.localize('Something went wrong...','itemlist'),
			event: 			'link:delete',
			eventdata: 		{id: this.get('id')},
		}
		var confirm = new qst.Confirm(opts);
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	delayedRemove: function() {
		this.view.delayedRemove();

		var that = this;
		setTimeout(function() {
			that.remove();
		}, 300)
	}
});