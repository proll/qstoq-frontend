qst.Account = Backbone.Model.extend({
	url: '/v1/users/',
	defaults: {
		sleeped: true,
		user: 0,
		user_obj: {},
		// "user": {
		// 	"id": 37,
		// 	"name": "some",
		// 	"email": "some@email.com",
		// 	"created": "2013-04-23 16:40:13",
		// 	"balance": 1000000000,
		// 	"currency": "RUB",
		// 	"about": "some info",
		// 	"external": {
		// 		"vkontakte": {
		// 			"uid": "6440670"
		// 			"first_name": "Дмитрий"
		// 			"last_name": "Шиляев"
		// 		},
		// 	   "facebook": {
		// 		   "id": "836678865",
		// 		   "name": "Dmitry Shilyaev",
		// 		   "first_name": "Dmitry",
		// 		   "last_name": "Shilyaev",
		// 		   "link": "https://www.facebook.com/servancho",
		// 		   "username": "servancho",
		// 		   "gender": "male",
		// 		   "email": "dmitry@shyliaev.com",
		// 		   "timezone": "4",
		// 		   "locale": "en_US",
		// 		   "verified": "1",
		// 		   "updated_time": "2013-09-02T05:20:57+0000"
		// 	   }
		// 	}
		// }
	},

	initialize: function (options) {
		this.view = new qst.AccountView({model:this});
	},

	fetch: function (options) {
		options = options || {};
		options.type = 'get';
		options.data = options.data || {};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set('user_obj', response.result.user);
		this.trigger('load:success');
	},

	error: function (model, xhr, options) {
		this.trigger('account:error')
	},


	activate: function() {
		this.set('sleeped', false);
		this.fetch();
		this.view.activate();
	},

	sleep: function() {
		this.set('sleeped', true);
		// this.view.reset();
	},

	reset: function () {
		return false;
	},

	remove: function () {
		this.view.reset();
		this.view.remove();
		this.stopListening();
		this.clear({silent: true});
	},
});