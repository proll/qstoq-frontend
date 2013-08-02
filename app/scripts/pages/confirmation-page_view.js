qst.ConfirmationPageView = qst.PageView.extend({
	events: {
		'submit .confirmation-form': 'submit',
		'click 	.confirmation-btn': 'submit'
	},

	initialize: function(options){
		if(!(options && options.template)){
			qst.error("Page must have a template");
			return;
		}
		this.template = qst.Templates.get(options.template);
		this.createDom();

		this.model.on('load:success', 		this.toggle, this);
		this.model.on('load:error', 		this.toggle, this);
	},

	submit: function(e) {
		this.model.submit();
		return false;
	},

	toggle: function(e) {
		var $list = 	this.$el.find('.confirmation-caption-list');
			$last_el = 	this.$el.find('.confirmation-caption:nth-child(1)'),
			$new_el = 	$last_el.clone();

			$list.append($new_el);
			$last_el.remove()
	},
});