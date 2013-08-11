qst.AddDialogView = Backbone.View.extend({
	template: "blocks/adddialog",
	tagName: "div",
	className: "adddialog",

	events: {
		"click a.adddialog__add": "showDialog",
		'click a.adddialog__types-item': 'clickState',
		'click .adddialog__header': 'hideDialog',
		'click .adddialog__submit-a': 'submitForm',
		'keyoress': 'hideErrors',
		'click': 'hideErrors',
		'submit form': 'submit'
	},

	initialize: function(options){
		this.render();
		this.model.on('add:success', this.hideDialog, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:state', this.changeState, this);
	},


	render: function(){
		this.template = qst.Templates.get(this.template);
		var template = this.template(this.model.toJSON());

		this.$el.append(template);
		this.$state_items = this.$el.find('.adddialog__types-item');
		this.$form = this.$el.find('form');

		this.$input_name = this.$form.find('input[name=name]');
		this.$input_price = this.$form.find('input[name=price]');
		this.$input_link = this.$form.find('input[name=link]');
		this.$input_file = this.$form.find('input[name=file]');
		this.$error = this.$el.find('.adddialog__error');

		this.delegateEvents();
		$('html').on('click.adddialog', _.bind(this.clickOutside, this));
	},

	clickState: function(e) {
		var $this = $(e.target);
		this.model.set('state', $this.attr('href'));
		return false;
	},

	changeState: function(model,value) {
		this.$state_items.parent()
			.toggleClass('active', false);
		this.$state_items.filter('.item-' + value)
			.parent()
				.toggleClass('active', true)
		this.$el
			.toggleClass('state-link', 		false)
			.toggleClass('state-file', 		false)
			.toggleClass('state-nothing', 	false)
			.toggleClass('state-' + value, true)
	},

	showDialog: function(e) {
		e.stopPropagation();
		this.$el.toggleClass('open', true);
		this.$input_name.focus();
		return false;
	},

	clearDialog: function() {
		this.$input_name.val('');
		this.$input_price.val('');
		this.$input_link.val('');
	},

	hideDialog: function() {
		this.clearDialog();
		this.$el.toggleClass('open', false);
	},

	clickOutside: function(e) {
		if(!$(e.target).parents('.adddialog').length) {
			this.hideDialog();
		}
	},

	submit: function(e) {
		// this.hideDialog();
		var name = this.$input_name.val(),
			price = this.$input_price.val(),
			link = this.$input_link.val(),
			state = this.model.get('state');

		if(_.isEmpty(name)) {
			this.showError(qst.localize('write some name of the item', 'itemlist'), 'name')
			return false;
		} else if(_.isEmpty(price) || _.isNaN(parseInt(price))){
			this.showError(qst.localize('set price, please', 'itemlist'), 'price')
			return false;
		} else if (state === 'link') {
			if(_.isEmpty(link)) {
				this.showError(qst.localize('set a link, please', 'itemlist'), 'link')
				return false;
			} else if(!_.isUrl(link)) {
				this.showError(qst.localize('set a valid link, please', 'itemlist'), 'link')
				return false;
			}
		}
		return false;
	},


	showError: function(txt, input_name) {
		this.$error.text(txt);
		this.$el.toggleClass('error', true);
		switch(input_name) {
			case 'name': 
				this.$input_name.parent().toggleClass('error-inp', true);
				this.$input_name.focus();
				break;
			case 'price': 
				this.$input_price.parent().toggleClass('error-inp', true);
				this.$input_price.focus();
				break;
			case 'link': 
				this.$input_link.parent().toggleClass('error-inp', true);
				this.$input_link.focus();
				break;
			case 'file': 
				this.$input_file.parent().toggleClass('error-inp', true);
				break;
		}
	},
	
	hideErrors: function() {
		this.$el.toggleClass('error', false);
		this.$el.find('.error-inp').toggleClass('error-inp', false);
	},

	submitForm: function() {
		this.$form.submit();
		return false;
	},

	sleep: function(model, value, options) {
		this.hideDialog();
		console.log(model, value, options)
		if(value) {
			this.undelegateEvents();
			$('html').off('click.adddialog');
		} else {
			this.delegateEvents();
			$('html').on('click.adddialog', _.bind(this.clickOutside, this));
		}
	},

	reset: function() {

	},

	remove: function(model, value, options) {
		this.undelegateEvents();
		$('html').off('click.adddialog');
	},
});

