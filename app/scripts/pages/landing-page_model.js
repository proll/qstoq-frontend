qst.LandingPage = qst.Page.extend({
	visited: false,
	defaults: {
		img_num: 0,
		lang: 'en',
	},

	initialize: function(options){
		this.set('lang', qst.language);
		options 		= options || {};
		// this.set('img_num', Math.round(Math.random()*3))
	},

	render: function(options) {
		if(!this.visited) {

			this.visited = true;
			this.view = new qst.LandingPageView({
				model: this, 
				template:"pages/landing-page"
			});
			this.view.render();
		} else {
			this.view.render();
		}
	},


	// showAuth: function() {
	// 	qst.trigger("auth:show");
	// },


	// signupFB: function() {
	// 	if(qst.app.auth) {
	// 		qst.app.auth.FB.login();
	// 	}
	// 	return this;
	// },

	// signupTW: function() {
	// 	if(qst.app.auth) {
	// 		qst.app.auth.TW.login();
	// 	}
	// 	return this;
	// },

	// signupVK: function() {
	// 	if(qst.app.auth) {
	// 		qst.app.auth.VK.login();
	// 	}
	// 	return this;
	// },

	// signupEmail: function(email) {
	// 	qst.trigger("auth:show", {email: email});
	// 	return false;
	// },

	sleep: function () {
		if(this.view) this.view.sleep();
	}
});