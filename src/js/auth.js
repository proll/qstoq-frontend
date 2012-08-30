/* Author: proll

*/

(function($){
	if(location.href.indexOf("auth")==-1) return;

	// TODO: вставить условие модуля авторизации
	var $authBtn = $(".auth-do a"),
		$authForm = $(".auth-form"),
		loading = false,
		title_auth = $authBtn.text();

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

	var ajaxPostForm = function(e) {
		if (!loading) {
			describeStatus("Входим...");
			loading = true;
			$.post(qp.opts.apiPath + "auth/", $authForm.serialize(), function (data, textStatus, jqXHR) {
				if (data.success) {
					okReact();
					describeStatus("Уууху");
					// remember token
					qp.setLSItem("user_token", data.result.token);
					qp.setLSItem("user_name", $("#email",$authForm).val());
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
