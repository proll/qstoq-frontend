qst.PaySystemAdd = Backbone.Model.extend({
	url: 'http://api.qstoq.ru/v1/users/link/',
	defaults: {
		system: 'qiwi',
	},

	initialize: function (options) {
		this.view = new qst.PaySystemAddView({model:this});
	},

	activate: function (options) {
		if(options) this.set(options);
		this.view.render();
	},

	save: function (options) {
		var system = this.get('system');
		if(system.indexOf('webmoney') !== -1) {
			system = 'webmoney';
		}

		options = options || {};
		options.url = this.url + system;
		options.type = 'post';
		options.data = options.data || {};
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('save:start');
		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response.result);
		if(response.success) {
			// statistics only for the new paysystem connection only
			var system = this.get('system');
			if(!this.get('settings').paysys || !this.get('settings').paysys[system]) {
				qst.app.statistic.trackPSConnect(system);
			}
			this.trigger('save:success', response.result.user);
		} else {
			this.trigger('save:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('save:error');
	},	

	remove: function () {
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},
});