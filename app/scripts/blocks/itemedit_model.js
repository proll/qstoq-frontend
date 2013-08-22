qst.ItemEdit = Backbone.Model.extend({
	
	collection: null,
	
	defaults: {
		user: 0,
		offset: 	0,
		limit: 		15,

		loading: 	false,
		sleeped: 	false,
		scrollload: true,
	},

	initialize: function (options) {
		this.collection = new qst.LinkCollection();

		this.collection.on("load:success", function (obj) {
			this.trigger('load:success', obj);
			this.set("offset", this.get("offset") + this.get("limit"));
			this.set("loading", false);
		}, this);
		this.collection.on("load:error", function () {
			console.error("photofeed:load:error")
			this.set("loading", false);
		}, this)
		this.collection.on("load:start", function () {
			this.set("loading", true);
		}, this)
		this.collection.on("add", this.addBlock, this);
		this.collection.on("reset", this.resetBlocks, this);

		this.view = new qst.ItemListView({
			collection:this.collection, 
			model: this
		});

		this.on("needmore", this.needMore, this);

		qst.on('link:delete', this.deleteBlock, this)

		if(this.get("scrollload")) {
			qst.on("pagebottom:reached", function () {
				this.trigger("needmore");
			}, this);
		}
	},

	addMyBlock: function(link_obj) {
		var link = new qst.Link(link_obj);
		this.addBlock(link);
		this.collection.add(link, {at: -1});
	},

	addBlock: function (model, collection, options) {
		var block = model.toJSON();
		model.fetch();
	},

	resetBlocks: function  (collection, options) {
		_.each(options.previousModels, function (model, key, list) {
			model.remove();	
		})
		this.collection.more = true;
	},

	needMore: function () {
		if(!this.get("loading") && !this.get("sleeped")) {
			var data = this.toJSON();

			// clear out unnesessary fields
			delete data.loading;
			delete data.sleeped;
			delete data.scrollload;

			this.collection.fetch({data: data});
		}
	},

	deleteBlock: function(event_obj) {
		var item_id = event_obj.id;

		if(this.get('offset') > 0) {
			this.set('offset', this.get('offset') - 1);
		}

		var model = _.find(this.collection.models, function(mdl){
			return mdl.get('id') == item_id;
		});
		
		model.delayedRemove();
	},

	reset: function () {
		this.set("offset", this.defaults.offset);
		this.collection.reset();
		this.trigger("needmore");
		return false;
	},


	activate: function() {
		this.set("offset", this.defaults.offset);
		this.set("sleeped", false);
		this.trigger("needmore");
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});