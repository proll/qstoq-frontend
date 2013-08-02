qst.ConfirmView = Backbone.View.extend({
	template: "popups/confirm",
	className: 'confirm',
	events: {
		"click .confirm__close": "close",
		"click .confirm__ok": 	"confirm",
	},

	initialize: function(options) {
		this.template = qst.Templates.get(this.template);
		this.popup_view = new qst.PopupView({class: "confirm-popup"});

		this.model.on('load:start', this.confirmStart, this);
		this.model.on('confirm:success', this.confirmSuccess, this);
		this.model.on('confirm:error', this.confirmError, this);
		this.popup_view.on('hide', this.clear, this);
		this.render();
	},

	render: function() {
		this.$el.append(this.template(this.model.toJSON()));

		this.popup_view.setContent(this.$el);
		this.popup_view.show();

		return this.$el;
	},

	confirm: function() {
		this.model.fetch();
		return false;
	},



	confirmStart: function() {
		this.$el
			.toggleClass('confirm_loading', true)
			.toggleClass('confirm_success', false)
			.toggleClass('confirm_error', 	false)
		return false;
	},

	confirmSuccess: function() {
		this.$el
			.toggleClass('confirm_loading', false)
			.toggleClass('confirm_success', true)
			.toggleClass('confirm_error', 	false)


		if(this.model.get('backreload')) {
			var intv = setTimeout(_.bind(function() {
				qst.trigger('historyback:reload');
				this.clear();
			}, this), 1000);
		}

		return false;
	},

	confirmError: function() {
		this.$el
			.toggleClass('confirm_loading', false)
			.toggleClass('confirm_success', false)
			.toggleClass('confirm_error', 	true)

		var intv = setTimeout(_.bind(function() {
			this.$el
				.toggleClass('confirm_error', false)
		}, this), 2500);
		return false;
	},

	close: function() {
		this.popup_view.hide();
		return false;
	},

	clear: function() {
		this.popup_view.remove();
		this.remove();
		this.model.clear({silent: true});
		return false;
	}
});