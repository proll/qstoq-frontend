qst.LinkView = Backbone.View.extend({
	template: 'blocks/link',
	tagName: 'tr',
	className: 'itemlist__link',

	events: {
		'click .qst__toggle-a': 'toggle',
		// 'click .link__delete-a': 'delete',
		'click .link__link': 'clickShortLink',
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

	clickShortLink: function(e) {
		$(e.currentTarget).find('input').select();
	},
	
	// delete: function(e) {
	// 	this.model.deleteItem($(e.currentTarget).data());
	// 	return false;
	// },

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
});