qst.UserInfoView = Backbone.View.extend({
	template: 'blocks/user-info',
	tagName: 'div',
	className: 'user-info',

	events: {
		'click .profile__interact-bio': 'focusBio',
		'click .profile__interact-message': 'gotoMessage',
		'click .profile__report-title': 'reportUser',
		'keypress .profile__bio-input': 'inputBio',
		'blur .profile__bio-input': 'editBio',
		'click .profile__follow-head': 'follow'
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}

		this.template = qst.Templates.get(this.template);
		this.model.on('load:success', this.render, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);


		this.lazy_loader = new qst.LazyLoader();
		this.lazy_loader.load(this.$el);
		this.activate();
	},

	reportUser: function() {
		this.model.reportUser(this.$el.find('.profile__report-title').data());
	},

	gotoMessage: function() {
		qst.navigate('/dialogs/'+this.model.get('user_id')+'/', {trigger: true})
	},

	follow: function(e) {
		if(!this.model.get('loading_follow')) {
			var $head = $(e.currentTarget); 
			$head.toggleClass('followed');
			this.model.follow();
		}
	},
	

	focusBio: function() {
		if(this.$input) {
			if(this.model.get('user_obj').bio) {
				this.$input.focus();
			} else {
				var _this = this;
				this.$el.find('.profile__bio').slideDown(200, function(){
					_this.$input.focus();
				})
			}
		}
	},

	editBio: function() {
		var text = $.trim(this.$input.val());
		this.model.editBio(text);
	},

	inputBio: function(e) {
		// console.log(e);
	 	if (e.keyCode === 13 && !e.altKey){
	 		this.$input.blur();
			this.editBio();
			return false;
		}
	},

	activate: function() {
		var that = this;
		this.delegateEvents();

		if(this.model.get('mine')) {
			this.$input = this.$el.find('.profile__bio-input');
			if(this.$input.length) {
				this.$input.autosize();


				// I dont know why but we have to manual trigger resize
				// to be sure that textarea is ajusted
				setTimeout(function () {
					that.$input.trigger('resize');
				}, 10);
			}
		}


		// TODO: here we have the Hard linking to Page DOM
		var nm = this.model.get('user_obj').name;
		if( nm ) {
			this.$header = $('header h1');
			this.$header.html(nm);
		}

		// TODO: here we have the Hard linking to profile-page DOM
		var photo_count = this.model.get('user_obj').photos_count;
		if(!!photo_count && photo_count > 0) {
			this.$explore_counter = $('.profile-explore__count');
			this.$explore_counter.html(photo_count);
		}
	},

	clear: function() {
		this.$el.html('');
		this.$header = $('header h1');
		this.$header.html('');

	},
	// clear autosize.js stuff
	clearAutoSize: function () {
		$(window).off('resize.texarea_autosize');
		$('.autosizejs').remove();
	},

	reset: function() {
		delete this.lazy_loader;
		this.undelegateEvents();
		this.$el.html('');
	}
});

