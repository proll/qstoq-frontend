/**
*	underscore - loda extend
**/
_.browser = {
	ie6: !window.XMLHttpRequest,
	ie: navigator.userAgent.indexOf('MSIE') > -1,
	// ie_version : getInternetExplorerVersion(),
	opera: navigator.userAgent.indexOf('Opera') > -1,
	safari: navigator.userAgent.indexOf('Safari') > -1,
	firefox: navigator.userAgent.indexOf('Firefox') > -1,
	chrome: navigator.userAgent.indexOf('Chrome') > -1,
	ioschrome: navigator.userAgent.indexOf('CriOS') > -1,
	
	mac: navigator.platform.indexOf('Mac') > -1,
	win: navigator.platform.indexOf('Win') > -1,
	linux: navigator.platform.indexOf('Linux') > -1,

	ipod: navigator.platform.indexOf('iPhod') > -1,
	iphone: navigator.platform.indexOf('iPhone') > -1,
	ipad: navigator.platform.indexOf('iPad') > -1,
	android: navigator.userAgent.indexOf('Android') > -1,
	wmobile : ((navigator.userAgent.indexOf('Windows CE')>-1) || (navigator.userAgent.indexOf('Windows Mobile')>-1) || (navigator.userAgent.indexOf('Windows Phone')>-1)),
	symbian : navigator.userAgent.indexOf('Symbian') > -1,
};


_.isEmail = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email)
};

_.isUrl = function (str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	if(!pattern.test(str)) {
		return false;
	} else {
		return true;
	}
}

_.capitalize = function(str){
	str = str == null ? '' : String(str);
	return str.charAt(0).toUpperCase() + str.slice(1);
};

_.decl = function (number, titles) {
	var cases = [2, 0, 1, 1, 1, 2];
	return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
};

_.toJSON = function (obj) {
	if (typeof(obj) != 'object') obj = JSON.parse(obj);
	return obj;
}

_.toJSONString = function (obj) {
	if (typeof(obj) == 'function') {
		return false;
	}
	if (typeof(obj) == 'object') {
		obj = JSON.stringify(obj);
	}
	return obj;
}

_.toSafeUrl = function (url) {
	if(url.indexOf("&") == -1) {
		url += "?r="+Math.random();
	}else{
		url += "r="+Math.random();
	}
	return url;
}


_.getLS = function (name) {
	if(!!window.localStorage) {
		return window.localStorage.getItem(name);
	} else {
		return false;
	}
}


_.setLS = function(name,value) {
	if(!!window.localStorage) {
		window.localStorage.setItem(name, _(value).toString());
		return true;
	} else {
		return false;
	}
}


_.getCookie = function (name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

_.setCookieMin = function (name,value,minutes) {
	if (minutes) {
		var date = new Date();
		date.setTime(date.getTime()+(minutes*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}


_.setCookie = function(name,value,days) {
	// if (days) {
	// 	var date = new Date();
	// 	date.setTime(date.getTime()+(days*24*60*60*1000));
	// 	var expires = "; expires="+date.toGMTString();
	// }
	// else var expires = "";
	if (!days) {
		days = 360;
	}
	var date = new Date();
	date.setTime(date.getTime()+(days*24*60*60*1000));
	var expires = "; expires="+date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}

_.clearCookie = function (name) {
	_.setCookie(name,"",-1);
}


_.openWindow2 = function(_name, _w, _h){
	if (_.browser.ie)
		var wind = window.open(_name)
	else
		var wind = window.open(null, _name, "width="+_w+",height="+_h);
	var screenW = screen.width;
	var screenH = screen.height;
	if (wind && wind.moveTo)
		wind.moveTo(Math.ceil((screenW-_w)*0.5), Math.ceil((screenH-_h)*0.5));

	return wind;
}


_.openWindow3 = function(url, _name, _w, _h){
	if (_.browser.ie) {
		var wind = window.open(_name);
	} else {
		var wind = window.open(url, '_blank', "width="+_w+",height="+_h);
	}

	var screenW = screen.width;
	var screenH = screen.height;
	if (wind && wind.moveTo)
		wind.moveTo(Math.ceil((screenW-_w)*0.5), Math.ceil((screenH-_h)*0.5));

	return wind;
}

_.isPhone = function() {
	if(typeof(_.__is_phone) == 'undefined') {
		var w = $(window).width();
		// var w= screen.width;
		_.__is_phone = w <= 640;
	}
	return _.__is_phone;
}

_.isPhone2 = function() {
	if(typeof(_.__is_phone2) == 'undefined') {
		var w = $(window).width();
		// var w= screen.width;
		_.__is_phone2 = w > 640 && w<950;
	}
	return _.__is_phone2;
}

_.isTablet = function() {
	if(typeof(_.__is_tablet) == 'undefined') {
		var w = $(window).width();
		// var w= screen.width;
		_.__is_tablet = w > 640 && w < 1280;
	}
	return _.__is_tablet;
}

_.isDesktop = function() {
	// if(typeof(_.__is_desktop) == 'undefined') {
		var w = $(window).width();
		_.__is_desktop = w >= 1280;
	// }
	return _.__is_desktop;
}