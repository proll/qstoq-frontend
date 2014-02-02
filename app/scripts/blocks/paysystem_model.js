qst.PaySystem = Backbone.Model.extend({
	
	url: '/v1/users/link/',
	
	defaults: {
		user: 0,

		loading: 	false,
		sleeped: 	false,

		settings: {},

		paysys: [
			{
				key: 'assist',
				icons: ['assist'],
				toggle: false
			},
			{
				key: 'paymaster',
				icons: ['paymaster'],
				toggle: false
			},
			{
				key: 'robokassa',
				icons: ['robokassa'],
				toggle: false
			},
			{
				key: 'qiwi',
				icons: ['qiwi'],
				toggle: false
			},
			{
				key: 'webmoney_r',
				icons: ['webmoney'],
				toggle: false
			},
			{
				key: 'webmoney_z',
				icons: ['webmoney'],
				toggle: false
			},
			{
				key: 'webmoney_e',
				icons: ['webmoney'],
				toggle: false
			},
			{
				key: 'paypal',
				icons: ['paypal'],
				toggle: false
			},
			// {
			// 	key: 'bitcoin',
			// 	icons: ['bitcoin'],
			// 	toggle: false
			// },
		],
	},

	initialize: function (options) {
		this.view = new qst.PaySystemView({
			model: this
		});
	},

	reset: function () {
		this.set("offset", this.defaults.offset);
		this.trigger("needmore");
		return false;
	},


	activate: function(options) {
		this.set(options);
		if(!!options && options.settings) {
			var paysys_connected = options.settings.paysys,
				cnt = 0,
				active = 0,
				that = this;
			_.forEach(this.get('paysys'), function(val, i) {
				if(paysys_connected[val.key]) {
					cnt++;
					that.get('paysys')[i].toggle = parseInt(paysys_connected[val.key].active);
					if(that.get('paysys')[i].toggle) {
						active++;	
					}
				}
			})

			if(cnt === 0) {
				this.set('state', 'no');
			} else if(active === 1) {
				this.set('state', 'one');
			}

			if(cnt !== 0 && active===0) {
				this.set('state', 'noactive');
			}

			this.trigger("ready");
		} else {
			this.showError(qst.localize('Something went wrong...', 'misc'));	
		}
	},


	toggleSystem: function (pay_system) {
		// DIRTY
		var system = pay_system;
		if(system.indexOf('webmoney') !== -1) {
			system = 'webmoney';
		}

		var paysys_connected = this.get('settings').paysys
		if(!paysys_connected[pay_system]) {
			return false;
		} else {
			// invert active flag
			paysys_connected[pay_system].active = !parseInt(paysys_connected[pay_system].active)+0;
		}

		var options = options || {};
		options.url = this.url + system;
		options.type = 'post';
		options.data = paysys_connected[pay_system] || {};
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('toggle:start');
		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response.result);
		if(response.success) {
			this.trigger('toggle:success', response.result.user);
		} else {
			this.trigger('toggle:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('toggle:error');
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});