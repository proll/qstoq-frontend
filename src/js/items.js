/* Author: proll
все item продавца
*/

(function($){
	if(location.href.indexOf("items")==-1) return;
	qp.setLocation("items");

	var user_token = qp.getLSItem("user_token");

	// если токена нет пишем ошибку и не продолжаем далее
	if (!user_token) {
		qp.error("user_not_found");
		qp.goAuth();
		return;
	}


	var renderItems = function (itemArr) {
		var i = 0,
			arrLength = itemArr.length,
			out = '<table class="items"><tbody>',
			item;
		for (; i < arrLength; i++) {
			item = itemArr[i];
			out += '<tr>';
			out += '<td class="item-name items-td"><a href="item-edit.html?id='+item.id+'&action=edit">'+item.name+'</a><span class="item-desc">'+item.description+'</span></td>';
			out += '<td class="item-share items-td"><input type="text" value="'+item.url_short+'" readonly="readonly" class="item-short qp-inp-ro"/></td>';
			out += '<td class="item-price items-td"><span class="price brd-rnd-2">'+qp.priceDesc(item.price, item.currency)+'</span></td>';
			out += '</tr>';
		};
		
		out += '</tbody></table>';
		$(".items-table").html(out);
		qp.readOnlyInputs();
	}


	var addItem = function (item) {
		var out = "";
			out += '<tr>';
			out += '<td class="item-name items-td"><a href="item-edit.html?id='+item.id+'&action=edit">'+item.name+'</a><span class="item-desc">'+item.description+'</span></td>';
			out += '<td class="item-share items-td"><input type="text" value="'+item.url_short+'" readonly="readonly" class="item-short qp-inp-ro"/></td>';
			out += '<td class="item-price items-td"><span class="price brd-rnd-2">'+qp.priceDesc(item.price, item.currency)+'</span></td>';
			out += '</tr>';
		$(".items-table table tbody").prepend(out);
		qp.readOnlyInputs();
	}





	// запрос сервиса всех ссылок продавца
	qp.processShow("start", "Загружаемся");
	$.ajax({
			type: "GET",
			url: qp.opts.apiPath + "links/?token=" + user_token,
			// dataType: "json",
			success: function(data, textStatus, jqXHR){
				if (typeof(data) == 'string')
					data = $.parseJSON(data);
				if (data.success) {
					qp.processShow("success", /*data.result.message*/"Ух-ты данные загрузились успешно");
					// собираем по шаблону ссылки
					renderItems(data.result.items);
				} else {
					qp.processShow("error", data.result.message);
				}
			},
			error: function(data){
				if(data.responseText){
					var response = $.parseJSON(data.responseText);
					qp.processShow("error", response.error.message);
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
					url: qp.opts.apiPath + "links/?token=" + user_token,
					// dataType: "json",
					data: $addForm.serialize(),
					success: function(data, textStatus, jqXHR){
						if (typeof(data) == 'string')
							data = $.parseJSON(data);
						if (data.success) {
							qp.processShow("success", /*data.result.message*/"Вы добавили ссылку");
							addItem(data.result);
							addFormShowned = false;
							$addForm.toggleClass("add-form-ani");
						} else {
							qp.processShow("error", data.result.message);
						}
					},
					error: function(data){
						if (typeof(data) == 'string')
							data = $.parseJSON(data);
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
	$addForm.live("submit", addFormDo);

})(jQuery);
