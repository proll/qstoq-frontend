qst.PopularView = Backbone.View.extend({
	template: 'blocks/popular',
	tagName: 'div',
	className: 'popular',

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
		this.model.on('load:success', this.render, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.lazy_loader = new qst.LazyLoader();
		this.lazy_loader.load(this.$el);
	},

	addFirstPopular: function(first_popular_model) {
		this.$el.find('.popular__item_first').html(first_popular_model.view.$el);
	},

	reset: function() {
		delete this.lazy_loader;
		this.$el.html('');
	}
});

