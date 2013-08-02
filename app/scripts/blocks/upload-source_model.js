qst.UploadSource = Backbone.Model.extend({
	defaults: {
	},

	initialize: function (options) {
		this.view = new qst.UploadSourceView({model:this});
		this.view.render();
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	warning: function(phrase) {
		qst.warning(phrase, 'upload');
	},

	fileReady: function(file) {
		this.trigger('file:ready', file);
	}
});