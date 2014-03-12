qst.AuthView = Backbone.View.extend({
	template: "popups/auth",
	rendered: false,
	className: 'auth',

	events: {

		'click .auth__sign-toggler-lnk': 'toggleSign',
		
		// clicks to social
		"click .auth__social-item-lnk_vk"	: "loginVK",
		"click .auth__social-item-lnk_fb"	: "loginFB",
		// "click .auth__social-item-lnk_tw"	: "loginTW",


		// unmark all error inputs 
		'keypress': 'hideErrors',
		'click': 	'hideErrors',


		"submit .auth__sign-form": "submit",
		'click .auth__sign-submit-a': 'submitForm',
	},

	initialize: function(options){
		this.template = qst.Templates.get(this.template);

		this.model.on("auth:show", this.render, this);
		this.model.on("auth:success", this.remove, this);
		this.model.on("change:state", this.changeState, this);
	},

	render: function(){
		this.rendered = true;
		this.$el.append( this.template(this.model.toJSON()));

		this.popup_view = new qst.PopupView({klass: "auth-popup"});
		this.popup_view.on('hide', this.remove, this);
		this.popup_view.setContent(this.$el);
		this.popup_view.show();


		this.$cont 			= this.$el.find('.auth__cont');
		this.$sign_toggler 	= this.$el.find('.auth__toggler');



		this.$form = 			this.$el.find(".auth__sign-form");
		this.$input_email = 	this.$form.find('input[name=login]');
		this.$input_name = 		this.$form.find('input[name=fio]');
		this.$input_password = 	this.$form.find('input[name=password]');

		this.$submit_btn = 		this.$form.find('.auth__sign-submit-a');
		this.$error = 			this.$form.find('.auth__sign-submit-error');



		this.model.signin.on("error", this.errorSignin, this);
		this.model.registration.on("error", this.errorSignup, this);
		this.model.emailconfirm.on("error", this.errorEmail, this);
		// this.model.registration.on("registration:pending", 	this.hide, this);


		this.toggleSign();

		this.$input_email.focus();
	},


	toggleSign: function(e) {
		if(e) {
			e.preventDefault();
			e.stopPropagation();
		}
		if(this.model.get('state') === 'signin') {
			this.model.set('state', 'signup');
		} else {
			this.model.set('state', 'signin');
		}
	},

	changeState: function(model, state) {
		this.$input_email.focus();
		if(state === 'signup') {
			this.$el
				.toggleClass('signin', false)
				.toggleClass('signup', true)
				.toggleClass('emailconfirm',  false)

			// tabIndexFix
			this.$input_email
				.attr('tabindex', 1)
				.attr('autocomplete', 'off');
			this.$input_name
				.attr('tabindex', 2)
				.attr('autocomplete', 'off');
			this.$input_password
				.attr('tabindex', 3)
				.attr('autocomplete', 'off');
			this.$submit_btn
				.attr('tabindex', 4)
				.attr('autocomplete', 'off');

		} else if(state === 'signin'){
			this.$el
				.toggleClass('signin', true)
				.toggleClass('signup', false)
				.toggleClass('emailconfirm',  false)

			// tabIndexFix
			this.$input_email
				.attr('tabindex', 1)
				.attr('autocomplete', 'on');
			this.$input_name
				.removeAttr('tabindex')
				.attr('autocomplete', 'on');
			this.$input_password
				.attr('tabindex', 2)
				.attr('autocomplete', 'on');
			this.$submit_btn
				.attr('tabindex', 3)
				.attr('autocomplete', 'on');

		} else if(state === 'emailconfirm'){
			this.$el
				.toggleClass('signin', false)
				.toggleClass('signup', false)
				.toggleClass('emailconfirm',  true)

			// tabIndexFix
			this.$input_email
				.attr('tabindex', 1)
				.attr('autocomplete', 'off');
			this.$input_name
				.removeAttr('tabindex')
				.attr('autocomplete', 'off');
			this.$input_password
				.removeAttr('tabindex')
				.attr('autocomplete', 'off');
			this.$submit_btn
				.removeAttr('tabindex')
				.attr('autocomplete', 'off');
		}


		return false;
	},


	submitForm: function(e) {
		this.$form.submit();
		return false;
	},

	submit: function (e) {
		e.preventDefault();
		e.stopPropagation();

		var email = 	$.trim(this.$input_email.val()),
			name = 		$.trim(this.$input_name.val()),
			password = 	$.trim(this.$input_password.val());
		// validation
		if(this.model.get('state') === 'signin') {
			if(!_.isEmail(email)) {
				this.showError(qst.localize('Doesn&#39;t look like a valid email', 'auth'), 'email')
			} else if (email.length > 50){
				this.showError(qst.localize('Too much', 'auth'), 'email')
			} else if (_.isEmpty(password)){
				this.showError(qst.localize('Do you have an empty password?', 'auth'), 'password')
			} else if (password.length > 45){
				this.showError(qst.localize('Too much', 'auth'), 'password')
			} else {
				this.model.signin.login({
					login: 		email, 
					password: 	password
				});
			}
		} else if(this.model.get('state') === 'signup') {
			if(!_.isEmail(email)) {
				this.showError(qst.localize('Doesn&#39;t look like a valid email', 'auth'), 'email')
			} else if (email.length > 50){
				this.showError(qst.localize('Too much', 'auth'), 'email')
			} else if (_.isEmpty(name)){
				this.showError(qst.localize('Please enter your name', 'auth'), 'name')
			} else if (name.length > 55){
				this.showError(qst.localize('Too much', 'auth'), 'name')
			} else if (_.isEmpty(password)){
				this.showError(qst.localize('Please use not an empty password', 'auth'), 'password')
			} else if (password.length > 45){
				this.showError(qst.localize('Too much', 'auth'), 'password')
			} else {
				this.model.registration.fetch({
					login: 		email, 
					password: 	password,
					name: name,
				});
			}
		} else if(this.model.get('state') === 'emailconfirm') {
			if(!_.isEmail(email)) {
				this.showError(qst.localize('Doesn&#39;t look like a valid email', 'auth'), 'email')
			} else if (email.length > 50){
				this.showError(qst.localize('Too much', 'auth'), 'email')
			} else {
				this.model.emailconfirm.fetch({
					email: 		email, 
				});	
			}
		}
		return false;
	},

	errorSignin: function(error) {
		if(error.status === 401) {
			this.showError(qst.localize('Wrong e-mail and password combination :(', 'auth'), 'email')
		} else {
			this.showError(qst.localize('Something went wrong...', 'misc'), 'email')
		}
	},

	errorSignup: function(error) {
		if(error.status === 401) {
			this.showError(qst.localize('Wrong e-mail and password combination :(', 'auth'), 'email')
		} else {
			this.showError(qst.localize('Something went wrong...', 'misc'), 'email')
		}
	},

	errorEmail: function(error) {
		if(error.status === 401) {
			this.showError(qst.localize('Doesn&#39;t look like a valid email', 'auth'), 'email')
		} else {
			this.showError(qst.localize('Something went wrong...', 'misc'), 'email')
		}
	},



	showError: function(txt, input_name) {
		this.$error.html(txt);
		this.$el.toggleClass('error', true);
		switch(input_name) {
			case 'email': 
				this.$input_email.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_email.focus();
				break;
			case 'name': 
				this.$input_name.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_name.focus();
				break;
			case 'password': 
				this.$input_password.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_password.focus();
				break;
		}
	},
	
	hideErrors: function() {
		this.$el.toggleClass('error', false);
		this.$el.find('.error-inp').toggleClass('error-inp', false);
	},






	clear: function() {
		this.hideErrors();
		this.$input_email.val('');
		this.$input_name.val('');
		this.$input_password.val('');
	},


	// social Login = registration
	loginFB: function (event) {
		this.model.FB.login(event);
		return false;
	},

	loginTW: function (event) {
		this.model.TW.login(event);
		return false;
	},

	loginVK: function (event) {
		this.model.VK.login(event);
		return false;
	},

	remove: function(options) {
		this.model.off(null, null, this);
		this.model.signin.off(null, null, this);
		this.model.registration.off(null, null, this);
		this.model.emailconfirm.off(null, null, this);
		this.popup_view.unlockPage();
		this.popup_view.remove();

		delete this.popup_view;
		// this.model.clear({silent: true});
		return Backbone.View.prototype.remove.call(this, options);
		return false;
	}
});