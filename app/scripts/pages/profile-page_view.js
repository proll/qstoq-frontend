qst.ProfilePageView = qst.PageView.extend({

	initialize: function(options){
		if(!(options && options.template)){
			qst.error("Page must have a template");
			return;
		}
		this.template = qst.Templates.get(options.template);
		this.createDom();
	},

	render: function(){
		if (this.renderedHtml) {
			this.$el.append(this.renderedHtml);
		} else {
			var tmpDiv = $('<div></div>')
				.addClass('page-' + this.model.get('name'))
				.html(this.template(this.model.toJSON()));
			this.trigger("page:preRender", tmpDiv);
			this.$el.html(tmpDiv);
		}


		if(this.model.get('mine')) {
			$('body').attr('class', 'body__page-my-' + this.model.get('name') + ' body__page-' + this.model.get('name'));
		} else {
			$('body').attr('class', 'body__page-' + this.model.get('name'));
		}


		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.model.enterDocument();
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);
	},

	addPhotofeed: function (photofeed_model) {
		this.$el.find('.profile-feed-col').html(photofeed_model.view.$el);
	},
	addGrid: function (grid_model) {
		this.$el.find('.profile-feed-col').html(grid_model.view.$el);
	},
	addUserInfo: function (user_info_model) {
		this.$el.find('.user-info-col').html(user_info_model.view.$el);
	},
	addStoryMenu: function (story_menu_model) {
		this.$el.find('.story-menu-row').html(story_menu_model.view.$el);
	},
});