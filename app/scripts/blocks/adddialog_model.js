qst.AddDialog = Backbone.Model.extend({
	url: '/v1/links/',
	defaults: {
		name: 	'название ссылки',
		url: 	'медиа для продажи',
		price: 	1000,
		description: '',
		price_pwyw: 0,
		active: 1,

		user: '',
		state: '',// link / nothing / file
		sleeped: false,
	},

	loading: false,

	initialize: function (options) {
		this.view = new qst.AddDialogView({
			model: this
		});

		this.set('state', 'link');
	},

	fetch: function (options) {
		if(this.loading) return;
		this.loading = true;

		var data = this.toJSON();

		if($.trim(data.description) === '') {
			delete data.description;
		}

		if($.trim(data.url) === '') {
			delete data.url;
		}

		delete data.active;
		delete data.sleeped;
		delete data.state;
		delete data.user;

		options = options || {};
		options.type = 'post';
		options.data = options.data || data;

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		this.loading = false;
		response = _.toJSON(response);
		if(response.success) {
			this.trigger('add:success', response.result);
			qst.app.statistic.trackProductCreate(this.get('name'));
		} else {
			this.trigger('add:error');
		}
	},

	error: function (model, xhr, options) {
		this.loading = false;
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