qst.DailyListMenuView = Backbone.View.extend({
	template: "blocks/dailylist-menu",
	tagName: "div",
	className: "dailylist-menu",
	rendered: false,

	scroll_margin: 300,

	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("change:stories", this.renderAppend, this);

		this.model.on("activate", this.activate, this);
		this.model.on("sleep", this.sleep, this);
	},
	render: function(){
		this.$el.find("li").toggleClass("active", false);
		this.$el
			.find(".story-menu__item-" + this.model.get("story"))
			.toggleClass("active", true);

		var that = this;
		this.$el.find("a").each(function() {
			$this = $(this);
			$this.attr("href", that.model.get('root_path') + "/daily/" + $this.data("id") + "/" + that.model.get("sort") + "/" + that.model.get("filter") + "/");
		});
	},

	renderAppend: function () {
		var template = this.template( this.model.toJSON() );	
		this.$el.append(template);
	},

	activate: function () {
		this.delegateEvents();
		this.$el.parent().on("scroll", _.bind(this.mabyNeedMore, this));
	},

	sleep: function () {
		this.undelegateEvents();
		this.$el.parent().off("scroll", _.bind(this.mabyNeedMore, this));
	},

	mabyNeedMore: function () {
		if(!this.model.get("loading") && !this.model.get("sleeped")) {
			if( this.$el.parent().scrollTop()+this.scroll_margin >= this.$el.height() - this.$el.parent().height() ) {
				if(this.model.get("stories") && this.model.get("stories").total > this.model.get("offset") + this.model.get("limit")) {
					this.model.set("offset", this.model.get("offset") + this.model.get("limit"));
					this.model.fetch();
				}
			}
		}
	}
});

