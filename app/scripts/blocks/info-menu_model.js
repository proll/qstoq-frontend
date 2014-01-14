qst.InfoMenu = Backbone.Model.extend({
	url: '',
	defaults:{
		section: "questions-and-answers",
	},

	initialize: function(){
		this.view = new qst.InfoMenuView({model: this});
	},

	sleep: function() {
	}
});