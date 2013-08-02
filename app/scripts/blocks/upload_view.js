qst.UploadView = Backbone.View.extend({
	template: "blocks/upload",
	tagName: "div",
	className: "upload-row",
	$file: null,
	$source: null,
	$editor: null,
	$finish: null,

	events: {
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);
		// this.model.on("upload:success", this.render, this);
		this.model.on("change:sleeped", this.reset, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
		this.delegateEvents();

		this.$source = this.$el.find('.upload__source');
		this.$editor = this.$el.find('.upload__editor');
		this.$finish = this.$el.find('.upload__finish');
	},


	showSource: function() {
		this.$el
			.toggleClass('upload__step-source', true)
			.toggleClass('upload__step-editor', false)
			.toggleClass('upload__step-finish', false)
	},

	showEditor: function() {
		this.$el
			.toggleClass('upload__step-source', false)
			.toggleClass('upload__step-editor', true)
			.toggleClass('upload__step-finish', false)
	},

	showFinish: function() {
		this.$el
			.toggleClass('upload__step-source', false)
			.toggleClass('upload__step-editor', false)
			.toggleClass('upload__step-finish', true)
	},

	addSource: function(source_model) {
		this.$source.html(source_model.view.$el);
	},

	addEditor: function(editor_model) {
		this.$editor.html(editor_model.view.$el);
	},

	addFinish: function(finish_model) {
		this.$finish.html(finish_model.view.$el);
	},

	reset: function() {
		this.undelegateEvents();
		this.$el.html("");
	},

});

