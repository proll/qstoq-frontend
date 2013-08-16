qst.ItemListView = Backbone.View.extend({
	tagName: "div",
	className: "itemlist",
	template:  "blocks/itemlist",

	initialize: function(options){
		this.collection = options.collection;
		this.collection.on("add", this.addBlock, this);
		this.collection.on("load:start", 	this.showSpinner, this);
		this.collection.on("load:success", 	this.hideSpinner, this);
		this.collection.on("load:error", 	this.hideSpinner, this);
		this.$spinner = null;

		this.model = options.model;

		this.render();

	},

	render: function() {
		this.template = qst.Templates.get(this.template);
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.$cont = this.$el.find('.itemlist__table');
		this.showSpinner();
	},

	addBlock: function (model, collection, options) {
		if(!!options && options.at === -1) {
			this.$cont.prepend(model.view.$el);
		} else {
			this.$cont.append(model.view.$el);
		}
	},

	showSpinner: function () {
		if(!this.$spinner) {
			this.$spinner = this.$el.find('.itemlist__spinner');
		} else {
			this.$spinner.toggleClass("hidden", false);
		}
	},

	hideSpinner: function () {
		if(this.$spinner && !this.collection.more) {
			this.$spinner.toggleClass("hidden", true);
		}
	},	
});