qst.Navbar = Backbone.Model.extend({
	defaults:{
		user: null,

		currentItem: "photofeed",
	},
	
	// TODO: доделать currentItem должен корелировать с items..active
	initialize: function(){
		this.view = new qst.NavbarView({model: this});
		qst.on('route', function(router, route, params) {
			this.set('currentItem', router);
		}, this);
	},

	show: function() {
		this.view.show();
	},

	toggleLang: function() {
		if(qst.language === 'ru') {
			_.setCookie('lang', 'en');
		} else {
			_.setCookie('lang', 'ru');
		}

		window.location.reload()
	}
});