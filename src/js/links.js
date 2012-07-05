/* Author: proll

*/

(function($){
	if(location.href.indexOf("links")==-1) return;

	var userToken = qp.getLSItem("user_token");

	// если токена нет пишем ошибку и не продолжаем далее
	if (!userToken) {
		qp.error("user_not_found");
		return;
	}


	var renderLinkItems = function (itemArr) {
		// @TODO когда сменят сортировку на обратную
		// var i = 0,
		// 	arrLength = itemArr.length,
		// 	out = '<table class="links"><tbody>',
		// 	item;
		// for (; i < arrLength; i++) {

		var out = '<table class="links"><tbody>',
			item;
		for (var i = itemArr.length - 1; i >= 0; i--) {
			item = itemArr[i];
			out += '<tr>';
			out += '<td class="link-name links-td"><a href="link.html?id='+item.id+'&action=edit">'+item.name+'</a><span class="link-desc">'+item.description+'</span></td>';
			out += '<td class="link-share links-td"><input type="text" value="'+item.url_short+'" readonly="readonly" class="link-short qp-inp-ro"/></td>';
			out += '<td class="link-price links-td"><span class="price brd-rnd-2">'+qp.priceDesc(item.price, item.currency)+'</span></td>';
			out += '</tr>';
		};
		
		out += '</tbody></table>';
		$(".links-table").html(out);
		qp.readOnlyInputs();
	}


	var addLinkItem = function (item) {
		var out = "";
			out += '<tr>';
			out += '<td class="link-name links-td"><a href="link.html?id='+item.id+'&action=edit">'+item.name+'</a><span class="link-desc">'+item.description+'</span></td>';
			out += '<td class="link-share links-td"><input type="text" value="'+item.url_short+'" readonly="readonly" class="link-short qp-inp-ro"/></td>';
			out += '<td class="link-price links-td"><span class="price brd-rnd-2">'+qp.priceDesc(item.price, item.currency)+'</span></td>';
			out += '</tr>';
		$(".links-table table tbody").prepend(out);
		qp.readOnlyInputs();
	}





	// запрос сервиса всех ссылок продавца
	qp.processShow("start", "Загружаемся");
	$.ajax({
			type: "GET",
			url: qp.opts.apiPath + "links/?token=" + userToken,
			// dataType: "json",
			success: function(data, textStatus, jqXHR){
				if (data.success) {
					qp.processShow("success", /*data.result.message*/"Ух-ты данные загрузились успешно");
					// собираем по шаблону ссылки
					renderLinkItems(data.result.items);
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

	// функционал быстрого добавления ссылки
	var $addForm = $(".add-form"),
		$addBt = $(".add-bt"),
		addFormShowned = false,
		$nameField = $(".add-form #name"),
		$urlField = $(".add-form #url"),
		$priceField = $(".add-form #price");

	var addFormDo = function(e) {
		var isValidForm = true;
		if(!addFormShowned){
			addFormShowned = true;
			$addForm.toggleClass("add-form-ani");
			setTimeout (function(){
				$(".add-form input[type=text]:first").focus();
			}, 500)
		} else {
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
					url: qp.opts.apiPath + "links/?token=" + userToken,
					// dataType: "json",
					data: $addForm.serialize(),
					success: function(data, textStatus, jqXHR){
						if (data.success) {
							qp.processShow("success", /*data.result.message*/"Вы добавили ссылку");
							addLinkItem(data.result);
							addFormShowned = false;
							$addForm.toggleClass("add-form-ani");
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
		}

		e.preventDefault(); 
		e.stopPropagation();
	}

	$addBt.on("click", addFormDo);
	// @TODO - по ентеру не работает сабмит в хроме под маком
	$addForm.live("submit", addFormDo);

})(jQuery);
