qst.ItemEditView = Backbone.View.extend({
	template: "blocks/itemedit",
	className: "itemedit",

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("load:success", this.render, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
	}
});

