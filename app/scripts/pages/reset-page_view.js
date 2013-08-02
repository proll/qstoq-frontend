qst.ResetPageView = qst.PageView.extend({
	events: {
		'submit .reset-form': 'submitReset',
		'keyup 	.reset-login': 'clearErrors',
		'click 	.reset-btn': 'submitReset'
	},

	initialize: function(options){
		if(!(options && options.template)){
			qst.error("Page must have a template");
			return;
		}
		this.template = qst.Templates.get(options.template);
		this.createDom();

		this.model.on('load:success', 	this.showSuccess, this);
		this.model.on('login:invalid', 	this.toggleInvalid, this);
		this.model.on('load:error', 	this.toggleNouser, this);
	},

	submitReset: function(e) {
		this.$login = this.$el.find('.reset-login');
		this.model.submitReset(this.$login.val());
		return false;
	},

	toggleInvalid: function(e) {
		this.$el
			.toggleClass('invalid', true)
			.toggleClass('nouser', false);
	},

	toggleNouser: function(e) {
		this.$el
			.toggleClass('invalid', false)
			.toggleClass('nouser', true);
	},

	clearErrors: function(e) {
		if(e.keyCode == 13) return true;
		this.$el
			.toggleClass('invalid', false)
			.toggleClass('nouser', false);
	},

	showSuccess: function() {
		var email_domain = this.model.getEmailDomain(this.model.get('login'));

		this.$el.find('.reset-success')
				.attr('href', this.model.emailHrefObj[email_domain] || 'http://' + email_domain);
		this.$el
			.toggleClass('success');
	}
});