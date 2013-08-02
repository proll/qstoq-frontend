qst.PhotoShareView = Backbone.View.extend({
	template: 	'blocks/photo-share',
	tagName: 	'div',
	className: 	'photo-share',

	events: {
		"click .photo-share__report>a": "reportPhoto",
		"click .photo-share__delete>a": "deletePhoto",
		"click .photo-share__fb>a": "shareFB",
		"click .photo-share__tw>a": "shareTW",
		"click .photo-share__vk>a": "shareVK",
		"click .photo-share__pt>a": "sharePT",
		"click .photo-share__download>a": "downloadPhoto",
	},

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
		this.render();

		this.model.on("fbshare:success fbshare:error", function() {
			this.$el.toggleClass("photo-share_fb-sharing", false);
		}, this);
		this.model.on("twshare:success twshare:error", function() {
			this.$el.toggleClass("photo-share_tw-sharing", false);
		}, this);
		this.model.on("vkshare:success vkshare:error", function() {
			this.$el.toggleClass("photo-share_vk-sharing", false);
		}, this);
		this.model.on("ptshare:success ptshare:error", function() {
			this.$el.toggleClass("photo-share_pt-sharing", false);
		}, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
	},

	deletePhoto: function(e) {
		var $this = $(e.currentTarget)
		this.model.deletePhoto($this.data());
		return false;
	},
	
	reportPhoto: function(e) {
		var $this = $(e.currentTarget)
		this.model.reportPhoto($this.data());
		return false;
	},

	shareFB: function(e) {
		this.$el.toggleClass("photo-share_fb-sharing", true);
		return this.model.shareFB(e);
	},

	shareTW: function(e) {
		this.$el.toggleClass("photo-share_tw-sharing", true);
		return this.model.shareTW(e);
	},

	shareVK: function(e) {
		this.$el.toggleClass("photo-share_vk-sharing", true);
		return this.model.shareVK(e);
	},


	// ----------------------------------------
	// PINTEREST DELETE MABY
	// ----------------------------------------
	sharePT: function(e) {
		e.preventDefault();
		this.model.sharePT();
		// this.$el.toggleClass("photo-share_pt-sharing", true);
		return false;
	},


	downloadPhoto: function(e) {
		var a = e.currentTarget,
			img_url = e.currentTarget.href,
			img_name = e.currentTarget.download;	

		// for NON IE
		if (!window.ActiveXObject) {
			(window.URL || window.webkitURL).revokeObjectURL(img_url);
		}
		// for IE
		else if ( !! window.ActiveXObject && document.execCommand)     {
			var _window = window.open(img_url, '_blank');
			_window.document.close();
			_window.document.execCommand('SaveAs', true, img_name || img_url)
			_window.close();
		}
	}
});

