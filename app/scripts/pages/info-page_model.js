qst.InfoPage = qst.Page.extend({
	visited: false,

	defaults: {
		section: 'questions-and-answers',
		sleeped: true
	},

	initialize: function(options){
		options 		= options || {};
	},

	needRerender: function(options) {
		return this.get('sleeped');
	},


	render: function(options) {
		if(!options.section) {
			options.section = this.defaults.section;
		}
		this.set(options);

		if(!this.needRerender(options)) {
			return false;
		}

		if(!this.visited) {
			this.visited = true;
			this.view = new qst.InfoPageView({
				model: this, 
				template:"pages/info-page"
			});
			this.view.render();

			this.menu = new qst.InfoMenu(options);
			this.view.addMenu(this.menu);

			this.info = new qst.Info(options);
			this.info.activate();
			this.view.addInfo(this.info);

			this.set('sleeped', false);
		} else {
			this.view.render();
			this.menu.set(options);
			this.view.addMenu(this.menu);
			this.info.set(options);
			this.info.activate();
			this.view.addInfo(this.info);

			this.set('sleeped', false);
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.menu) {
			this.menu.sleep();
		}

		if(this.info) {
			this.info.sleep();
		}

	},


	error: function() {
		qst.warning(qst.localize('Something went wrong...', 'misc'));
	},
});