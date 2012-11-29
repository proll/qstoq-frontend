/* Author: proll
авторизация
*/

(function($){
	// if(location.href.indexOf("auth")==-1) return;
	var user_token 		= qp.getLSItem("user_token");
	if(!!user_token) qp.goInside();

	var $authBtn = $(".auth-do a"),
		$authForm = $(".auth-form"),
		loading = false,
		title_auth = $authBtn.text(),
		$wrapper = $(".wrapper");

	var describeStatus = function (statusText) {
		$authBtn
			.text(statusText);
	}

	var resetForm = function () {
		$authBtn
			.delay(2000)
			.fadeOut(200, 	function(e){$(this).text(title_auth)})
			// показываем кнопочку и активируем ее
			.fadeIn(200, 	function(e){loading = false});
	}

	var okReact = function () {
		location.href="/items.html"
	}

	var errorReact = function () {
		var animDelay = 100,
			animType = 'swing';
		$authBtn
			.animate({'left': '50px'}, animDelay, animType)
			.animate({'left': '-50px'},animDelay, animType)
			.animate({'left': '40px'},animDelay, animType)
			.animate({'left': '-40px'},animDelay, animType)
			.animate({'left': '20px'},animDelay, animType)
			.animate({'left': '-20px'},animDelay, animType)
			.animate({'left': '0'},animDelay, animType);
	}

	function ajaxAuthPostForm(e) {
		if (!loading) {
			describeStatus("Входим...");
			loading = true;
			$.post(qp.opts.apiPath + "auth/", $authForm.serialize(), function (data, textStatus, jqXHR) {
				if (typeof(data) == 'string')
					data = $.parseJSON(data);
				if (data.success) {
					describeStatus("Секундочку");
					// remember user
					getUserInfo(data.result.token);
				} else {
					describeStatus("Не вошли... Еще раз?");
					qp.error("NOOOO");
					errorReact();
					describeStatus(data.result.message);
				}
				resetForm();
			})
			.error(function(data) {
				if (typeof(data) == 'string')
					data = $.parseJSON(data);
				if(data.responseText){
					qp.error(data.status + " " + data.statusText);
					describeStatus("ОООО-ооу " + data.status + " " + data.statusText);
					errorReact();
				} else {
					qp.error("ОООО-ооу такая ошибка невозможна");
					describeStatus("ОООО-ооу такая ошибка невозможна");
					errorReact();
				}
				resetForm();
			});
		}
		return false;
	}


	function ajaxRegistrationPostForm(e) {
		if (!loading) {
			describeStatus("Регистрируемся...");
			loading = true;
			$.post(qp.opts.apiPath + "users/", $authForm.serialize(), function (data, textStatus, jqXHR) {
				if (typeof(data) == 'string')
					data = $.parseJSON(data);
				if (data.success) {
					describeStatus("Секундочку");
					// remember user
					getUserInfo(data.result.token);
				} else {
					describeStatus("Неа... Еще раз?");
					qp.error("NOOOO");
					errorReact();
					describeStatus(data.result.message);
				}
				resetForm();
			})
			.error(function(data) {
				if (typeof(data) == 'string')
					data = $.parseJSON(data);
				if(data.responseText){
					qp.error(data.status + " " + data.statusText);
					describeStatus("ОООО-ооу " + data.status + " " + data.statusText);
					errorReact();
				} else {
					qp.error("ОООО-ооу такая ошибка невозможна");
					describeStatus("ОООО-ооу такая ошибка невозможна");
					errorReact();
				}
				resetForm();
			});
		}
		return false;
	}


	function getUserInfo(token) {
		if(!!token) qp.setLSItem("user_token", token);

		$.get(qp.opts.apiPath + "users/", {token: token}, function (data, textStatus, jqXHR) {
			if (typeof(data) == 'string')
				data = $.parseJSON(data);
			if (data.success) {
				describeStatus("Ууууху");
				// remember token
				qp.user.set($.extend({token: token}, data.result));
				okReact();
			} else {
				describeStatus("Неа:( Еще раз?");
				qp.error("NOOOO");
				errorReact();
				describeStatus(data.result.message);
			}
			resetForm();
		})
		.error(function(data) {
			if (typeof(data) == 'string')
				data = $.parseJSON(data);
			if(data.responseText){
				qp.error(data.status + " " + data.statusText);
				describeStatus("ОООО-ооу " + data.status + " " + data.statusText);
				errorReact();
			} else {
				qp.error("ОООО-ооу такая ошибка невозможна");
				describeStatus("ОООО-ооу такая ошибка невозможна");
				errorReact();
			}
			resetForm();
		});
	}


	$authBtn.on("click", 	ajaxAuthPostForm);
	$authForm.on("submit", 	ajaxAuthPostForm);

	var authToggle = true;

	$(".logi-reg-toggle a").click(function (e) {
		$wrapper.toggleClass("toggled", authToggle);
		if(authToggle) {
			$authBtn.text("Регистрироваться");
			$authBtn.on("click", 	ajaxRegistrationPostForm);
			$authForm.on("submit", 	ajaxRegistrationPostForm);
		} else {
			$authBtn.text("Войти");
			$authBtn.on("click", 	ajaxAuthPostForm);
			$authForm.on("submit", 	ajaxAuthPostForm);			
		}
		authToggle = !authToggle;
		return false
	})

})(jQuery);
