qst.Confirm = Backbone.Model.extend({
	url: '/',
	defaults: {
		url: '/',
		data: {},
		method: 'post',

		event: '',
		eventdata: '',


		content: '?',
		ok_title: 'Ok',
		close_title: 'Cancel',
		success_title: 'Allset',
		error_title: 'Something went wrong...',

		backreload: false,
	},

	initialize: function (options) {
		if(!!options && !!options.url) {
			this.url = options.url;
		}
		this.view = new qst.ConfirmView({model: this});
	},

	fetch: function (options) {
		options = options || {};
		options.type = this.get('method');
		options.data = this.get('data');

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},


	success: function (model, response, options) {
		response = _.toJSON(response);
		if(!response.error) {
			this.trigger('confirm:success');
			if(!!this.get('event')) {
				console.log(this.get('event'), this.get('eventdata'));
				if(!!this.get('eventdata') && !_.isEmpty(_.toJSON(this.get('eventdata')))) {
					qst.trigger(this.get('event'), _.toJSON(this.get('eventdata')));
				} else {
					qst.trigger(this.get('event'));
				}
			}
		} else {
			this.trigger('confirm:error');
		}
	},

	error: function (model, xhr, options) {
		this.trigger('confirm:error')
	},
});