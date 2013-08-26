qst.ItemEditView = Backbone.View.extend({
	template: "blocks/itemedit",
	className: "itemedit",

	events: {
		'click a.item__types-item': 'clickState',
		'click .itemedit__submit-a': 'submitForm',
		'change #file_uploader': 'upload',
		'keypress': 'hideErrors',
		'click': 'hideErrors',
		'click .itemedit__delete-a': 'deleteItem',
		'submit form': 'submit',

		'click .itemedit__share-inp-cont': 'clickShortLink',
		'click .itemedit__share-btn': 'clickShare'
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("load:success", this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:state', this.changeState, this);
		this.model.on('change:url', this.changeLink, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$state_items = this.$el.find('.item__types-item');
		this.$form = this.$el.find('form');
		this.$input_name =  this.$form.find('input[name=name]');
		this.$input_price = this.$form.find('input[name=price]');
		this.$input_link =  this.$form.find('input[name=link]');
		this.$input_file =  this.$form.find('input[name=file]');
		this.$input_file_title = this.$form.find('.itemedit__inp-file-title');
		this.$input_file_process = this.$form.find('.itemedit__inp-file-process');
		this.$error = this.$el.find('.itemedit__error');

		this.changeState(this.model, this.model.get('state'));

		this.delegateEvents();
	},

	clickState: function(e) {
		var $this = $(e.target);
		this.model.set('state', $this.attr('href'));
		return false;
	},

	changeState: function(model, value) {
		if(this.$state_items) {
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
		}
	},


	submit: function(e) {
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
				this.$input_name.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_name.focus();
				break;
			case 'price': 
				this.$input_price.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_price.focus();
				break;
			case 'link': 
				this.$input_link.parents('.qst__inp-cont').toggleClass('error-inp', true);
				this.$input_link.focus();
				break;
			case 'file': 
				this.$input_file.parents('.qst__inp-cont').toggleClass('error-inp', true);
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


	clickShare: function(e) {
		var social = $(e.target).attr('href'),
			url = "http://api.addthis.com/oexchange/0.8/forward/" + social + "/offer?"
			+"url=" + this.model.get('url_short')
			+"&title=" + encodeURIComponent(this.model.get('name'))
			+"&description=" + encodeURIComponent(this.model.get('description'))
			+"&pubid=prolll"
			+"&text=" + encodeURIComponent(this.model.get('description'))
			+"&via=qstoq";
		
		_.openWindow3(url, social, 480, 360);

		return false;
	},


	clickShortLink: function(e) {
		$(e.currentTarget).find('input').select();
	},

	upload: function(e) {
		var that = this;
		$.each(e.target.files, function(i, file){
			that.model.upload(file);
		});
	},

	deleteItem: function(e) {
		this.model.deleteItem();
		return false;
	},

	updateFileName: function(txt) {
		this.$input_file_title.text(txt);
	},

	updateFileProcess: function(part) {
		this.$input_file_process.width(Math.round(part*100) + '%');
	},

	changeLink: function(model, value) {
		if(this.$input_link) {
			this.$input_link.val(value);
		}
	},

	clear: function() {
		this.hideErrors();
		this.$input_name.val('');
		this.$input_link.val('');
		this.$input_file_process.width(0);
	},

	sleep: function(model, value, options) {
		if(value) {
			this.undelegateEvents();
			this.clear();
		} else {
			this.delegateEvents();
		}
	},
});

