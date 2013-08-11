qst.LinkView = Backbone.View.extend({
	template: 'blocks/link',
	tagName: 'table',
	className: 'itemlist__link',

	events: {
		'click .link__toggle-a': 'toggle',
		'click .link__delete-a': 'delete',
	},

	$vote: null,
	$caption: null,
	$location_name: null,
	$location_addr: null,
	$likers: null,
	$comments: null,


	initialize: function(options){
		this.template = qst.Templates.get(this.template);
		// this.model.on('change:src', 		this.loadTile, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
	},

	toggle: function(e) {
		// e.preventDefault();
		if(this.model.get('active')) {
			this.model.set('active', false);
			$(e.currentTarget).parents('.link__toggle')
				.toggleClass('on', false)
				.toggleClass('off', true)
		} else {
			this.model.set('active', true);
			$(e.currentTarget).parents('.link__toggle')
				.toggleClass('on', true)
				.toggleClass('off', false)
		}
		return false;
	},
	
	delete: function(e) {
		this.model.deleteItem($(e.currentTarget).data());
		return false;
	},

	delayedRemove: function() {
		var that = this;
		this.$el.css({
			height: this.$el.outerHeight()
		})
		setTimeout(function(){
			that.$el.toggleClass('removing', true);
			that.$el.css({
				opacity: 0,
				height: 0
			})
		},50);
	}

	// vote: function() {
	// 	if(this.model.get('type')!= 'photo') {
	// 		return;
	// 	}

	// 	var wasvote = parseInt(this.model.get('photo').wasvote) || 0;
	// 	if(!wasvote) {
	// 		if(!this.model.addVote()) {
	// 			return false;
	// 		}
	// 		this.$vote.toggleClass('active', true);
	// 	} else {
	// 		this.$vote.toggleClass('active', false);
	// 		this.model.removeVote();
	// 	}
	// },

	// updateVote: function(options) {
	// 	if(!!options) {
	// 		this.$vote
	// 			.find('.photo__vote-title')
	// 				.text(options.vote_count);
	// 	}
	// },
});