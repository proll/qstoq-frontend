qst.ExplorePageView = qst.PageView.extend({
	addGrid: function (grid_model) {
		this.$el.find('.pic-tile-grid-col').html(grid_model.view.$el);
	},
	addMenu: function (menu_model) {
		this.$el.find('.sort-menu-row').html(menu_model.view.$el);
	},
	addStoryMenu: function (story_menu_model) {
		this.$el.find('.story-menu-row').html(story_menu_model.view.$el);
	},
	
});