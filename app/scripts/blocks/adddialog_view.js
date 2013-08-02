qst.AddDialogView = Backbone.View.extend({
	template: "blocks/adddialog",
	tagName: "div",
	className: "adddialog",

	events: {
		"click a.adddialog__add": "showDialog",
	},

	initialize: function(options){
		this.render();
	},


	render: function(){
		this.template = qst.Templates.get(this.template);
		var template = this.template(this.model.toJSON());

		this.$el.append(template);

		this.delegateEvents();
	},

	showDialog: function(e) {
		e.stopPropagation();
		this.$el.toggleClass('open', true);
		return false;
	},

	hideDialog: function() {
		this.$el.toggleClass('open', false);
	},

	sleep: function(model, value, options) {
		if(value) {
			this.remove();
		}
	},

	reset: function() {

	},

	remove: function(model, value, options) {
		this.undelegateEvents();
		// this.$el.html("");
	},
});

