qst.UploadCrop = Backbone.Model.extend({
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

		new_original_top: 0,
		new_original_left: 0,

		horizontal: true,
		ratio: 1,
	},

	initialize: function (options) {
		this.view = new qst.UploadCropView({model:this});
		this.view.render();
	},

	updateImage: function(img_data) {
		this.image_data = img_data;
		this.view.updateImage(img_data);
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},
});