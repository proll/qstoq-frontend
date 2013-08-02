qst.UploadImage = Backbone.Model.extend({
	image_data: '',

	defaults: {
		editor_w: 510,
		editor_h: 510,

		destination_w: 1000,
		destination_h: 1000,

		original_w: 0,
		original_h: 0,
		original_side: 0,
		original_top: 0,
		original_left: 0,
	},

	initialize: function (options) {
		this.view = new qst.UploadImageView({model:this});
		this.view.render();
	},

	updateImage: function(img_data) {
		this.image_data = img_data;
		this.view.updateImageOriginal(img_data);
	},

	updateImagePosition: function(pos_obj) {
		this.trigger('crop:reposition', pos_obj);
	},

	getResultBase64: function() {
		return this.view.$image_editor.get(0).toDataURL("image/jpeg");
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},
});