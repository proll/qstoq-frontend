qst.UploadFinish = Backbone.Model.extend({
	url: '/api/photo/upload/',
	defaults: {
		file: '',
		facebook: 	false,
		twitter:  	false,
		vkontakte:  false,
		caption: 	'',
		area: 		'timeline',
		story: 		10,
	},

	initialize: function (options) {
		this.view = new qst.UploadFinishView({model:this});
		this.view.render();
	},

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	upload: function(upload_obj) {
		this.fetch({data: upload_obj});
	},


	success: function(model, response, options) {
		response = _.toJSON(response);
		// this.set(response);
		if(!response.error) {
			this.trigger('finish:success');
		} else {
			this.trigger('finish:error');
		}
		
	},

	progress: function(e) {
		console.log('finish:progress');
		this.trigger('finish:progress', Math.floor((e.loaded / e.total)*100));
	},

	error: function() {
		this.trigger('finish:error');
	},


	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.data = options.data || {};

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger("finish:start");

		var xhr = Backbone.Model.prototype.fetch.call(this, options);
		xhr.onprogress = _.bind(this.progress, this);

		return xhr;
	},
});