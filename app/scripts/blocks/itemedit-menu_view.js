qst.ItemEditMenuView = Backbone.View.extend({
	template: "blocks/itemedit-menu",
	className: "itemedit-menu",

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
		this.model.on("change:id", this.render, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
	}

});

