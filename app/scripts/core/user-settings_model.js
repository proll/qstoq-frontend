qst.UserSettings = Backbone.Model.extend({
	url: "/v1/users/",

	defaults: {
		geo_position: null,
		
		// about: null,
		// balance: "0",
		// created: "2013-07-03 10:22:37",
		// currency: "RUB",
		// email: "info@qstoq.io",
		// id: "36",
		// name: "Qstoq Admin",
	},

	fetch: function (options) {
		options = options || {};
		options.type = "get";
		options.data = options.data || {
			token: _.getCookie('token')
		};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger("load:start");

		return Backbone.Model.prototype.fetch.call(this, options);
	},


	success: function (model, response, options) {
		var response = _.toJSON(response);

		if(response.success && response.result.user) {
			this.set(response.result.user);
			this.trigger("usersettings:ready", response.result.user)
		} else {
			this.trigger("error", {description: "WHP/auth : check state ERROR after netcall!"})
		}
	},

	error: function (model, xhr, options) {
		this.trigger("error", {description: "WHP/auth : check state ERROR self!"})
	},

	getGeoPosition: function () {
		if(!this.get("geo_position")) {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(_.bind(this.getGeoSuccess, this), _.bind(this.getGeoError, this));
			} else {
				error('not supported');
			}
		}
	},

	getGeoSuccess: function (position) {
		this.set("geo_position", position);
	},

	getGeoError: function (txt) {
		qst.error(txt)
	}
});