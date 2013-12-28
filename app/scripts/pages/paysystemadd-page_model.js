qst.PaySystemAddPage = Backbone.Model.extend({

	visited: false,

	defaults: {
		in_popup: false,
		system: 'qiwi',
	},

	initialize: function(options){
	},
	render: function(options) {
		this.set(options);
		this.visited = true;
		options.in_popup = !!options.in_popup;

		this.view = new qst.PaySystemAddPageView({
			model: this, 
			template:"pages/paysystemadd-page"
		});
		
		this.view.render(options.in_popup, false);

		this.paysystemadd = new qst.PaySystemAdd(options);
		this.view.addPaySystemAdd(this.paysystemadd);

		this.paysystemadd.activate({settings: qst.user.settings.toJSON()});
		this.paysystemadd.on('save:success', this.updateUser, this);
	},

	updateUser: function(user_obj) {
		qst.user.settings.set(user_obj);
	},

	sleep: function () {
		this.remove();
	},

	remove: function () {
		this.off();
		if(this.paysystemadd) {
			this.paysystemadd.off();
			this.paysystemadd.remove();
		}
		if(this.view) {
			this.view.off();
			this.view.remove();
		}
	}
});