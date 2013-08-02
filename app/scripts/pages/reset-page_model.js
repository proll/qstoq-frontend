qst.ResetPage = qst.Page.extend({
	visited: false,
	url: '/api/auth/reset_passw/',

	emailHrefObj: {
		'gmail.com' : 	'http://gmail.com',
		'mail.ru' : 	'http://mail.ru',
		'list.ru' : 	'http://mail.ru',
		'bk.ru' : 		'http://mail.ru',
		'indox.ru' : 	'http://mail.ru',
		'rambler.ru' : 	'http://mail.rambler.ru',
		'yahoo.com' : 	'http://mail.yahoo.com',
		'hotmail.com' : 'http://hotmail.com',
		'yandex.ru' : 	'http://mail.yandex.ru',
		'ya.ru' : 		'http://mail.yandex.ru',
		'narod.ru' : 	'http://mail.yandex.ru',
		'yandex.com' : 	'http://mail.yandex.ru'
	},

	defaults: {
		login: '',
	},

	initialize: function(options){
	},

	getEmailDomain: function (email){
		email = email.match(/@([a-z]+[.]([a-z]+))/i);
		return email === null ? "" : email[1];
	},

	render: function(options) {
		this.view = new qst.ResetPageView({
			model: this, 
			template:"pages/reset-page"
		});
		this.view.render();
	},

	submitReset: function(email) {
		if(!_.isEmail(email)) {
			this.trigger('login:invalid');
			return false;
		} else {
			this.set('login', email);
			this.fetch();
			return true;
		}
	},

	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.data = options.data || {
			login: this.get("login")
		};
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);
		this.trigger("load:start");
		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response);
		if(!response.error) {
			this.trigger("load:success");
		} else {
			this.trigger("load:error");
		}
	},

	error: function (model, xhr, options) {
		this.trigger("load:error")
	},

	sleep: function () {
		this.remove();
	},

	remove: function () {
		if(this.view) {
			this.view.remove();
		}
	}
});