qst.ProfilePage = qst.Page.extend({
	visited: false,

	defaults: {
		section: 'account',

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
			this.view = new qst.ProfilePageView({
				model: this, 
				template:"pages/profile-page"
			});
			this.view.render();

			this.menu = new qst.ProfileMenu(options);
			this.view.addMenu(this.menu);

			this.account = new qst.Account(options);
			this.account.activate();
			// this.account.on('save:error savereceipt:error', this.error, this);

			this.view.addAccount(this.account);

			this.set('sleeped', false);
		} else {
			this.view.render();
			this.menu.set(options);
			this.view.addMenu(this.menu);
			this.account.set(options);
			this.account.activate();
			this.view.addAccount(this.account);

			this.set('sleeped', false);
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.menu) {
			this.menu.sleep();
		}

		if(this.account) {
			this.account.sleep();
		}

	},


	error: function() {
		qst.warning(qst.localize('Something went wrong...', 'misc'));
	},
});