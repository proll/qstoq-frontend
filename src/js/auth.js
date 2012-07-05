/* Author: proll

*/

(function($){
	if(location.href.indexOf("auth")==-1) return;

	// TODO: вставить условие модуля авторизации
	var $authBtn = $(".auth-do a"),
		$authForm = $(".auth-form"),
		loading = false,
		titleAuth = $authBtn.text();
		urlAuth = 	$authBtn.attr("href");

	var describeStatus = function (statusText) {
		$authBtn
			.text(statusText);
	}

	var resetForm = function () {
		$authBtn
			.delay(2000)
			.fadeOut(200, 	function(e){$(this).text(titleAuth)})
			// показываем кнопочку и активируем ее
			.fadeIn(200, 	function(e){loading = false});
	}

	var okReact = function () {
		// var animDelay = 300,
		// 	animType = 'swing';
		// $authBtn
		// 	.animate({'top': '1000px'}, animDelay, animType);
		// $authForm
		// 	.parent()
		// 	.animate({'top': '-1000px'}, animDelay, animType);
		location.href="/ola/src/links.html"
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

	var ajaxPostForm = function(e) {
		if (!loading) {
			describeStatus("Входим...");
			loading = true;
			$.post(urlAuth, $authForm.serialize(), function (data, textStatus, jqXHR) {
				if (data.success) {
					okReact();
					describeStatus("Уууху " + data.result.message);
					// remember token
					qp.setLSItem("user_token", data.result.token)
				} else {
					qp.error("NOOOO");
					errorReact();
					describeStatus(data.result.message);
				}
				resetForm();
			})
			.error(function(data) {
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

	$authBtn.on("click", 	ajaxPostForm);
	// @TODO - по ентеру не работает сабмит в хроме под маком
	$authForm.on("submit", 	ajaxPostForm);

})(jQuery);
