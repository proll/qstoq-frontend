qst.UploadEditorView = Backbone.View.extend({
	template: "blocks/upload-editor",
	tagName: "div",
	className: "upload__editor-row",

	$file: null,

	events: {
		'click .upload__publish-btn': 'publish',
		'click .upload__crop>a': 'showCrop',
		'click .upload__contrast>a': 'contrast',
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);
		this.model.on('crop:close', this.hideCrop, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
		this.delegateEvents();
	},

	publish: function() {
		this.model.publish();
		return false;
	},

	showCrop: function() {
		this.$el.toggleClass('crop', true);
		return false;
	},

	hideCrop: function() {
		this.$el.toggleClass('crop', false);
		return false;
	},

	contrast: function(e) {
		var $btn = $(e.currentTarget);
		$btn.toggleClass('active');
		return false;
	},	

	addImage: function(image_model) {
		this.$el.find('.upload__image-container').html(image_model.view.$el);
	},

	addFilters: function(filters_model) {
		this.$el.find('.upload__image-filters').html(filters_model.view.$el);
	},

	addCrop: function(crop_model) {
		this.$el.find('.upload__image-crop').html(crop_model.view.$el);
	},

	addCaption: function(caption_model) {
		this.$el.find('.upload__caption').html(caption_model.view.$el);
	},

	addStoryMenu: function(story_menu_model) {
		this.$el.find('.upload__story-menu').html(story_menu_model.view.$el);
	},

	addShare: function(share_model) {
		this.$el.find('.upload__share').html(share_model.view.$el);
	},
});

