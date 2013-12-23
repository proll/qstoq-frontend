qst.PaySystemPage = qst.Page.extend({
	visited: false,
	defaults: {
		sleeped: true,
		total: 0,
	},

	initialize: function(options){
	},

	needRerender: function(options) {
		return this.get('sleeped');
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

			this.paysystem.activate();
			// this.paysystem.on('load:success', this.loadList, this);
			this.view.addPaySystem(this.paysystem);

			this.set('sleeped', false);
		} else {
			options.user = qst.user.get('uid');
			this.paysystem.set(options);
			
			this.view.render();
			this.paysystem.activate();
			this.view.addPaySystem(this.paysystem);

			this.paysystem.reset();

			this.set('sleeped', false);
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