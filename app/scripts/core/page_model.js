qst.Page = Backbone.Model.extend({
	initialize: function(options){
		if(!options.template){
			this.trigger("error", {message: "Page must have a template"});
		}
		this.view = new qst.PageView({
			model: this,
			template: options.template
		});
		this.view.on("render", function(){
			this.collection.trigger("render");
		});

		if(this.get("view")){
			if(this.get("model")){
				this.pageView = new qst[this.get("view")]({
					model: this.get("model")
				});
			}else{
				this.pageView = new qst[this.get("view")];
			}
		}
		if(this.get("model")){
			this.pageModel = new qst[this.get("model")];
		}
	},

	render: function(){
		if(this.view && this.view.render)
			this.view.render();
	},
	remove: function(){
		this.view.remove();
	},
	enterDocument : function(){

	}
});