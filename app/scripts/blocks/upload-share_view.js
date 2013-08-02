qst.UploadShareView = Backbone.View.extend({
	template: "blocks/upload-share",
	tagName: "div",
	className: "upload__share-row",

	events: {
		'click .upload__share-item>a': 'toggleShare',
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.delegateEvents();
	},

	toggleShare: function(e) {
		var $elem = $(e.target),
			social_flag = $elem.hasClass('active');

		$elem.toggleClass('active', !social_flag);
		this.model.toggleShareFlag($elem.attr('href'), !social_flag);

		return false;
	},
});

