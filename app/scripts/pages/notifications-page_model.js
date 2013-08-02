qst.NotificationsPage = qst.Page.extend({
	visited: false,
	in_popup: false,

	defaults: {
		in_popup: false,
	},

	initialize: function(options){
		options 		= options || {};
	},
	render: function(options) {
		this.visited = true;
		var header_item = Handlebars.helpers._('items', 'header').string.notifications;
		this.set({
			title: 			header_item.title,
			description: 	header_item.description,
		});

		this.view = new qst.NotificationsPageView({
			model: this, 
			template:"pages/notifications-page"
		});

		this.notification_feed = new qst.NotificationFeed(options);

		this.in_popup = options.in_popup = !!options.in_popup;
		this.set('in_popup', this.in_popup);
		this.view.render(options.in_popup);

		this.notification_feed.activate();
		this.view.addFeed(this.notification_feed);
	},


	sleep: function () {
		this.remove();
	},

	remove: function () {
		if(this.notification_feed) {
			this.notification_feed.remove();
		}
		if(this.view) {
			this.view.remove();
		}
	}
});