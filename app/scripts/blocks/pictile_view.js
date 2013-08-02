qst.PicTileView = Backbone.View.extend({
	template: "blocks/pictile",
	tagName: "div",
	className: "pic-tile",

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
		this.$el.toggleClass('load-bg', true);
		
		this.render();
		this.model.on("change:src", this.loadTile, this);
	},

	render: function(){
	},


	loadTile: function () {
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.lazy_loader = new qst.LazyLoader();
		this.lazy_loader.load(this.$el);
		this.lazy_loader.on('load:error', function(){
			this.trigger("pictile:loaderror");
		}, this)
	},
});

