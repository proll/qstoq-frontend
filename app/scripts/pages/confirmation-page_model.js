qst.ConfirmationPage = qst.Page.extend({
	visited: false,
	url: '/api/auth/resend_confirmation/',

	defaults: {
		login: ''
	},

	initialize: function(options){
	},

	render: function(options) {
		this.set(options);
		this.view = new qst.ConfirmationPageView({
			model: this, 
			template:"pages/confirmation-page"
		});
		this.view.render();
	},

	submit: function(password) {
		this.fetch();
		return true;
	},

	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.data = options.data || {
			login: 	this.get("login"),
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