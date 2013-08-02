function pixels_to_sampler(pixels) {
	var sampler = {
		"width": pixels.width,
		"height": pixels.height,
		"data": []
	};
	for (var i = 0; i < pixels.data.length; i++) {
		sampler.data.push(pixels.data[i] / 255.0);
	}
	return sampler;
}

function sampler_to_data(sampler) {
	var data = [];
	for (var i = 0; i < sampler.data.length; i++) {
		data.push(Math.round(sampler.data[i] * 255.0));
	}
	return data;
}

function vec_min(vec1, vec2) {
	// я реально не знаю как правильно :(
	var min_in_vec1 = 0;
	var min_in_vec2 = 0;	
	for (var i = 0; i < vec1.length; i++) {
		if (vec1[i] < vec2[i]) {
			min_in_vec1++;
		} else if (vec2[i] < vec1[i]) {
			min_in_vec2++;
		}
	}
	return (min_in_vec1 > min_in_vec2) ? vec1 : vec2;
}

function vec_max(vec1, vec2) {
	var max_in_vec1 = 0;
	var max_in_vec2 = 0;	
	for (var i = 0; i < vec1.length; i++) {
		if (vec1[i] > vec2[i]) {
			max_in_vec1++;
		} else if (vec2[i] > vec1[i]) {
			max_in_vec2++;
		}
	}
	return (max_in_vec1 > max_in_vec2) ? vec1 : vec2;
}

function vec_div(vec1, vec2) {
	var result = [];
	for (var i = 0; i < vec1.length; i++) {
		result.push(vec1[i] / vec2[i]);
	}
	return result;	
}

function vec_dot(vec1, vec2) {
	var result = 0.0;
	for (var i = 0; i < vec1.length; i++) {
		result += (vec1[i] * vec2[i]);
	}
	return result;
}

function vec_mul(vec1, a) {
	var result = [];
	for (var i = 0; i < vec1.length; i++) {
		result.push(vec1[i] * a);
	}
	return result;
}

function vec_mix(vec1, vec2, a) {
	var result = [];

	if (a instanceof Array) {
		for (var i = 0; i < vec1.length; i++) {
			result.push(vec1[i] * (1.0 - a[i]) + vec2[i] * a[i]);
		}	
	} else {
		for (var i = 0; i < vec1.length; i++) {
			result.push(vec1[i] * (1.0 - a) + vec2[i] * a);
		}		
	}

	return result;
}

function vec_sub(vec1, vec2) {
	var result = [];
	for (var i = 0; i < vec1.length; i++) {
		result.push(vec1[i] - vec2[i]);
	}
	return result;
}

function vec_pow(vec1, vec2) {
	var result = [];
	for (var i = 0; i < vec1.length; i++) {
		result.push(Math.pow(vec1[i], vec2[i]));
	}
	return result;
}

function vec4_to_vec3(vec4D) {
	return [
		vec4D[0], vec4D[1], vec4D[2]
	];
}

function distance(vec2D1, vec2D2) {
	return Math.sqrt(Math.pow(vec2D1[0] - vec2D2[0], 2) + Math.pow(vec2D1[1] - vec2D2[1], 2));
}

function clamp(x, minVal, maxVal) {
	return Math.min(Math.max(x, minVal), maxVal);
}

function smoothstep(edge0, edge1, x) {
	var t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
	return t * t * (3.0 - 2.0 * t);
}

function get_pixel(pixels, x, y) {
	var red = (y * (pixels.width * 4)) + (x * 4);
	return [
		pixels.data[red] / 255.0,
		pixels.data[red + 1] / 255.0,
		pixels.data[red + 2] / 255.0,
		pixels.data[red + 3] / 255.0
	];
}

function texture2D(pixels, vec2D) {
	var x = Math.round(vec2D[0]);
	var y = Math.round(vec2D[1]);
	return get_pixel(pixels, x, y);
}
