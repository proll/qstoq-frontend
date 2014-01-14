qst.InfoView = Backbone.View.extend({
	template: "blocks/info",
	className: "info",

	events: {
		'click a': 'linkClick'
	},

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		// this.model.on("load:success", this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.delegateEvents();
	},

	addPage: function(page_name, page_data) {
		this.$el.find('.info__slide_'+page_name).html(page_data);
	},

	linkClick: function(e) {
		$a = $(e.currentTarget);
		if($a.attr('href').charAt(0) === '#') {
			e.stopPropagation();
			var $item = this.$el.find($a.attr('href'));
			if($item.length) {
				$("html, body").animate({ 
					scrollTop: $item.eq(0).offset().top - 80
				}, 300);
			}
			return false;
		} else {
			return true;
		}
	},

	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
		} else {
			this.delegateEvents();
		}
	},
});

