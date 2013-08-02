qst.NotificationsPageView = qst.PageView.extend({
	el: "body",

	addFeed: function (feed_model) {
		this.$el.find(".notifications-feed-row").html(feed_model.view.$el);
	},

	render: function(in_popup){
		this.popup_view = new qst.PopupView({class: "notifications-popup"});

		this.popup_view.on('hide', function(){
			qst.trigger("historyback");
		}, this);

		this.is_popup = in_popup;

		if(in_popup) {
			if (this.renderedHtml) {
				this.popup_view.setContent($(this.renderedHtml));
			} else {
				this.renderedHtml = this.template(this.model.toJSON());
				this.popup_view.setContent($(this.renderedHtml));
			}

			this.popup_view.show();

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

			$('body').attr('class', 'body__page-' + this.model.get('name'));

		}
		
		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.model.enterDocument();
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);
	},

	show: function() {
	},

	remove: function() {
		this.popup_view.unlockPage();
		this.popup_view.remove();
		$(document).off("keyup.popup");
	},
});