qst.WarningView = Backbone.View.extend({
	template: "popups/warning",
	className: 'warning',
	events: {
		"click .warning__close": "close",
	},
	options: {
		content: ':('
	},

	initialize: function(options) {
		this.options = options;

		this.template = qst.Templates.get(this.template);
		this.popup_view = new qst.PopupView({class: "warning-popup"});

		this.popup_view.on('hide', this.clear, this);
		this.render();
	},

	render: function() {
		this.$el.append(this.template(this.options));

		this.popup_view.setContent(this.$el);
		this.popup_view.show();

		return this.$el;
	},

	close: function() {
		this.popup_view.hide();
		return false;
	},

	clear: function() {
		this.popup_view.remove();
		this.remove();
		return false;
	}
});