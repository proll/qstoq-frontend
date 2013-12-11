qst = qst || {};
qst.l10n = qst.l10n || {};
qst.l10n.paysystemadd = {
	'qiwi_h': {
		en: 'Qiwi connection',
		ru: 'Подключение Qiwi',
	},

	'qiwi_merch_id': {
		en: 'Merchant ID',
		ru: 'ID магазина'
	},
	'qiwi_pass': {
		en: 'Password',
		ru: 'Пароль магазина'
	},

	'qiwi_itm_1': {
		en: 'Register in the Qiwi service as a merchant (<a href="http://ishopnew.qiwi.ru" target="_blank">http://ishopnew.qiwi.ru</a>). Choose one type of partnership - as a legal entity that allows you to withdraw to your bank account or as a private person',
		ru: 'Зарегистрируйтесь на сайте Qiwi как магазин: <a href="http://ishopnew.qiwi.ru" target="_blank">http://ishopnew.qiwi.ru</a>. Выберите одну из удобных форм сотрудничества: как юрлицо с выводом средств на расчетный счет, либо как частное лицо.'
	},

	'qiwi_itm_2': {
		en: 'During registration set a name of your shop. You can set qstoq.me as an address.',
		ru: 'При регистрации укажите название вашего магазина. В качестве сайта можете указать qstoq.me.'
	},

	'qiwi_itm_3': {
		en: 'After registration and a couple of days you will get the a merchant ID and a password',
		ru: 'После регистрации, в течении нескольких дней вы получите идентификатор магазина ID магазина и пароль'
	},

	'qiwi_itm_4': {
		en: 'Log in to the Qiwi profile. On the <strong>Settings</strong> tab set <strong>success URL</strong> and <strong>error URL</strong> to <br/><mark>http://qstoq.me/v1/qiwi/return</mark>',
		ru: 'Войдите в личный кабинет Qiwi. Во вкладке <strong>Настройки</strong> укажите <strong>URL для отправки в случае успешной оплаты счёта</strong> и <strong>URL для отправки в случае ошибки</strong>: <br/><mark>http://qstoq.me/v1/qiwi/return</mark>'
	},

	'qiwi_itm_5': {
		en: 'On the tab <strong>Connection types</strong> activate all protocols. On item <strong>SOAP-protocol</strong>, press <strong>Next</strong>. On the new page in field <strong>URL</strong> set <br/><mark>http://qstoq.me/v1/qiwi/{{user_id}}</mark><br/>Turn off <strong>Use signature</strong>.',
		ru: 'Во вкладке <strong>Способы подключений</strong> активируйте все протоколы. В пункте <strong>SOAP-протокол</strong>, нажимте <strong>Далее</strong>. На открывшейся странице в поле <strong>URL</strong> укажите: <br/><mark>http://qstoq.me/v1/qiwi/{{user_id}}</mark><br/>Отключите <strong>Использовать подпись</strong>.'
	},

	'qiwi_itm_6': {
		en: 'To apply changes press <strong>Save change</strong>',
		ru: 'Для сохранения данных, нажмите <strong>Изменить</strong>'
	},

	'Save': {
		en: 'Save',
		ru: 'Сохранить'
	},

	'paypal_h': {
		en: 'Paypal connection',
		ru: 'Подключение Paypal',
	},

	'paypal_merch_id': {
		en: 'ClientID',
		ru: 'ClientID'
	},
	'paypal_secret': {
		en: 'Secret',
		ru: 'Secret'
	},

	'paypal_itm_1': {
		en: 'Register and log in to <a href="https://www.paypal.com/" target="_blank">Paypal</a>',
		ru: 'Зарегистрируйтесь и войдите в свой аккаунт <a href="https://www.paypal.com/" target="_blank">Paypal</a>'
	},

	'paypal_itm_2': {
		en: 'Go to <strong>Profile -> More Options -> My Selling Tools</strong>. Find <strong>Instant payment notifications</strong> and click <strong>Update</strong>. On a new page <strong>Choose IPN Settings</strong>, toggle on <strong>Receive IPN Messages</strong> and set <strong>Notification URL</strong> to <mark>http://qstoq.me/v1/paypal/{{user_id}}</mark>',
		ru: 'Перейдите в <strong>Профиль -> Дополнительные функции -> Мои инструменты продаж</strong>. Найдите в списке параметров <strong>Уведомления о мгновенных платежах</strong> и нажмите <strong>Обновить</strong>. На открывшейся странице нажмите <strong>Выбрать параметры уведомлений</strong>, отметьте <strong>Доставка сообщений</strong> и в поле <strong>URL-адрес для уведомления</strong> введите: <mark>http://qstoq.me/v1/paypal/{{user_id}}</mark>'
	},

	'paypal_itm_3': {
		en: 'Go to the developer site <a href="https://developer.paypal.com" target="_blank">https://developer.paypal.com</a> to the <strong>Applications</strong> tab',
		ru: 'Перейдите в раздел для разработчиков: <a href="https://developer.paypal.com" target="_blank">https://developer.paypal.com</a>, во вкладку <strong>Applications</strong>'
	},

	'paypal_itm_4': {
		en: 'Click <strong>Create App</strong> and then name your shop',
		ru: 'Создайте приложение нажав <strong>Create App</strong>, введите название вашего магазина'
	},

	'paypal_itm_5': {
		en: 'Click <strong>Live credentials</strong>, then copy <strong>ClientID</strong> and <strong>Secret</strong>.',
		ru: 'Кликните <strong>Live credentials</strong> и скопируйте <strong>ClientID</strong> и <strong>Secret</strong>.'
	},
}