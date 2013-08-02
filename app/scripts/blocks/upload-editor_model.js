qst.UploadEditor = Backbone.Model.extend({
	image: null,
	filters: null,
	crop: null,
	caption: null,
	story_menu: null,
	share: null,

	defaults: {
		file: '',
		story: 'whole',
		category: 'whole',
	},

	initialize: function (options) {
		this.view = new qst.UploadEditorView({ model:this});
		this.render(options);
	},

	render: function(options) {
		this.view.render();

		this.image = new qst.UploadImage();
		this.view.addImage(this.image);

		this.filters = new qst.UploadFilters();
		this.view.addFilters(this.filters);

		this.crop = new qst.UploadCrop();
		this.view.addCrop(this.crop);

		if(this.get('category') != 'avatar') {
			this.caption = new qst.UploadCaption();
			this.view.addCaption(this.caption);

			this.story_menu = new qst.StoryMenu(_.extend(options, {
				root_path: '/add',
				event_driven: true,
				with_whole: false,
			}));
			this.story_menu.defaults.current_name = 'Choose category';
			this.story_menu.fetch();
			this.view.addStoryMenu(this.story_menu);
			this.story_menu.activate();
			this.story_menu.on('change', this.syncStoryParams, this);

			this.share = new qst.UploadShare(options);
			this.view.addShare(this.share);
		}



		this.crop.on('crop:reposition', function (pos_obj) {
			console.log(pos_obj);
			this.trigger('crop:reposition', pos_obj);
			this.image.updateImagePosition(pos_obj);
			this.filters.normal();
		}, this)

		this.crop.on('crop:close', function () {
			this.trigger('crop:close');
		}, this)
	},


	updateImage: function(img_d) {
		this.image.updateImage(img_d);

		this.crop.updateImage(img_d);
		this.filters.set('image', this.image.view.$image_editor.get(0));
	},

	remove: function () {
		this.image.remove();
		this.crop.remove();
		this.filters.remove();
		if(this.caption) {
			this.caption.remove();
		}
		if(this.story_menu) {
			this.story_menu.remove();
		}
		if(this.share) {
			this.share.remove();
		}

		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	warning: function(phrase_id) {
		qst.warning('upload', phrase_id);
	},

	syncStoryParams: function() {
		this.set({
			story: 		this.story_menu.get('story'),
		})
	},

	publish: function() {
		var data = !!this.share ? this.share.getShares() : {},
			story = this.get('story'),
			category = this.get('category');

		data = _.extend(data, {
			caption: 	!!this.caption ? this.caption.getCaption() : '',
			area: 		'timeline',
			file: 		this.filters.getResultBase64() || this.image.getResultBase64(),
		});

		if(category == 'avatar') {
			data.area = 'avatar';
		} else if(!!story && story != this.defaults.story) {
			data.area = 'story';
			data.story = story;
		}



		this.trigger('editor:publish', data);
		// publish hallsetted data
		// this.trigger('file:ready', file);
	}
});