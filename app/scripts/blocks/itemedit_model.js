qst.ItemEdit = Backbone.Model.extend({
	
	url: '/v1/links/',
	url_media: '/v1/medias/',
	preview: null,
	
	defaults: {
		state: '',// link / nothing / file
		filename: '',
		// "id": XXX,
		// "name": "Pencil Icon PSD",
		// "description": "I made this for fun."
		// "price": 100,
		// "price_pwyw": 0,
		// "currency": "rur"
		// "url_short": "https://host.ru/l/XXX"
		// "url": "http://somelink",
		// "url_qr": "https://host.ru/assets/qr-link-XXX.png",
		// "counter_view": 25, // количество просмотров
		// "counter_ship": 19, // количество покупок
		// "active": 1
		// "user": {
		// 		"name": "some",
		// 		"id": <user_id>,
		// },
		receipt_comment: ''
	},

	initialize: function (options) {
		this.view = new qst.ItemEditView({
			model:this
		});

		this.on('change:receipt_comment', this.saveReceipt, this);
	},

	deleteItem: function() {
		var opts = {
			url: 			'/v1/links/' + this.get('id'),
			method: 		'delete',
			content: 		qst.localize('Do you want to delete this item?','itemlist'),
			ok_title: 		qst.localize('Ok','itemlist'),
			close_title: 	qst.localize('Cancel','itemlist'),
			success_title: 	qst.localize('Item deleted.','itemlist'),
			error_title: 	qst.localize('Something went wrong...','itemlist'),
			event: 			'link:delete',
			eventdata: 		{id: this.get('id')},
		}
		var confirm = new qst.Confirm(opts);
	},

	init: function() {
		var link = this.get('url');
		if(_.isEmpty(link)) {
			this.set('state', 'nothing');
		} else if (!parseInt(this.get('external'))) {
			this.set('state', 'file');

			// TODO надо переделать на хранимое имя файла
			var file = this.get('url'),
				file_parts = file.split('/');
			file = file_parts[file_parts.length - 1];
			this.set('filename', file);

		} else {
			this.set('state', 'link');
		}

		var opts = {},
			preview = this.get('preview'),
			receipt_obj = false,
			that = this;

		_.forEach(preview, function(el, index) {
			if(el.identifier === 'receipt_comment') {
				receipt_obj = el;
			}
		})
		if(!!receipt_obj
			&& !!receipt_obj.data) {
			this.set('receipt_comment_id', receipt_obj.id);
			this.set('receipt_comment', receipt_obj.data, {silent: true});
		} 

		this.set('price_pwyw', parseInt(this.get('price_pwyw')));
		this.set('url_short_path', this.get('url_short').split('http://')[1]);

	},

	initAfterRender: function() {
		var opts = {},
			preview = this.get('preview'),
			preview_obj = false,
			that = this;
		_.forEach(preview, function(el, index) {
			if(el.identifier === 'preview_image') {
				preview_obj = el;
			}
		})
		if(!!preview_obj
			&& !!preview_obj.data) {
			opts = {
				link_id: this.get('id'),
				data: preview_obj.data,
				id: preview_obj.id,
			}
		} else {
			opts = {
				link_id: this.get('id')
			}
		}

		// console.log(opts)
		this.preview = new qst.PreviewUpload(opts)
		this.view.addPreviewUpload(this.preview);
	},

	fetch: function (options) {
		options = options || {};
		options.url = this.url + this.get('id');
		options.type = 'get';
		options.data = options.data || {};
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response.result);

		if(response.success) {
			this.init();
			this.trigger('load:success');
			this.initAfterRender();
		} else {
			this.trigger('load:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('load:error');
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
						if (typeof(data) == 'string') {
						  	data = $.parseJSON(data);
						}
						if(!!data.success) {
							that.view.updateFileProcess(1);
							that.set('url', data.result.data)
						} else {
							that.trigger('add:error');
						}
					} else {
						console.log(file.name + ":" + "ERROR: " + xhr.readyState + ":" + xhr.status);
					}
				}
			};
			xhr.open('POST', this.url_media + '?token='+qst.user.get("token"), true);
			xhr.send(data);
		}
	},

	saveReceipt: function(model, value) {
		// поддержка формата цен на серверной стороне
		var data = this.toJSON();

		options = {};
		if(!!$.trim(value)) {
			options.url = this.url_media + '?identifier=receipt_comment&link_id=' + this.get('id');
			options.type = 'post';
			options.data = options.data || {
				data: 		value,
			};
		} else {
			options.url = this.url_media + this.get('receipt_comment_id');
			options.type = 'delete';
			options.data = {}
		}
		options.success  	= _.bind(this.saveReceiptSuccess, this);
		options.error  		= _.bind(this.saveReceiptError, this);

		this.trigger('savereceipt:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},


	saveReceiptSuccess: function (model, response, options) {
		response = _.toJSON(response);
		
		if(response.success) {
			if(!!response.result && !!response.result.id) {
				this.set('receipt_comment_id', response.result.id);
			}
			this.trigger('savereceipt:success');
		} else {
			this.trigger('savereceipt:error');
		}
	},

	saveReceiptError: function (model, xhr, options) {
		this.trigger('savereceipt:error');
	},

	save: function (options) {
		// поддержка формата цен на серверной стороне
		var data = this.toJSON();

		options = options || {};
		options.url = this.url + this.get('id');
		options.type = 'post';
		options.data = options.data || {
			active: 		data.active,
			name: 			data.name,
			description: 	data.description,
			url: 			data.url,
			price: 			data.price,
			price_pwyw: 	data.price_pwyw,
			ship_limit: 	data.ship_limit,
		};
		options.success  	= _.bind(this.saveSuccess, this);
		options.error  		= _.bind(this.saveError, this);

		this.trigger('save:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	saveSuccess: function (model, response, options) {
		response = _.toJSON(response);
		
		if(response.success) {
			this.trigger('save:success');
		} else {
			this.trigger('save:error');
		}
	},

	saveError: function (model, xhr, options) {
		this.trigger('save:error');
	},


	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
		if(this.preview) {
			this.preview.sleep();
		}
	},

});