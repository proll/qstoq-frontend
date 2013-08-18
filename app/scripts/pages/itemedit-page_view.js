qst.ItemEditPageView = qst.PageView.extend({

	initialize: function(options){
		if(!(options && options.template)){
			qst.error("Page must have a template");
			return;
		}
		this.template = qst.Templates.get(options.template);
		this.createDom();

		this.model.on('change:section', this.changeSection, this);
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


		this.$cont = this.$el.find('>div');

		$('body').attr('class', 'body__page-' + this.model.get('name'));


		/**
		 * описываем в модели метод enterDocument
		 * выполнится после того как page отрисован
		 */
		this.model.enterDocument();
		this.trigger("page:render", this.model);
		this.trigger("enterDocument", this.model);
	},


	changeSection: function(model, value) {
		if(this.$cont) {
			this.$cont
				.removeAttr('class')
				.addClass('page-itemedit_'+value)
		}
	},

	addMenu: function (menu_model) {
		this.$el.find('.itemedit__menu-row').html(menu_model.view.$el);
	},

	addItemEdit: function (grid_model) {
		this.$el.find('.itemedit__section-row').html(grid_model.view.$el);
	},
});