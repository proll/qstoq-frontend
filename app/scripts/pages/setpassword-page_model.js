qst.SetPasswordPage = qst.Page.extend({
	visited: false,
	url: '/api/auth/change_passw/',

	defaults: {
		passw: '',
		code:  '',
		email: '',
	},

	initialize: function(options){
	},

	render: function(options) {
		this.set(options);
		this.view = new qst.SetPasswordPageView({
			model: this, 
			template:"pages/setpassword-page"
		});
		this.view.render();
	},

	submitSet: function(password) {
		if( password.length < 6 || password.length > 16) {
			this.trigger('password:invalid');
			return false;
		} else {
			this.set('passw', password);
			this.fetch();
			return true;
		}
	},

	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.data = options.data || {
			passw: 	this.get("passw"),
			code: 	this.get("code"),
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