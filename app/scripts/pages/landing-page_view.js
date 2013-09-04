qst.LandingPageView = qst.PageView.extend({
	indent: 66,
	$window: $(window),
	events: {
		// 'click .landing-inter__item-signup>a': 'showAuth',
		// 'click .signup_fb': 'signupFB',
		// 'click .signup_tw': 'signupTW',
		// 'click .signup_vk': 'signupVK',
		// 'submit .landing-signup__form': 'signupEmail',

	},


	render: function(){
		// if (this.renderedHtml) {
		// 	this.$el.append(this.renderedHtml);
		// } else {
		// 	var tmpDiv = $('<div></div>')
		// 		.addClass('page-' + this.model.get('name'))
		// 		.html(this.template(this.model.toJSON()));
		// 	this.trigger("page:preRender", tmpDiv);
		// 	this.$el.html(tmpDiv);
		// }


		// $('body').attr('class', 'body__page-' + this.model.get('name'));

		// /**
		//  * описываем в модели метод enterDocument
		//  * выполнится после того как page отрисован
		//  */
		// this.model.enterDocument();
		// this.trigger("page:render", this.model);
		// this.trigger("enterDocument", this.model);


		// this.$window.on('resize.landing.page', _.bind(this.repositionPage, this));
		// this.$sec1 = this.$el.find('.landing-section1');
		// this.$secs = this.$el.find('.landing-section');
		// this.$sec5 = this.$el.find('.landing-section5');
		// this.$fake_input = this.$el.find('.fake-input');
		// this.$real_input = this.$el.find('.landing-signup__inp');


		// this.repositionPage();
		// if(_.isPhone()) {
		// 	$('html, body').animate({
		// 		 scrollTop: 0
		// 	 }, 100);
		// }


		// // var that = this;
		// // setTimeout(function(){
		// 	// var image = new Image();
		// 	// image.onload = _.bind(that.onSection1ImgLoad, that);
		// 	// $(image).toggleClass('silent-image')
		// 	// 		.appendTo('body')
		// 	// image.src = '/images/st/land-bg0_md.jpg';

		// // }, 3000)
		// if(!_.isPhone()) {
		// 	var that = this;
		// 	// setTimeout(function(){
		// 		that.section1ImgLoadFinish();
		// 	// }, 2000)
		// } else {
		// 	// PRELOAD HACK From 500px.com
		// 	// this.$imgs1 = $('body').find('.silent-image');
		// 	// if(this.$imgs1.length) {
		// 	// 	this.section1ImgLoadFinish();
		// 	// } else {
		// 	// 	this.$imgs1 = $('<img src="/images/st/land-bg0_md.jpg" class="silent-image">').appendTo('body');
		// 	// 	this.img_interval = setInterval(_.bind(this.section1ImgLoadCheck, this), 1000);
		// 	// }
		// 	var image = new Image();
		// 	image.onload = _.bind(this.section1ImgLoadFinish, this);
		// 	image.src = '/images/st/land-bg0_md.jpg';
		// }

		this.delegateEvents();
	},

	// HACK From 500px.com
	// section1ImgLoadCheck: function (img) {
	// 	console.log('section1ImgLoadCheck')
	// 	var img = this.$imgs1.get(0);
	// 	if(img.complete) {
	// 		clearInterval(this.img_interval);
	// 		this.section1ImgLoadFinish();
	// 	}
	// },

	section1ImgLoadFinish: function() {
		this.$sec1.toggleClass('landing-section1_md', true);
		// HACK From 500px.com
		// this.$imgs1.css({
		// 	display: 'none'
		// });
	},


	repositionPage: function() {
		var h = 0,
			ww = $(window).width();
		if(ww <= 640) {
			// TODO: мрак
			this.indent = 44;
			var has_banner = $('html').hasClass('with-top-banner');

			if(has_banner) {
				this.indent = this.indent + 100;
			}
			h = Math.max(this.$window.innerHeight(), 436);
			var section_h = Math.min(Math.max(h, 480), 640);
			this.$secs.height(section_h);
			this.$sec1.height(h-this.indent);
			this.$sec5.height(Math.round(section_h*1.5));
		} else if(ww >640 && ww <= 950){
			this.indent = 66;
			var has_banner = $('html').hasClass('with-top-banner');
			if(has_banner) {
				this.indent = this.indent + 100;
			}
			h = this.$window.innerHeight() - this.indent;
			var section_h = Math.max(h, 850);
			this.$secs.height(section_h);
			this.$sec1.height(h);
		} else {
			this.indent = 66;
			var has_banner = $('html').hasClass('with-top-banner');
			if(has_banner) {
				this.indent = this.indent + 100;
			}
			h = this.$window.innerHeight() - this.indent;
			var section_h = Math.max(h, 800);
			this.$secs.height(section_h);
			this.$sec1.height(h);
		}


		// super hack to clone textarea to span fake-input
		// and to equal input width to length of placeholder text
		var copyStyle = [
			'fontFamily',
			'fontSize',
			'fontWeight',
			'fontStyle',
			'letterSpacing',
			'textTransform',
			'wordSpacing',
			'textIndent'
		],
		that = this;
		$.each(copyStyle, function(i, val){
			that.$fake_input.get(0).style[val] = that.$real_input.css(val);
		});


		this.$real_input.width(this.$fake_input.width());
	},

	// showAuth: function() {
	// 	this.model.showAuth();
	// 	return false;
	// },

	// signupFB: function() {
	// 	this.model.signupFB();
	// 	return false;
	// },

	// signupTW: function() {
	// 	this.model.signupTW();
	// 	return false;
	// },

	// signupVK: function() {
	// 	this.model.signupVK();
	// 	return false;
	// },

	// signupEmail: function() {
	// 	var $email = this.$el.find('.landing-signup__inp'),
	// 		email = $email.val();
	// 	if(!_.isEmpty(email)) {
	// 		$email.val('');
	// 		this.model.signupEmail(email);
	// 	}
	// 	return false;
	// },

	sleep: function() {
		this.$window.off('resize.landing.page');
		this.undelegateEvents();
	}
});