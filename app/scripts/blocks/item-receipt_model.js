qst.ItemReceipt = Backbone.Model.extend({
	
	url: 'http://api.qstoq.ru/v1/medias/',
	
	defaults: {
		receipt_comment_id: 0,
		receipt_comment: '',

		amount: 100,
		link_id: 0,

		name: 			'name',
		currency: 'rur',
		description: 	'desc',
		url_short: 		'http://s.qstoq.ru/b842',
		url: 			'http://wikimart.ru',
		external: 		1,
		price: 			0,
		price_pwyw: 	0,
		ship_limit: 	0
	},

	initialize: function (options) {
		this.view = new qst.ItemReceiptView({
			model:this
		});
		this.on('change:receipt_comment', this.saveReceipt, this);
	},


	saveReceipt: function(model, value) {
		// поддержка формата цен на серверной стороне
		var data = this.toJSON();

		options = {};
		if(!!$.trim(value)) {
			options.url = this.url + '?identifier=receipt_comment&link_id=' + this.get('link_id');
			options.type = 'post';
			options.data = options.data || {
				data: 		value,
			};
		} else {
			options.url = this.url + this.get('receipt_comment_id');
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

	activate: function() {
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});