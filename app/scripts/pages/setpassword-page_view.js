qst.SetPasswordPageView = qst.PageView.extend({
	events: {
		'submit .setpassword-form': 'submitSet',
		'keyup 	.setpassword-password': 'clearErrors',
		'click 	.setpassword-btn': 'submitSet'
	},

	initialize: function(options){
		if(!(options && options.template)){
			qst.error("Page must have a template");
			return;
		}
		this.template = qst.Templates.get(options.template);
		this.createDom();

		this.model.on('load:success', 		this.showSuccess, this);
		this.model.on('password:invalid', 	this.toggleInvalid, this);
		this.model.on('load:error', 		this.toggleError, this);
	},

	submitSet: function(e) {
		this.$password = this.$el.find('.setpassword-password');
		this.model.submitSet(this.$password.val());
		return false;
	},

	toggleInvalid: function(e) {
		this.$el
			.toggleClass('invalid', true)
			.toggleClass('error', 	false);
	},

	toggleError: function(e) {
		this.$el
			.toggleClass('invalid', false)
			.toggleClass('error', 	true);
	},

	clearErrors: function(e) {
		if(e.keyCode == 13) return true;
		this.$el
			.toggleClass('invalid', false)
			.toggleClass('error', 	false);
	},

	showSuccess: function() {
		this.$el
			.toggleClass('success');
	}
});