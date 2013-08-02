qst.UploadCaptionView = Backbone.View.extend({
	template: "blocks/upload-caption",
	template_mentions: "misc/upload-mentions",
	tagName: "div",
	className: "upload__caption-row",

	events: {
		'click .i-input-ment': 'activateMentionList',
		'click .i-input-hash': 'activateHashList',

		'keydown .upload__caption-input': 'keydown',
		'keyup .upload__caption-input': 'keyup',
		'click .upload__caption-input': 'keyup',

		// 'change .upload__caption-input': 'updateText',
		// 'blur .upload__caption-input': 'blurInputProcessed',


		'mouseover .upload__mention-item-a': 'hoverActivateMentionListItems',
		'click .upload__mention-item-a': 'clickMentionListItem',
	},

	initialize: function(options){
		if(!!options.template) {
			this.template = options.template;
		}
		this.template = qst.Templates.get(this.template);
		this.model.on('change:input_mode', this.changeInputMode, this);

		this.model.on('change:current_mention', this.clearMentionListItems, this);
		this.model.on('mentionload:success', this.renderMentions, this);
		this.model.on('mentionload:error', this.errorResults, this);

		this.model.on('change:mention_loaded_index', this.activateMentionListItem, this);
		this.model.on('mentionitem:return', this.clickCurrentMentionListItem, this);

		this.model.on('needblur', this.blurInput, this);
	},

	render: function(){
		var template = this.template(this.model.toJSON());
		this.$el.html(template);

		this.$input = this.$el.find('.upload__caption-input');
		this.$mentions_results = this.$el.find('.upload__caption-mentions-results');
		this.delegateEvents();
	},

	activateMentionList: function() {
		this.focusInput();
		var input = this.$input.get(0),
			txt = this.$input.val(),
			sel_start = input.selectionStart,
			sel_end = input.selectionEnd;

		this.$input.val(txt.substring(0, sel_start)+'@'+txt.substring(sel_end));
		this.setCaretToPos(input, sel_end + 1);
		this.$input.trigger('keyup');
	},

	activateHashList: function() {
		this.focusInput();
		var input = this.$input.get(0),
			txt = this.$input.val(),
			sel_start = input.selectionStart,
			sel_end = input.selectionEnd;

		this.$input.val(txt.substring(0, sel_start)+'#'+txt.substring(sel_end));
		this.setCaretToPos(input, sel_end + 1);
		this.$input.trigger('keyup');
	},

	updateModelCaption: function (txt) {
		if(!txt) {
			txt = this.$input.val();
		}
		this.model.set('caption', txt);
	},

	focusInput: function() {
		this.$input.focus();
	},

	blurInput: function() {
		this.model.set('input_mode', 'none');
		this.model.set('current_mention', '');
		this.$el.toggleClass('loaded', false);
		this.$input.blur();
	},

	errorResults: function() {
		this.model.set('input_mode', 'none');
	},

	renderMentions: function() {
		var template = qst.Templates.get(this.template_mentions);
		this.$mentions_results.html(template(this.model.toJSON()))

		this.$el.toggleClass('loaded', true);

		this.$mentions_results_items = this.$el.find('.upload__mention-item-a');
		this.delegateEvents();
	},

	activateMentionListItem: function(model, value) {
		this.$mentions_results_items
			.toggleClass('active', false)
			.eq(value)
				.toggleClass('active', true);
	},

	hoverActivateMentionListItems: function(e) {
		this.activateMentionListItem(this.model, $(e.currentTarget).data('index'));
	},

	clearMentionListItems: function() {
		console.log('clearMentionListItems');
		this.$el.toggleClass('loaded', false);
		this.$mentions_results.html('');
	},

	clickCurrentMentionListItem: function() {
		this.clickMentionListItem({
			currentTarget: this.$mentions_results_items
				.eq(this.model.get('mention_loaded_index')).get(0)
		});
		return false;
	},

	clickMentionListItem: function(e) {
		var $mention = $(e.currentTarget);

		this.model.addMention($mention.data('uid'), $mention.data('name'));
		this.replaceCursorMention($mention.data('name'));

		return false;
	},

	replaceCursorMention: function(mention_name) {
		mention_name  = mention_name + ' ';

		var txt = this.$input.val(),
			re = new RegExp('@'+this.model.get('current_mention'), 'g'),
			replaced_txt = txt.replace(re, mention_name);

		if(replaced_txt == txt) return;

		this.model.set('current_mention', '');
		this.model.set('input_mode', 'none');
		this.$input.val(replaced_txt);

		var cursor_new_pos = replaced_txt.lastIndexOf(mention_name);
		if(cursor_new_pos != -1) {
			cursor_new_pos += mention_name.length;
			this.setCaretToPos(this.$input.get(0), cursor_new_pos);
		}
	},


	clearHashes: function() {
		// this.$el.toggleClass('loaded', false);
		// this.$mentions_results.html('');
	},

	keyup: function (e) {
		var txt = this.$input.val() || '',
			cursor_position = this.$input.get(0).selectionStart || 0,
			key_processed = this.model.processKey(e.keyCode, txt, cursor_position);

		return key_processed;
	},


	keydown: function (e) {
		if (e.keyCode === this.model.KEY.UP || e.keyCode === this.model.KEY.DOWN) {
			e.stopPropagation();
			return false;
		}
	},

	changeInputMode: function(model, input_mode_value) {
		if (input_mode_value === 'none') {
			this.$el
				.toggleClass('hash-active', false)
				.toggleClass('ment-active', false);

		} else if (input_mode_value === 'hash') {
			this.$el
				.toggleClass('hash-active', true)
				.toggleClass('ment-active', false);

		} else if (input_mode_value === 'mention') {
			this.$el
				.toggleClass('hash-active', false)
				.toggleClass('ment-active', true);

		}
	},


	setSelectionRange: function(input, selectionStart, selectionEnd) {
		if (input.setSelectionRange) {
			input.focus();
			input.setSelectionRange(selectionStart, selectionEnd);
		} else if (input.createTextRange) {
			var range = input.createTextRange();
			range.collapse(true);
			range.moveEnd('character', selectionEnd);
			range.moveStart('character', selectionStart);
			range.select();
		}
	},

	setCaretToPos: function(input, pos) {
		this.setSelectionRange(input, pos, pos);
	}
});

