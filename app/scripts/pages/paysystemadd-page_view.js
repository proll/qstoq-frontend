qst.PaySystemAddPageView = qst.PageView.extend({
	template: "pages/paysystemadd-page",
	el: "body",
	is_popup: false,

	addPaySystemAdd: function (paysystemadd_model) {
		this.$el.find(".paysystemadd-row").html(paysystemadd_model.view.$el);
	},


	render: function(in_popup, need_previous){
		this.is_popup = in_popup;
		this.popup_view = new qst.PopupView({class: "paysystemadd-popup"});
		this.popup_view.on('hide', function(){
			qst.trigger("historyback");
		}, this);


		if(in_popup) {
			this.setElement("body");

			if (this.renderedHtml) {
				this.popup_view.setContent($(this.renderedHtml));
			} else {
				this.renderedHtml = this.template(this.model.toJSON());
				this.popup_view.setContent($(this.renderedHtml));
			}

			this.popup_view.show();
			this.popup_view.$el.focus();

		} else {
			this.setElement("#qst-container");

			if (this.renderedHtml) {
				this.$el.append(this.renderedHtml);
			} else {
				this.renderedHtml = this.template(this.model.toJSON());

				var tmpDiv = $('<div></div>')
					.addClass('page-' + this.model.get('name'))
					.html(this.renderedHtml);
				this.trigger("page:preRender", tmpDiv);
				this.$el.html(tmpDiv);
			}
		}

		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);

		this.delegateEvents();
	},

	remove: function() {
		this.model.off(null,null,this);

		this.undelegateEvents();

		this.popup_view.unlockPage();
		this.popup_view.remove();
	},
});