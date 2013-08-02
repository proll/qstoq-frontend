qst.LazyLoader = Backbone.Model.extend({

	onImageLoad: function () {
		var $this = $(this);
		$this.parents('.load-bg')
			.toggleClass('img-loaded', true);

		if(!$this.data('bg')) {
			$this.attr('src', $this.data('orig'));
		} else {
			$this.css({
				'background-image': 'url('+ $this.data('orig') +')'
			});
		}
	},

	onImageError: function () {
		this.trigger('load:error');
	},

	load: function ($image_cont) {
		var $images = $image_cont.find('img.lazy'),
			_this = this;

		_.forEach($images, function(el, index) {
			var $el = $(el),
				image = new Image();
				image.src = $el.data('orig');
				image.onload = _.bind(_this.onImageLoad, $el);
				image.onerror = _.bind(_this.onImageError, _this);
		})
	}
});