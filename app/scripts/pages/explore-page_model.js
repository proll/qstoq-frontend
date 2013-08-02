qst.ExplorePage = qst.Page.extend({
	visited: false,
	defaults: {
		uid: null,
		category:   'whole',
		story:  	'whole',
		sort: 		'date',
		filter: 	'all', 
		sleeped:    true
	},

	initialize: function(options){
		options 		= options || {};
		qst.on("usersettings:ready", function(user_obj){
			this.set("uid", user_obj.id);
		}, this);

		this.on("change:uid", function () {
			if(!!this.grid) {
				this.grid.set("user", this.get("uid"), {silent: true})
				this.grid.reload();
			}
		}, this)
	},

	needRerender: function(options) {
		return this.get('sleeped') ||
				options.category != this.get('category') ||
				options.story != this.get('story') ||
				options.sort != this.get('sort') ||
				options.filter != this.get('filter');
	},

	render: function(options) {
		if(!this.needRerender(options)) return false;

		if(!this.visited) {
			this.set(options);

			this.visited = true;
			this.view = new qst.ExplorePageView({
				model: this, 
				template:"pages/explore-page"
			});
			this.grid = new qst.PicTileGrid( _.extend(options, {
				keeper_path: 'qst.app.explore.grid.collection',
				user: this.get("uid")
			})
			);
			this.menu = new qst.ExploreMenu(options);
			this.story_menu = new qst.StoryMenu(options);
			this.story_menu.fetch();

			this.view.render();
			this.grid.activate();
			this.view.addGrid(this.grid);
			this.view.addMenu(this.menu);
			this.view.addStoryMenu(this.story_menu);

			this.story_menu.activate();

			this.set('sleeped', false);
		} else {
			this.set(options);

			this.grid.set( _.extend(options, {user: this.get("uid")}) );
			this.menu.set(options);
			this.story_menu.set(options);
			
			this.view.render();
			this.grid.activate();
			this.view.addGrid(this.grid);
			this.view.addMenu(this.menu);
			this.view.addStoryMenu(this.story_menu);

			this.story_menu.activate();
			this.grid.reset();
			this.set('sleeped', false);
		}

	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		
		this.set('sleeped', true);

		this.grid.sleep();
		this.story_menu.sleep();
	}
});