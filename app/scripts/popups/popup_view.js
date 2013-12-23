qst.PopupView = Backbone.View.extend({
	template: "popups/popup",
	className: 'popup',
	events: {
		"click .popup__previous": 	"previous",
		"click .popup__close": 		"hide",
		"click .popup__close-btn": 	"hide",
		"click .popup__td": 		"bgClick",
	},
	options : {},
	defaults: {
		content: "",
		class: "",
		width: ""
	},
	_rendered: false,

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
		 _.defaults(this.options, this.defaults);
		
		this.on("popup:show", function(){
			this.trigger("show");
		}, this);
		
		this.on("popup:hide", function(){
			this.trigger("hide");
		}, this);
	},

	render: function(){
		if(this._rendered) return this.$el;
		var content = this.options.content;
		
		if(_.isObject(content) || !content){
			this.options.content = "<div id='placeholder"+this.cid+"'>";
		}
		
		this.$el.append(this.template(this.options));
		this.setContent(content);
		this._rendered = true;

		this.$el.on('scroll.popup', function (e) {
			var $popup = $(e.currentTarget),
				$doc = $popup.find('.popup__table');
			if( $popup.scrollTop()+150 >= ($doc.height() - $popup.height()) ) {
				qst.trigger('popupbottom:reached');
			}
		});
		return this.$el;
	},

	lockPage: function() {
		// $("body").css("overflow", "hidden");
	},

	unlockPage: function() {
		// $("body").css("overflow", "auto");
	},

	bgClick: function(e) {
		if(!!e && !!e.target && e.target.className=='popup__td') {
			this.hide();
		}
	},

	reactKeypress: function(e) {
		// ESC press
		if(e.keyCode == 27) {
			var $src_el = $(e.srcElement);
			if(!$src_el.is(':input')) {
				this.hide();
			}
		}
	},

	showPopup: function(){
		var $body = $(document.body);
		$body.append(this.render());
		this.lockPage();
		this.trigger("popup:show");

		$(document).on("keyup.popup", _.bind(this.reactKeypress, this));
	},

	hidePopup: function(){
		this.$el.off('scroll.popup');
		this.$el.detach();
		this.trigger("popup:hide");
		

		$(document).off("keyup.popup");
	},

	show: function(){
		this.showPopup();
	},

	hide: function(){
		this.hidePopup();
		this.unlockPage();
		return false;
	},

	previous: function() {
		this.trigger("previous");
	},

	scroll: function(amount){
		this.$el.animate({
			'scrollTop': amount
		}, 200);
	},

	setContent: function(content){
		if(content) { 
			this.options.content = content;
			if (this._rendered) {
				this.$el.find('.popup__content').empty().append(content);
			} else {
				this.$el.find("#placeholder"+this.cid).replaceWith(content);
			}
		};
	},

	setWidth: function(width){
		if (width) {
			this.options.width = width;
			this.$el.find('.popup__inner').toggleClass().addClass('popup__inner')
				.addClass('span' + width);
		}
	}
});