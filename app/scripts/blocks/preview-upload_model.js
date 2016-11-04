qst.PreviewUpload = Backbone.Model.extend({
	
	url: 'http://api.qstoq.ru/v1/medias/',
	
	defaults: {
		link_id: 0,
		data: '',
		// "id": XXX,
		// "data_type": "file", // тип данных
		// "data": "http://site.com/files/<user_id>/kdhkjhwe876dsa6fjhahg43.ext", // WEB-линк до файла
		// "size": SSSSSS, // размер файла в байтах
		// "link_id": 0,
		// "identifier": 'some_var_name',
		// "user": {
		// 	"id": <user_id>,
		// 	"currency": "XXX"
		// }
	},

	initialize: function (options) {
		this.view = new qst.PreviewUploadView({
			model:this
		});

	},

	delet: function() {
		var options = {};
		options.url = this.url + this.get('id');
		options.type = 'delete';
		options.data = options.data || {
			link_id: this.get('link_id')
		};
		options.success  	= _.bind(this.successDelete, this);
		options.error  		= _.bind(this.errorDelete, this);

		this.trigger('delete:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	successDelete: function (model, response, options) {
		response = _.toJSON(response);

		if(response.success) {
			this.trigger('delete:success');
		} else {
			this.trigger('delete:error');
		}
	},

	errorDelete: function (model, xhr, options) {
		this.trigger('delete:error');
	},


	upload: function(file) {
		if(file) {
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
						if (typeof(data) == 'string') {
						  	data = $.parseJSON(data);
						}
						if(!!data.success) {
							that.view.updateFileProcess(1);
							that.set(data.result)
						} else {
							that.trigger('add:error');
						}
					} else {
						console.log(file.name + ":" + "ERROR: " + xhr.readyState + ":" + xhr.status);
					}
				}
			};

			var credentials = {
				token: 		qst.user.get("token"),
				link_id: 	this.get('link_id'),
				identifier: 'preview_image'
			};

			xhr.open('POST', this.url + '?' + _.map(credentials, function(value, key){ return key+"="+value}).join("&"), true);
			xhr.send(data);
		}
	},


	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});