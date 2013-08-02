qst.StoryMenu = Backbone.Model.extend({
	url: "/api/story_tree/",
	defaults:{
		sort: "date",
		filter: "all",
		category: "whole",
		story: "whole",

		current_id: "allph",
		current_name: "Choose category",

		root_path: "/explore",
		event_driven: false,
		with_whole: true,
		is_default: true,
	},


	initialize: function (options) {

		this.on("change:sort", function (model, value) {
			if(!value) 
				this.set("sort", this.defaults.sort);
		}, this);

		this.on("change:filter", function (model, value) {
			if(!value) 
				this.set("filter", this.defaults.filter);
		}, this);
		this.on("change:category", function (model, value) {
			if(!value) 
				this.set("category", this.defaults.category);
		}, this);

		this.on("change:story", function (model, value) {
			if(!value) 
				this.set("story", this.defaults.story);
		}, this);


		this.on("change", function () {
			this.changeCurrent();
			this.daily_list.set({
				sort: this.get("sort"),
				filter: this.get("filter"),
				story: 	this.get("story"),
			});
		}, this);

		this.on("load:success", function () {
			this.daily_list.activate();
		}, this);

		this.on("activate", function () {
			this.daily_list.activate();
		}, this);

		this.on("sleep", function () {
			this.daily_list.sleep();
		}, this);

		this.view = new qst.StoryMenuView({
			model: this
		});

		this.daily_list = new qst.DailyListMenu(options);
	},


	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		return Backbone.Model.prototype.fetch.call(this, options);
	},


	changeCurrent: function () {
		if( this.get("category") == this.defaults.category && this.get("story") == this.defaults.story ) {

			this.set("current_id",   this.defaults.current_id, {silent: true});
			this.set("current_name", qst.localize(this.defaults.current_name, 'story_menu'), {silent: true});
			this.set("is_default", true, {silent: true});

		} else if (this.get("category") == "daily"){
			// TODO: HACK story name get
			// think about refactor dailylist menu
			var txt = this.daily_list.view.$el.find(".story-menu__item-"+this.get("story")).text();
			if(!!txt) {
				this.set("current_id", 		false, 			{silent: true});
				this.set("current_name", 	this.daily_list.view.$el.find(".story-menu__item-"+this.get("story")).text(), 	{silent: true});
			} else {
				this.set("current_id", 		"daily", 			{silent: true});
				this.set("current_name", 	qst.localize("Daily Stories", 'story_menu'), 	{silent: true});
			}
			this.set("is_default", false, {silent: true});

		} else if ( !!this.get("storycats") ) {

			var category = _.find( this.get("storycats"), {id: parseInt(this.get("category"))} );
			if(!!category) {
				if( this.get("story") == this.defaults.story ) {
						this.set("current_id", 		category.id, 	{silent: true});
						this.set("current_name", 	category.name, 	{silent: true});
				} else {
						var story = _.find(category.stories, {id: parseInt( this.get("story") )});
						this.set("current_id", 		false, 			{silent: true});
						this.set("current_name", 	story.name, 	{silent: true});
				}
			}
			this.set("is_default", false, {silent: true});

		}
	},



	success: function (model, response, options) {
		response = _.toJSON(response);
		if(!response.error) {
			this.trigger("load:success");
		} else {
			this.trigger("load:error");
		}
	},


	error: function (model, xhr, options) {
		this.trigger("load:error")
	}, 


	activate: function () {
		this.trigger("activate");
	},

	sleep: function () {
		this.trigger("sleep");
	},

	remove: function () {
		this.daily_list.remove();
		this.stopListening();
		this.view.sleep();
		this.view.remove();
		this.clear({silent: true});
	}
});