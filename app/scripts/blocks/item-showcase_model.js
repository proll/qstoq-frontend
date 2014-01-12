// 4future showcase to module
qst.ItemShowcase = Backbone.Model.extend({
	
	url: '/v1/medias/',
	
	defaults: {
		// "id": XXX,
		// "name": "Pencil Icon PSD",
		// "description": "I made this for fun."
		// "price": 100,
		// "price_pwyw": 0,
		// "currency": "rur"
		// "url_short": "https://host.ru/l/XXX"
		// "url": "http://somelink",
		// "url_qr": "https://host.ru/assets/qr-link-XXX.png",
		// "counter_view": 25, // количество просмотров
		// "counter_ship": 19, // количество покупок
		// "active": 19
		// "user": {
		// 		"name": "some",
		// 		"id": <user_id>,
		// },
	},

	initialize: function (options) {
		this.view = new qst.ItemShowcaseView({
			model:this
		});
	},

	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});