qst.UserInfo = Backbone.Model.extend({
	url: '/api/user/',
	defaults: {
		sleeped: true,
		user_id: 0,
		loading_follow: false,
		user: 0,
		fields: 'id,name,first_name,last_name,followers_count,followings_count,photos_count,tw_name,photo,is_awesome,awesome_account,bio,fb_id,fb_name,vk_id,vk_name,tw_id,tw_name,background,follow',
		user_obj: {},
		// user_obj: {
		// 		bio: '',
		// 		first_name: 'Alexander',
		// 		last_name: 'Belyakov',
		// 		name: 'Alexander Belyakov',
		// 		photo: {
		// 			i212x212: 'http://img.qstoq.io/photo/212x212/701616.jpg',
		// 			i400x400: 'http://img.qstoq.io/photo/400x400/701616.jpg',
		// 			url: 'http://img.qstoq.io/photo/SIZEX/701616.jpg',
		// 			i160x160: 'http://img.qstoq.io/photo/160x160/701616.jpg',
		// 			i106x106: 'http://img.qstoq.io/photo/106x106/701616.jpg',
		// 			i480x480: 'http://img.qstoq.io/photo/480x480/701616.jpg',
		// 			i640x640: 'http://img.qstoq.io/photo/640x640/701616.jpg',
		// 			i1000x1000: 'http://img.qstoq.io/photo/1000x1000/701616.jpg',
		// 			i320x320: 'http://img.qstoq.io/photo/320x320/701616.jpg',
		// 			id: 701616
		// 		},
		// 		banned: false,
		// 		fb_id: 1243942241,
		// 		fb_name: 'Alexander Belyakov',
		// 		last_activity: 57926,
		// 		followers_count: 219,
		// 		photos_count: 248,
		// 		followings_count: 18,
		// 		background: {
		// 			i1000x314: 'http://img.qstoq.io/profile/bg/1000x314/1.jpg?ts=1365313921',
		// 			i640x640: 'http://img.qstoq.io/profile/bg/640x640/1.jpg?ts=1365313921',
		// 			i480x480: 'http://img.qstoq.io/profile/bg/480x480/1.jpg?ts=1365313921',
		// 			i320x320: 'http://img.qstoq.io/profile/bg/320x320/1.jpg?ts=1365313921',
		// 			i1000x1000: 'http://img.qstoq.io/profile/bg/1000x1000/1.jpg?ts=1365313921'
		// 		},
		// 		follow: false,
		// 		id: 1,
		// 		is_awesome: false
		// }
	},

	initialize: function (options) {
		var template = 'blocks/user-info'
		if(_.isPhone()) {
			template = 'blocks/user-info_phone';
		}
		this.view = new qst.UserInfoView({template: template, model:this});
	},

	fetch: function (options) {
		options = options || {};
		options.type = 'post';
		options.data = options.data || {
			user: this.get('user'),
			fields: this.get('fields')
		};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	follow: function (options) {
		var url = '';
		this.set('loading_follow', true);
		if(this.get('user_obj').follow) {
			url = '/api/friends/unfollow/';
			this.get('user_obj').follow = false;
		} else {
			url = '/api/friends/follow/';
			this.get('user_obj').follow = true;
		}
		$.ajax({
			url: 	qst.authUrl(url),
			type: 	'POST',
			data : {  
				user: this.get('user_id'),
			},
			success: _.bind(this.followSuccess, this)
		});
	},

	followSuccess: function() {
		this.set('loading_follow', false);
	},

	saveBio: function (options) {
		$.ajax({
			url: 	qst.authUrl('/api/user/update/'),
			type: 	'POST',
			data : {  
				bio: this.get('user_obj').bio,
			},
		});
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set('user_obj', response.user);
		if(!response.error) {
			this.trigger('load:success');
		} else {
			this.trigger('userinfo:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('userinfo:error')
	},

	editBio: function (bio_text) {
		if(this.get('user_obj').bio == bio_text) {
			return false;
		} else {
			this.get('user_obj').bio = bio_text;
			this.saveBio();
			return true;
		}

	},

	reportUser: function (options) {
		var opts = {};
		opts.data = {
			user: this.get('user_id')
		}
		if(!!options) {
			if(!!options.url) {
				opts.url = options.url;
			}
			if(!!options.content) {
				opts.content = options.content;
			}
			if(!!options.ok) {
				opts.ok_title = options.ok;
			}
			if(!!options.close) {
				opts.close_title = options.close;
			}
			if(!!options.success) {
				opts.success_title = options.success;
			}
			if(!!options.error) {
				opts.error_title = options.error;
			}
		}
		var confirm = new qst.Confirm(opts);
	},

	activate: function() {
		this.set('loading_follow', false);
		this.set('sleeped', false);
		if(this.get('user_id') != this.get('user')) {
			this.view.clear();
			this.set('user_id', this.get('user'));
			this.fetch();
		} else {
			this.view.clearAutoSize();
			this.view.activate();
		}
	},

	sleep: function() {
		this.set('loading_follow', false);
		this.set('sleeped', true);
		this.view.clearAutoSize();
		// this.view.reset();
	},

	reset: function () {
		return false;
	},

	remove: function () {
		this.view.reset();
		this.view.remove();
		this.stopListening();
		this.clear({silent: true});
	},
});