qst.Popular = Backbone.Model.extend({
	url: '/api/photo/popular/',
	defaults: {
		sleeped: true,
		offset: 0,
		limit: 7,
		xinfonum: 7,
		source: {
			type: 'pictilegrid',
			keeper: 'qst.app.popular.grid.collection'
		},
	},

	initialize: function (options) {
		this.view = new qst.PopularView({model:this});
		this.first_popular = new qst.Post({
			source: this.get('source'),
			type: 'photo',
			popular: true
		});
		this.on('load:success', this.activateFirstPopular, this);
	},

	fetch: function (options) {
		options = options || {};
		options.type = 'post';
		options.data = {
			offset: this.get('offset'),
			limit: this.get('limit'),
			xinfonum: this.get('xinfonum')
		}

		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger('load:start');

		return Backbone.Model.prototype.fetch.call(this, options);
	},

	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response);
		this.get('photos').first = this.get('photos').list.shift();
		this.get('photos').list[0].second = true;
		this.get('photos').list[1].third = true;

		if(!response.error) {
			this.trigger('load:success');
		} else {
			this.trigger('popular:error');
		}
	},


	error: function (model, xhr, options) {
		this.trigger('popular:error')
	},

	activateFirstPopular: function() {
		var first_popular_data = this.get('photos').first;
		this.first_popular.set('photo', first_popular_data);
		this.first_popular.fetch();

		this.view.addFirstPopular(this.first_popular);
	},

	activate: function() {
		this.set('sleeped', false);
		this.fetch();
	},

	sleep: function() {
		this.set('sleeped', true);
	},

	reset: function () {
		return false;
	},

	remove: function () {
		if(this.first_popular) {
			this.first_popular.remove();
		}
		this.view.reset();
		this.view.remove();
		this.stopListening();
		this.clear({silent: true});
	},
});