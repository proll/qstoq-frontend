qst.PaySystemAddView = Backbone.View.extend({
	template: 'blocks/paysystemadd',
	// className: 'paysystemadd',

	events: {
		'submit .paysystemadd__form': 'save',
		'click .paysystemadd__form-submit-a': 'clickToSubmit',

		'keypress': 'hideErrors',
		'click': 	'hideErrors',
	},

	$form: null,

	initialize: function(options){
		if(options.model) {
			this.model = options.model;
		}

		this.template = qst.Templates.get(this.template);
		this.model.on('save:start', 	this.toggleLoadingOn, this);
		this.model.on('save:success', 	this.toggleLoadingOff, this);
		this.model.on('save:error', 	this.toggleLoadingOff, this);
		this.model.on('save:error', this.errorSave, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		// console.log(this.model.toJSON())
		this.$el.html(template);
		this.$form = 
			this.$el
				.find('.' + this.model.get('system') + '-row')
					.find('.paysystemadd__form');

		this.$error = 	this.$el.find('.paysystemadd__form-submit-error');
		this.$el.attr('class', this.model.get('system'))
	},

	// mark: function(e) {
	// 	console.log(e.target)
	// 	$(e.target).select();
	// },

	clickToSubmit: function(e) {
		e.stopPropagation();
		e.preventDefault();
		this.$form.submit();
	},

	toggleLoadingOff: function() {
		this.$el.toggleClass('loading', false);
	},

	save: function(e) {
		e.stopPropagation();
		e.preventDefault();

		this.hideErrors();

		var form_obj = this.serialize(),
			that = this;

		if (_.isEmpty(form_obj)){
			that.showError(qst.localize('Please enter all attributes', 'paysystemadd'))
		} else {
			var error = false;
			_.forEach(form_obj, function(val) {
				if(!val && val!==0) {
					that.showError(qst.localize('Please enter all attributes', 'paysystemadd'))
					error = true;
				}
			})

			if(!error) {
				that.model.save({data: form_obj});
			}
		}
	},

	serialize: function($form) {
		var $inputs = this.$form.find('input'),
			form_obj = {},
			$ti = '';

		$inputs.each(function(index,input) {
			var $input  = $(input);
			nm = $input.data('name');
			if(!!nm) {
				if($input.attr('type') !== 'checkbox') {
					form_obj[nm] = $input.val();
				} else {
					form_obj[nm] = $input.is(':checked') + 0;
				}
			}
		});
		return form_obj;
	},

	errorSave: function(error) {
		this.showError(qst.localize('Something went wrong...', 'misc'))
	},

	showError: function(txt) {
		this.$error.html(txt);
		this.$el.toggleClass('error', true);
	},
	
	hideErrors: function() {
		this.$el.toggleClass('error', false);
	},
});