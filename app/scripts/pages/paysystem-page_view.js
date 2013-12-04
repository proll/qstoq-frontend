qst.PaySystemPageView = qst.PageView.extend({
	addPaySystem: function (paysystem_model) {
		this.$el.find('.paysystem-row').html(paysystem_model.view.$el);
	}
});