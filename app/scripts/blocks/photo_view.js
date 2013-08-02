qst.PhotoView = Backbone.View.extend({
	template: "blocks/photo_pre",
	tagName: "div",
	className: "photo-row",
	$image: null,
	image: null,

	events: {
		"click .photo__vote": "vote",
		"click .photo__pic-tile": "picClick"
	},

	initialize: function(options){
		this.template_pre = 'blocks/photo__pre';
		this.template_pre = qst.Templates.get(this.template_pre);

		this.template_story = 'blocks/photo__story-line';
		this.template_story = qst.Templates.get(this.template_story);

		this.template_after = 'blocks/photo__after';
		if(_.isPhone()) {
			this.template_after = 'blocks/photo__after_phone';
		}
		this.template_after = qst.Templates.get(this.template_after);

		this.model.on("load:start", this.preRender, this);
		this.model.on("load:success", this.render, this);
		this.model.on("change:sleeped", this.sleep, this);
		this.model.on("update:vote", this.updateVote, this);
	},

	preRender: function() {
		var template_pre = this.template_pre(this.model.toJSON());
		this.$el.html(template_pre);
		this.lazy_loader = new qst.LazyLoader();
		this.lazy_loader.load(this.$el);
		this.lazy_loader.on('load:error', function () {
			this.trigger("photo:loaderror");
		}. this)
	},

	render: function(){
		var template_story = this.template_story(this.model.toJSON()),
			template_after = this.template_after(this.model.toJSON());

		// very careful insert part of photo templates
		this.$el.find('.photo__pic').append(template_story);
		this.$el.append(template_after);

		this.$vote = this.$el.find(".photo__vote");

		this.delegateEvents();
	},


	sleep: function(model, value, options) {
		if(value) {
			this.remove();
		}
	},

	remove: function(model, value, options) {
		if (this.lazy_loader) {
			this.lazy_loader.off();
		}
		this.undelegateEvents();
		// this.$el.html("");
	},

	picClick: function(e) {
		this.model.trigger('photo:click');
		return true;
	},

	vote: function() {
		var wasvote = parseInt(this.model.get("photo").wasvote) || 0;

		if(!wasvote) {
			if(!this.model.addVote()) {
				return false;
			}
			this.$vote.toggleClass("active", true);
		} else {
			this.$vote.toggleClass("active", false);
			this.model.removeVote();
		}
	},

	addLikers: function(likers_model) {
		this.$el.find(".photo-likers__cont").append(likers_model.view.$el);
	},

	addComments: function(comments_model) {
		this.$el.find(".photo-comment-pane__cont").append(comments_model.view.$el);
	},

	addShare: function(share_model) {
		this.$el.find(".photo-share__cont").append(share_model.view.$el);
	},

	updateVote: function(options) {

		if(!!options) {
			this.$vote
				.find(".photo__vote-title")
					.text(options.vote_count);
		}
	}

});

