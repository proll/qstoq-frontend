qst.PagesCollection = Backbone.Collection.extend({
	// model: qst.Page,
	initialize: function(options){
	},
	
	getPage: function(name){
		var page = this.find(function(page){
			return page.get("name") == name;
		});
		return page || this.first();
	},

	havePage: function(pagename){
		return this.any(function(page){
			return page.get("name") == pagename;
		})
	}
});
