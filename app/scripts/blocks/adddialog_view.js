qst.AddDialogView = Backbone.View.extend({
	template: "blocks/adddialog",
	tagName: "div",
	className: "adddialog",

	events: {
		"click a.adddialog__add": "showDialog",
		'click a.item__types-item': 'clickState',
		'click .adddialog__header': 'hideDialog',
		'click .adddialog__submit-a': 'submitForm',
		'change #file_uploader': 'upload',
		'keyoress': 	'hideErrors',
		'click': 		'hideErrors',
		'submit form': 	'submit'
	},

	initialize: function(options){
		this.render();
		this.model.on('add:success', this.hideDialog, this);
		this.model.on('change:sleeped', this.sleep, this);
		this.model.on('change:state', this.changeState, this);
		this.model.on('change:url', this.changeLink, this);
	},


	render: function(){
		this.template = qst.Templates.get(this.template);
		var template = this.template(this.model.toJSON());

		this.$el.append(template);
		this.$state_items = this.$el.find('.item__types-item');
		this.$form = this.$el.find('form');
		this.$input_name = this.$form.find('input[name=name]');
		this.$input_price = this.$form.find('input[name=price]');
		this.$input_link = this.$form.find('input[name=link]');
		this.$input_file = this.$form.find('input[name=file]');
		this.$input_file_title = this.$form.find('.itemedit__inp-file-title');
		this.$input_file_process = this.$form.find('.itemedit__inp-file-process');
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

		if(value === 'file') {
			this.$input_link.attr('disabled', 'disabled');
		} else {
			this.$input_link.removeAttr('disabled');
		}
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
		this.$input_file.val('');
		this.updateFileName(qst.localize('Drop or choose a file', 'itemlist'));
		this.updateFileProcess(0);
		// this.changeState(null'link')
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
	}


	// $upload_attach_ctrl.change(function (e) {
	// 		// îòñûëàåì ôàéëû ïî îäíîìó è âû÷èòûâàåì èç input[type=file] ñ multiple
	// 		$.each(this.files, function(i, file){
	// 			var $new_item = $('<div class="sg-upload-item"><img src=""/><div class="sg-progress"></div><i class="icon i-uclose"></i></div>'),
	// 				$new_item_progress = $new_item.find(".sg-progress");

	// 			$new_item.find(".i-uclose").on("click", function (e) {
	// 				$new_item.fadeOut();
	// 			});

	// 			if(!!window.FileReader) {
	// 				var reader = new FileReader();
	// 					reader.onload = function (e) {
	// 						$new_item.find("img").attr('src', e.target.result);
	// 					}
	// 				reader.readAsDataURL(file);
	// 			} else {
	// 				$new_item.toggleClass("no-img", true);
	// 			}

	// 			var data = new FormData();
	// 				data.append('file-upload', file);


	// 			// the $.ajax() method and the like doesn’t allow for it and 
	// 			// I really want to display an upload progress bar, dammit!
	// 			// course of this we have to use XHR
	// 			var xhr = new XMLHttpRequest();

	// 			xhr.upload.addEventListener('progress',function(ev){
	// 				$new_item_progress.width(parseInt(100 * ev.loaded/ev.total)+"%");
	// 			}, false);

	// 			xhr.onreadystatechange = function(ev){
	// 				if (xhr.readyState == 4) {
	// 					if(xhr.status == 200) {
	// 						var data = this.response;
	// 						console.log(data);
	// 						if (typeof(data) == 'string') {
	// 						  	data = $.parseJSON(data);
	// 						}
	// 						// äîïîëíåíèå äàííûìè äëÿ ôîðìèðîâàíèÿ attach_file
	// 						if(!!data.success && !!data.image) {
	// 							$new_item.data("image", data.image);
	// 						} else if (!!data.error && !!data.error_desc) {
	// 							console.log(data.error_desc);
	// 							$new_item.fadeOut();
	// 						} else {
	// 							$new_item.fadeOut();
	// 						}
	// 					} else {
	// 						// TODO îáðàáîòêà îøèáîê çàãðóçêè
	// 						console.log(file.name + ":" + "ERROR: " + xhr.readyState + ":" + xhr.status);
	// 						$new_item.fadeOut();
	// 					}
	// 					$new_item_progress.slideUp(400);
	// 				}
	// 			};

	// 			xhr.open('POST', '/uploads.html', true);
	// 			xhr.send(data);

	// 			$upload_container.after($new_item);
	// 			upload_count++;
	// 		});
	// 	});

});

