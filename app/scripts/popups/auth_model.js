qst.Auth = Backbone.Model.extend({
	defaults: {
		state: 'signup'
	},

	initialize: function (){

		this.FB  = new qst.FB();
		// this.TW  = new qst.TW({url:"/api/auth/", url_token:"/api/auth/twitter/request_token/"});
		this.VK  = new qst.VK();
		this.signin 		= new qst.Signin();
		this.registration 	= new qst.Registration();

		// this.on("twitter:hi", function (user_obj) {
		// 	this.TW.fetch(user_obj);
		// }, this);

		this.on("vkontakte:hi", function (user_obj) {
			this.VK.fetch(user_obj);
		}, this);

		this.FB.on 			("auth:success", this.authSuccess, this);
		// this.TW.on 			("auth:success", this.authSuccess, this);
		this.VK.on 			("auth:success", this.authSuccess, this);
		this.signin.on		("auth:success", this.authSuccess, this);
		this.registration.on("auth:success", this.authSuccess, this);

		this.registration.on("auth:success", this.authSuccess, this);
		this.registration.on("registration:success", this.afterRegistration, this);


		this.FB.on 			("error", this.error, this);
		// this.TW.on 			("error", this.error, this);
		this.VK.on 			("error", this.error, this);
		this.signin.on		("error", this.error, this);
		this.registration.on("error", this.error, this);

		// TODO: вынести отсюда qst.navigate
		// this.registration.on("registration:pending", function (user_obj) {
		// 	qst.navigate("/confirmation/"+user_obj.login, {trigger: true});
		// }, this);
		this.registration.on("registration:success", function () {
			// qst.navigate("/findfriends");
			qst.navigate("/", {trigger: true});
		}, this);

		qst.on("auth:show", function (options) {
			console.log("auth:show");
			if(qst.is_authed()) {
				qst.navigate('/', {trigger: true});
				return false;
			}
			this.set('state', 'signup');
			this.view = new qst.AuthView({model: this});
			this.trigger("auth:show", options)
		}, this)

		qst.on("navbar:logout", function () {
			this.logout();
		}, this)

	},

	authSuccess: function(user_obj) {
		if(!!user_obj.session) {
			this.trigger("auth:success", user_obj);
		}
	},

	afterRegistration: function() {
		qst.app.statistic.trackRegistration();
	},

	logout: function(){
		this.trigger("auth:clear");
	},

	error:function (err) {
		this.trigger("error",err);
	}
});