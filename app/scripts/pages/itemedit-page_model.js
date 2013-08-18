qst.ItemEditPage = qst.Page.extend({
	visited: false,

	defaults: {
		id: 0,
		section: 'main',

		sleeped: true
	},

	url:'',

	initialize: function(options){
		options 		= options || {};
	},

	needRerender: function(options) {
		return this.get('sleeped') || 
			options.id 		!= this.get('id');
	},


	render: function(options) {
		if(!options.section) {
			options.section = this.defaults.section;
		}

		// if(!this.needRerender(options)) {
		// 	return false;
		// }


		this.set(options);

		var grid_options = _.extend(options, {
			keeper_path: 'qst.app.profile.grid.collection',
			addphoto: true,
			filter: 'user'
		});

		if(!this.visited) {
			this.visited = true;
			this.view = new qst.ItemEditPageView({
				model: this, 
				template:"pages/itemedit-page"
			});
			this.view.render();

			this.menu = new qst.ItemEditMenu(options);
			this.menu.fetch();

			// this.itemedit = new qst.ItemEdit(options);
			// this.itemedit.activate();

			this.view.addMenu(this.menu);
			// this.view.addItemEdit(this.itemedit);

			this.set('sleeped', false);
		} else {
			this.view.render();
			this.menu.set(options);
			// this.itemedit.set(options);

			// this.itemedit.activate();
			this.view.addMenu(this.menu);
			// this.view.addItemEdit(this.itemedit);

			this.set('sleeped', false);
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.menu) {
			this.menu.sleep();
		}

		if(this.itemedit) {
			this.itemedit.sleep();
		}

	}
});