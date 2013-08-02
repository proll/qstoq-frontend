qst.UpScrollerView = Backbone.View.extend({
	tagName: 'div',
	className: 'up-scroller',
	inited: false,
	inrvl: 0,
	hidden: true,
	// scroll_delta: 0,
	// last_scroll_top: 0,

	events: {
		'click': 'click',
		'mouseover': 'mouseover',
		'mouseout': 'hide',
	},

	initialize: function(options){
		if(!this.inited) {
			this.inited = true;
			this.render();
			qst.on('scroll', this.smartShow, this);
		}
	},

	render: function() {
		$('body').append(this.$el);
	},

	click: function() {
		qst.speedScrollTop();
	},

	mouseover: function() {
		this.hidden = false;
		clearInterval(this.inrvl);
		this.$el
			.stop(true, true)
			.fadeIn(200);
	},

	smartShow: function(scroll_obj) {
		if(2 * scroll_obj.w_h > scroll_obj.d_h) {
			return false;
		}

		if(scroll_obj.s_top > scroll_obj.w_h) {
			if(this.hidden) {
				this.show();
			}
		} else {
			if(!this.hidden) {
				this.hide();
			}
		}
		// TODO: maby write a smarter code of showing 
		// based on 
		// scrollTop change speed
		// this.last_scroll_top = 	scroll_obj.s_top;	
	},

	show: function() {
		this.hidden = false;
		clearInterval(this.inrvl);
		this.$el
			.stop(true, true)
			.fadeIn(200);
		this.inrvl = setTimeout(_.bind(this.hide, this), 3500);
	},

	hide: function() {
		this.hidden = true;
		clearInterval(this.inrvl);
		this.$el
			.stop(true, true)
			.fadeOut(1000);
	}
});

