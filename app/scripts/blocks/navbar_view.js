qst.NavbarView = Backbone.View.extend({
	template: "blocks/navbar",
	el: ".navbar-header",
	_navItemPrefix:"navbar__item-",
	_navMiscPrefix:"nav__",

	events: {
		"click .nav__login>a": 			"login",
		"click .nav__logout>a": 		"logout",
		"click .nav__profile-drop>a": 	"toggleDrop",

		"click li>a": 					"mobileToggleDrop"
	},

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
		this.model.on("change:currentItem", this.changeItem, this);
		qst.on("usersettings:ready", this.toggleAuth, this);
		$("html").on("click.navbar", _.bind(this.hideDrop, this));
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);
		// this.$user_name = 	this.$el.find(".nav__profile-name");
		// this.$user_avatar = this.$el.find(".i-no-avatar");
		this.$balance = this.$el.find(".nav__balance-title");
	},

	show: function () {
		this.$el.toggleClass('navbar_hidden', false);
	},

	toggleAuth: function(user_obj) {
		this.show();
		if(this.$balance) {
			if(user_obj.balance != 0) {
				this.$balance.html(user_obj.balance + '&nbsp;'+ qst.localize(user_obj.currency, 'currency'));
			}
		}
		// if(this.$user_name && this.$user_avatar) {
		// 	this.$user_name.text(user_obj.name);
		// 	if(!!user_obj.photo) {
		// 		this.$user_avatar.html('<img src="'+user_obj.user.photo.i106x106+'" width="30" height="30"/>')
				
		// 	}
		// }
		this.$el.toggleClass("logged", true);
	},

	toggleDrop: function() {
		this.$el.toggleClass("open");
		return false;
	},

	mobileToggleDrop: function() {
		var is_mobile = $(window).width() < 650;
		if(is_mobile) {
			this.toggleDrop();
		}
	},

	hideDrop: function() {
		var is_mobile = $(window).width() < 650;
		if(!is_mobile) {
			this.$el.toggleClass("open", false);
		}
	},

	changeItem: function(model, opts) {
		var itemname = model.get("currentItem");

		this.$el.find(".nav li").toggleClass("active", false);
		this.$el.find(".nav li."+this._navItemPrefix+itemname).toggleClass("active", true);
		this.$el.find(".nav li."+this._navMiscPrefix+itemname).toggleClass("active", true);
	},

	login: function () {
		this.model.trigger("auth:show");
		return false;
	},

	logout: function () {
		this.model.trigger("navbar:logout");
		return false;
	}

});

