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


	showFeedback: function(options) {
		options = options || {};
		options.business_statistics = true;
		qst.trigger("feedback:show", options);
	},


	sleep: function () {
		if(this.view) this.view.sleep();
	}
});