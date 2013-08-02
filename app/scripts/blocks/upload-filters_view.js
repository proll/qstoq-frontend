qst.UploadFiltersView = Backbone.View.extend({
	template: "blocks/upload-filters",
	tagName: "div",
	className: "upload__filters-row",

	events: {
		'click .upload__filter-item>a': 'toggleFilter',
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);
		this.model.on('normal', this.toggleNormal, this);
		this.model.on('filter:start', this.filterStart, this);
		this.model.on('filter:finish', this.filterFinish, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.$normalize_item = this.$el.find('.upload__normalize-item');
		this.$items = this.$el.find('.upload__filter-item');
		this.$canvas = this.$el.find('.upload__image_filtered');

		this.delegateEvents();
	},

	toggleFilter: function(e) {
		var $elem = $(e.target).parent(),
			flag = $elem.hasClass('active'),
			filter_name = $elem.data('filter');
		this.$items.toggleClass('active', false);

		if(flag || $elem.hasClass('upload__normalize-item')) {
			this.$normalize_item.toggleClass('active', true);

			this.model.set('filtered', false);
			this.$el.toggleClass('filtered', false);
			this.$el.toggleClass('filtering', false);
		} else {
			$elem.toggleClass('active', true);
			this.model.filter(filter_name);

			this.model.set('filtered', true);
			this.$el.toggleClass('filtered', true);
		}
		return false;
	},



	toggleNormal: function() {
		this.$normalize_item.find('a').click();
	},


	filterStart: function() {
		this.$el.toggleClass('filtering', true);
	},


	filterFinish: function() {
		this.$el.toggleClass('filtering', false);
	}
});

