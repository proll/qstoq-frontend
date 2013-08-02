qst.Upload = Backbone.Model.extend({
	file_reader: null,
	close_interval: 0,

	defaults: {
		story: "whole",
		category: "whole",
	},

	initialize: function (options) {
		this.view = new qst.UploadView({model:this});
		this.render();
	},

	render: function() {
		this.view.render();

		this.source = new qst.UploadSource();
		this.view.addSource(this.source);
		this.view.showSource();

		this.source.view.openFile();
		this.source.on('file:ready', this.loadFile, this);

		this.file_reader = new FileReader();
		this.file_reader.onloadend = 
			_.bind(this.updateFile, this);


		this.editor = new qst.UploadEditor(this.toJSON());
		this.view.addEditor(this.editor);
		this.editor.on('editor:publish', this.finish, this);

		this.finish = new qst.UploadFinish();
		this.view.addFinish(this.finish);
		this.finish.on('finish:success finish:error', this.delayedClose, this);
	},

	activate: function() {
		this.trigger('upload:ready');
	},

	loadFile: function(file) {
		this.file_reader.readAsDataURL(file);
	},

	updateFile: function(e) {
		this.view.showEditor();
		this.editor.updateImage(e.target.result);
	},

	finish: function(upload_obj) {
		this.view.showFinish();
		this.finish.upload(upload_obj);
	},


	delayedClose: function() {
		var that = this;
		clearInterval(this.close_interval);
		this.close_interval = setTimeout(function() {
			that.close();
		}, 1500);
	},

	close: function() {
		this.trigger('needclose');
	},

	remove: function () {
		this.source.remove();
		this.editor.remove();
		this.finish.remove();

		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},
});