qst.AuthView = Backbone.View.extend({
	el: ".auth-popup",
	template: "popups/auth",
	rendered: false,

	events: {
		"click .auth-popup_close": "hide",
		"click .auth-popup__login-email_forgot": 'toReset',

		// unmark all error inputs 
		"keypress :input": 	"errorInputUnmark",
		"click :input": 	"errorInputUnmark",

		// clicks to social
		"click .login-via-fb"	: "loginFB",
		"click .login-via-tw"	: "loginTW",
		"click .login-via-vk"	: "loginVK",

		// login form
		"click .login-via-email": 				"showLoginByEmailForm",
		"click .auth-popup__login-email_back": 	"hideLoginByEmailForm",
		"click .auth-popup__login-email_ok": 	"postSigninForm",
		"submit .auth-popup__login-email>form": "postSigninForm",

		"keyup #login-email": 	"switchPostButton",
		"keyup #login-password": "switchForgotPassword",

		// registration form
		"keyup #registration-email0": 				"errorRegistrationHide",
		"keyup #registration-password0": 			"errorRegistrationHide",
		"click 	.auth-popup__registration_next": 	"registrationNext",
		"submit .auth-popup__registration>form": 	"registrationNext",

		"click 	.auth-popup__registration_back": 		"hideRegistrationStep2Form",

		"keyup #registration-first_name0": 				"errorRegistrationStep2Hide",
		"keyup #registration-last_name0": 				"errorRegistrationStep2Hide",
		"click 	.auth-popup__registration_ok": 			"postRegistrationForm",
		"submit .auth-popup__registration-names>form": 	"postRegistrationForm",
	},

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
	},

	render: function(){
		if (!this.rendered) {
			this.rendered = true;
			this.$el.append( this.template(this.model.toJSON()));
			this.$login_email_container = 	this.$el.find(".auth-popup__login-email");
			this.$login_email_form = 	this.$el.find(".auth-popup__login-email form");
			this.$login_email_forget = 	this.$el.find(".auth-popup__login-email_forgot");
			this.$login_email_ok = 		this.$el.find(".auth-popup__login-email_ok");
			this.$login_email = 	this.$login_email_form.find("#login-email");
			this.$login_password = 	this.$login_email_form.find("#login-password");
			this.$login_error = 	this.$el.find(".auth-popup__login-error");

			this.on("error:signin", this.errorSignin, this);
			this.model.signin.on("error", this.errorSignin, this);

			this.$registration_form = 	this.$el.find(".auth-popup__registration form");
			this.$registration_email = 	this.$registration_form.find("#registration-email0");
			this.$registration_password = 	this.$registration_form.find("#registration-password0");
			this.$registration_error = 	this.$el.find(".auth-popup__registration-error");

			this.$registration_step2_container  = 	this.$el.find(".auth-popup__registration-names");
			this.$registration_step2_form  = 		this.$el.find(".auth-popup__registration-names form");
			this.$registration_first_name = 		this.$registration_step2_form.find("#registration-first_name0");
			this.$registration_last_name = 			this.$registration_step2_form.find("#registration-last_name0");
			this.$registration_step2_error = 		this.$el.find(".auth-popup__registration-names-error");

			this.on("error:registration", 		this.errorRegistration, this);
			this.on("error:registration:step2", this.errorRegistrationStep2, this);
			this.model.registration.on("error", this.errorRegistrationStep2, this);


			this.model.on("auth:success",						this.hide, this);
			this.model.registration.on("registration:pending", 	this.hide, this);

			this.model.on("auth:show", this.show, this);
		}


	},

	show: function (options) {
		this.$el.toggleClass("hide", false);
		if(!!options && options.email) {
			this.$registration_email.val(options.email);
			this.$registration_email.focus()
		}
		return false;
	},

	toReset: function() {
		this.hide();
		qst.navigate('/reset',{trigger: true});
		return false;	
	},

	hide: function () {
		this.$el.toggleClass("hide", true);
		this.clear();
		return false;
	},

	clear: function() {
		this.$login_email.val('');
		this.$login_password.val('');
		this.$registration_email.val('');
		this.$registration_password.val('');
		this.$registration_first_name.val('');
		this.$registration_last_name.val('');

		this.switchForgotPassword();
		this.hideLoginByEmailForm();
		this.switchPostButton();
		this.hideRegistrationStep2Form();

		this.errorSigninHide();
		this.errorRegistrationHide();
	},


	// social Login = registration
	loginFB: function () {
		this.model.FB.login(event);
		return false;
	},

	loginTW: function () {
		this.model.TW.login(event);
		return false;
	},

	loginVK: function () {
		this.model.VK.login(event);
		return false;
	},


	// Login by email
	showLoginByEmailForm: function (e) {
		this.$login_email_container.fadeIn();
		this.$login_email.focus();
		if(!_.isEmpty(this.$login_email.val())) {
			this.switchPostButton(
				{
					target:{
						value: 'hack'
					}
				}
			);
		}
		return false;
	},

	hideLoginByEmailForm: function (e) {
		this.$login_email_container.fadeOut();
		return false;
	},

	switchForgotPassword: function (e) {
		this.errorSigninHide(e);
		if (!!e && e.target.value) {
			this.$login_email_forget.fadeIn();
		} else {
			this.$login_email_forget.fadeOut();
		}
	},

	switchPostButton: function (e) {
		this.errorSigninHide(e);
		if (!!e && e.target.value) {
			this.$login_email_ok.fadeIn();
		} else {
			this.$login_email_ok.fadeOut();
		}
	},

	postSigninForm: function (e) {
		e.preventDefault();
		e.stopPropagation();

		var login = 	this.$login_email.val(),
			password = 	this.$login_password.val();
		// validation
		if(!_.isEmail(login)) {
			this.trigger("error:signin", {type: "login", description:qst.localize("Doesn#39;t look like a valid email!", 'auth')})
		} else if (!password){
			this.trigger("error:signin", {type: "password", description:qst.localize("Do you have an empty password?", 'auth')})
		} else {
			this.model.signin.login(
				{
					login: 		login, 
					password: 	password
				});
		}
		return false;
	},

	errorSignin: function(err) {
		if(err.type == "password") {
			this.$login_password.focus();
		} else  {
			this.$login_email.focus();
		}
		this.$login_error.html(err.description);
		this.$login_error.fadeIn();
	},

	errorSigninHide: function (e) {
		if(!!e && !!e.keyCode && e.keyCode == 13) return false;
		this.$login_error.hide();
		return false;
	},


	// Registration
	registrationNext: function (e) {
		e.preventDefault();
		e.stopPropagation();

		var login = 	this.$registration_email.val(),
			password = 	this.$registration_password.val();
		// validation
		if(!_.isEmail(login)) {
			this.trigger("error:registration", {type: "login", description:qst.localize("Doesn&#39;t look like a valid email!", 'auth')})
		} else if (password.length < 6){
			this.trigger("error:registration", {type: "password", description:qst.localize("Please use at least 6 characters", 'auth')})
		} else if (password.length > 16){
			this.trigger("error:registration", {type: "password", description:qst.localize("You can&#39;t use more than 16 characters", 'auth')})
		} else {
			this.showRegistrationStep2Form();
		}
		return false;
	},

	showRegistrationStep2Form: function (e) {
		this.$registration_step2_container.fadeIn();
		this.$registration_first_name.focus();
		return false;
	},

	hideRegistrationStep2Form: function (e) {
		this.errorRegistrationStep2Hide(e)
		this.$registration_step2_container.fadeOut();
		return false;
	},

	errorRegistration: function(err) {
		if(err.type == "password") {
			this.errorInputMark(this.$registration_password);
			this.$registration_password.focus();
		} else  {
			this.errorInputMark(this.$registration_email);
			this.$registration_email.focus();
		}
		console.log(err.description)
		this.$registration_error.html(err.description);
		this.$registration_error.fadeIn();
	},

	errorRegistrationHide: function (e) {
		if(!!e && !!e.keyCode && e.keyCode == 13) return false;
		this.$registration_error.hide();
		return false;
	},



	postRegistrationForm: function (e) {
		e.preventDefault();
		e.stopPropagation();

		var login = 	this.$registration_email.val(),
			password = 	this.$registration_password.val(),
			first_name = 	this.$registration_first_name.val(),
			last_name = 	this.$registration_last_name.val();
		// validation
		// with validating email and password justfor sure
		if(!_.isEmail(login)) {
			this.trigger("error:registration:step2", {type: "login", description:qst.localize("Doesn&#39;t look like a valid email!", 'auth')});
		} else if (password.length < 6){
			this.trigger("error:registration:step2", {type: "password", description:qst.localize("Please use at least 6 characters", 'auth')});
		} else if (password.length > 16){
			this.trigger("error:registration:step2", {type: "password", description:qst.localize("You can&#39;t use more than 16 characters", 'auth')});
		} else if (!first_name) {
			this.trigger("error:registration:step2", {type: "first_name", description:qst.localize("Enter your first name", 'auth')});
		} else if (!last_name) {
			this.trigger("error:registration:step2", {type: "last_name", description:qst.localize("Enter your last name", 'auth')});
		} else {
			this.model.registration.fetch(
				{
					login: 		login, 
					password: 	password,
					first_name: first_name,
					last_name: 	last_name
				});
		}
		return false;
	},

	errorRegistrationStep2: function(err) {
		if(err.type == "first_name") {
			this.errorInputMark(this.$registration_first_name);
			this.$registration_first_name.focus();
		} else if(err.type == "last_name") {
			this.errorInputMark(this.$registration_last_name);
			this.$registration_last_name.focus();
		}
		this.$registration_step2_error.html(err.description);
		this.$registration_step2_error.fadeIn();
	},

	errorRegistrationStep2Hide: function (e) {
		if(!!e && !!e.keyCode && e.keyCode == 13) return false;
		this.$registration_step2_error.hide();
		return false;
	},

	errorInputMark: function ($el) {
		$el.toggleClass("input_error", true)
	},
	errorInputUnmark: function (e) {
		this.$el.find(":input").toggleClass("input_error", false)
	}
});