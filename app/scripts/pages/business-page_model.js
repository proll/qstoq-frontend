qst.BusinessPage = qst.Page.extend({
	visited: false,
	defaults: {
		lang: 'en',
	},

	initialize: function(options){
		this.set('lang', qst.language);
		options 		= options || {};
	},

	render: function(options) {
		this.set(options);
		if(!this.visited) {
			this.visited = true;
			this.view = new qst.BusinessPageView({
				model: this, 
				template:"pages/business-page"
			});
			this.view.render();
		} else {
			this.view.render();
		}
	},


	showAuth: function() {
		qst.trigger("auth:show");
	},


	sleep: function () {
		if(this.view) this.view.sleep();
	}
});