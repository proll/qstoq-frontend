qst.BusinessPageView = qst.PageView.extend({
	indent: 60,
	$window: $(window),
	events: {
		'click .business__start-a': 'showFeedback',
		'submit .business__connect-form': 'showEmailFeedback',
		'click .business__toggler-menu-itm-a': 'toggle',
	},


	render: function(){
		if (this.renderedHtml) {
			this.$el.append(this.renderedHtml);
		} else {
			var tmpDiv = $('<div></div>')
				.addClass('page-' + this.model.get('name'))
				.html(this.template(this.model.toJSON()));
			this.trigger("page:preRender", tmpDiv);
			this.$el.html(tmpDiv);
		}


		$('body').attr('class', 'body__page-' + this.model.get('name'));

		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.model.enterDocument();
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);

		this.$sec1 = this.$el.find('.business-section1');
		this.$sec2 = this.$el.find('.business-section2');
		// this.$sec3 = this.$el.find('.landing-section3');
		this.$screen1 = this.$el.find('.business__screen1');
		this.$screen2 = this.$el.find('.business__screen2');

		this.$navbar = $('.navbar-header');

		qst.on('scroll', this.positionScreens, this);


		this.delegateEvents();
	},

	toggle: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}

		var $toggler = $(e.currentTarget).parents('.business__toggler');
		if($toggler.hasClass('toggle1')) {
			$toggler
				.toggleClass('toggle1', false)
				.toggleClass('toggle2', true);
		} else {
			$toggler
				.toggleClass('toggle1', true)
				.toggleClass('toggle2', false);
		}
	},

	showFeedback: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.model.showFeedback();
		return false;
	},

	showEmailFeedback: function(e) {
		if(e && e.preventDefault) {
			e.preventDefault();
			e.stopPropagation();
		}
		var options = {},
			email = $.trim(this.$el.find('.business__connect-email').val());
		if(!!email) {
			options.email = email;
		}

		this.model.showFeedback(options);
		return false;
	},

	positionScreens: function(scroll_obj) {
		var margin_top = 124,
			margin_top2 = 10,
			h_screen = 509+45,
			h_nav = 0,
			top = this.$sec2.position().top,
			h = this.$sec2.height(),

			style_obj = {};

		if((scroll_obj.s_top > top - margin_top - h_nav) && (scroll_obj.s_top < top + h - h_screen - h_nav - margin_top2)) {
			style_obj = {
				// '-webkit-transform': 'translate(0, ' + (scroll_obj.s_top - top - margin_top) +'px)',
				   // '-moz-transform': 'translate(0, ' + (scroll_obj.s_top - top - margin_top) +'px)',
				    // '-ms-transform': 'translate(0, ' + (scroll_obj.s_top - top - margin_top) +'px)',
				     // '-o-transform': 'translate(0, ' + (scroll_obj.s_top - top - margin_top) +'px)',
				        // 'transform': 'translate(0, ' + (scroll_obj.s_top - top - margin_top) +'px)',
		        top: scroll_obj.s_top - top + h_nav + margin_top2,

				// opacity: 1 - (scroll_obj.s_top - top + margin_top + h_nav)/(h - h_screen + margin_top - margin_top2)
				opacity: (scroll_obj.s_top < top + (h - h_screen - h_nav - margin_top2)/2)? 1 : 0

			}
		} else if(scroll_obj.s_top < top - margin_top - h_nav) {
			style_obj = {
				top: margin_top2 - margin_top,
				opacity: 1
			}
		} else {
			style_obj = {
				top: h - h_screen,
				opacity: 0
			}
		}
		this.$screen1.css(style_obj);
		style_obj.opacity = 1 - style_obj.opacity;
		this.$screen2.css(style_obj);
	},

	sleep: function() {
		qst.off('scroll', this.positionScreens, this);
		this.undelegateEvents();
	}
});