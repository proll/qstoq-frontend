qst.PopularPageView = qst.PageView.extend({
	addPopular: function (popular_model) {
		this.$el.find('.popular-prize').html(popular_model.view.$el);
	},
	addGrid: function (grid_model) {
		this.$el.find('.popular-grid').html(grid_model.view.$el);
	},
});