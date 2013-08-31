qst.PreviewUploadView = Backbone.View.extend({
	template: "blocks/preview-upload",
	className: "preview-upload",

	events: {
		'change #file_uploader_preview': 'upload',
		'click .preview-upload__delete': 'delete',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:uri', this.changeURL, this);

		this.model.on("delete:success", this.togglePreviewOff, this);
		this.render();
	},

	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);


		this.lazy_loader = new qst.LazyLoader();

		this.$img =  				this.$el.find('.preview-upload__img');
		this.$input_file =  		this.$el.find('input[name=file_preview]');
		this.$input_file_process = 	this.$el.find('.preview-upload__inp-file-process');

		this.changeURL(this.model, this.model.get('uri'));

		this.delegateEvents();
	},


	changeURL: function(model, uri) {
		if(!!uri) {
			this.$img.data('orig', uri);
			this.lazy_loader.load(this.$el);
			this.togglePreviewOn();
		} else {
			this.togglePreviewOff();
		}
	},

	togglePreviewOff: function() {
		if(this.$img) {
			this.$img.attr('src', '/images_static/empty.png');
		}
		this.$el.toggleClass('empty', true);
	},

	togglePreviewOn: function() {
		this.$el.toggleClass('empty', false);
	},

	upload: function(e) {
		var that = this;
		$.each(e.target.files, function(i, file){
			that.model.upload(file);
		});
	},

	delete: function(e) {
		this.model.set('uri', '');
		this.model.delete();
		return false;
	},

	updateFileProcess: function(part) {
		this.$input_file_process.width(Math.round(part*100) + '%');
	},


	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
			this.togglePreviewOff();
		} else {
			this.delegateEvents();
		}
	},
});

