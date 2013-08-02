qst.UploadImageView = Backbone.View.extend({
	template: "blocks/upload-image",
	tagName: "div",
	className: "upload__image-row",

	// events: {
	// 	'click .upload__share-item>a': 'toggleShare',
	// },

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.$image_original = this.$el.find('.upload__image-original');
		this.$image_editor   = this.$el.find('.upload__image');
		this.image_editor_context = this.$image_editor.get(0).getContext("2d");

		this.model.on('crop:reposition', this.updateImagePosition, this);

		this.delegateEvents();
	},


	updateImageOriginal: function(img_data) {
		var that = this;

		this.$image_original.on('load', function (e) {
			// default sets for the image dimantions
			var original_dimentions = {};
			if (this.width >= this.height) {
				original_dimentions = {
					original_side: this.height,
					original_top: 0,
					original_left: Math.round((this.width - this.height)/2),
					original_w: this.width,
					original_h: this.height,
				};
			} else {
				original_dimentions = {
					original_side: this.width,
					original_top: Math.round((this.height - this.width)/2),
					original_left: 0,
					original_w: this.width,
					original_h: this.height,
				};
			}

			that.model.set(original_dimentions);
			// self.cropImg(0, 0, this.width, this.height);
			that.clearImageEditor();
			that.updateImageEditor(this);
		});
		this.$image_original.attr('src', img_data);
	},


	updateImagePosition: function (pos_obj) {
		this.model.set({
			original_top: pos_obj.top,
			original_left: pos_obj.left
		});
		this.clearImageEditor();
		this.updateImageEditor(this.$image_original.get(0));
	},


	clearImageEditor: function() {
		this.image_editor_context.clearRect(
			0, 
			0, 
			this.model.get('destination_w'), 
			this.model.get('destination_h')
		);
	},

	updateImageEditor: function(image) {

		this.image_editor_context.drawImage(
			image, 

			this.model.get('original_left'), 
			this.model.get('original_top'), 
			this.model.get('original_side'), 
			this.model.get('original_side'), 

			0, 
			0, 
			this.model.get('destination_w'), 
			this.model.get('destination_h')
		);
	}
});

