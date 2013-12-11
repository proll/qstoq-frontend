qst.PaySystemAddView = Backbone.View.extend({
	template: 'blocks/paysystemadd',
	// className: 'paysystemadd',

	events: {
		'submit .paysystemadd__form': 'save',
		// 'click mark': 'mark',
	},

	$form: null,

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
		this.$form = 
			this.$el.find('.paysystemadd__form')
				.filter(this.model.get('system'));

		this.$el.attr('class', this.model.get('system'))
	},

	// mark: function(e) {
	// 	console.log(e.target)
	// 	$(e.target).select();
	// },

	save: function() {

	}
});