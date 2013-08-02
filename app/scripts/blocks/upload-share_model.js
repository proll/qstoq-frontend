qst.UploadShare = Backbone.Model.extend({
	defaults: {
		can_share: false,
		can_facebook: false,
		facebook: false,
		can_twitter: false,
		twitter: false,
		can_vkontakte: false,
		vkontakte: false,

	},

	initialize: function (options) {
		this.view = new qst.UploadShareView({model:this});

		qst.on("usersettings:ready", function(user_obj){
			this.update();
		}, this);

		if(!!qst.user && !!qst.user.get('uid') && !!qst.user.settings) {
			this.update();
		}
	},

	getShares: function() {
		return {
			facebook: 	this.get('facebook'),
			twitter: 	this.get('twitter'),
			vkontakte: 	this.get('vkontakte'),
		};
	},

	update: function() {
		var user_social = qst.user.settings.get('social');
		if(!!user_social) {
			if(!!user_social.facebook) {
				this.set('can_share', true);
				this.set('can_facebook', true);
			}
			if(!!user_social.twitter) {
				this.set('can_share', true);
				this.set('can_twitter', true);
			}
			if(!!user_social.vkontakte) {
				this.set('can_share', true);
				this.set('can_vkontakte', true);
			}
			this.view.render();
		}
	},

	toggleShareFlag: function(social_id, flag) {
		this.set(social_id, !!flag);
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},
});