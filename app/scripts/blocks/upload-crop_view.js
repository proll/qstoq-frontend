qst.UploadCropView = Backbone.View.extend({
	template: "blocks/upload-crop",
	tagName: "div",
	className: "upload__crop-row",

	events: {
		'click .upload__crop-ok': 'crop',
		'click .upload__crop-cancel': 'cancel',
	},

	initialize: function(options){
		this.template = qst.Templates.get(this.template);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.$box   = this.$el.find('.upload__crop-box');
		this.$image = this.$el.find('.upload__crop-original');
		this.$shadow1   = this.$el.find('.upload__crop-shadow-1');
		this.$shadow2   = this.$el.find('.upload__crop-shadow-2');

		this.delegateEvents();
	},


	updateImage: function(img_data) {
		var that = this;

		this.$image.on('load', function (e) {
			// default sets for the image dimantions
			var original_dimentions = {};
			if (this.width >= this.height) {
				original_dimentions = {
					original_side: this.height,
					original_top: 0,
					original_left: Math.round((this.width - this.height)/2),
					original_w: this.width,
					original_h: this.height,
					horizontal: true,
					ratio: that.model.get('editor_h')/this.height,
				};
			} else {
				original_dimentions = {
					original_side: this.width,
					original_top: Math.round((this.height - this.width)/2),
					original_left: 0,
					original_w: this.width,
					original_h: this.height,
					horizontal: false,
					ratio: that.model.get('editor_w')/this.width,
				};
			}

			that.model.set(original_dimentions);
			that.reposition(this);
		});
		this.$image.attr('src', img_data);
	},

	reposition: function(image) {
		// draggable PEP
		this.$image.pep({
			constrainTo: 		'parent',
			useCSSTranslation: 	false,
			stop: _.bind(this.updatePosParams, this),
			rest: _.bind(this.updatePosParams, this)
		});


		if(this.model.get('horizontal')) {
			var ratio = this.model.get('ratio'),
				box_w = 2*ratio*this.model.get('original_w') - this.model.get('editor_w');
				if (box_w < this.model.get('editor_w')) {
					box_w = this.model.get('editor_w');
				}
			this.$box.toggleClass('horizontal', true);
			this.$box.css({
				marginLeft: -(box_w - ratio*this.model.get('original_w')),
				width: box_w,
				height: this.model.get('editor_h'),
			});
			this.$image.css({
				left: 		this.model.get('original_left') * ratio,
				top: 		this.model.get('original_top') * ratio,
				width: 'auto',
				height: this.model.get('editor_h'),
			});

		} else {
			var ratio = this.model.get('ratio'),
				box_h = 2*ratio*this.model.get('original_h') - this.model.get('editor_h');
				if (box_h < this.model.get('editor_h')) {
					box_h = this.model.get('editor_h');
				}
			this.$box.toggleClass('horizontal', false);
			this.$box.css({
				marginTop: -(box_h - ratio*this.model.get('original_h')),
				width: 		this.model.get('editor_w'),
				height: 	box_h,
			});
			this.$image.css({
				left: 		this.model.get('original_left') * ratio,
				top: 		this.model.get('original_top') * ratio,
				width: 		this.model.get('editor_w'),
				height: 	'auto',
			});

		}

	},

	updatePosParams: function (e) {
		var pos = this.$image.position(),
			ratio = this.model.get('ratio');
		this.model.set({
			new_original_top:  pos.top  / ratio,
			new_original_left: pos.left / ratio,
		});
		
	},

	crop: function() {
		this.updatePosParams();
		
		var ratio = this.model.get('ratio');
		this.model.set({
			original_top:  this.model.get('new_original_top'),
			original_left: this.model.get('new_original_left'),
		});

		// calculate from padding to cut coords
		var left = this.model.get('original_w') - this.model.get('editor_w')/ratio - this.model.get('new_original_left'),
			top =  this.model.get('original_h') - this.model.get('editor_h')/ratio - this.model.get('new_original_top')

		if(left < 0) left = 0;
		if(top < 0)  top = 0;

		this.model.trigger('crop:reposition', {
			left: left,
			top:  top,
		});
		this.model.trigger('crop:close');
		return false;
	},

	cancel: function() {
		var ratio = this.model.get('ratio');
		this.model.trigger('crop:close');
		this.$image.css({
			left: 	this.model.get('original_left') * ratio,
			top: 	this.model.get('original_top') * ratio,
		});
		return false;
	}
});

