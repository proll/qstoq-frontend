qst.CommentPaneView = Backbone.View.extend({
	tagName: 'div',
	className: 'comment-pane',
	template: 'blocks/comment-pane',

	events: {
		'click .comment-pane__more': 'moreClick',
		'click .comment-pane__add':  'inputFocus',
		'keyup textarea':  		 'keypress'
	},

	initialize: function(options){
		this.collection = options.collection;
		this.collection.on('add', 			this.addComment, this)
						.on('load:start', 	this.showStartLoad, this)
						.on('load:success', this.hideStartLoad, this)
						.on('load:error', 	this.hideStartLoad, this);

		this.model = options.model;
		this.model.on("addcomment:error", this.removeMyComment, this);

		this.render();
	},

	render: function(){
		var template = qst.Templates.get(this.template);
		this.$el.html(template(this.model.toJSON()));

		this.$cont = 	this.$el.find('.comment-pane__container');
		this.$spinner = this.$el.find('.comment-pane__spinner');
		this.$more =	this.$el.find('.comment-pane__more');
		this.$total =	this.$el.find('.comment-pane__total');

		this.showStartLoad();

		this.$input = this.$el.find('textarea');
		this.$input.autosize();
	},

	keypress: function (e){
		e.stopPropagation();
		if (e.keyCode === 13 && !e.altKey){
			this.addMyComment();
			return false;
		}
	},

	addComment: function (model, collection, options) {
		if( !!options && options.at === 0 ) {
			this.$cont.append(model.view.$el);
		} else {
			this.$cont.prepend(model.view.$el);
		}
	},



	addMyComment: function() {
		var text = $.trim(this.$input.val());
		if(!text || this.model.get('adding')) {
			return false;
		}

		var can_comment = this.model.addMyComment( text );
		if(!can_comment) {
			return false;
		}

		// clear textarea
		this.$input.val('');
		this.$input.blur();
		this.$input.trigger('autosize');

		this.incTotal();
	},

	incTotal: function () {
		// increment comment counter
		var total = this.$total.data('total') || 0;
		total++;
		this.$total.data('total', total);
		this.$el.toggleClass('comment-pane_not_empty', true);
		this.$el.toggleClass('comment-pane_my-comment', true);

		this.$total.text(total + ' ' + Handlebars.helpers._plural(total, this.$total.data('decl')))
	},

	removeMyComment: function() {
		this.decTotal();
	},

	decTotal: function () {
		// decrement comment counter
		var total = this.$total.data('total') || 0;
		total--;
		this.$total.data('total', total);
		this.$el.toggleClass('comment-pane_not_empty', !(total == 0));
		this.$el.toggleClass('comment-pane_my-comment', false);


		this.$total.text(total + ' ' + Handlebars.helpers._plural(total, this.$total.data('decl')))
	},

	inputFocus: function() {
		this.$input.focus();
		return this;
	},

	showStartLoad: function () {
		this.$el.toggleClass('comment-pane_loading', true);
	},

	hideStartLoad: function () {

		if(!this.collection.length) {
			this.$el.toggleClass('comment-pane_not_empty', false);
		} else {
			this.$el.toggleClass('comment-pane_not_empty', true);
		}

		if(this.collection.more) {
			this.$el.toggleClass('comment-pane_can-more', true);
		} else {
			this.$el.toggleClass('comment-pane_can-more', false);
		}

		this.$el.toggleClass('comment-pane_loading', false);
	},

	moreClick: function() {
		this.model.trigger('needmore');
	},

	remove: function() {
		this.stopListening();
		this.$el.remove();
	}
});