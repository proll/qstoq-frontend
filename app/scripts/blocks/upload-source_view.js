qst.UploadSourceView = Backbone.View.extend({
	template: "blocks/upload-source",
	tagName: "div",
	className: "upload__source-row",

	$file: null,
	allowed_types: /image.*/i,

	events: {
		'click .upload__source_file>a': 'openFile',
		'change .upload__input_file': 'changeFile'
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
		this.$file = this.$el.find('.upload__input_file');
		this.delegateEvents();

		// this.openFile();
	},

	openFile: function() {
		this.$file.click();
		return false;
	},

	changeFile: function(e) {
		if (this.$file.val() == '') return false;
		
		var file = this.$file.get(0).files[0];
		this.$file.val('');
		if (!file) {
			return false;
		}

		if (!this.allowed_types.test(file.type)) {
			this.model.warning('Wrong file type. <br/>Please select an image.');
			return true;
		}

		this.model.fileReady(file);
	}
});

