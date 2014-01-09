qst.PaySystemPage = qst.Page.extend({
	visited: false,
	defaults: {
		sleeped: true,
		total: 0,
	},

	initialize: function(options){
	},

	needRerender: function(options) {
		return true;
	},
	
	render: function(options) {

		if(qst.is_needauth()) {
			return false;
		}

		if(!this.needRerender()) return false;
		

		options = options || {};
		
		if(!this.visited) {
			this.visited = true;
			this.view = new qst.PaySystemPageView({
				model: this, 
				template:"pages/paysystem-page"
			});
			this.view.render();
			
			options.user = qst.user.get('uid');
			this.paysystem = new qst.PaySystem(options);
			this.view.addPaySystem(this.paysystem);

			this.set('sleeped', false);
		} else {
			options.user = qst.user.get('uid');
			this.paysystem.set(options);
			
			this.view.render();
			this.view.addPaySystem(this.paysystem);

			this.paysystem.reset();

			this.set('sleeped', false);
		}

		// authed with got settings
		if(qst.is_authset()) {
			this.activate(qst.user.settings.toJSON());
		} else {
			qst.on('usersettings:ready', this.activate, this);
		}

	},

	activate: function(user_settings_obj) {
		if(this.paysystem) {
			this.paysystem.activate({settings: user_settings_obj});
		}
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.paysystem) {
			this.paysystem.sleep();
		}
	}
});