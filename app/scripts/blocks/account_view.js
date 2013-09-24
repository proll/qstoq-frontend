qst.AccountView = Backbone.View.extend({
	template: 'blocks/account',
	tagName: 'div',
	className: 'account',

	events: {
		'click .account__social-item-vk>.account__social-item__connect-btn': 'vkConnect',
		'click .account__social-item-fb>.account__social-item__connect-btn': 'fbConnect',
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);
		this.model.on('load:success', this.render, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);
		this.activate();
	},
	
	activate: function() {
		var that = this;
		this.delegateEvents();
	},

	vkConnect: function(e){
		e.preventDefault();
		return false;
	},

	fbConnect: function(e){
		e.preventDefault();
		return false;
	},

	reset: function() {s;
		this.undelegateEvents();
		this.$el.html('');
	}
});

