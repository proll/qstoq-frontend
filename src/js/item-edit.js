/* Author: proll

*/

(function($){
	if(location.href.indexOf("item-edit")==-1) return;

	var user_token 	= qp.getLSItem("user_token"),
		item_id 		= qp.getUrlVars("id");

	// если токена нет пишем ошибку и не продолжаем далее
	if (!user_token) {
		qp.error("user_not_found");
		return;
	}

	if (!item_id) {
		qp.error("link_not_found");
		return;
	}

	$("textarea").autoGrow();


	var $editForm = 			$(".edit-form"),
		$editBt =				$(".edit-bt", $editForm),
		$nameField = 			$("#name",  $editForm),
		$urlField = 			$("#url", 	$editForm),
		$descriptionField = 	$("#description", 	$editForm),
		$priceField = 			$("#price", $editForm);
		$shortUrlField = 		$("#url_short");


	var fillLinkEditForm = function (itemObj) {
		$nameField.val(itemObj.name);
		$priceField.val(itemObj.price);
		$descriptionField.val(itemObj.description);
		$shortUrlField.val(itemObj.url_short);
		qp.readOnlyInputs();

		$(".edit-qr img").attr("src", "https://chart.googleapis.com/chart?chs=96x96&cht=qr&chl="+itemObj.url_short+"&chld=H");
		$("#to_fb").attr("href", "http://api.addthis.com/oexchange/0.8/forward/facebook/offer?"
			+"url="+itemObj.url_short
			+"&title="+encodeURIComponent(itemObj.name)
			+"&description="+encodeURIComponent(itemObj.description)
			+"&pubid=prolll"
			+"&text="+encodeURIComponent(itemObj.description)
			+"&via=qstoq");

		$("#to_vk").attr("href", "http://api.addthis.com/oexchange/0.8/forward/vk/offer?"
			+"url="+itemObj.url_short
			+"&title="+encodeURIComponent(itemObj.name)
			+"&description="+encodeURIComponent(itemObj.description)
			+"&pubid=prolll"
			+"&text="+encodeURIComponent(itemObj.description)
			+"&via=qstoq");

		$("#to_tw").attr("href", "http://api.addthis.com/oexchange/0.8/forward/twitter/offer?"
			+"url="+itemObj.url_short
			+"&title="+encodeURIComponent(itemObj.name)
			+"&description="+encodeURIComponent(itemObj.description)
			+"&pubid=prolll"
			+"&text="+encodeURIComponent(itemObj.description)
			+"&via=qstoq");

		$("#to_ok").attr("href", "http://api.addthis.com/oexchange/0.8/forward/odnoklassniki_ru/offer?"
			+"url="+itemObj.url_short
			+"&title="+encodeURIComponent(itemObj.name)
			+"&description="+encodeURIComponent(itemObj.description)
			+"&pubid=prolll"
			+"&text="+encodeURIComponent(itemObj.description)
			+"&via=qstoq");

		// @TODO - где получение полного урла
		$urlField.val(itemObj.url);

		var $activePseudoCheck = $("#active_pseudo", $editForm),
			$activeCheck = $("#active", $editForm);

		$activeCheck
			.val(Number(itemObj.active));

		$activePseudoCheck
			.prop("checked", itemObj.active)
			.change(function(e){
				$activeCheck
					.val(Number($activePseudoCheck.is(":checked")));
			});
	}




	// запрос сервиса ссылки по id
	qp.processShow("start", "Загружаемся");
	$.ajax({
			type: "GET",
			url: qp.opts.apiPath + "links/"+item_id+"?token=" + user_token,
			// dataType: "json",
			success: function(data, textStatus, jqXHR){
				if (data.success) {
					qp.processShow("success", /*data.result.message*/"Ух-ты данные загрузились успешно");
					// собираем по шаблону ссылку
					fillLinkEditForm(data.result);
				} else {
					qp.processShow("error", data.result.message);
				}
			},
			error: function(data){
				if(data.responseText){
					qp.processShow("error", data.status + " " + data.statusText);
				} else {
					qp.processShow("error", data.status + " " + data.statusText);
				}
			}
	});


	var editFormDo = function(e) {
		var isValidForm = true;

		// валидация введенного в форме
		$nameField	.removeClass("err-input");
		$urlField	.removeClass("err-input");
		$priceField	.removeClass("err-input");

		if ($.trim($nameField.val())=="") {
			$nameField	.addClass("err-input");
			isValidForm = false;
		}
		if (!qp.isURL($urlField.val()))	{
			$urlField	.addClass("err-input");
			isValidForm = false;
		}
		if (!qp.isNum($priceField.val())) {
			$priceField	.addClass("err-input");
			isValidForm = false;	
		}

		if(isValidForm) {
			$.ajax({
				type: "POST",
				url: qp.opts.apiPath + "links/"+item_id+"?token=" + user_token,
				data: $editForm.serialize(),
				success: function(data, textStatus, jqXHR){
					if (data.success) {
						qp.processShow("success", /*data.result.message*/"Изменения сохранены");
					} else {
						qp.processShow("error", data.result.message);
					}
				},
				error: function(data){
					if(data.responseText){
						qp.processShow("error", data.status + " " + data.statusText);
					} else {
						qp.processShow("error", data.status + " " + data.statusText);
					}
				}
			});
		}

		e.preventDefault(); 
		e.stopPropagation();
	}

	$editBt.on("click", editFormDo);
	// @TODO - по ентеру не работает сабмит в хроме под маком
	$editBt.live("submit", editFormDo);

})(jQuery);
