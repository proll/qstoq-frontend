qst.FeedbackView = Backbone.View.extend({
	template: "popups/feedback",
	rendered: false,
	className: 'feedback',

	events: {
		// unmark all error inputs 
		'keypress': 'hideErrors',
		'click': 	'hideErrors',

		"submit .feedback__s1-form": "submit",
		'click .feedback__s1-submit-a': 'submitForm',

		'click .feedback__s2-submit-a': 'remove',
	},

	initialize: function(options){
		this.model = options.model;
		this.template = qst.Templates.get(this.template);
		this.render();

		this.model.on("success", this.showSuccess, this);
	},

	render: function(){
		this.rendered = true;
		this.$el.append( this.template(this.model.toJSON()));

		this.popup_view = new qst.PopupView({klass: "feedback-popup"});
		this.popup_view.on('hide', this.remove, this);
		this.popup_view.setContent(this.$el);
		this.popup_view.show();


		this.$cont 			= this.$el.find('.auth__cont');
		this.$sign_toggler 	= this.$el.find('.auth__toggler');



		this.$form = 			this.$el.find(".feedback__s1-form");
		this.$input_name = 		this.$form.find('input[name=name]');
		this.$input_phone = 	this.$form.find('input[name=phone]');
		this.$input_email = 	this.$form.find('input[name=email]');

		this.$submit_btn = 		this.$form.find('.feedback__s1-submit-a');
		this.$error = 			this.$form.find('.feedback__s1-submit-error');
		this.model.on("error", this.error, this);


		this.$input_name.focus();
	},

	showSuccess: function(model, state) {
		this.$el.toggleClass('success', true);
		return false;
	},


	submitForm: function(e) {
		this.$form.submit();
		return false;
	},

	submit: function (e) {
		e.preventDefault();
		e.stopPropagation();

		var name = 		$.trim(this.$input_name.val()),
			phone = 	$.trim(this.$input_phone.val()),
			email = 	$.trim(this.$input_email.val());
		// validation
		if (_.isEmpty(name)){
			this.showError(qst.localize('Don\'t you have a name?', 'feedback'), 'name')
		} else if(!_.isEmail(email)) {
			this.showError(qst.localize('Doesn&#39;t look like a valid email', 'auth'), 'email')
		} else if (email.length > 50){
			this.showError(qst.localize('Too much', 'auth'), 'email')
		} else {
			this.model.fetch({
				name: 		name, 
				phone: 		phone, 
				email: 		email, 
			});
		}
		return false;
	},

	error: function(error) {
		this.showError(qst.localize('Something went wrong...', 'misc'), 'email')
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
			case 'phone': 
				this.$input_phone.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_phone.focus();
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
		this.$input_phone.val('');
	},

	remove: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.model.off(null, null, this);
		this.popup_view.unlockPage();
		this.popup_view.remove();

		delete this.popup_view;

		this.model.clear({silent: true});
		return Backbone.View.prototype.remove.call(this, null);
	}
});