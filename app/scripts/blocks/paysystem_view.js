qst.PaySystemView = Backbone.View.extend({
	template: "blocks/paysystem",
	className: "paysystem",

	events: {
		'change .qst__toggle__inp': 'toggleActive',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("ready", this.render, this);
		// this.model.on("toggle:start", 	this.toggleLoadingOn, this);
		this.model.on("toggle:success", this.toggleLoadingOff, this);
		this.model.on("toggle:error", 	this.toggleLoadingOff, this);
		this.model.on('change:sleeped', this.sleep, this);
	},

	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
		this.delegateEvents();
	},



	toggleActive: function(e) {
		var $input = $(e.target),
			on = $input.is(':checked');

		if(!this.model.toggleSystem($input.data('paysys'))){
			$input
				.parents('.paysystem__item')
					.find('.paysystem__item__setup-a')
					.click();
			$input.removeAttr('checked');
			return false;
		} else {
			$input.parent()
				.toggleClass('on', on)
				.toggleClass('off', !on);
		}

	},

	toggleLoadingOn: function() {
		this.$el.toggleClass('loading', true);
	},


	toggleLoadingOff: function() {
		this.$el.toggleClass('loading', false);
	},


	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
		} else {
			this.delegateEvents();
		}
	},
});

