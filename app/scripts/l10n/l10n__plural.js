qst = qst || {};
qst.l10n = qst.l10n || {};
qst.l10n.plural = {
	processors: {
		/**
		 * Helper for numeric support for EN Handlebars 
		 * sample {{_decl 123 '["day", "days"]'}}
		 */
		en: function en(num, formsJSON) {
			var forms = _.toJSON(formsJSON.toString());
			if(num == 1) {
				return forms[0];
			} else {
				return forms[1];
			}

			return '';
		},
		/**
		 * Helper for numeric support for RU Handlebars 
		 * sample {{_decl 123 '["день","дня","дней"]'}}
		 */
		ru: function ru(num, formsJSON) {
			var forms = _.toJSON(formsJSON.toString());
			if(num % 10 == 1 && num % 100 != 11) {
				return forms[0];
			} else if ((num % 10 >= 2) && (num % 10 <= 4) && (num % 100 < 10 || num % 100 >= 20)) {
				return forms[1];
			} else {
				return forms[2];
			}
			return '';
		},
		/**
		 * Helper for numeric support for KO Handlebars 
		 * sample {{_decl 123 '["день"]'}}
		 */
		ko: function ko(num, formsJSON) {
			var forms = _.toJSON(formsJSON.toString());
			return forms[0];
		},
		/**
		 * Helper for numeric support for JA Handlebars 
		 * sample {{_decl 123 '["день"]'}}
		 */
		ja: function ja(num, formsJSON) {
			var forms = _.toJSON(formsJSON.toString());
			return forms[0];
		},
		/**
		 * Helper for numeric support for ZH Handlebars 
		 * sample {{_decl 123 '["день"]'}}
		 */
		zh: function zh(num, formsJSON) {
			var forms = _.toJSON(formsJSON.toString());
			return forms[0];
		}
	},

	// 'comment': {
	// 	en: '["comment", "comments"]',
	// 	ru: '["комментарий", "комментария", "комментариев"]',
	// 	ko: '["코멘트"]',
	// 	ja: '["コメント"]',
	// 	zh: '["评论"]'
	// },

	// 'like': {
	// 	en: '["like", "likes"]',
	// 	ru: '["лайк", "лайка", "лайков"]',
	// 	ko: '["좋아하"]',
	// 	ja: '["いいね"]',
	// 	zh: '["人喜欢"]'
	// },

	// 'photo': {
	// 	en: '["photo", "photos"]',
	// 	ru: '["фото", "фото", "фото"]',
	// 	ko: '["포토"]',
	// 	ja: '["写真"]',
	// 	zh: '["照片"]'
	// },

	// 'follower': {
	// 	en: '["follower", "followers"]',
	// 	ru: '["подписчик", "подписчика", "подписчиков"]',
	// 	ko: '["팔로워"]',
	// 	ja: '["フォロワー"]',
	// 	zh: '["关注者"]'
	// },

	// 'following': {
	// 	en: '["following", "following"]',
	// 	ru: '["подписка", "подписки", "подписки"]',
	// 	ko: '["팔로잉"]',
	// 	ja: '["フォロー"]',
	// 	zh: '["正在关注"]'
	// },

	'item': {
		en: '["item", "items"]',
		ru: '["предложение", "предложения", "предложений"]'
	},

}