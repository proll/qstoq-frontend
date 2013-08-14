qst.AddDialog = Backbone.Model.extend({
	url: '/api/v1/links/',
	defaults: {
		name: 	'название ссылки',
		url: 	'медиа для продажи',
		price: 	1000,
		description: '',
		active: 1,
		price_pwyw: 0,
		state: '',// link / nothing / file
		sleeped: false,
	},

	initialize: function (options) {
		this.view = new qst.AddDialogView({
			model: this
		});

		this.set('state', 'link');
	},

	fetch: function (options) {
		var data = this.toJSON();
		// поддержка формата цен на серверной стороне
		if(data.price_pwyw) {
			data.price+= '+';
		}
		delete data.price_pwyw;

		options = options || {};
		options.type = 'post';
		options.data = options.data || data;

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		if(response.success) {
			this.trigger('add:success');
		} else {
			this.trigger('add:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('add:error')
	},

	upload: function(file) {
		if(file) {
			this.view.updateFileName(file.name);

			var that = this,
				data = new FormData();
				data.append('input_file', file);

			// the $.ajax() method and the like doesn’t allow for it and 
			// I really want to display an upload progress bar, dammit!
			// course of this we have to use XHR
			var xhr = new XMLHttpRequest();

			xhr.upload.addEventListener('progress',function(ev){
				that.view.updateFileProcess(ev.loaded/ev.total);
			}, false);

			xhr.onreadystatechange = function(ev){
				if (xhr.readyState == 4) {
					if(xhr.status == 200) {
						var data = this.response;
						console.log(data);
						if (typeof(data) == 'string') {
						  	data = $.parseJSON(data);
						}
						if(!!data.success) {
							// $new_item.data("image", data.image);
							console.log('data.success');
						} else if (!!data.error) {
							console.log(data.error);
						} else {
							$new_item.fadeOut();
						}
					} else {
						console.log(file.name + ":" + "ERROR: " + xhr.readyState + ":" + xhr.status);
						// $new_item.fadeOut();
					}
				}
			};

			xhr.open('POST', '/v1/medias/?token='+qst.user.get("token"), true);
			xhr.send(data);
		}
	},

	reset: function () {
		// this.trigger("needmore");
		return false;
	},


	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});