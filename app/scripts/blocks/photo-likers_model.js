qst.PhotoLikers = Backbone.Model.extend({
	url: "/api/photo/likers/",
	defaults: {
		photo_model: null,
		likers_count: 0,
		limit: 12,
		photo_id: 0,
		wasvote: 0,
		likers: {
			total: 0
		}
		// likers: {
		// 	total: 46,
		// 	list: [
		// 		{
		// 			first_name: "Виктор",
		// 			last_name: "Алексеев",
		// 			name: "Виктор Алексеев",
		// 			photo: {
		// 			i212x212: "http://img.weheartpics.com/photo/212x212/463273.jpg",
		// 			i400x400: "http://img.weheartpics.com/photo/400x400/463273.jpg",
		// 			i160x160: "http://img.weheartpics.com/photo/160x160/463273.jpg",
		// 			i106x106: "http://img.weheartpics.com/photo/106x106/463273.jpg",
		// 			i480x480: "http://img.weheartpics.com/photo/480x480/463273.jpg",
		// 			i640x640: "http://img.weheartpics.com/photo/640x640/463273.jpg",
		// 			i1000x1000: "http://img.weheartpics.com/photo/1000x1000/463273.jpg",
		// 			i320x320: "http://img.weheartpics.com/photo/320x320/463273.jpg",
		// 			id: 463273
		// 			},
		// 			followers_count: 50,
		// 			photos_count: 119,
		// 			followings_count: 55,
		// 			id: 58056,
		// 			is_awesome: false
		// 		}
		// 	]
		// }
	},

	initialize: function (options) {
		options = options || {};
		options = _.extend(options, {model:this});
		this.view = new qst.PhotoLikersView(options);
		if(this.get("photo_model")) {
			this.get("photo_model").on("update:vote", function (options) {
				this.trigger("update:vote", options);
			}, this)
		}
		this.activate();
	},

	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.data = options.data || {
			photo: this.get("photo_id"),
			limit: this.get("limit")
		};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger("load:start");

		return Backbone.Collection.prototype.fetch.call(this, options);
	},

	reset: function () {},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response);
		if(!response.error) {
			this.trigger("load:success");
		} else {
			this.trigger("load:error");
		}
	},

	error: function (model, response, options) {
		this.trigger("load:error")
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	activate: function() {
		if(this.get("likers_count") > 0) {
			this.fetch();
		} else {
			this.trigger("load:success");
		}
	},
});