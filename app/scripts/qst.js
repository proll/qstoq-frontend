if (typeof console == "undefined") {this.console = {log: function() {}, error: function() {}};}
window.qst = window.qst || {};
window.qst = _.extend(window.qst, {
	language: _.getCookie('lang') || (navigator.language || navigator.systemLanguage || navigator.browserLanguage || navigator.userLanguage || 'en').substr(0, 2).toLowerCase(),
	root: "http://qstoq.io",
	l10n: {},

	preloadTemplates: function(){
		if(!!window.qst_dev) {
			var files = [];
			_.each(window.templates.files, function(templateName){
				var file = window.templates.path + "/" + templateName + "." + window.templates.ext;
				files.push( $.get(file, function(templateData){
					qst.Templates.add(templateName, templateData);
				}));
			});
			return files;
		} else {
			return [];
		}
	},
	init: function() {
		// if(!(this.language === 'en' || this.language === 'ru' || this.language === 'ko' || this.language === 'ja' || this.language === 'zh')) {
		if(!(
			this.language === 'en' || this.language === 'ru'
		 )) {
			this.language = 'en';
		}

		$.when.apply(this, this.preloadTemplates())
			.done(function(){
				/**
				 * qst app initialization
				 */
				qst.app = new qst.App({ 
					debug: true,
				});
				// Init Backbone history
				Backbone.history.start({pushState: true});

			});

		// Catch links and trigger router
		$(document).on("click", "a", function(e){
			if (e.metaKey || e.ctrlKey) return true;
			var $this = $(this);
			if($this.attr("target")) return true;
			
			e.stopPropagation();
			e.preventDefault();

			if($this.attr('type') == 'event') {
				qst.trigger($this.attr('href'));
			} else {
				qst.app.router.context = $this.data();
				qst.app.router.navigate($this.attr("href"), {trigger: true});
			}
			return false;
		});
	},

	log: function (txt) {
		console.log(txt);
	},
	error: function(desc) {
		console.error(desc);
	},
	navigate: function (path, options) {
		if(!!options && options.trigger === false) {
			qst.app.statistic.trackCurrentPageChange();
			qst.app.trigger('need:meta:update');
		}
		qst.app.router.navigate(path, options);
	},

	is_needauth: function() {
		if(!qst.is_authed()) {
			qst.trigger("auth:show");
			return true;
		} else {
			return false;
		}
	},

	is_authed: function() {
		return (!!qst.user && qst.user.is_auth());
	},

	authUrl: function(url) {
		var credentials = {};
		if(!!qst.app && !!qst.app.user.get("token")) {
			credentials = {
				token: qst.app.user.get("token")
			}
		} else {
			return url;
		}

		if(url.indexOf('?')==-1) {
			url+='?';
		}
		return url + _.map(credentials, function(value, key){ return key+"="+value}).join("&")
	},

	warning: function(phrase, context){
		var wrn = new qst.WarningView({content: qst.localize(phrase, context)});
	},

	localize: function(phrase, context) {
		return Handlebars.helpers._(phrase, context).toString();
	},

	speedScrollTop: function(s_t, time) {
		$("html, body").animate({ 
			scrollTop: s_t || 0 
		}, time || 300);
	},

	// TODO state detection has to be more clear
	isLink: function(txt) {
		return !qst.isFile(txt);
	},

	isFile: function(txt) {
		txt = txt || '';
		return txt.indexOf('qstoq.ru')!==-1;
	}
});

window.qst.Templates = window.qst.Templates || {};
window.qst.Templates =  _.extend(
	window.qst.Templates,
	{
		templates: {},
		compiled: {},
		// ptemplates: {},
		add: function(name, template){
			this.templates[name] = template;
		},
		get: function(name){
			// if it is dev environment - compile on runtime
			if(!!window.qst_dev) {			
				if(this.compiled[name]){
					return this.templates[name];
				}else if(this.templates[name]){
					this.templates[name] = Handlebars.compile(this.templates[name]);
					this.compiled[name] = true;
					return this.templates[name];
				}else{
					console.error("Can't find template \"" + name + "\"");
					return function(){ return "" }
				}
			} else {
			// if it is prod environment - get from precompiled
				if(this.ptemplates) {
					var ptemplate = this.ptemplates[name];
					if(ptemplate) {
						return ptemplate;
					} else {
						console.error("Can't find template \"" + name + "\"");
						return function() { return "" }
					}
				} else {
					console.error("Can't find templates at all");
					return function() { return "" }
				}
			}
		}
	}
);

Backbone._sync = Backbone.sync;

Backbone.sync = function(method, model, options){
	options = options || {};
	var credentials = {};
	if(options.userData){
		credentials = {
			// uid: options.userData.uid,
			token: options.userData.token,
			// lang: qst.language
		}
	}else{
		if(!!qst.app && !!qst.app.user.get("uid")) {
			credentials = {
				// uid: 	qst.app.user.get("uid"),
				token: 	qst.app.user.get("token"),
				// lang: 	qst.language
			}
		}
	}
	options.url = (options.url || (model.url && _.result(model, 'url')));
	if(options.url.indexOf('?')===-1) {
		options.url += '?';
	} else {
		options.url += '&';
	}
	options.url += _.map(credentials, function(value, key){ return key+"="+value}).join("&");
    return Backbone._sync(method, model, options);
}

$(document).ready(function(){
	_.extend(qst, Backbone.Events);
	qst.init();

	// $(document).on('keyup', function(e){console.log(e)})
});
