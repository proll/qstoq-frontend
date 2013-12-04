qst.PaySystem = Backbone.Model.extend({
	
	url: '/v1/links/',
	
	defaults: {
		user: 0,

		loading: 	false,
		sleeped: 	false,

		conf: [
			{
				key: 'cards',
				icons: [
					'mastercard',
					'visa'
				],

				systems: [
					'robokassa',
					'assist',
					'paymaster',
					'paypal',
					'webmoney',
					'qiwi',
				]
			},
			{
				key: 'phone',
				icons: [
					'beeline',
					'megafon',
					'mts'
				],

				systems: [
					'robokassa',
					'assist',
					'paymaster',
					'paypal',
					'webmoney',
					'qiwi',
				]
			},
			{
				key: 'qiwiw',
				icons: [
					'qiwi',
				],

				systems: [
					'robokassa',
					'assist',
					'paymaster',
					'paypal',
					'webmoney',
					'qiwi',
				]
			},
			{
				key: 'yd',
				icons: [
					'yd',
				],

				systems: [
					'robokassa',
					'assist',
					'paymaster',
					'paypal',
					'webmoney',
					'qiwi',
				]
			},
			{
				key: 'webmoney',
				icons: [
					'webmoney',
				],

				systems: [
					'robokassa',
					'assist',
					'paymaster',
					'paypal',
					'webmoney',
					'qiwi',
				]
			},
			{
				key: 'paypal',
				icons: [
					'paypal',
				],

				systems: [
					'robokassa',
					'assist',
					'paymaster',
					'paypal',
					'webmoney',
					'qiwi',
				]
			},
		]
	},

	initialize: function (options) {
		this.on("load:success", function (obj) {
			this.set("loading", false);
		}, this);
		this.on("load:error", function () {
			console.error("paysystem:load:error")
			this.set("loading", false);
		}, this)

		this.view = new qst.PaySystemView({
			model: this
		});
	},

	reset: function () {
		this.set("offset", this.defaults.offset);
		this.collection.reset();
		this.trigger("needmore");
		return false;
	},


	activate: function() {
		this.set("offset", this.defaults.offset);
		this.set("sleeped", false);
		this.trigger("load:success");
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});