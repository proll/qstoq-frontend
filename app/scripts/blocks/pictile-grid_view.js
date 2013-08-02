qst.PicTileGridView = Backbone.View.extend({
	tagName: "div",
	className: "pic-tile-grid",
	template: "blocks/pictile-grid",

	initialize: function(options){
		this.collection = options.collection;
		this.collection.on("add", this.addPic, this);
		this.collection.on("load:start", 	this.showStartLoad, this);
		this.collection.on("load:success", 	this.hideStartLoad, this);
		this.collection.on("load:error", 	this.hideStartLoad, this);

		this.model = options.model;

		this.render();
		this.showStartLoad();
	},

	render: function(){
		var template = qst.Templates.get(this.template);
		this.$el.html(template(this.model.toJSON()));
		this.$cont = 	this.$el.find(".pic-tile-grid__container");
		this.$spinner = this.$el.find(".pic-tile-grid__spinner");
		this.$addphoto =this.$el.find(".pic-add a");

	},

	addPic: function (model, collection, options) {
		this.$cont.append(model.view.$el);
	},

	showStartLoad: function () {
		if(!this.collection.length) {
			this.$el.toggleClass("pic-tile-grid_new-load", true);
		}
		if(this.$spinner && this.collection.more) {
			this.$spinner.toggleClass("hidden", false);
		}
		if(this.$addphoto) {
			if(!!this.model.get("category")) {
				this.$addphoto.attr("href", "/add/" + this.model.get("category") + "/" + this.model.get("story") + "/")
			} else {
				this.$addphoto.attr("href", "/add");
			}
		}
	},

	hideStartLoad: function () {

		this.$el.toggleClass("pic-tile-grid_new-load", false);
		if(!this.collection.length) {
			this.$el.toggleClass("pic-tile-grid_empty", true);
		} else {
			this.$el.toggleClass("pic-tile-grid_empty", false);
		}


		if(this.$spinner && !this.collection.more) {
		 	this.$spinner.toggleClass("hidden", true);
		}
	},	
});