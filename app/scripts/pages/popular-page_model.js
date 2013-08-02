qst.PopularPage = qst.Page.extend({
	visited: false,
	defaults: {
		sleeped:    true
	},

	initialize: function(options){
		options 		= options || {};
	},


	needRerender: function(options) {
		return this.get('sleeped');
	},

	render: function(options) {
		if(!this.needRerender(options)) {
			return false;
		}
		if(!this.visited) {
			this.set(options);

			this.visited = true;
			this.view = new qst.PopularPageView({
				model: this, 
				template:"pages/popular-page"
			});
			this.popular = new qst.Popular(options);


			var opts = {
				offset: 0,
				limit: 37,
				next_limit: 30,
				scrollload: true,
				timestamp_offset: false,
				addphoto: false,
				url: '/api/photo/popular/',
				sort: 'none'
			};
			this.grid = new qst.PicTileGrid(
				_.extend(opts, {keeper_path: 'qst.app.popular.grid.collection'})
			);

			this.view.render();
			this.popular.activate();
			this.view.addPopular(this.popular);

			this.grid.activate();
			this.view.addGrid(this.grid);

			this.set('sleeped', false);
		} else {
			this.set(options);
			this.grid.set(options);
			this.popular.set(options);
			
			this.view.render();
			this.grid.activate();
			this.view.addGrid(this.grid);

			this.popular.activate();
			this.view.addPopular(this.popular);

			this.popular.reset();
			this.grid.reset();
			this.set('sleeped', false);
		}

	},
	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.popular) {
			this.popular.sleep();
		}

		if(this.grid) {
			this.grid.sleep();
		}
	},
	remove: function() {
		if(this.popular) {
			this.popular.remove();
		}

		this.view.reset();
		this.view.remove();
		this.stopListening();
		this.clear({silent: true});	
	}
});