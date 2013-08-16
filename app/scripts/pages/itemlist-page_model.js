qst.ItemListPage = qst.Page.extend({
	visited: false,
	defaults: {
		sleeped: true,
		total: 0,
	},

	initialize: function(options){
		options 		= options || {};
		qst.on('link:delete', this.decTotal, this)
	},

	needRerender: function(options) {
		return this.get('sleeped');
	},
	
	render: function(options) {
		if(qst.is_needauth()) {
			return false;
		}

		if(!this.needRerender()) return false;
		

		options = options || {};
		
		if(!this.visited) {
			this.visited = true;
			this.view = new qst.ItemListPageView({
				model: this, 
				template:"pages/itemlist-page"
			});
			this.view.render();
			
			options.user = qst.user.get('uid');
			this.itemlist = new qst.ItemList(options);
			this.adddialog = new qst.AddDialog(options);

			this.adddialog.on('add:success', this.linkAdded, this);
			this.adddialog.on('add:error', this.error, this);

			this.itemlist.activate();
			this.itemlist.on('load:success', this.loadList, this);
			this.view.addItemList(this.itemlist);

			this.view.addAddDialog(this.adddialog);
			this.adddialog.activate();

			this.set('sleeped', false);
		} else {
			options.user = qst.user.get('uid');
			this.itemlist.set(options);
			
			this.view.render();
			this.itemlist.activate();
			this.view.addItemList(this.itemlist);

			this.view.addAddDialog(this.adddialog);
			this.adddialog.activate();

			this.itemlist.reset();

			this.set('sleeped', false);
		}

	},

	loadList: function(obj) {
		this.set('total', obj.total)
		this.view.updateTotal(obj.total)
	},

	decTotal: function() {
		if(this.get('total') > 0) {
			var total = this.get('total') - 1;
			this.set('total', total);
			this.view.updateTotal(total);
		}
	},

	linkAdded: function(link_obj) {
		if(!_.isEmpty(link_obj)) {
			this.itemlist.addMyBlock(link_obj)
		}
	},

	error: function() {
		qst.warning(qst.localize('Something went wrong...', 'misc'));
	},

	sleep: function () {
		if(this.get('sleeped')) return false;
		this.set('sleeped', true);

		if(this.itemlist) {
			this.itemlist.sleep();
		}

		if(this.adddialog) {
			this.adddialog.sleep();
		}
	}
});