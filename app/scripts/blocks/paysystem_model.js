qst.PaySystem = Backbone.Model.extend({
	
	url: '/v1/links/',
	
	defaults: {
		user: 0,

		loading: 	false,
		sleeped: 	false,
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