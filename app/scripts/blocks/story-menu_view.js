qst.StoryMenuView = Backbone.View.extend({
	template: "blocks/story-menu",
	tagName: "div",
	className: "story-menu",
	rendered: false,
	locationSortAvailable: false,

	events: {
		"click .story-menu__opener": "toggleMenu",
		"click .story-menu__item": "hideMenu",
		"mouseover .story-menu__category-link": "mouseShowSubmenu",
		"click .story-menu__category-link": "toggleSubmenu"
	},

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("change", this.render, this);
		this.model.on("activate", this.activate, this);
		this.model.on("sleep", this.sleep, this);
	},


	eventDriver: function (e) {
		var $link = $(e.currentTarget),
			href = $link.attr('href');

		href = href.split('/');

		this.model.set({
			category: 	href[2],
			story: 		href[3],
			sort: 		href[4],
			filter: 	href[5],
		})

		this.hideMenu();
		return false;
	},


	render: function(){
		// if(!this.rendered) {

			var template = this.template( this.model.toJSON() );	
			this.$el.html(template);
			this.$category_items 	= this.$el.find(".story-menu__category-item");
			this.$opener 			= this.$el.find(".story-menu__opener");
			this.$opener_icn 		= this.$opener.children(".iexp").first();
			this.$opener_title 		= this.$opener.find(".story-menu__opener-title");
			this.rendered = true;
			
			if(this.model.get('event_driven')) {
				this.$el.on('click.story_menu__opener', '.story-menu__opener a',  	_.bind(this.eventDriver, this));
				this.$el.on('click.story_menu__item', '.story-menu__item a',  		_.bind(this.eventDriver, this));
			}
		// } else {
		// 	проще перерендерить чем перепистаь все href по изменениям sort, filter

		// 	this.$el.find("li").toggleClass("active", false);
		// 	this.$el
		// 		.find(".story-menu__category-item-" + this.model.get("category"))
		// 		.toggleClass("active", true);
		// 	if(this.model.get("category")!=this.defaults.category) {
		// 		this.$el
		// 			.find(".story-menu__item-" + this.model.get("story"))
		// 			.toggleClass("active", true);
		// 	}
		// }

		this.addDaily(this.model.daily_list);

		

		if(this.model.get("current_id")) {
			this.$opener_icn.attr( "class", "iexp iexp-cat-icn iexp-" + this.model.get("current_id") );
		} else {
			this.$opener_icn.attr( "class", "hidden");
		}

		if(this.model.get("current_name")) {
			this.$opener_title.text(this.model.get("current_name"));
		} else {
			this.$opener_title.text("");
		}

		this.$el.toggleClass("default", this.model.get("is_default"));

		return this;
	},

	toggleMenu: function (e) {
		this.$el.toggleClass("open");
		if(this.$el.hasClass("open")) {
			var $active_story = this.$el.find(".story-menu__item.active"),
				$active_category_submenu = $active_story.parents(".story-menu__items").first();
			if($active_story.length) {
				$active_category_submenu.scrollTop($active_category_submenu.scrollTop() + $active_story.position().top);
			}
		}
		// .iexp-clear is a (X) in the "a" tag that clear filter
		// by going to /explore and it have act like link
		// and not to stop propogation
		if(!$(e.target).is(".iexp-clear"))
			return false
	},


	hideMenu: function (e) {
		this.$el.toggleClass("open", false);
	},

	mouseShowSubmenu: function(e){
		this.toggleSubmenu(e, true)
		return false;
	},

	toggleSubmenu: function (e, always_open) {
		e.stopPropagation();
		var $active_category = null,
			hide_menu = true,
			is_mobile = $(window).width() < 650;

		if(!!e && !!e.currentTarget) {
			$active_category = $(e.currentTarget).parent();
			if(!$active_category.hasClass("active")) {
				hide_menu = false;
			}
		}

		if(always_open) {
			hide_menu = false;
		}
		
		if(!is_mobile || (is_mobile && e.type != "mouseover")) {
			this.$category_items.toggleClass("active", false);

			if(!!e && !!e.currentTarget && !hide_menu) {
					var $active_category_submenu = $active_category.find("ul"),
						$active_story = $active_category.find(".active");

				$active_category.toggleClass("active", true);
				if($active_story.length) {
					$active_category_submenu.scrollTop($active_category_submenu.scrollTop() + $active_story.position().top);
				}
			}
		}

		// scroll to item if we on cellphone
		// TODO: remove $(window).width() < 650 as a sign of mobility
		if(is_mobile && e.type != "mouseover") {
			if(!!$active_category && !hide_menu) {
				// setTimeout(
					// function() {
						qst.speedScrollTop($active_category.offset().top);
					// }
				// ,300)
			}
		}


		return false;
	},

	activate: function (argument) {
		this.delegateEvents();
		$("html").on("click.story_menu", _.bind(this.hideMenu, this));
	},

	sleep: function () {
		this.undelegateEvents();
		this.$el.off('click.story_menu__opener');
		this.$el.off('click.story_menu__item');
		$("html").off("click.story_menu");
	},

	addDaily: function (daily_model) {
		daily_model.view.render();
		var $cont = this.$el.find(".story-menu__category-item-daily ul"),
			$active_item = daily_model.view.$el.find(".active");

		$cont.html(daily_model.view.$el);
		if($active_item.length){
			$cont.scrollTop($cont.scrollTop() + $active_item.position().top);
		}
	}
});

