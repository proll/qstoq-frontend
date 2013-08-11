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
		var opts = {};
		console.lo
		opts.data = {
		}
		if(!!options) {
			if(!!options.url) {
				opts.url = options.url;
			}
			if(!!options.method) {
				opts.method = options.method;
			}
			if(!!options.content) {
				opts.content = options.content;
			}
			if(!!options.ok) {
				opts.ok_title = options.ok;
			}
			if(!!options.close) {
				opts.close_title = options.close;
			}
			if(!!options.success) {
				opts.success_title = options.success;
			}
			if(!!options.error) {
				opts.error_title = options.error;
			}
			if(!!options.event) {
				opts.event = options.event;
			}
			if(!!options.eventdata) {
				opts.eventdata = options.eventdata;
			}
		}
		var confirm = new qst.Confirm(opts);
	},



	// addVote: function() {
	// 	if(qst.is_needauth()) {
	// 		return false;
	// 	} else {
	// 		this.get("photo").like++;
	// 		this.get("photo").wasvote = 1;
	// 		this.vote(1);
	// 		return this;
	// 	}

	// },

	// removeVote: function() {
	// 	this.get("photo").like--;
	// 	this.get("photo").wasvote = 0;
	// 	this.vote(0);
	// },


	// // TODO: Have to do secure call of ajax
	// // without repeat requests
	// vote: function(is_like) {
	// 	$.ajax({
	// 		url: 	qst.authUrl('/api/photo/vote/'),
	// 		type: 	'POST',
	// 		data : {  
	// 			photo: 	this.get("photo").id,
	// 			like: 	is_like
	// 		},
	// 		timeout: 30000
	// 	});

	// 	this.trigger("update:vote", {vote_count: this.get("photo").like, my: is_like});
	// },

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