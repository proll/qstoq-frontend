qst.ProfileMenu = Backbone.Model.extend({
	url: '',
	defaults:{
		id: 0,
		section: "account",
	},

	initialize: function(){
		this.view = new qst.ProfileMenuView({model: this});
	},

	sleep: function() {
		
	}
});