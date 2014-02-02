qst.ItemEditView = Backbone.View.extend({
	template: "blocks/itemedit",
	className: "itemedit",
	preview_model: false,

	events: {
		'click a.item__types-item': 'clickState',
		'click .itemedit__submit-a': 'submitForm',
		'change #file_uploader': 'upload',
		'keypress': 'hideErrors',
		'click': 'hideErrors',
		'click .itemedit__delete-a': 'deleteItem',
		'submit form': 'submit',

		'click .itemedit__share-inp-cont': 'clickShortLink',
		'click .itemedit__share-btn, .showcase__share-itm-a': 'clickShare',

		'change input[name=name]': 'updateName',
		'change select[name=currency]': 'updateCurrency',
		'change input[name=price]': 'updatePrice',
		'change input[name=ship_limit]': 'updateShipLimit',
		'change input[name=link]': 	'updateLink',
		'change textarea[name=description]': 'updateDescription',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("load:success", this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:state', this.changeState, this);
		this.model.on('change:url', this.changeLink, this);

		this.lazy_loader = new qst.LazyLoader();

		this.model.on('save:start', this.saveStart, this);
		this.model.on('save:success', this.saveSuccess, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);

		this.$state_items = this.$el.find('.item__types-item');
		this.$form = this.$el.find('form');
		this.$input_active =  this.$form.find('input[name=active]');
		this.$input_name =  this.$form.find('input[name=name]');
		this.$input_price = this.$form.find('input[name=price]');
		this.$input_currency = this.$form.find('select[name=currency]');
		this.$input_ship_limit = this.$form.find('input[name=ship_limit]');
		this.$input_description =  this.$form.find('textarea[name=description]');
		this.$input_link =  this.$form.find('input[name=link]');
		this.$input_file =  this.$form.find('input[name=file]');
		this.$input_file_title = this.$form.find('.itemedit__inp-file-title');
		this.$input_file_process = this.$form.find('.itemedit__inp-file-process');
		this.$error = this.$el.find('.itemedit__error');

		
		this.$showcase = this.$el.find('.showcase__form');
		this.$showcase_img = this.$showcase.find('.showcase__form__img')

		this.changeState(this.model, this.model.get('state'));

		this.delegateEvents();
	},

	clickState: function(e) {
		var $this = $(e.target);
		this.model.set('state', $this.attr('href'));
		this.model.sightUpdateState($this.attr('href'));
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
		var active = this.$input_active.is(':checked'),
			name = $.trim(this.$input_name.val()),
			price = this.$input_price.val(),
			currency = this.$input_currency.val(),
			ship_limit = this.$input_ship_limit.val(),
			link = this.$input_link.val(),
			file = this.$input_file.val(),
			description = $.trim(this.$input_description.val()),
			state = this.model.get('state');

		if(_.isEmpty(name)) {
			this.showError(qst.localize('write some name of the item', 'itemlist'), 'name')
			return false;
		} else if(_.isEmpty(price) || _.isNaN(parseInt(price))){
			this.showError(qst.localize('set price, please', 'itemlist'), 'price')
			return false;
		} else if(_.isEmpty(ship_limit) || _.isNaN(parseInt(ship_limit))){
			this.showError(qst.localize('set ship limit, please', 'itemlist'), 'ship_limit')
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
				active: 		active + 0,
				name: 			name,
				url: 			link,
				description: 	description,
				price: 			parseInt(price),
				currency: 		currency,
				price_pwyw: 	price_plus + 0,
				ship_limit: 	parseInt(ship_limit),
			});

			this.model.save();
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
		var social = $(e.currentTarget).attr('href'),
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


	clickShare: function(e) {
		var social = $(e.currentTarget).attr('href'),
			description = encodeURIComponent(this.model.get('description')),
			href = this.model.get('url_short'),
			url = '',
			image = (!!this.preview_model) ? this.preview_model.get('data') : 'http://qstoq.me/images_static/fav144.png';

		if(social==='facebook') {
			url = "https://www.facebook.com/dialog/feed?";
			url += ''
				+"link=" + encodeURIComponent(href)
				+"&redirect_uri=" + encodeURIComponent(href)
				+"&display=popup"
				+"&app_id=137692866413480"
				+"&caption=" + encodeURIComponent(this.model.get('name'))
				+"&picture=" + image
				+"&description=" + encodeURIComponent(this.model.get('description'));
		} else {
			if(social === 'vk') {
				url = "http://vkontakte.ru/share.php?noparse=true&"
			} else {	
				url = "http://api.addthis.com/oexchange/0.8/forward/" + social + "/offer?"
			}

			url += ''
				+"url=" + encodeURIComponent(href)
				+"&title=" + encodeURIComponent(this.model.get('name'))
				+"&description=" + encodeURIComponent(this.model.get('description'))
				+"&pubid=prolll"
				+"&text=" + encodeURIComponent(this.model.get('description'))
				+"&via=qstoq"
				+"&screenshot=" + image
				+"&image=" + image;
		}
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
		if(part == 1) {
			part = 0;
		}
		this.$input_file_process.width(Math.round(part*100) + '%');
	},

	changeLink: function(model, value) {
		if(this.$input_link) {
			this.$input_link.val(value);
		}
	},

	saveStart: function() {
		this.$el.toggleClass('saving', true);
	},

	saveSuccess: function() {
		this.$el.toggleClass('saving', false);
	},


	// перенести логику на события this.model
	// эта вьюха не должна знать о модели превью
	addPreviewUpload: function(preview_model) {
		this.preview_model = preview_model;
		preview_model.on('change:data', this.updateShowcasePreview, this);
		this.updateShowcasePreview(preview_model, preview_model.get('data'));
		this.$el.find('.item__preview-upload-cont').html(preview_model.view.$el);
	},

	addItemReceipt: function(itemreceipt_model) {
		this.$el.find('.receipt-holder__cont').html(itemreceipt_model.view.$el);
	},

	updateName: function(e) {
		var txt = $(e.target).val();
		this.$el.find('.showcase__head-title').html('Qstoq &ndash; ' + txt);
		this.$el.find('.showcase__form-h').html(txt);

		this.model.sightUpdateName(txt)
	},

	updatePrice: function(e) {
		var num = parseInt($(e.target).val());
		this.model.sightUpdatePrice(num);
		if(!!num) {
			num = Handlebars.helpers._number_format(num).toString();
		}  else {
			num = 0+'&nbsp';
		}

		num+=Handlebars.helpers._(this.model.get('currency'), 'currency');
		this.$el.find('.showcase__form-price').html(num);
	},

	updateCurrency: function(e) {
		var cur = $(e.target).val();
		this.model.sightUpdateCurrency(cur);
		cur = Handlebars.helpers._(cur, 'currency').toString();
		cur = Handlebars.helpers._number_format(this.model.get('price')).toString() + cur;
		this.$el.find('.showcase__form-price').html(cur);
	},

	updateLink: function(e) {
		var url = $(e.target).val();
		this.model.set('url', url);
		this.model.sightUpdateUrl(url);
	},

	updateShipLimit: function(e) {
		// var num = parseInt($(e.target).val());
		// if(!!num) {
		// 	num = Handlebars.helpers._number_format(num).toString();
		// }  else {
		// 	num = 0;
		// }
		// this.$el.find('.showcase__form-price-val').html(num);
		// this.$el.find('.receipt__form-price-val').html(num);
	},

	updateDescription: function(e) {
		var txt = $(e.target).val();
		this.$el.find('.showcase__form-desc').html(txt);
	},

	updateShowcasePreview: function(model, uri) {
		// console.log(model, uri);
		if(!!uri) {
			this.$showcase_img.data('orig', uri);
			this.lazy_loader.load(this.$showcase);
			this.togglePreviewOn();
		} else {
			this.togglePreviewOff();
		}
	},

	togglePreviewOff: function() {
		if(this.$showcase_img) {
			this.$showcase_img.attr('src', '/images_static/empty.png');
		}
		this.$showcase.toggleClass('empty', true);
	},

	togglePreviewOn: function() {
		this.$showcase.toggleClass('empty', false);
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

