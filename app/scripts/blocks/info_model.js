qst.Info = Backbone.Model.extend({
	path: '/docs',
	ext: 'html',
	loaded: false,
	
	pages: [
		'questions-and-answers',
		'user-agreement',
		'api',
		'team',
		'feedback',
	],

	files: {},

	defaults: {
		section: ''
	},

	initialize: function (options) {
		this.view = new qst.InfoView({
			model:this
		});
	},

	load: function (options) {
		var that = this;

		if(_.isEmpty(this.files)) {	
			$.when.apply(this, this.preloadTemplates())
				.done(function(){
					that.trigger('load:success');
				});
		} else {
			_.each(that.files, function(page_data, page_name){
				that.view.addPage(page_name, page_data);
			});	
			that.trigger('load:success');
		}
	},

	preloadTemplates: function (options) {
		var that = this;
		_.each(that.pages, function(page_name){
			var file = that.path + "/" + page_name + "_" + qst.language + "." + that.ext;
			$.get(file, function(page_data){
				that.files[page_name] = page_data;
				that.view.addPage(page_name, page_data);
			});
		});
		return that.files;
	},

	activate: function() {
		this.view.render();
		this.load();
		this.set("sleeped", false);
	},

	sleep: function() {
		this.set("sleeped", true);
	},

});