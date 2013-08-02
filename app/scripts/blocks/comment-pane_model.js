qst.CommentPane = Backbone.Model.extend({
	url: "/api/photo/comment/add/",
	new_comment: null,
	defaults: {
		offset: 	0,
		limit: 		3,
		order: 		"desc",
		photo_id: 	0,
		
		loading: 	false,
		adding: 	false,
		sleeped: 	true,

		next_limit: 100,
	},

	initialize: function (options) {

		this.collection = new qst.CommentCollection();

		this.collection.on("load:success", function () {
					this.set("offset", this.get("offset") + this.get("limit"));
					this.set("loading", false);
					this.trigger('load:success');
				}, this)
				.on("load:error", function () {
					console.error("comments:load:error")
					this.set("loading", false);
					this.trigger('load:error');
				}, this)
				.on("load:start", function () {
					this.set("loading", true);
				}, this)
				.on("reset", this.resetComments, this);

		this.on("addcomment:start", function () {
				this.set('adding', true);
			},this)
			.on("addcomment:success", function () {
				// TODO - delete hard link
				qst.app.statistic.trackComment();
				this.set('adding', false);
			},this)
			.on("addcomment:error", function () {
				qst.warning('Something went wrong...', 'misc');
				this.removeMyComment();
				this.set('adding', false);
			},this)

		this.view = new qst.CommentPaneView({
			collection: this.collection, 
			model: this
		});

		this.on("needmore", this.needMore, this);

		this.activate();
	},

	resetComments: function  (collection, options) {
		_.each(options.previousModels, function (model, key, list) {
			model.remove();	
		})
		this.collection.more = true;
	},

	needMore: function () {
		if(!this.get("loading") && !this.get("sleeped")) {

			// oldschool hack params compute
			var data = _.extend({}, this.toJSON());

			// case if we want to load more in the second time
			if( data.next_limit != data.limit && data.offset != 0 ) {
				data.limit = data.next_limit;
			}

			data.photo = data.photo_id;
			delete data.photo_id;
			delete data.loading;
			delete data.sleeped;
			delete data.next_limit;

			this.collection.fetch({data: data});
		}
	},

	remove: function () {
		this.collection.reset();

		this.stopListening();
		this.view.remove();
		this.clear({silent: true});

		return false;
	},

	activate: function() {
		this.set("sleeped", false);
		this.trigger("needmore");
		return this;
	},

	sleep: function() {
		this.set("sleeped", true);
		return this;
	},



	// add my new comment
	addMyComment: function(text) {
		if(qst.is_needauth()) {
			return false;
		}

		this.new_comment = new qst.Comment({
			date: (new Date()).getTime()/1000,
			text: text,
			user: qst.app.user.settings.get("user")
		})
		this.collection.unshift(this.new_comment);
		this.addComment(text);
		return this;
	},


	removeMyComment:  function() {
		if(!this.new_comment) {
			return false;
		} else {
			this.new_comment.remove();
			this.collection.shift();
		}
	},

	addComment: function(text) {
		var options = {};
		options.type = "post";
		options.data = options.data || {
			photo: this.get("photo_id"),
			text: text,
		};

		options.success  	= _.bind(this.addSuccess, this);
		options.error  		= _.bind(this.addError, this);

		this.trigger("addcomment:start");

		return Backbone.Model.prototype.fetch.call(this, options);	
	},

	addSuccess: function (model, response, options) {
		response = _.toJSON(response);
		if(!response.error) {
			this.trigger("addcomment:success");
		} else {
			this.trigger("addcomment:error");
		}
	},

	addError: function (model, response, options) {
		this.trigger("addcomment:error")
	},


});