qst.DataStorage = function () {
	var storage = {};

	return {
		get: function(name) {
			return localStorage.getItem(name);
		},
		set: function(name, val) {
			val = _.toJSONString(val);
			localStorage.setItem(name, val);
		},
		clear: function() {
			localStorage.clear(); 
		},

	}
};