qst.Statistic = Backbone.Model.extend({
	url: '/api/photo/share/',
	yaCounter: null,
	gaCounter: null,

	initialize : function() {
	},

	trackCurrentPageChange : function(_url) {
		this.trackPageChange(window.location.pathname);
		return true;
	},

	trackPageChange : function(_url) {
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

	// trackLike : function(_label){
	// 	window._gaq.push(['_trackEvent', 'Photo', 'like', _label]);
	// },

	// getCommentsCount : function() {
	// 	var counter = parseInt(_.getLS("qst_comc"));
	// 	if (_.isNaN(counter)){
	// 		counter = 0;
	// 	}
	// 	return counter;
	// },

	// getLikesCount : function() {
	// 	var counter = parseInt(_.getLS("qst_likec"));
	// 	if (_.isNaN(counter)) {
	// 		counter = 0;
	// 	}
	// 	return counter;
	// },

	// getSharesCount : function() {
	// 	var counter = parseInt(_.getLS("qst_shrc"));
	// 	if (_.isNaN(counter)) {
	// 		counter = 0;
	// 	}
	// 	return counter;
	// },

	trackLike: function(){
		var counter = _.getLS("qst_likec");
		if (_.isNaN(counter)) {
			counter = 0;
		}
		counter++;
		_.setLS("qst_likec", counter, 60*1000);
	},


	trackComment: function(_reply) {
		var counter = _.getLS("qst_comc");
		if (_.isNaN(counter)) {
			counter = 0;
		}
		counter++;
		_.setLS("qst_comc", counter, 60*1000);

		var reply = _reply == true;
		if (reply) {
			window._gaq.push(['_trackEvent', 'Photo', 'reply']);
		} else {
			window._gaq.push(['_trackEvent', 'Photo', 'comment']);
		}
	},

	trackShare : function(_param, _id) {
		if (_param == "SHARE_FACEBOOK") {
			var counter = _.getLS("qst_shrc");
			if (_.isNaN(counter)) {
				counter = 0;
			}
			counter++;
			_.setLS("qst_shrc", counter, 60*1000);
		}

		window._gaq.push(['_trackEvent', 'Photo', 'share', _param]);
	},

	trackTimeline : function(_main, _N) {
		var mainStr = "USER_TIMELINE_";
		if (_main) {
			mainStr = "MAIN_TIMELINE_";
		}

		window._gaq.push(['_trackEvent', 'Timeline', 'PagesLoaded', mainStr+_N, _N]);
	},

	trackNotifications : function(_N) {
		window._gaq.push(['_trackEvent', 'Notifications', 'PagesLoaded', "PAGES_LOADED_"+_N, _N]);
	},

	trackDownload : function(_param) {
		window._gaq.push(['_trackEvent', 'Download', 'click', _param]);
	},

	trackEmptyTimeline : function(_main) {
		var mainStr = "SHOW_TIMELINE_USER_EMPTY";
		if (_main) {
			mainStr = "SHOW_TIMELINE_MAIN_EMPTY";
		}

		window._gaq.push(['_trackEvent', 'Download', 'Views', mainStr]);
	},

	trackPhotoPlateShow : function() {
		window._gaq.push(['_trackEvent', 'Download', 'Views', "SHOW_PHOTO_PAGE_PLATE"]);
	},

	trackDownloadButtonMenu : function(_new) {
		var mainStr = "SHOW_DOWNLOAD_MENU_NEW";
		if (!_new) {
			mainStr = "SHOW_DOWNLOAD_MENU"
		}
		window._gaq.push(['_trackEvent', 'Download', 'Views', mainStr]);
	},

	trackEmptyStories : function() {
		window._gaq.push(['_trackEvent', 'Download', 'Views', "SHOW_EMPTYSTORIES_DOWNLOAD"]);
	},

	trackShowMainButton : function() {
		window._gaq.push(['_trackEvent', 'Download', 'Views', "SHOW_MAIN_DOWNLOAD"]);
	},

	trackXclick : function() {
		window._gaq.push(['_trackEvent', 'Download', 'Views', "SHOW_CLICK_CLOSE_PLATE"]);
	},

	trackShuffle : function() {
		var N = parseInt(_.getLS("qstsc"));
		if (_.isNaN(N)) {
			N = 0;
		}
		N++;
		_.setLS("qstsc", N, 1000);
		window._gaq.push(['_trackEvent', 'Other', 'Shuffle', "click", N]);
	}

});