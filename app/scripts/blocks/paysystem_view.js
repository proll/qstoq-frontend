qst.PaySystemView = Backbone.View.extend({
	template: "blocks/paysystem",
	className: "paysystem",

	events: {
		'click .paysystem__payment-way__select-val': 'toggleDrop',
		'change input': 'changeDrop',
	},


	initialize: function(){
		this.template = qst.Templates.get(this.template);
		this.model.on("load:success", this.render, this);
		this.model.on('change:sleeped', this.sleep, this);
	},
	render: function(){
		var template = this.template( this.model.toJSON() );
		this.$el.html(template);


		$('html').on('click.paysystem', _.bind(this.hideDrop, this));
		this.$dropdowns = this.$el.find('.paysystem__payment-way__select');

		
		this.$showcase = this.$el.find('.showcase__form');
		this.$showcase_img = this.$showcase.find('.showcase__form__img')

		this.$receipt_comment = this.$el.find('.finish__form-desc');
		this.$input_receipt_comment = this.$el.find('.finish__form-receipt_desc');

		this.changeState(this.model, this.model.get('state'));

		var comment = $.trim(this.model.get('receipt_comment'));
		if(!!comment) {
			this.$el
				.toggleClass('comment-editing', false)
				.toggleClass('comment-can-edit', true)
				.toggleClass('comment-can-add', false)
		} else {
			this.$el
				.toggleClass('comment-editing', false)
				.toggleClass('comment-can-edit', false)
				.toggleClass('comment-can-add', true)
		}

		this.delegateEvents();
	},

	toggleDrop: function(e) {
		var $current_drop = $(e.target).parents('.paysystem__payment-way__select'),
			opened_current = $current_drop.hasClass('open');

		this.hideDrop();
		$current_drop
				.toggleClass('open', !opened_current);
		e.stopPropagation();
	},

	hideDrop: function(e) {
		this.$dropdowns.toggleClass('open', false);
	},

	changeDrop: function(e) {
		var $this = $(e.target),
			$current_drop = $this.parents('.paysystem__payment-way__select'),
			option_html = $this.siblings().filter('.option').html(),
			$val = $current_drop.find('.paysystem__payment-way__select-val>.option');

		$val.html(option_html);
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
		var active = this.$input_active.is(':checked'),
			name = $.trim(this.$input_name.val()),
			price = this.$input_price.val(),
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
		console.log(e, url);
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
		preview_model.on('change:data', this.updateShowcasePreview, this);
		this.updateShowcasePreview(preview_model, preview_model.get('data'));
		this.$el.find('.item__preview-upload-cont').html(preview_model.view.$el);
	},

	updateName: function(e) {
		var txt = $(e.target).val();
		this.$el.find('.showcase__head-title').html('Qstoq &ndash; ' + txt);
		this.$el.find('.showcase__form-h').html(txt);
		this.$el.find('.finish__form-h').html(txt);
	},

	updatePrice: function(e) {
		var num = parseInt($(e.target).val());
		if(!!num) {
			num = Handlebars.helpers._number_format(num).toString();
		}  else {
			num = 0;
		}
		this.$el.find('.showcase__form-price-val').html(num);
		this.$el.find('.finish__form-price-val').html(num);
	},

	updateShipLimit: function(e) {
		// var num = parseInt($(e.target).val());
		// if(!!num) {
		// 	num = Handlebars.helpers._number_format(num).toString();
		// }  else {
		// 	num = 0;
		// }
		// this.$el.find('.showcase__form-price-val').html(num);
		// this.$el.find('.finish__form-price-val').html(num);
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

	toggleOnReceiptComment: function(e) {
		this.$el
			.toggleClass('comment-editing',  true)
			.toggleClass('comment-can-edit', false)
			.toggleClass('comment-can-add',  false)

		this.$input_receipt_comment.focus();
		return false;
	},

	toggleOffReceiptComment: function(e) {
		var comment = $.trim(this.model.get('receipt_comment'));
		if(!!comment) {
			this.$el
				.toggleClass('comment-editing',  false)
				.toggleClass('comment-can-edit', true)
				.toggleClass('comment-can-add',  false)
		} else {
			this.$el
				.toggleClass('comment-editing',  false)
				.toggleClass('comment-can-edit', false)
				.toggleClass('comment-can-add',  true)
		}

		return false;
	},


	cancelReceiptComment: function(e) {
		this.$input_receipt_comment.val(this.model.get('receipt_comment'));
		this.toggleOffReceiptComment();
		return false;
	},

	saveReceiptComment: function(e) {
		var receipt_comment = $.trim(this.$input_receipt_comment.val());
		this.model.set('receipt_comment', receipt_comment);
		this.$receipt_comment.text(receipt_comment);

		this.toggleOffReceiptComment();
		return false;
	},

	clear: function() {
		this.hideErrors();
		// this.$input_name.val('');
		// this.$input_link.val('');
		// this.$input_file_process.width(0);
	},

	sleep: function(model, value, options) {
		$('html').off('click.paysystem');
		if(value) {
			this.undelegateEvents();
			this.clear();
		} else {
			this.delegateEvents();
		}
	},
});

