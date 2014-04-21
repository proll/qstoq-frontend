qst.ItemListPageView = qst.PageView.extend({
	$header: null,

	events: {
		'click .itemlist__direct-hello-a': 'openFeedback'
	},

	addAddDialog: function (add_model) {
		this.$header_btn = this.$el.find('.itemlist-head__btn');
		this.$header_btn.html(add_model.view.$el);
	},
	addItemList: function (itemlist_model) {
		this.$el.find('.itemlist-row').html(itemlist_model.view.$el);
	},

	openFeedback: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}

		qst.trigger('feedback:show');
	},

	updateTotal: function(total) {
		if(total > 0) {
			this.$el
				.toggleClass('empty', false)
				.toggleClass('not-empty', true)
		} else {
			this.$el
				.toggleClass('empty', true)
				.toggleClass('not-empty', false)
		}
		this.$header_cnt = this.$el.find('.itemlist-head__cnt');
		if(!total) {
			total = Handlebars.helpers._('No', 'item');
		}
		this.$header_cnt.html(total+' '+Handlebars.helpers._plural(total, 'item'))

	}
});