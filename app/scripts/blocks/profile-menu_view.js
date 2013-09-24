qst.ProfileMenuView = Backbone.View.extend({
	template: "blocks/profile-menu",
	className: "profile-menu",

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
	}

});

