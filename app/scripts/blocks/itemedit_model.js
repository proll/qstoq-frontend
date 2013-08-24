qst.ItemEdit = Backbone.Model.extend({
	
	url: '/v1/links/',
	
	defaults: {
		state: '',// link / nothing / file
		// "id": XXX,
		// "name": "Pencil Icon PSD",
		// "description": "I made this for fun."
		// "price": 100,
		// "price_pwyw": 0,
		// "currency": "rur"
		// "url_short": "https://host.ru/l/XXX"
		// "url": "http://somelink",
		// "url_qr": "https://host.ru/assets/qr-link-XXX.png",
		// "counter_view": 25, // количество просмотров
		// "counter_ship": 19, // количество покупок
		// "active": 1
		// "user": {
		// 		"name": "some",
		// 		"id": <user_id>,
		// }
	},

	initialize: function (options) {
		this.view = new qst.ItemEditView({
			model:this
		});

	},

	fetch: function (options) {
		options = options || {};
		options.url = this.url + this.get('id');
		options.type = 'get';
		options.data = options.data || {};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},	

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response.result);

		var link = this.get('url');
		if(_.isEmpty(link)) {
			this.set('state', 'nothing');
		} else if (qst.isFile(link)) {
			this.set('state', 'file');
		} else {
			this.set('state', 'link');
		}

		if(response.success) {
			this.trigger('load:success');
		} else {
			this.trigger('load:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('load:error');
	},


	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});