qst.PhotoShare = Backbone.Model.extend({
	defaults: {
		photo_id: 0,
		photo_link: 		'http://img.weheartpics.com/photo/1000x1000/1.jpg',
		photo_sm_link: 		'http://img.weheartpics.com/photo/106x106/1.jpg',
		link: 				'http://weheartpics.com/photo/1/',
		story_name: 		'hello',
		apple_store_link: 	'http://itunes.apple.com/app/',
		add_this_api:  		'http://api.addthis.com/oexchange/0.8'
	},

	url: "/api/photo/share/",

	fb_sharing: false,
	tw_sharing: false,
	vk_sharing: false,
	pt_sharing: false,

	fb_shared: false,
	tw_shared: false,
	vk_shared: false,
	pt_shared: false,

	initialize: function (options) {
		this.view = new qst.PhotoShareView({model:this});

		// if(!!qst.app.auth) {
		// 	qst.app.auth.FB.on("auth:success",  this.shareAuthedFB, this);
		// 	qst.app.auth.TW.on("auth:success",  this.shareAuthedTW, this);
		// 	qst.app.auth.VK.on("auth:success",  this.shareAuthedVK, this);

		// 	qst.app.auth.FB.on("error",  this.shareErrorFB, this);
		// 	qst.app.auth.TW.on("error",  this.shareErrorTW, this);
		// 	qst.app.auth.VK.on("error",  this.shareErrorVK, this);
		// }
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	reportPhoto: function(options) {
		if(qst.is_needauth()) {
			return false;
		}

		var opts = {};
		opts.data = {
			photo: 		this.get("photo_id"),
			reason: 	"web_user_report"
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


	deletePhoto: function(options) {
		if(qst.is_needauth()) {
			return false;
		}

		var opts = {};
		opts.data = {
			photo: 		this.get("photo_id"),
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

			if(!!options.backreload) {
				opts.backreload = options.backreload;
			}
		}
		var confirm = new qst.Confirm(opts);
	},




	// Facebook auth + share
	shareFB : function(e) {
		if(qst.is_needauth()) {
			return false;
		}

		if (this.fb_sharing) {
			return false;
		}
		this.fb_sharing = true;
		this.trigger("fbshare:start");

		var user_social = qst.user.settings.get("social");
		if(!!user_social && !!user_social.facebook) {
			this.shareAuthedFB();
			return false;
		} else {
			this.trigger('fbshare:success');
			this.fb_sharing = false;
			
			if(!_.isPhone()) {
				var $this = $(e.currentTarget),
					win = _.openWindow2('Facebook',640,480);

				win.location = $this.attr('href');
				return false;
			} else {
				return true;
			}
			// qst.app.auth.FB.login();
		}
		return this;
	},

	shareAuthedFB: function() {
		if(!this.fb_sharing) {
			return;
		}
		if(typeof(FB) != 'undefined') {
			FB.ui({
				method: 	'feed',
				display: 	'popup',
				link: 		this.get('link'),
				name: 		this.get('story_name'),
				caption: 	'WeHeartPics.com',
				description: "",
				picture: 	this.get('photo_sm_link'),
				actions: [{ 
					name: 'Get WeHeartPics', 
					link: this.get("apple_store_link") 
				}],
			}, _.bind(this.shareUserSuccessFB, this));
		} else {
			this.shareErrorFB()
		}
	},

	shareUserSuccessFB : function (e) {
		if (e) {
			this.shareTrackFB();
		} else {
			this.shareErrorFB();
		}
	},

	shareTrackFB: function (options) {
		options = options || {};
		options.data = {
			social: 'fb',
			photo: 	this.get('photo_id'),
			send: 0
		};
		options.url= _.toSafeUrl(this.url);
		options.type = "post";
		options.success  	= _.bind(this.shareSuccessFB, this);
		options.error  		= _.bind(this.shareErrorFB, this);
		$.ajax(options);
	},

	shareSuccessFB: function() {
		this.trigger("fbshare:success");
		this.fb_sharing = false;
		this.fb_shared = true;

		// TODO - delete hard link
		qst.app.statistic.trackShare('SHARE_FACEBOOK');
	},

	shareErrorFB: function() {
		this.trigger("fbshare:error");
		this.fb_sharing = false;
		this.fb_shared = false;
	},



	// Twitter auth + share
	shareTW : function(e) {
		if (this.tw_shared || this.tw_sharing) {
			return false;
		}
		this.tw_sharing = true;
		this.trigger("twshare:start");

		var user_social = qst.user.settings.get("social");
		if(!!user_social && !!user_social.twitter) {
			this.shareAuthedTW();
			return false;
		} else {
			this.trigger('twshare:success');
			this.tw_sharing = false;
			
			if(!_.isPhone()) {
				var $this = $(e.currentTarget),
					win = _.openWindow2('Twitter',640,480);

				win.location = $this.attr('href');
				return false;
			} else {
				return true;
			}
			// qst.app.auth.TW.login();
		}
	},

	shareAuthedTW: function() {
		if(!this.tw_sharing) {
			return;
		}
		if(typeof(twttr) != 'undefined') {
			this.shareServerTW();
		} else {
			this.shareErrorTW();
		}
	},

	shareServerTW: function (options) {
		options = options || {};
		options.data = {
			social: 'tw',
			photo: 	this.get('photo_id'),
			send: 1
		};
		options.url= _.toSafeUrl(this.url)
		options.type = "post";
		options.success  	= _.bind(this.shareSuccessTW, this);
		options.error  		= _.bind(this.shareErrorTW, this);
		$.ajax(options);
	},

	shareSuccessTW: function() {
		this.trigger("twshare:success");
		this.tw_sharing = false;
		this.tw_shared = true;

		// TODO - delete hard link
		qst.app.statistic.trackShare('SHARE_TWITTER');
	},

	shareErrorTW: function() {
		this.trigger("twshare:error");
		this.tw_sharing = false;
		this.tw_shared = false;
	},




	// Vkontakte auth + share
	shareVK : function(e) {
		if (this.vk_shared || this.vk_sharing) {
			return false;
		}
		this.vk_sharing = true;
		this.trigger("vkshare:start");


		var user_social = qst.user.settings.get("social");
		if(!!user_social && !!user_social.vkontakte) {
			this.shareAuthedVK();
			return false;
		} else {
			this.trigger('vkshare:success');
			this.vk_sharing = false;
			
			if(!_.isPhone()) {
				var $this = $(e.currentTarget),
					win = _.openWindow2('VK',640,480);

				win.location = $this.attr('href');
				return false;
			} else {
				return true;
			}
			// qst.app.auth.VK.login();
		}
		
	},

	shareAuthedVK: function() {
		if(!this.vk_sharing) {
			return;
		}
		this.shareServerVK();
	},

	shareServerVK: function (options) {
		options = options || {};
		options.data = {
			social: 'vk',
			photo: 	this.get('photo_id'),
			send: 1
		};
		options.url= _.toSafeUrl(this.url)
		options.type = "post";
		options.success  	= _.bind(this.shareSuccessVK, this);
		options.error  		= _.bind(this.shareErrorVK, this);
		$.ajax(options);
	},

	shareSuccessVK: function() {
		this.trigger("vkshare:success");
		this.vk_sharing = false;
		this.vk_shared = true;


		// TODO - delete hard link
		qst.app.statistic.trackShare('SHARE_VKONTAKTE');
	},

	shareErrorVK: function() {
		this.trigger("vkshare:error");
		this.vk_sharing = false;
		this.vk_shared = false;
	},






	// Pinterest auth + share
	sharePT : function(e) {
		if (this.pt_shared || this.pt_sharing) {
			return false;
		}
		this.pt_sharing = true;
		this.trigger("ptshare:start");

		this.shareAuthedPT();
	},

	shareAuthedPT: function() {
		if(!this.pt_sharing) {
			return;
		}

		this.pTwindow = _.openWindow2("Create pin", 600, 420);

		var img = this.get('photo_link'), 
			url = this.get('link'),
			title = this.get('story_name')

		var template = qst.Templates.get('misc/pinterest-share'),
			desc = template(this.toJSON());

		// strange quotes feature in pinterest they just disappears
		while (desc.indexOf("&quot;") != -1) {
			desc = desc.replace("&quot;", ' ');
		}

		img =   encodeURIComponent(img);
		url =   encodeURIComponent(url);
		title = encodeURIComponent(title);
		desc =  encodeURIComponent(desc);

		var link = "http://pinterest.com/pin/create/bookmarklet/?media="+img+"&url="+url+"&title="+title+"&is_video=false&description="+desc;
		this.pTwindow.location = link;

		// TODO: every time u open popup we track a share
		this.shareTrackPT();
	},

	shareTrackPT: function (options) {
		options = options || {};
		options.data = {
			social: 'pinterest',
			photo: 	this.get('photo_id'),
			send: 0
		};
		options.url = _.toSafeUrl(this.url);
		options.type = "post";
		options.success  	= _.bind(this.shareSuccessPT, this);
		options.error  		= _.bind(this.shareErrorPT, this);
		$.ajax(options);
	},

	shareSuccessPT: function() {
		this.trigger("ptshare:success");
		this.pt_sharing = false;
		this.pt_shared = true;

		qst.app.statistic.trackShare('SHARE_PINTEREST');
	},

	shareErrorPT: function() {
		this.trigger("ptshare:error");
		this.pt_sharing = false;
		this.pt_shared = false;
	},

});