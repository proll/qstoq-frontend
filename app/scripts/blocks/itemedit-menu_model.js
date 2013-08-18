qst.ItemEditMenu = Backbone.Model.extend({
	url: '',
	defaults:{
		id: 0,
		section: "main",
	},

	initialize: function(){
		this.view = new qst.ItemEditMenuView({model: this});
	},

	sleep: function() {
		
	}
});