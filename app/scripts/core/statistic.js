qst.Statistic = Backbone.Model.extend({
	yaCounter: null,
	gaCounter: null,

	initialize : function() {
		this.active = !_.browser.phantom;
	},

	trackCurrentPageChange : function(_url) {
		if(!this.active) return false;
		this.trackPageChange(window.location.pathname);
		return true;
	},

	trackPageChange : function(_url) {
		if(!this.active) return false;
		var str = (_url).toString();
		if (str.charAt(0)!="/") {
			str = "/"+str;
		}
		if(window._gaq) {
			window._gaq.push(['_trackPageview', str]);
		}
		
		if(window.yaCounter22431070) {
			window.yaCounter22431070.hit(qst.root + str);
		}
	},


	trackRegistration: function() {
		if(!this.active) return false;
		window._gaq.push(['_trackEvent', 'User', 'registration']);
		window.yaCounter22431070.reachGoal('User_registration');
	},

	trackProductCreate: function(name){
		if(!this.active) return false;
		if(!name) {
			name = 'unnamed'
		}
		window._gaq.push(['_trackEvent', 'Product', 'create', name]);
		window.yaCounter22431070.reachGoal('Product_create');
	},
	trackPSConnect: function(name){
		if(!this.active) return false;
		if(!name) {
			name = 'unnamed'
		}
		window._gaq.push(['_trackEvent', 'PaySystem', 'connect', name]);
		window.yaCounter22431070.reachGoal('PaySystem_connect');
	},
	
	

	trackProductTryToBuy: function(name){
		if(!this.active) return false;
		if(!name) {
			name = 'unnamed'
		}
		window._gaq.push(['_trackEvent', 'Product', 'trytobuy', name]);
		window.yaCounter22431070.reachGoal('Product_trytobuybuy');
	},

	trackProductSold: function(name){
		if(!this.active) return false;
		if(!name) {
			name = 'unnamed'
		}
		window._gaq.push(['_trackEvent', 'Product', 'sold', name]);
		window.yaCounter22431070.reachGoal('Product_sold');
	},
});