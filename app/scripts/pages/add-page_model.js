qst.AddPage = qst.Page.extend({
	visited: false,
	in_popup: false,

	defaults: {
	},

	initialize: function(options){
		options 		= options || {};
	},
	render: function(options) {
		this.visited = true;
		this.view = new qst.AddPageView({
			model: this, 
			template:"pages/add-page"
		});


		this.upload = new qst.Upload(options);

		this.in_popup = options.in_popup = !!options.in_popup;
		this.view.render(options.in_popup);

		this.upload.activate();
		this.view.addUpload(this.upload);


		this.upload.on('needclose', this.close, this);
	},

	close: function () {
		if(this.in_popup) {
			qst.trigger("historyback");
			window.location.reload();
		} else {
			qst.navigate('/photofeed', {trigger: true});
		}
	},

	sleep: function () {
		this.remove();
	},

	remove: function () {
		if(this.upload) {
			this.upload.remove();
		}
		if(this.view) {
			this.view.remove();
		}
	}
});