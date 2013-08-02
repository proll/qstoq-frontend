qst.PhotoPage = qst.Page.extend({
	photo_collection: null,
	photo_block_collection: null,
	has_context: false,

	visited: false,
	in_popup: false,

	defaults: {
		loading: false,

		photo_id: 0,

		context: {},
	},

	initialize: function(options){
		options 		= options || {};
		if(!!options.photo_id) {
			options.photo_id = parseInt(options.photo_id);
		}
	},
	render: function(options) {
		if(!!options.photo_id) {
			options.photo_id = parseInt(options.photo_id);
		}

		this.set(options);
		this.visited = true;


		var context = this.get('context');
		if(!_.isEmpty(context) && !!context.keeper) {
			// EVIL
			if(context.type === 'pictilegrid') {
				this.photo_collection 	= eval(context.keeper);
			} else {
				this.photo_collection 	= context.keeper.toString().split(',');
			}

			if(this.photo_collection && this.photo_collection.length > 1) {
				this.set('has_context', true);
			} else {
				this.set('has_context', false);
			}
		} else {
			this.set('has_context', false);
		}

		options.in_popup = !!options.in_popup;

		this.view = new qst.PhotoPageView({
			model: this, 
			template:"pages/photo-page"
		});


		

		if(!this.get('has_context')) {
			this.view.render(options.in_popup, false);

			this.photo = new qst.Photo(options);
			this.view.addPhoto(this.photo);

		} else {
			this.view.render(options.in_popup, true);

			this.photo = new qst.Photo(options);
			this.view.addPhoto(this.photo);

			if(!!this.photo_collection && this.photo_collection.on) {
				this.photo_collection
					.on("load:success", this.successLoadContext, this)
					.on("load:error", function () {
						console.error("photo_collection:load:error")
						this.set("loading", false);
					}, this)
					.on("load:start", function () {
						this.set("loading", true);
					}, this)
			}

			this.on('previous', this.previous, this);
			this.photo.on('photo:click', this.next, this);
		}
		this.photo.on('load:start', function() {this.trigger('photo:preready')}, this);
		this.photo.on('photo:ready', function(){this.trigger('photo:ready')}, this);
		this.photo.activate();
	},


	successLoadContext: function() {
		this.set("loading", false);
	},


	previous: function() {
		console.log('previous photo');
		this.step('previous');
	},

	step: function(direction) {
		if(!this.get('loading')) {
			var context = this.get('context');
			if(context.type === 'pictilegrid') {
				var photo_index = -1,
					photo_id = parseInt(this.get('photo_id')),
					current_model = this.photo_collection.filter(function(model, index) {
						if(model.get('id') == photo_id) {
							photo_index = index;
							return true;
						} else {
							return false;
						}
					});
				if(photo_index !== -1) {
					if(direction === 'previous') {
						if(photo_index > 0) {
							photo_index--;
							var previous_id = this.photo_collection.at(photo_index).get('id');
							this.set('photo_id', previous_id);
							this.replacePhoto();

							qst.navigate('/photo/' + this.get('photo_id') + '/', {trigger:false, replace: true})
						}
					} else if(direction === 'next') {
						if(photo_index < this.photo_collection.length - 1) {
							photo_index++;
							var next_id = this.photo_collection.at(photo_index).get('id');
							this.set('photo_id', next_id);
							this.replacePhoto();

							qst.navigate('/photo/' + next_id + '/', {trigger:false, replace: true})
						}

						// overload data to photo_collection by event
						if(photo_index > this.photo_collection.length - 10) {
							qst.trigger('context:needmore');
						}
					}
				}
			} else if(context.type === 'photofeed') {
				var photo_id = this.get('photo_id'),
					photo_index = _.indexOf(this.photo_collection, photo_id.toString());

				if(photo_index !== -1) {
					if(direction === 'previous') {
						if(photo_index > 0) {
							photo_index--;
						} else {
							photo_index = this.photo_collection.length - 1;
						}
						var previous_id = this.photo_collection[photo_index];
						this.set('photo_id', previous_id);
						this.replacePhoto();

						qst.navigate('/photo/' + this.get('photo_id') + '/', {trigger:false, replace: true})
					} else if(direction === 'next') {
						if(photo_index < this.photo_collection.length - 1) {
							photo_index++;
						} else {
							photo_index = 0;
						}
						var next_id = this.photo_collection[photo_index];
						this.set('photo_id', next_id);
						this.replacePhoto();

						qst.navigate('/photo/' + next_id + '/', {trigger:false, replace: true})
					}
				}
					
			}
		}
	},

	replacePhoto: function() {
		this.photo.off();
		this.photo.remove();
		this.photo = new qst.Photo(this.toJSON());
		this.view.addPhoto(this.photo);
		this.photo.on('photo:click', this.next, this);
		this.photo.on('load:start', function() {this.trigger('photo:preready')}, this);
		this.photo.on('photo:ready', function(){this.trigger('photo:ready')}, this);
		this.photo.activate();

		this.view.$el.find('.popup__table').focus();
	},

	next: function() {
		console.log('next photo');
		this.step('next');
	},


	sleep: function () {
		this.remove();
	},

	remove: function () {
		this.off();
		if(this.photo) {
			this.photo.off();
			this.photo.remove();
		}
		if(this.view) {
			this.view.off();
			this.view.remove();
		}
		if(this.photo_collection && this.photo_collection.off) {
			this.photo_collection.off(null, null, this);
		}
	}
});