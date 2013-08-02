qst.ExploreMenuView = Backbone.View.extend({
	template: "blocks/explore-menu",
	tagName: "div",
	className: "explore-menu",
	rendered: false,
	locationSortAvailable: false,

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.render();
		this.model.on("change", this.render, this);

		qst.on("geo_position:ready", this.showLocationFilter, this);
	},
	render: function(){
		// if(!this.rendered) {

			var template = this.template( this.model.toJSON() );	
			this.$el.html(template);
			this.$sorts 	= this.$el.find(".explore-menu__items-sorts li");
			this.$filters 	= this.$el.find(".explore-menu__items-filters li");

			this.rendered = true;
			
		// } else {

		// 	this.$sorts.toggleClass("active", false);
		// 	this.$sorts
		// 		.filter(".explore-menu__item-" + this.model.get("sort"))
		// 			.toggleClass("active", true);
		// 	this.$filters.toggleClass("active", false);
		// 	this.$filters
		// 		.filter(".explore-menu__item-" + this.model.get("filter"))
		// 			.toggleClass("active", true);

		// }

		if(!!qst.user.settings.get("geo_position")) {
			this.showLocationFilter();
		}
	},

	showLocationFilter: function () {
		if(this.rendered) {		
			this.$sorts
				.filter(".explore-menu__item-location")
				.toggleClass("hidden", false);
			this.locationSortAvailable = true;
		}
	}

});

