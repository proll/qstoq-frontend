qst.ItemAddView = Backbone.View.extend({
	template: "blocks/itemadd",
	tagName: "div",
	className: "itemadd",

	events: {
		"click a.itemadd__add": "showDialog",
		'click a.item__types-item': 'clickState',
		'click .itemadd__submit-a': 'submitForm',
		'change #file_uploader': 'upload',
		'keypress': 	'hideErrors',
		'click': 		'hideErrors',
		'submit form': 	'submit'
	},

	initialize: function(options){
		this.popup_view = new qst.PopupView({klass: "itemadd-popup"});
		this.render();
		this.model.on('add:success', this.close, this);
		this.model.on('change:state', this.changeState, this);
		this.model.on('change:url', this.changeLink, this);
	},


	render: function(){
		this.template = qst.Templates.get(this.template);
		var template = this.template(this.model.toJSON());


		this.$el.append(template);
		this.$state_items = this.$el.find('.item__types-item');
		this.$form = this.$el.find('form');
		this.$input_name =  this.$form.find('input[name=name]');
		this.$input_price = this.$form.find('input[name=price]');
		this.$input_link =  this.$form.find('input[name=link]');
		this.$input_file =  this.$form.find('input[name=file]');
		this.$input_file_title = this.$form.find('.itemedit__inp-file-title');
		this.$input_file_process = this.$form.find('.itemedit__inp-file-process');
		this.$error = this.$el.find('.itemadd__error');

		this.delegateEvents();

		this.popup_view.setContent(this.$el);
		this.popup_view.show();
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

		if(value === 'file') {
			this.$input_link.attr('disabled', 'disabled');
		} else {
			this.$input_link.removeAttr('disabled');
		}
	},

	showDialog: function(e) {
		e.stopPropagation();
		this.$input_name.focus();
		return false;
	},

	clearDialog: function() {
		this.$input_name.val('');
		this.$input_price.val('');
		this.$input_link.val('');
		this.$input_file.val('');
		this.updateFileName(qst.localize('Drop or choose a file', 'itemlist'));
		this.updateFileProcess(0);
		// this.changeState(null'link')
	},


	submit: function(e) {
		// this.hideDialog();
		var name = this.$input_name.val(),
			price = this.$input_price.val(),
			link = this.$input_link.val(),
			file = this.$input_file.val(),
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
		} else if (state === 'file') {
			if(_.isEmpty(file)) {
				this.showError(qst.localize('load some file, please', 'itemlist'), 'file')
				return false;
			}
		}

			var price_plus = (price.indexOf('+')!==-1);
			this.model.set({
				name: name,
				url: link,
				price: parseInt(price),
				price_pwyw: price_plus + 0
			});

			this.model.fetch();
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
	
	upload: function(e) {
		var that = this;
		$.each(e.target.files, function(i, file){
			that.model.upload(file);
		});
	},

	updateFileName: function(txt) {
		this.$input_file_title.text(txt);
	},

	updateFileProcess: function(part) {
		this.$input_file_process.width(Math.round(part*100) + '%');
	},

	changeLink: function(model, value) {
		this.$input_link.val(value);
	},

	close: function() {
		this.popup_view.remove();
		this.remove();
		this.model.clear({silent: true});
		return false;
	},

});

