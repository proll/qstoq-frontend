qst.AddDialog = Backbone.Model.extend({
	url: '/api/v1/links/',
	defaults: {
		name: 	'название ссылки',
		url: 	'медиа для продажи',
		price: 	1000,
		description: '',
		active: 1,
		price_pwyw: 0,
	},

	initialize: function (options) {
		this.view = new qst.AddDialogView({
			model: this
		});
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