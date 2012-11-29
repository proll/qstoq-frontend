/**
 * Модуль для валидации карт.
 * @author proll
 * @link http://flashroll.ru
 *
*/
var card_validator = function($) {
	var card_types, get_card_type, is_valid_length, is_valid_luhn, normalize, validate, validate_number;
	card_types = [
		/*Считаем что не используем эти типы карт*/
		// {
		// 	name: 'diners_club_carte_blanche',
		// 	pattern: /^30[0-5]/,
		// 	valid_length: [14]
		// }, 
		// {
		// 	name: 'diners_club_international',
		// 	pattern: /^36/,
		// 	valid_length: [14]
		// }, 
		// {
		// 	name: 'jcb',
		// 	pattern: /^35(2[89]|[3-8][0-9])/,
		// 	valid_length: [16]
		// }, {
		// 	name: 'laser',
		// 	pattern: /^(6304|670[69]|6771)/,
		// 	valid_length: [16, 17, 18, 19]
		// }, 
		{
			name: 'amex',
			pattern: /^3[47]/,
			valid_length: [15]
		}, 
		{
			name: 'visa_electron',
			pattern: /^(4026|417500|4508|4844|491(3|7))/,
			valid_length: [16]
		}, 
		{
			name: 'visa',
			pattern: /^4/,
			valid_length: [16]
		}, 
		{
			name: 'mastercard',
			pattern: /^5[1-5]/,
			valid_length: [16]
		}, 
		{
			name: 'maestro',
			pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
			valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
		}, 
		{
			name: 'discover',
			pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
			valid_length: [16]
		}
	];
	get_card_type = function(number) {
		var card_type, _i, _len;
		for (_i = 0, _len = card_types.length; _i < _len; _i++) {
			card_type = card_types[_i];
			if (number.match(card_type.pattern)) {
				return card_type;
			}
		}
		return null;
	};
	// алгоритм проверки номера карты 
	// http://en.wikipedia.org/wiki/Luhn_algorithm
	is_valid_luhn = function(number) {
		var digit, n, sum, _i, _len, _ref;
		sum = 0;
		_ref = number.split('').reverse();
		for (n = _i = 0, _len = _ref.length; _i < _len; n = ++_i) {
			digit = _ref[n];
			digit = +digit;
			if (n % 2) {
				digit *= 2;
				if (digit < 10) {
					sum += digit;
				} else {
					sum += digit - 9;
				}
			} else {
			  sum += digit;
			}
		}
		return sum % 10 === 0;
	};
	// проверка номера карты по длине
	is_valid_length = function(number, card_type) {
	  var _ref;
	  return true;
	  // return _ref = number.length, __indexOf.call(card_type.valid_length, _ref) >= 0;
	};
	validate_number = function(number) {
		var card_type = get_card_type(number),
			luhn_valid = false,
			length_valid = false;
		if (card_type != null) {
			luhn_valid = 	is_valid_luhn(number);
			length_valid = 	is_valid_length(number, card_type);
		}
		return {
			card_type: card_type,
			luhn_valid: luhn_valid,
			length_valid: length_valid
		};
	};
	validate = function(number) {
		number = normalize(number);
		return validate_number(number);
	};
	normalize = function(number) {
		return number.replace(/[ -]/g, '');
	};
	
	return {
		validate: validate
	};

}();

/**
 * Модуль для оплаты пластиковыми картами.
 * @author proll
 * @link http://flashroll.ru
 *
 * @include "circles_preloader.js"
 */
