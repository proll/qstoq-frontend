qst.LandingPageView = qst.PageView.extend({
	indent: 80,
	$window: $(window),
	events: {
		'click .landing__start-a': 'showAuth',
		'click .landing__next-a': 'goSection2'
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

		this.$window.on('resize.landing.page', _.bind(this.repositionPage, this));
		this.$sec1 = this.$el.find('.landing-section1');
		this.$sec2 = this.$el.find('.landing-section2');
		this.$sec3 = this.$el.find('.landing-section3');
		// this.$secs = this.$el.find('.landing-section');

		this.repositionPage();

		this.$nav_how = $('.navbar__item-how>a');
		this.$nav_where = $('.navbar__item-where>a');

		this.$nav_how.on('click.landing', _.bind(this.goSection2, this));
		this.$nav_where.on('click.landing', _.bind(this.goSection3, this));

		this.delegateEvents();
	},

	repositionPage: function() {
		var h = 0,
			ww = $(window).width();

		h = this.$window.innerHeight() - this.indent;
		var section_h = Math.max(h, 600);
		this.$sec1.height(section_h);
		this.$sec2.css({'margin-top': section_h});
	},

	showAuth: function() {
		this.model.showAuth();
		return false;
	},

	goSection2: function(e) {
		$('html, body').animate({
			 scrollTop: this.$sec2.offset().top - this.indent
		}, 100);
		return false;
	},

	goSection3: function(e) {
		$('html, body').animate({
			 scrollTop: this.$sec3.offset().top - this.indent
		}, 100);
		return false;
	},

	sleep: function() {
		this.$nav_how.off('click.landing');
		this.$nav_where.off('click.landing');
		this.$window.off('resize.landing.page');
		this.undelegateEvents();
	}
});