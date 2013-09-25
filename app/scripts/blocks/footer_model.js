qst.Footer = Backbone.Model.extend({
	// defaults:{
	// 	items:{},
	// 	currentItem: "defaults"
	// },
	
	// TODO: доделать currentItem должен корелировать с items..active
	initialize: function(){
		// this.set('items', Handlebars.helpers._('items','header').string);
		this.view = new qst.FooterView({model: this});
		// qst.on("route", this.changeItem, this);
	},

	toggleLang: function(lang) {
		if(lang!='ru' && lang!='en') {
			return false;
		}

		_.setCookie('lang', lang);
		window.location.reload()
	}

	// changeItem: function (itemName) {
	// 	if(qst.app.router.currentIsPopup()) {
	// 		return false;
	// 	}
		
	// 	if(!!this.get("items")[itemName]) {
	// 		this.set("currentItem", itemName);
	// 	} else {
	// 		this.set("currentItem", 'defaults' );
	// 	}
	// }
});