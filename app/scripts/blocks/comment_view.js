qst.CommentView = Backbone.View.extend({
	template: "blocks/comment",
	tagName: "div",
	className: "comment",
	$image: null,
	image: null,

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
		this.render();
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
	}
});

