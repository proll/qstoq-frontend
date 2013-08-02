qst.PhotoLikersView = Backbone.View.extend({
	template: 	'blocks/photo-likers',
	tagName: 	'div',
	className: 	'photo-likers',
	$image: null,
	image: null,

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template
		}

		this.template = qst.Templates.get(this.template);

		this.model.on('load:success', this.render, this);
		this.model.on('update:vote', this.updateTotal, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		if(this.model.get('wasvote')) {
			this.$el.toggleClass('photo-likers_my-vote', true);
		}

		this.$el.toggleClass('photo-likers_no-like', this.model.get('likers').total === 0);

		this.$total = this.$el.find('.photo-likers__total');
	},

	updateTotal: function(options) {
		if(!!options){
			// increment comment counter
			this.$el.toggleClass('photo-likers_my-vote', !!options.my);
			var total = options.vote_count;
			this.$total.data('total', total);

			if(total > 0) {
				this.$el.toggleClass('photo-likers_no-like', false);
			} else {
				this.$el.toggleClass('photo-likers_no-like', true);
			}

			this.$total.html(total + '<span class="photo-likers__total-decl"> ' + Handlebars.helpers._plural(total, this.$total.data('decl')) + '</span>')	
		}
	}
	
});

