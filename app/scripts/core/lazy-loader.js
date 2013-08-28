qst.LazyLoader = Backbone.Model.extend({
	onImageError: function () {
		this.trigger('load:error');
	},

	load: function ($image_cont) {
		var $images = $image_cont.find('img.lazy'),
			_this = this;

		_.forEach($images, function(el, index) {
			var $el = $(el),
				data = $el.data(),
				image = new Image();
				image.src = data.orig;
				image.onload = function (e) {
					$el.parents('.load-bg')
						.toggleClass('img-loaded', true);

					if(!!data.scale) {
						var orig_w = this.width,
							orig_h = this.height,
							el_w = data.width,
							el_h = data.height,
							w_k = orig_w/el_w,
							h_k = orig_h/el_h;

						if(w_k > h_k) {
							$el.css({
								width: el_w,
								height: 'auto'
							});
						} else {
							$el.css({
								width: 'auto',
								height: el_h
							});
						}
					}

					if(!data.bg) {
						$el.attr('src', data.orig);
					} else {
						var css_obj = {},
							size = 'cover',
							position_x = 0,
							position_y = 0;
						if(!data.crop) {
							css_obj = {
								'background-image': 'url('+ data.orig +')'
							};
						} else {
							var orig_w = this.width,
								orig_h = this.height,
								el_w = data.width,
								el_h = data.height,
								w_k = orig_w/el_w,
								h_k = orig_h/el_h;

								// console.log({
								// 	orig_w: orig_w,
								// 	orig_h: orig_h,
								// 	el_w: el_w,
								// 	el_h: el_h,
								// 	w_k: w_k,
								// 	h_k: h_k,
								// })

							if(w_k > h_k) {
								size = 'cover';
								position_x = -Math.round((orig_w/h_k - el_w)/2);
							} else if(w_k < h_k){
								size = 'cover';
								position_y = -Math.round((orig_h/w_k - el_h)/2);
							}

							// console.log({
							// 		position_x: position_x,
							// 		position_y: position_y,
							// 		el_w: el_w,
							// 		el_h: el_h,
							// 		w_k: w_k,
							// 		h_k: h_k,
							// })

							css_obj = {
								'background-image': 'url('+ data.orig +')',
								// 'background-repeat': 'no-repeat',
								// '-webkit-background-size': size,
								// '-moz-background-size': size,
								// '-o-background-size': size,
								// 'background-size': size,
								'background-position-x': position_x,
								'background-position-y': position_y,
								width: el_w,
								height: el_h,
							};

						}
						$el.css(css_obj);
					}
				},
				image.onerror = _.bind(_this.onImageError, _this);
		})
	}
});