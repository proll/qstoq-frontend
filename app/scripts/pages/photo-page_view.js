qst.PhotoPageView = qst.PageView.extend({
	el: "body",
	is_popup: false,
	need_previous: false,

	events: {
		'keyup': 'keyup'
	},

	addPhoto: function (photo_model) {
		this.$el.find(".photo-page-row").html(photo_model.view.$el);
	},

	keyup: function(e) {
		// e.stopPropagation();
		if(this.need_previous) {
			if(e.keyCode === 37) {
				this.model.previous();
			} else if(e.keyCode === 39) {
				this.model.next();
			}
		}
		return true;
	},

	render: function(in_popup, need_previous){
		this.is_popup = in_popup;
		this.need_previous = need_previous;

		this.popup_view = new qst.PopupView({class: "photo-popup"});
		this.popup_view.on('show', function(){
			this.reposition();
		}, this);
		this.popup_view.on('hide', function(){
			qst.trigger("historyback");
		}, this);
		this.popup_view.on('previous', function(){
			this.model.trigger('previous');
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
		this.model.on('photo:preready', this.reposition, this);
		this.model.on('photo:ready', this.reposition, this);


		// $('body').attr('class', 'body__page-' + this.model.get('name'));
		if(this.need_previous) {
			this.$el.toggleClass('has-context', true);
		}
		


		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.model.enterDocument();
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);

		this.delegateEvents();
		$(window).on('resize.photo_page', _.bind(this.reposition, this));

	},

	show: function() {
	},

	remove: function() {
		this.model.off(null,null,this);

		this.turnOffContextFlag();
		this.undelegateEvents();
		$(window).off('resize.photo_page');

		this.popup_view.unlockPage();
		this.popup_view.remove();
		$(document).off("keyup.popup");
	},

	turnOffContextFlag: function() {
		this.$el.toggleClass('has-context', false);
	},

	reposition: function() {
		var $w 	= $(window),
			w 	= $w.width(),
			h 	= $w.height(),

			repos_w = 0;

			indent = 35 + 94,
			min_img_h = 500,
			max_img_h = 730,

			can_reposition = ( w >= 640 );

		if(!this.is_popup) {
			indent = 66 + 94;
		}



		if( can_reposition ) {

			if (h <= min_img_h + indent) {
				repos_w = min_img_h;
			} else if (h <= max_img_h + indent) {
				repos_w = h - indent;
			} else {
				repos_w = 'auto';
			}

		} else {
			repos_w = 'auto'
		}

		var $row = '';
		if(this.is_popup) {
			$row = this.$el.find(".popup__content");
			$row.css({
				width: repos_w
			})

			$row = this.$el.find(".popup__inner");
			// for desktop
			if(w >= 950) {
				$row.css({
					width: repos_w + 2*85
				})
			} else {
				$row.removeAttr('style');
			}



		} else {
			$row = this.$el.find(".photo-row");
			$row.css({
				width: repos_w
			})
		}

		var $img_cont = this.$el.find('.photo__pic-tile');
		$img_cont.css({
			height: repos_w
		})
	}
});