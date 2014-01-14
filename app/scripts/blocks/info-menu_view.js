qst.InfoMenuView = Backbone.View.extend({
	template: "blocks/info-menu",
	className: "info-menu",

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
	}

});

