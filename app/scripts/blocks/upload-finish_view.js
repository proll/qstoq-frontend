qst.UploadFinishView = Backbone.View.extend({
	template: 	"blocks/upload-finish",
	tagName: 	"div",
	className: 	"upload__finish-row",

	// events: {
	// },

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);

		this.model.on('finish:start', 	 this.toggleStart, this);
		this.model.on('finish:progress', this.progress, this);
		this.model.on('finish:success',  this.toggleSuccess, this);
		this.model.on('finish:error', 	 this.toggleError, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.$percent_field = this.$el.find('.upload__finish-upload-pers');
		// this.delegateEvents();
	},


	progress: function(num) {
		if(this.$percent_field) {
			this.$percent_field.html(num + '%');
		}
	}, 

	toggleStart: function() {
		this.$el
			.toggleClass('fail', false)
			.toggleClass('success', false);
	},

	toggleSuccess: function() {
		this.$el
			.toggleClass('fail', false)
			.toggleClass('success', true);
	},


	toggleError: function() {
		this.$el
			.toggleClass('fail', true)
			.toggleClass('success', false);
	}
});

