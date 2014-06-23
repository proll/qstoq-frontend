qst.Feedback = Backbone.Model.extend({
	url: '/v1/feedback/',
	defaults: {
		email: '',
		phone: '',
		name: '',
	},

	initialize: function (){
		this.view = new qst.FeedbackView({model: this});
	},

	fetch: function(data) {
		var options = {};
		options.url = this.url;
		options.type = 'post';
		options.data = options.data || data;
		options.data.message = 'Connect ' + options.data.name;
		delete options.data.name;

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function(user_obj) {
		this.trigger("success", user_obj);
		qst.app.statistic.trackFeedback();
	},

	error:function (err) {
		this.trigger("error",err);
	},

});