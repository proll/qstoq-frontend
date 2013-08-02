qst.UploadCaption = Backbone.Model.extend({
	url: '/api/photo/usertag/userlist/',
	mention_interval: 0,
	mention_xhr: null,

	KEY:{ BACKSPACE : 8, TAB : 9, RETURN : 13, ESC : 27, LEFT : 37, UP : 38, RIGHT : 39, DOWN : 40, COMMA : 188, SPACE : 32, HOME : 36, END : 35 },

	defaults: {
		limit: 	10,
		type:  	'qst',
		search: '',
		input_mode: 'none',

		users:  {
			list:[]
		},
		dictionary_hashes: [],
		searched_hashes: [],

		mention_loading: false,
		mention_loaded_index: -1,

		hash_loaded_index: -1,


		current_mention: '',
		current_hash: '',

		mentions: [],

		caption: '',

	},

	initialize: function (options) {
		this.view = new qst.UploadCaptionView({model:this});
		this.view.render();

		this.on('change:current_mention', this.smartMentionRequest, this);
	},

	smartMentionRequest: function (model, value) {
		
		var that = this;

		clearInterval(this.mention_interval);
		if(that.mention_xhr) {
			this.mention_xhr.abort();
		}

		if($.trim(value) == '') {
			return false;
		} else {
			this.mention_interval = setTimeout(function(){
				that.mention_xhr = that.fetch();
			}, 300);
		}
	},


	// forceMentionRequest: function () {
	// 	var that = this;

	// 	clearInterval(this.mention_interval);
	// 	if(that.mention_xhr) {
	// 		this.mention_xhr.abort();
	// 	}

	// 	this.mention_interval = setTimeout(function(){
	// 		that.mention_xhr = that.fetch();
	// 	}, 300);
	// },

	getCaption: function getCaption () {
		this.view.updateModelCaption();
		// replace all mentions
		var mentions = this.get('mentions'),
			caption = this.get('caption'),
			re;
		for (var i = mentions.length - 1; i >= 0; i--) {
			var re = new RegExp(mentions[i].name, 'gi');

			caption = caption.replace(re, function(match){
				return '[id'+mentions[i].id+'|'+match+']';
			});
		};
		return $.trim(caption);
	},

	fetch: function (options) {
		options = options || {};
		options.type = "post";
		options.data = options.data || {
			limit: 	this.get('limit'),
			type:  	this.get('type'),
			search: this.get('current_mention'),
		};
		
		options.success  	= _.bind(this.success, this);
		options.error  		= _.bind(this.error, this);

		this.trigger("mentionload:start");
		this.set('mention_loading', true);

		return Backbone.Model.prototype.fetch.call(this, options);
	},


	success: function (model, response, options) {
		response = _.toJSON(response);
		this.set(response);
		this.set('mention_loading', false);

		if(!response.error) {
			this.trigger("mentionload:success");
		} else {
			this.trigger("mentionload:error");
		}
	},

	error: function (model, xhr, options) {
		this.set('mention_loading', false);
		this.trigger("mentionload:error")
	},


	processKey: function(key, txt, pos) {
		if (key === this.KEY.UP || key === this.KEY.DOWN) {
			if(key === this.KEY.UP) {
				this.mentionUp();
			} else {
				this.mentionDown();
			}
			return false;
		}

		if (key === this.KEY.RETURN) {
			if(this.get('mention_loaded_index') != this.defaults.mention_loaded_index) {
				this.trigger('mentionitem:return');
				this.set('mention_loaded_index', this.defaults.mention_loaded_index, {silent: true})
			}
			return true;
		}

		this.set('input_mode', 'none');
		this.set('current_mention', '');


		if (key === this.KEY.ESC || key === this.KEY.TAB){
			this.trigger('needblur');
			return false;
		}



		var txt_segment = txt.substring(0, pos),
			last_hash_position = txt_segment.lastIndexOf('#'),
			last_ment_position = txt_segment.lastIndexOf('@');

		if(last_hash_position > last_ment_position) {
			if(last_hash_position != -1) {
				var maby_hash_segment = txt_segment.substring(last_hash_position, pos);

				if(maby_hash_segment !== '#' && maby_hash_segment.indexOf(' ') === -1) {
					this.set('input_mode', 'hash');

					var after_cursor = txt.substring(pos),
						end_hash_txt_position = after_cursor.indexOf(' ');

					var hash_txt = '';
					if(end_hash_txt_position === -1) {
						hash_txt = txt.substring(last_hash_position+1);
					} else {
						hash_txt = txt.substring(last_hash_position+1, pos + end_hash_txt_position);
					}
					this.set('current_hash', hash_txt);

					console.log(txt);
					console.log(hash_txt);
				}
			}
		} else if (last_hash_position < last_ment_position){
			if(last_ment_position != -1){
				var maby_ment_segment = txt_segment.substring(last_ment_position, pos);
				
				if(maby_ment_segment !== '@' && maby_ment_segment.indexOf(' ') === -1) {
					this.set('input_mode', 'mention');

					var after_cursor = txt.substring(pos),
						end_ment_txt_position = after_cursor.indexOf(' ');

					var ment_txt = '';
					if(end_ment_txt_position === -1) {
						ment_txt = txt.substring(last_ment_position + 1);
					} else {
						ment_txt = txt.substring(last_ment_position + 1, pos + end_ment_txt_position);
					}
					this.set('current_mention', ment_txt);

					console.log(txt);
					console.log(ment_txt);
				}
			}
		}

		return true;
	},

	addMention: function(mention_id, mention_name) {
		var mentions = this.get('mentions');
		// serch for already added mentions
		for (var i = mentions.length - 1; i >= 0; i--) {
			if(mentions[i].id == mention_id) {
				return false;
			}
		};

		mentions.push({
			id: mention_id,
			name: mention_name
		});
		return true;
	},

	addHash: function(hash_name) {
		var dictionary_hashes = this.get('dictionary_hashes');
		// serch for already added mentions
		for (var i = dictionary_hashes.length - 1; i >= 0; i--) {
			if(dictionary_hashes[i] == hash_name) {
				return false;
			}
		};

		dictionary_hashes.push({
			id: mention_id,
			name: mention_name
		});

		this.saveUserHashes(dictionary_hashes);
		return true;
	},


	mentionUp: function() {
		if(!this.get('mention_loading') && this.get('users').list.length) {
			if(this.get('mention_loaded_index') <= 0) {
				this.set('mention_loaded_index', this.get('users').list.length - 1)
			} else {
				this.set('mention_loaded_index', this.get('mention_loaded_index') - 1)
			}
		}
	}, 

	mentionDown: function() {
		if(!this.get('mention_loading') && this.get('users').list.length) {
			if(this.get('mention_loaded_index') >= this.get('users').list.length - 1) {
				this.set('mention_loaded_index', 0)
			} else {
				this.set('mention_loaded_index', this.get('mention_loaded_index') + 1)
			}	
		}
	},


	hashUp: function() {
		if(this.get('searched_hashes').length) {
			if(this.get('hash_loaded_index') <= 0) {
				this.set('hash_loaded_index', this.get('searched_hashes').length - 1)
			} else {
				this.set('hash_loaded_index', this.get('hash_loaded_index') - 1)
			}
		}
	}, 

	hashDown: function() {
		if(this.get('searched_hashes').length) {
			if(this.get('hash_loaded_index') >= this.get('searched_hashes').length - 1) {
				this.set('hash_loaded_index', 0)
			} else {
				this.set('hash_loaded_index', this.get('hash_loaded_index') + 1)
			}	
		}
	},











	remove: function () {
		clearInterval(this.mention_interval);
		this.stopListening();
		this.clear({silent: true});
		this.view.remove();
	},

});