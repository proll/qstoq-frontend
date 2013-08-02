qst.Comment = Backbone.Model.extend({
	defaults: {
		// date: 1364412040,
		// text: "Ты былааааа??????",
		// id: 163932,
		// user: {
		// 	first_name: "Nastya",
		// 	last_name: "Sharova",
		// 	name: "Nastya Sharova",
		// 	photo: {
		// 		i212x212: "http://img.weheartpics.com/photo/212x212/575970.jpg",
		// 		i400x400: "http://img.weheartpics.com/photo/400x400/575970.jpg",
		// 		i160x160: "http://img.weheartpics.com/photo/160x160/575970.jpg",
		// 		i106x106: "http://img.weheartpics.com/photo/106x106/575970.jpg",
		// 		i480x480: "http://img.weheartpics.com/photo/480x480/575970.jpg",
		// 		i640x640: "http://img.weheartpics.com/photo/640x640/575970.jpg",
		// 		i1000x1000: "http://img.weheartpics.com/photo/1000x1000/575970.jpg",
		// 		i320x320: "http://img.weheartpics.com/photo/320x320/575970.jpg",
		// 		id: 575970
		// 	},
		// 	followers_count: 38,
		// 	photos_count: 51,
		// 	followings_count: 42,
		// 	id: 107,
		// 	is_awesome: false
		// }
	},
	initialize: function (options) {
		this.view = new qst.CommentView({model:this});
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	}
});