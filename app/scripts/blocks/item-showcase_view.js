// 4future showcase to module
qst.ItemShowcaseView = Backbone.View.extend({
	template: "blocks/item-showcase",
	className: "item-showcase",

	events: {
		'click .showcase__share-itm-a': 'clickShare',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on('change', this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.render();

		this.lazy_loader = new qst.LazyLoader();
	},

	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$showcase = this.$el.find('.showcase__form');
		this.$showcase_img = this.$showcase.find('.showcase__form__img');

		this.delegateEvents();
	},


	clickShare: function(e) {
		var social = $(e.currentTarget).attr('href'),
			url = "http://api.addthis.com/oexchange/0.8/forward/" + social + "/offer?"
			+"url=" + this.model.get('url_short')
			+"&title=" + encodeURIComponent(this.model.get('name'))
			+"&description=" + encodeURIComponent(this.model.get('description'))
			+"&pubid=prolll"
			+"&text=" + encodeURIComponent(this.model.get('description'))
			+"&via=qstoq";
		_.openWindow3(url, social, 480, 360);

		return false;
	},

	updateShowcasePreview: function(model, uri) {
		// console.log(model, uri);
		if(!!uri) {
			this.$showcase_img.data('orig', uri);
			this.lazy_loader.load(this.$showcase);
			this.togglePreviewOn();
		} else {
			this.togglePreviewOff();
		}
	},

	togglePreviewOff: function() {
		if(this.$showcase_img) {
			this.$showcase_img.attr('src', '/images_static/empty.png');
		}
		this.$showcase.toggleClass('empty', true);
	},

	togglePreviewOn: function() {
		this.$showcase.toggleClass('empty', false);
	},


	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
		} else {
			this.delegateEvents();
		}
	},
});

