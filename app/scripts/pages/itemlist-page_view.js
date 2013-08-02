qst.ItemListPageView = qst.PageView.extend({
	$header: null,

	addAddDialog: function (add_model) {
		if(!this.$header) {
			this.$header = $('.page-header');
		}
		this.$header.find('.helper').html(add_model.view.$el);
	},
	addItemList: function (itemlist_model) {
		this.$el.find('.itemlist-row').html(itemlist_model.view.$el);
	},

	updateTotal: function(total) {
		if(!this.$header) {
			this.$header = $('.page-header');
		}
		this.$header.find('h1').html(total+' '+Handlebars.helpers._plural(total, 'item'))
	}
});