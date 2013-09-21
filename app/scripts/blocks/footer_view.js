qst.FooterView = Backbone.View.extend({
	template: "blocks/footer",
	el: "footer",

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
		// this.model.on("change:currentItem", this.render, this);
	},
	render: function(){
		var template = this.template({ year: (new Date).getFullYear()});	
		// if(this.model.get("currentItem") === 'defaults' ) {
		// 	this.$el.toggleClass("hidden", true);
		// } else {
		// 	this.$el.toggleClass("hidden", false);
		// }
		this.$el.html(template);
	}
});