$(function(){
	var root = $(document.body),
		complete_step_url = 'http://' + window.location.host + '/api/payment/card-complete/',
		section = root.find('.payment-card'),
		section_form = 		section.find('.payment-card-form'),
		pay_system_icon = 	section_form.find('.payment-card-type-icon'),
		cur_system = "",
		card_validation_object,

		card_type = section_form.find('input[name=card-type]').change(function(e) {
			cur_system = $(this).val();
			
		}),
		card_num = section_form.find('input[name=card-num]').keyup( function(e){
			var num = $(this).val();

			card_validation_object = card_validator.validate(num);

			// если номер карты изменился и валиден
			if(!!card_validation_object.card_type) {
				if(card_validation_object.card_type.name!=cur_system) {
					cur_system = card_validation_object.card_type.name;
				}
			} else {
				if(!!cur_system)
					cur_system = "";
			}

			card_type.val(cur_system);
			pay_system_icon.attr('class','payment-card-type-icon cc-' + cur_system);
		}),

		// сохраняем указатели на поля
		fields = {
			card_type: 		card_type,
			card_num: 		card_num,
			card_cvc: 		section_form.find('input[name=card-cvc]'),
			card_valid_m: 	section_form.find('select[name=card-valid-m]'),
			card_valid_y: 	section_form.find('select[name=card-valid-y]'),
			card_cardholder:section_form.find('input[name=card-cardholder]'),
			amount: 		section_form.find('input[name=amount]'),
			item_id: 	section_form.find('input[name=item-id]')
		},
		is_locked = false,
		messages = {
			card_empty_field: 		'Вы не заполнили поле «{{s}}»',
			card_invalid_num: 		'Вы ввели номер карты в неправильном формате',
			card_invalid_cvc: 		'Вы ввели CVC-код карты в неправильном формате',
			card_expired: 			'Вы не можете воспользоваться просроченной картой',

			// сообщения с сервера
			invalid_card_number: 	'Вы ввели неправильный номер карты',
			transaction_declined: 	'Ошибка при оформлении платежа: транзакция была отклонена. Попробуйте повторить попытку через 5 минут',
			fraud_detected: 		'Ошибка при оформлении платежа, повторите попытку через минуту',
			soap_fault_error: 		'Ошибка при оформлении платежа: SOAP fault error. Попробуйте повторить попытку через 5 минут',
			payment_gateway_error: 	'Ошибка при оформлении платежа: payment gateway error. Попробуйте повторить попытку через 5 минут',
			server_error: 			'Произошла системная ошибка, попробуйте повторить попытку чуть позже. Если все равно не получается — <a href="mailto:support@bigbuzzy.ru">напиште</a> нам об этом.'
		},

		/** @type {jQuery} */
		// preloader_container = section.find('.payment-cards-preloader'),
		// preloader = circle_preloader(preloader_container[0], {
		// 	circles: 8,
		// 	radius: 12
		// }),

		/** @type {jQuery} */
		form;

	function isEmpty(fld) {
		return $.trim($(fld).val()) == '';
	}

	/**
	 * @return {String}
	 */
	function cleanupNumber(fld) {
		return $(fld).val().replace(/[^0-9]/g, '');
	}

	function getMessage(msg, misc) {
		var msg = !!messages[msg] ? messages[msg] : "какая то неизвестная ошибка (" + msg + ")";
		if(!!misc) msg = msg.replace("{{s}}", misc);
		return msg;
	}

	/**
	 * Проверяет правильность заполнения формы
	 */
	function validateForm() {
		// проверяем на заполненность определённые поля
		var is_valid = true;
		$.each(['card_num', 'card_cvc', 'card_cardholder'], function(i, n) {
			if (isEmpty(fields[n])) {
				is_valid = false;
				var label_text = fields[n].siblings("label").text();
				qp.processShow("error", getMessage("card_empty_field", label_text));
				return false;
			}
		});

		if (!is_valid)
			return false;

		// проверяем на корректность заполненных данных
		var card_num = qp.stringCleanNum(fields.card_num.val()),
			card_cvc = qp.stringCleanNum(fields.card_cvc.val());

		if (card_cvc.length < 3) {
			qp.processShow("error", getMessage('card_invalid_cvc'));
			return false;
		}

		// 100500 - тестовый номер карты
		if (card_num != "100500" && (!card_validation_object || !card_validation_object.luhn_valid || !card_validation_object.length_valid)) {
			qp.processShow("error", getMessage('card_invalid_num'));
			return false;
		}

		// проверяем дату
		var dt = new Date,
			cur_dt = dt.getFullYear() * 100 + dt.getMonth() + 1,
			user_date = parseInt('20' + fields.card_valid_y.val(), 10) * 100 + parseInt(fields.card_valid_m.val(), 10);

		if (user_date < cur_dt) {
			qp.processShow("error", getMessage('card_expired'));
			return false;
		}

		return true;
	}


	/**
	 * Пытаемся оплатить карточкой
	 */
	function tryToPay() {
		var timer_reached = false,
			response = null,

		is_locked = true;

		function checkStatus() {
			if (timer_reached && response) {
				// preloader_container.hide();
				// preloader.stop();
				is_locked = false;
				if (response.response == 'ok') {
					qp.processShow("success","ушел");
					// window.location.href = complete_step_url;
				} else {
					qp.processShow("error", getMessage(response.reason));
				}
			}
		}

		// preloader_container.show();
		// preloader.start();

		setTimeout(function() {
			timer_reached = true;
			checkStatus();
		}, 1000);

		$.post(
			qp.opts.apiPath + "purchase/"+fields.item_id.val(), 
			{
				amount: 		parseInt(fields.amount.val() || '0') + '.00',
				cardNumber: 	qp.stringCleanNum(fields.card_num.val()),
				cardholder: 	fields.card_cardholder.val(),
				ccv: 			qp.stringCleanNum(fields.card_cvc.val()),
				expMonth: 		fields.card_valid_m.val(),
				expYear: 		fields.card_valid_y.val(),
				type: 			fields.card_type.val(),
				item_id: 		fields.item_id.val()
			}, 
			function(data) {
				response = data;
				checkStatus();
			}, 
			'json'
		);
	}

	section_form.on("submit",function(/* Event */ evt) {
		if (validateForm() ) {
			tryToPay();
		}
		evt.preventDefault();
		evt.stopPropagation();;
		return false;
	});




	// submit_btn.click(function() {
	// 	section_form.submit();
	// });


	$('#fld-payment-value').val(fields.amount);
	// фикс месяца для карты
	var dt = new Date();
	fields.card_valid_m.val(dt.getMonth()+1).attr('selected',true);
});