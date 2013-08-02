qst.ProfilePage = qst.Page.extend({
	visited: false,
	visited_info: false,
	visited_feed: false,
	visited_explore: false,
	defaults: {
		mine: false,
		user: 0,
		section: 'info',
		category: 'whole',
		story: 'whole',
		sort:  'date',
		sleeped: true
	},

	initialize: function(options){
		options 		= options || {};
	},

	needRerender: function(options) {
		return this.get('sleeped') || 
			options.user 		!= this.get('user') ||
			options.section 	!= this.get('section') ||
			options.category 	!= this.get('category') ||
			options.story 		!= this.get('story') ||
			options.sort 		!= this.get('sort');
	},


	render: function(options) {
		if(!options.user) {
			options.user = qst.user.get('uid') || this.defaults.user;
		}

		if(!options.section) {
			options.section = this.defaults.section;
		}

		if(!options.category) {
			options.category = this.defaults.category;
		}

		if(!options.story) {
			options.story = this.defaults.story;
		}

		if(!options.sort) {
			options.sort = this.defaults.sort;
		}

		if(!this.needRerender(options)) {
			return false;
		}


		this.set(options);

		var grid_options = _.extend(options, {
			keeper_path: 'qst.app.profile.grid.collection',
			addphoto: true,
			filter: 'user'
		});

		if(!_.isPhone()) {
			if(!this.visited) {
				this.visited = true;
				this.view = new qst.ProfilePageView({
					model: this, 
					template:"pages/profile-page"
				});
				this.view.render();


				this.user_info = new qst.UserInfo(options);
				this.user_info.activate();

				this.story_menu = new qst.StoryMenu(_.extend(options, {root_path: '/user/'+options.user+'/explore'}));
				this.story_menu.fetch();

				this.view.addUserInfo(this.user_info);
				this.view.addStoryMenu(this.story_menu);

				this.story_menu.activate();


				this.set('sleeped', false);
			} else {

				this.view.render();
				this.user_info.set(options);
				this.story_menu.set(_.extend(options, {root_path: '/user/'+options.user+'/explore'}));

				this.user_info.activate();
				this.view.addUserInfo(this.user_info);
				this.view.addStoryMenu(this.story_menu);

				this.story_menu.activate();

				this.set('sleeped', false);
			}

			if(  this.get('section') === 'feed') {
				if(this.grid) {
					this.grid.sleep();
				}

				if(!this.visited_feed) {
					this.visited_feed = true;
					this.photofeed = new qst.Photofeed(options);
					this.photofeed.activate();
					this.view.addPhotofeed(this.photofeed);
				} else {
					this.photofeed.set(options);
					this.photofeed.activate();
					this.view.addPhotofeed(this.photofeed);
					this.photofeed.reset();
				}

			} else if( this.get('section') === 'info' || this.get('section') === 'explore' ) {
				if(this.photofeed) {
					this.photofeed.sleep();
				}
				
				if(!this.visited_explore) {
					this.visited_explore = true;

					this.grid = new qst.PicTileGrid(grid_options);
					this.grid.activate();
					this.view.addGrid(this.grid);
				} else {
					this.grid.set(grid_options);
					this.grid.activate();
					this.view.addGrid(this.grid);
					this.grid.reset();
				}
			}
		} else {
			if(!this.visited) {
				this.visited = true;
				this.view = new qst.ProfilePageView({
					model: this, 
					template:"pages/profile-page"
				});
				this.view.render();
			} else {
				this.view.render();
			}
			this.set('sleeped', false);

			if(!this.visited_info) {
				this.visited_info = true;
				this.user_info = new qst.UserInfo(options);
				this.user_info.activate();
				this.view.addUserInfo(this.user_info);
			} else {
				this.user_info.set(options);
				this.user_info.activate();
				this.view.addUserInfo(this.user_info);
			}
			
			if (this.get('section') === 'info') {
				if(this.grid) {
					this.grid.sleep();
				}
				if(this.photofeed) {
					this.photofeed.sleep();
				}


			} else if( this.get('section') === 'feed') {
				if(this.grid) {
					this.grid.sleep();
				}
				if(this.user_info) {
					this.user_info.sleep();
				}

				if(!this.visited_feed) {
					this.visited_feed = true;
					this.photofeed = new qst.Photofeed(options);
					this.photofeed.activate();
					this.view.addPhotofeed(this.photofeed);
				} else {
					this.photofeed.set(options);
					this.photofeed.activate();
					this.view.addPhotofeed(this.photofeed);
					this.photofeed.reset();
				}

			} else if( this.get('section') === 'explore' ) {
				if(this.photofeed) {
					this.photofeed.sleep();
				}
				if(this.user_info) {
					this.user_info.sleep();
				}
				
				if(!this.visited_explore) {
					this.visited_explore = true;
					this.grid = new qst.PicTileGrid(grid_options);
					this.grid.activate();
					this.view.addGrid(this.grid);

					this.story_menu = new qst.StoryMenu(_.extend(options, {root_path: '/user/'+options.user+'/explore'}));
					this.story_menu.fetch();
					this.view.addStoryMenu(this.story_menu);
					this.story_menu.activate();

				} else {
					this.grid.set(grid_options);
					this.grid.activate();
					this.view.addGrid(this.grid);
					this.grid.reset();

					this.story_menu.set(_.extend(options, {root_path: '/user/'+options.user+'/explore'}));
					this.view.addStoryMenu(this.story_menu);
					this.story_menu.activate();
				}
			}
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.photofeed) {
			this.photofeed.sleep();
		}

		if(this.grid) {
			this.grid.sleep();
		}

		if(this.user_info) {
			this.user_info.sleep();
		}

		if(this.story_menu) {
			this.story_menu.sleep();
		}
	}
});