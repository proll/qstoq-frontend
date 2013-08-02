qst.UploadFilters = Backbone.Model.extend({
	defaults: {
		w: 1000,
		h: 1000,

		image: null,
		filtered: false,

		caches: {
			"azure": null,
			"terra": null,
			"bluesky": null,
			"aqua": null,
			"noble": null,
			"texas": null,
			"savanna": null
		},

		filters: [
			{
				name: 'savanna',
				title: "Savanna",
				args: []
			},
			{
				name: 'bluesky',
				title: 'BlueSky',
				args: []
			},
			{
				name: 'azure',
				title: 'Azure',
				args: []
			},
			{
				name: 'terra',
				title: 'Terra',
				args: []
			},
			{
				name: 'noble',
				title: "Noble",
				args: []
			},
			{
				name: 'texas',
				title: "Texas",
				args: []
			},
			{
				name: 'aqua',
				title: "Aqua",
				args: []
			},
		]
	},

	initialize: function (options) {
		this.view = new qst.UploadFiltersView({model:this});
		this.view.render();
	},

	remove: function () {
		var that = this;
		_.forEach(this.get('caches'),function function_name (cache, index) {
			that.get('caches')[index] = null;
		})
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

	normal: function () {
		this.trigger('normal');
	},

	getCanvas: function() {
		return this.view.$canvas.get(0);
	},

	getResultBase64: function() {
		return this.get('filtered') ? this.view.$canvas.get(0).toDataURL("image/jpeg") : false;
	},

	getPixels: function(image) {
		var canvas = this.getCanvas(),
			canvas_context = canvas.getContext('2d');

		canvas_context.drawImage(image, 0, 0, canvas.width, canvas.height);
		return canvas_context.getImageData(0, 0, canvas.width, canvas.height);
	},

	setPixel: function(pixels, x, y, vec4_new) {
		var red = (y * (pixels.width * 4)) + (x * 4);
		pixels.data[red] = Math.round(Math.abs(vec4_new[0]) * 255);
		pixels.data[red + 1] = Math.round(Math.abs(vec4_new[1]) * 255);
		pixels.data[red + 2] = Math.round(Math.abs(vec4_new[2]) * 255);
		pixels.data[red + 3] = Math.round(Math.abs(vec4_new[3]) * 255);
	},

	filterImage: function(filter_name, image, var_args) {
		var args = [this.getPixels(image)];
		for (var i=2; i<arguments.length; i++) {
			args.push(arguments[i]);
		}
		return this[filter_name].apply(this, args);
	},

	filter: function(filter_name) {
		for (var i = this.get('filters').length - 1; i >= 0; i--) {
			if (this.get('filters')[i].name == filter_name) {
				var pixels = this.getPixels(this.get('image')),
					canvas = this.getCanvas(),
					canvas_context = canvas.getContext('2d');

				// Reset from cache
				var cache = this.get("caches");
				if (cache[filter_name]) {
					canvas_context.putImageData(cache[filter_name], 0, 0);
					return true;
				}

				// Fast sharpening
				pixels = this.convolute(pixels, canvas_context, [ 0.1, -0.3,  0.1,
																 -0.3,  1.8,  -0.3,
																  0.1, -0.3,  0.0 ]);

				// Color filtering with WebWorkers
				var total_workers = 10,
					completed_workers = 0,
					that = this;

				this.trigger('filter:start');
				for (var i = 0; i < total_workers; i++) {
					// console.debug("Worker: ", i);
					var worker = new Worker("/scripts/workers/filters/" + filter_name + ".js");
					worker.addEventListener("message", function(event) {
						for (var j = 0; j < event.data.length; j++) {
							that.setPixel(pixels, event.data[j].x, event.data[j].y, event.data[j].rgba);
						}
						canvas_context.putImageData(pixels, 0, 0);
						completed_workers++;
						console.debug("Worker done");
						if (completed_workers >= total_workers) {
							cache[filter_name] = canvas_context.getImageData(0, 0, canvas.width, canvas.height);
							// console.debug("All workers done");
							that.trigger('filter:finish');
						}
					}, false);
					worker.postMessage({ "y_from": i * 51, "y_to": (i + 1) * 51 + 1, "pixels": pixels, "correct": 0 });
				}

				return true;	
			}
		};
		return false;
	},

	// Custom filter for fast sharpening
	convolute: function(pixels, canvas_context, weights, opaque) {
		var side = Math.round(Math.sqrt(weights.length));
		var halfSide = Math.floor(side / 2);
		var src = pixels.data;
		var sw = pixels.width;
		var sh = pixels.height;
		// pad output by the convolution matrix
		var w = sw;
		var h = sh;
		var output = canvas_context.createImageData(w,h);
		var dst = output.data;
		// go through the destination image pixels
		var alphaFac = opaque ? 1 : 0;
		for (var y = 0; y < h; y++) {
			for (var x = 0; x < w; x++) {
				var sy = y;
				var sx = x;
				var dstOff = (y * w + x) * 4;
				// calculate the weighed sum of the source image pixels that
				// fall under the convolution matrix
				var r = 0, g = 0, b = 0, a = 0;
				for (var cy = 0; cy < side; cy++) {
				for (var cx = 0; cx < side; cx++) {
					var scy = sy + cy - halfSide;
					var scx = sx + cx - halfSide;
					if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
						var srcOff = (scy * sw + scx) * 4;
						var wt = weights[cy * side + cx];
						r += src[srcOff] * wt;
						g += src[srcOff + 1] * wt;
						b += src[srcOff + 2] * wt;
						a += src[srcOff + 3] * wt;
					}
				}
				}
				dst[dstOff] = r;
				dst[dstOff+1] = g;
				dst[dstOff+2] = b;
				dst[dstOff+3] = a + alphaFac * (255 - a);
			}
		}
		return output;
	}
});
