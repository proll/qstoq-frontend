qst = qst || {};
qst.l10n = qst.l10n || {};
qst.l10n.paysystemadd = {
	'Please enter all attributes': {
		en: 'Please fill all fields',
		ru: 'Пожалуйста заполните все поля'
	},

	'Save': {
		en: 'Save',
		ru: 'Сохранить'
	},

	'assist_h': {
		en: 'Assist connection (legal entity only)',
		ru: 'Подключение Assist (только юр.лица)',
	},

	'assist_merchant_id': {
		en: 'Merchant ID',
		ru: 'ID магазина'
	},
	'assist_login': {
		en: 'Login',
		ru: 'Логин'
	},
	'assist_password': {
		en: 'Password',
		ru: 'Пароль'
	},
	'assist_salt': {
		en: 'Secret',
		ru: 'Секрет'
	},

	'assist_itm_1': {
		en: 'To sign in Assist system you have to fill the registration form <a href="http://www.assist.ru/shop_register.htm" target="_blank">http://www.assist.ru/shop_register.htm</a>',
		ru: 'Чтобы подключиться к системе Assist Вам необходимо заполнить заявку на регистрацию <a href="http://www.assist.ru/shop_register.htm" target="_blank">http://www.assist.ru/shop_register.htm</a>'
	},

	'assist_itm_2': {
		en: 'After that Assist manager will contact you, will check your information and will help you to choose a bank account of the system.',
		ru: 'После этого с Вами свяжется сотрудник компании Assist, уточнит представленную Вами информацию и поможет с выбором расчетного банка системы.'
	},

	'assist_itm_3': {
		en: 'After clearing out all the legal details, log in to the Personal merchant cabinet <a href="https://account.paysecure.ru" target="_blank">https://account.paysecure.ru</a>. Teke your <strong>Merchant ID</strong>.',
		ru: 'После того как все юридические формальности улажены, войдите в Личный Кабинет магазина <a href="https://account.paysecure.ru" target="_blank">https://account.paysecure.ru</a>. Запишите свой <strong>ID магазина</strong>.'
	},

	'assist_itm_4': {
		en: 'Go to the <strong>Users</strong>. Create a new user with <strong>RDS</strong> type, set <strong>Login</strong> and <strong>Password</strong>. User must have an access to <strong>Services</strong> only.',
		ru: 'Перейдите в раздел Пользователи. Создайте нового пользователя с типом <strong>RDS</strong>, задайте ему <strong>Логин</strong> и <strong>Пароль</strong>. Пользователь должен иметь доступ только к <strong>Services</strong>.'
	},

	'assist_itm_5': {
		en: 'On the Metchant\'s Settings choose your shop.',
		ru: 'На странице Настройки Мерчантов, выберите свой магазин.'
	},

	'assist_itm_6': {
		en: 'On tab <strong>Payments Settings</strong>.<br/><strong>URL_RETURN</strong>: <mark>http://qstoq.me/v1/assist/return</mark><br/><strong>Действие после авторизации укажите</strong>: Перейти по URL возврата.',
		ru: 'Вкладка <strong>Настройка Платежей</strong>.<br/><strong>URL_RETURN</strong>: <mark>http://qstoq.me/v1/assist/return</mark><br/><strong>Действие после авторизации укажите</strong>: Перейти по URL возврата.'
	},

	'assist_itm_7': {
		en: 'On tab <strong>Настройка отправки результатов платежей</strong>. You have to turn these options on: <strong>Отправка результатов оплат</strong>, <strong>Отправка результатов отмен</strong>, <strong>Отправка результатов подтверждений</strong>.<br/><strong>URL для отправки результатов</strong>: <mark>http://qstoq.me/v1/assist/{{s1}}</mark><br/><strong>Тип протокола</strong>: POST<br/><strong>Тип подписи</strong>: MD5<br/><strong>Секретное слово</strong>: <strong>Secret</strong>',
		ru: 'Вкладка <strong>Настройка отправки результатов платежей</strong>. Должны быть активированы только следующие опции: <strong>Отправка результатов оплат</strong>, <strong>Отправка результатов отмен</strong>, <strong>Отправка результатов подтверждений</strong>.<br/><strong>URL для отправки результатов</strong>: <mark>http://qstoq.me/v1/assist/{{s1}}</mark><br/><strong>Тип протокола</strong>: POST<br/><strong>Тип подписи</strong>: MD5<br/><strong>Секретное слово</strong>: <strong>Секрет</strong>'
	},

	'webmoney_h': {
		en: 'Webmoney connection',
		ru: 'Подключение Webmoney',
	},

	'webmoney_r_h': {
		en: 'Webmoney R Purse connection',
		ru: 'Подключение Webmoney R Кошелька',
	},

	'webmoney_z_h': {
		en: 'Webmoney Z Purse connection',
		ru: 'Подключение Webmoney Z Кошелька',
	},

	'webmoney_e_h': {
		en: 'Webmoney E Purse connection',
		ru: 'Подключение Webmoney E Кошелька',
	},

	'webmoney_merchant_id': {
		en: 'WMID',
		ru: 'WMID'
	},
	'webmoney_purse_id': {
		en: 'Purse ID',
		ru: 'Кошелек'
	},
	'webmoney_r_purse_id': {
		en: 'R Purse',
		ru: 'R Кошелек'
	},
	'webmoney_z_purse_id': {
		en: 'Z Purse',
		ru: 'Z Кошелек'
	},
	'webmoney_e_purse_id': {
		en: 'E Purse',
		ru: 'E Кошелек'
	},
	'webmoney_purse_key': {
		en: 'Secret key',
		ru: 'Секретный ключ'
	},

	'webmoney_itm_1': {
		en: 'Log in to WebMoney Merchant <a href="https://merchant.webmoney.ru" target="_blank">https://merchant.webmoney.ru</a>. Look up a top corner, there is an <strong>WMID</strong>, remember it.',
		ru: 'Войдите в систему WebMoney Merchant: <a href="https://merchant.webmoney.ru" target="_blank">https://merchant.webmoney.ru</a>. В левом верхнем углу будет указан <strong>WMID</strong>, запишите его.'
	},

	'webmoney_itm_2': {
		en: 'Got to the list of purses <a href="https://merchant.webmoney.ru/conf/purses.asp" target="_blank">https://merchant.webmoney.ru/conf/purses.asp</a>',
		ru: 'Перейдите к списку кошельков <a href="https://merchant.webmoney.ru/conf/purses.asp" target="_blank">https://merchant.webmoney.ru/conf/purses.asp</a>'
	},

	'webmoney_itm_3': {
		en: 'Choose a purse for payments (<strong>Purse</strong>) ant click <strong>Settings</strong>.',
		ru: 'Выберите кошелек, на который будет производиться платеж (<strong>Кошелек</strong>) и нажмите <strong>Настроить</strong>.'
	},

	'webmoney_r_itm_3': {
		en: 'Choose a purse for payments (<strong>R Purse</strong>) ant click <strong>Settings</strong>.',
		ru: 'Выберите кошелек, на который будет производиться платеж (<strong>R Кошелек</strong>) и нажмите <strong>Настроить</strong>.'
	},

	'webmoney_z_itm_3': {
		en: 'Choose a purse for payments (<strong>Z Purse</strong>) ant click <strong>Settings</strong>.',
		ru: 'Выберите кошелек, на который будет производиться платеж (<strong>Z Кошелек</strong>) и нажмите <strong>Настроить</strong>.'
	},

	'webmoney_e_itm_3': {
		en: 'Choose a purse for payments (<strong>E Purse</strong>) ant click <strong>Settings</strong>.',
		ru: 'Выберите кошелек, на который будет производиться платеж (<strong>E Кошелек</strong>) и нажмите <strong>Настроить</strong>.'
	},

	'webmoney_itm_4': {
		en: 'Set parameters:<br/><strong>Тестовый/Рабочий режимы:</strong> Рабочий<br/><strong>Secret Key</strong>: <strong>Secret key</strong> for Qstoq<br/><strong>Высылать Secret Key на Result URL, если Result URL обеспечивает секретность</strong>: uncheck<br/><strong>Передавать параметры в предварительном запросе</strong>: check<br/><strong>Result URL</strong>: <mark>http://qstoq.me/v1/webmoney/{{s1}}</mark><br/><strong>Success URL</strong>: <mark>http://qstoq.me/v1/webmoney/return</mark>, method POST<br/><strong>Fail URL</strong>: <mark>http://qstoq.me/v1/webmoney/return</mark>, method POST<br/><strong>Метод формирования контрольной подписи</strong>: MD5',
		ru: 'Выставьте следующие параметры:<br/><strong>Тестовый/Рабочий режимы:</strong> Рабочий<br/><strong>Secret Key</strong>: <strong>Секретный ключ</strong> для Qstoq<br/><strong>Высылать Secret Key на Result URL, если Result URL обеспечивает секретность</strong>: снять галочку<br/><strong>Передавать параметры в предварительном запросе</strong>: поставить галочку<br/><strong>Result URL</strong>: <mark>http://qstoq.me/v1/webmoney/{{s1}}</mark><br/><strong>Success URL</strong>: <mark>http://qstoq.me/v1/webmoney/return</mark>, метод POST<br/><strong>Fail URL</strong>: <mark>http://qstoq.me/v1/webmoney/return</mark>, метод POST<br/><strong>Метод формирования контрольной подписи</strong>: MD5'
	},

	'webmoney_itm_5': {
		en: 'Click <strong>Save</strong>.',
		ru: 'Нажмите <strong>Сохранить</strong>.'
	},

	'qiwi_h': {
		en: 'Qiwi connection',
		ru: 'Подключение Qiwi',
	},

	'qiwi_merchant_id': {
		en: 'Merchant ID',
		ru: 'ID магазина'
	},
	'qiwi_password': {
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
		en: 'On the tab <strong>Connection types</strong> activate all protocols. On item <strong>SOAP-protocol</strong>, press <strong>Next</strong>. On the new page in field <strong>URL</strong> set <br/><mark>http://qstoq.me/v1/qiwi/{{s1}}</mark><br/>Turn off <strong>Use signature</strong>.',
		ru: 'Во вкладке <strong>Способы подключений</strong> активируйте все протоколы. В пункте <strong>SOAP-протокол</strong>, нажмите <strong>Далее</strong>. На открывшейся странице в поле <strong>URL</strong> укажите: <br/><mark>http://qstoq.me/v1/qiwi/{{s1}}</mark><br/>Отключите <strong>Использовать подпись</strong>.'
	},

	'qiwi_itm_6': {
		en: 'To apply changes press <strong>Save change</strong>',
		ru: 'Для сохранения данных, нажмите <strong>Изменить</strong>'
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
		en: 'Go to <strong>Profile -> More Options -> My Selling Tools</strong>. Find <strong>Instant payment notifications</strong> and click <strong>Update</strong>. On a new page <strong>Choose IPN Settings</strong>, toggle on <strong>Receive IPN Messages</strong> and set <strong>Notification URL</strong> to <mark>http://qstoq.me/v1/paypal/{{s1}}</mark>',
		ru: 'Перейдите в <strong>Профиль -> Дополнительные функции -> Мои инструменты продаж</strong>. Найдите в списке параметров <strong>Уведомления о мгновенных платежах</strong> и нажмите <strong>Обновить</strong>. На открывшейся странице нажмите <strong>Выбрать параметры уведомлений</strong>, отметьте <strong>Доставка сообщений</strong> и в поле <strong>URL-адрес для уведомления</strong> введите: <mark>http://qstoq.me/v1/paypal/{{s1}}</mark>'
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


	'robokassa_h': {
		en: 'Robokassa connection',
		ru: 'Подключение Робокассы',
	},

	'robokassa_merch_id': {
		en: 'Merchant ID',
		ru: 'ID магазина'
	},
	'robokassa_pass1': {
		en: 'Password 1',
		ru: 'Пароль 1'
	},
	'robokassa_pass2': {
		en: 'Password 2',
		ru: 'Пароль 2'
	},

	'robokassa_itm_1': {
		en: 'Register on robokassa.ru <a href="http://partner.robokassa.ru/Reg/Register" target="_blank">http://partner.robokassa.ru/Reg/Register</a>',
		ru: 'Зарегистрируйтесь на robokassa.ru: <a href="http://partner.robokassa.ru/Reg/Register" target="_blank">http://partner.robokassa.ru/Reg/Register</a>'
	},

	'robokassa_itm_2': {
		en: 'On your client cabinet in My shops add a new shop: <a href="http://partner.robokassa.ru/Shops/Add" target="_blank">http://partner.robokassa.ru/Shops/Add</a>',
		ru: 'В личном кабинете, в разделе Мои магазины, добавьте новый магазин: <a href="http://partner.robokassa.ru/Shops/Add" target="_blank">http://partner.robokassa.ru/Shops/Add</a>'
	},

	'robokassa_itm_3': {
		en: 'Next fill all required fields for the new shop',
		ru: 'Введите все требуемые настройки для создания нового магазина'
	},

	'robokassa_itm_4': {
		en: 'Go to the Technical settings tab',
		ru: 'Перейдите во вкладку Технические настройки'
	},

	'robokassa_itm_5': {
		en: 'Set <strong>Password1</strong> and <strong>Password2</strong>',
		ru: 'Задайте <strong>Пароль1</strong> и <strong>Пароль2</strong>'
	},

	'robokassa_itm_6': {
		en: 'Set <strong>ResultUrl</strong> to <mark>http://qstoq.me/v1/robokassa/{{s1}}</mark>. Qstoq needs this to know when Robokassa is getting payment.<br/>Sending method for Result Url set to <strong>POST</strong>.',
		ru: 'Укажите <strong>ResultUrl</strong> <mark>http://qstoq.me/v1/robokassa/{{s1}}</mark>. Этот параметр нужен для того чтобы Робокасса извещала Qstoq об оплате заказа.<br/>Метод отсылки данных по Result Url: <strong>POST</strong>.'
	},

	'robokassa_itm_7': {
		en: 'Set <strong>Success Url</strong> and <strong>Failure URL</strong> to <mark>http://qstoq.me/v1/robokassa/return</mark>, Sending method for both set to <strong>POST</strong>',
		ru: 'Укажите <strong>Success Url</strong> и <strong>Failure URL</strong>: <mark>http://qstoq.me/v1/robokassa/return</mark>, метод отсылки данных для обоих параметров: <strong>POST</strong>'
	},

	'robokassa_itm_8': {
		en: 'After you fill all params click <strong>Save</strong>. Then click on the <strong>Activation request</strong> button. We hope after a few days your account will be activated by the Robokassa support and you could receive payments.',
		ru: 'После того как все параметры заданы, нажмите <strong>Сохранить</strong>. Появится кнопка <strong>Запрос на активацию</strong>. После подачи запроса в течении нескольких дней ваш аккаунт будет активирован и вы сможете принимать платежи.'
	},


	'paymaster_h': {
		en: 'Paymaster connection (legal entity only)',
		ru: 'Подключение PayMaster (только юр.лица)',
	},

	'paymaster_merchant_id': {
		en: 'Merchant ID',
		ru: 'Идентификатор'
	},
	'paymaster_rest_login': {
		en: 'Service login',
		ru: 'Сервис логин'
	},
	'paymaster_rest_password': {
		en: 'Service password',
		ru: 'Сервис пароль'
	},

	'paymaster_itm_1': {
		en: 'Sign a contract with PayMaster: <a href="https://start.kkb.ru/signup" target="_blank">https://start.kkb.ru/signup</a>',
		ru: 'Заключите договор с PayMaster: <a href="https://start.kkb.ru/signup" target="_blank">https://start.kkb.ru/signup</a>'
	},

	'paymaster_itm_2': {
		en: 'Log in to yout PayMaster profile to the <strong>Site List</strong> page',
		ru: 'Войдите в личный кабинет PayMaster, в раздел <strong>Список сайтов</strong>'
	},

	'paymaster_itm_3': {
		en: 'Choose your site and click <strong>Settings</strong>',
		ru: 'Выберите свой сайт и нажмите <strong>Настройки</strong>'
	},

	'paymaster_itm_4': {
		en: 'On "Общая информация" site find <strong>Идентификатор</strong> and fill it to form one the right',
		ru: 'В разделе Общая информация, найдите параметр <strong>Идентификатор</strong> и заполните его в форму слева'
	},

	'paymaster_itm_5': {
		en: 'On "Технические параметры" site set<br/><strong>Тип подписи</strong>: MD5<br/><strong>Повторно отправлять Payment Notification при сбоях</strong>: On',
		ru: 'В разделе Технические параметры укажите:<br/><strong>Тип подписи</strong>: MD5<br/><strong>Повторно отправлять Payment Notification при сбоях</strong>: Включено'
	},

	'paymaster_itm_6': {
		en: 'On "Обратные вызовы" site<br/><strong>Payment notification</strong>: <mark>http://qstoq.me/v1/paymaster/{{s1}}</mark>, POST запрос<br/><strong>Success redirect</strong>: <mark>http://qstoq.me/v1/paymaster/return</mark>, метод POST<br/><strong>Failure redirect</strong>: <mark>http://qstoq.me/v1/paymaster/return</mark>, метод POST<br/><strong>Invoice confirmation</strong>: Не предпринимать действий<br/><strong>Разрешена замена URL</strong>: Off',
		ru: 'В разделе Обратные вызовы<br/><strong>Payment notification</strong>: <mark>http://qstoq.me/v1/paymaster/{{s1}}</mark>, POST запрос<br/><strong>Success redirect</strong>: <mark>http://qstoq.me/v1/paymaster/return</mark>, метод POST<br/><strong>Failure redirect</strong>: <mark>http://qstoq.me/v1/paymaster/return</mark>, метод POST<br/><strong>Invoice confirmation</strong>: Не предпринимать действий<br/><strong>Разрешена замена URL</strong>: отключено'
	},

	'paymaster_itm_7': {
		en: 'On "Пользователи" site, add new user by setting email (<strong>Service login</strong>) and password (<strongService password</strong>). On the user\'s setting add "Операционист" role, with the access to your site.',
		ru: 'В разделе Пользователи, добавьте нового пользователя, задав его email (<strong>Сервис логин</strong>) и пароль (<strong>Сервис пароль</strong>). В настройках пользователя добавьте ему роль Операционист, с доступом к вашему сайту.'
	},

	'bitcoin_h': {
		en: 'Bitcoin connection',
		ru: 'Подключение Bitcoin',
	},

	'bitcoin_payout_address': {
		en: 'Cashout Address',
		ru: 'Адрес выплат'
	},
	'bitcoin_payout_limit': {
		en: 'Minimum cashout',
		ru: 'Минимальная выплата'
	},

	'bitcoin_itm_1': {
		en: 'If you have no Bitcoin wallet, please get one from there: <a href="http://bitcoin.org/en/choose-your-wallet" target="_blank">http://bitcoin.org/en/choose-your-wallet</a>',
		ru: 'Если у вас нет Bitcoin кошелька, установите любой кошелек отсюда: <a href="http://bitcoin.org/en/choose-your-wallet" target="_blank">http://bitcoin.org/en/choose-your-wallet</a>'
	},

	'bitcoin_itm_2': {
		en: 'In the wallet create a Bitcoin address (<strong>Cashout Address</strong>). You can create s many as you wish, but don\'t forget to update these settings here on Qstoq.',
		ru: 'В кошельке создайте <strong>Адрес выплат</strong>. Можно создать сколько угодно адресов, не забывайте только обновлять параметры здесь Qstoq.'
	},

	'bitcoin_itm_3': {
		en: 'Set parameter <strong>Minimum cashout</strong>. When this summ will be reached the cachout will be proccessed. But remember that lower <strong>Minimum cashout</strong> is longer transaction time inside Bitcoin network (up to 2 week)',
		ru: 'Укажите параметр <strong>Минимальная выплата</strong>. По достижении указанной суммы будет производиться выплата на указанный адрес. Но помните, чем меньше эта сумма, тем дольше будет производиться обработка перевеода внутри Bitcoin сети (до 2х недель).'
	},
}