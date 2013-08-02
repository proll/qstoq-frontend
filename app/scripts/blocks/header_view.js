qst.HeaderView = Backbone.View.extend({
	template: "blocks/header",
	el: ".page-header",

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
		this.model.on("change:currentItem", this.render, this);
	},
	render: function(){
		var template = this.template( this.model.get("items")[this.model.get("currentItem")] );	

		if(this.model.get("currentItem") === 'defaults' ) {
			this.$el.toggleClass("hidden", true);
		} else {
			this.$el.toggleClass("hidden", false);
		}

		this.$el.html(template);
	}
});

