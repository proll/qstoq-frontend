/* Author: proll
item медиа
*/

(function($){
	if(!qp.is_offline && location.href.indexOf("item")==-1) return;
	qp.setLocation("buy");


	var user_token 		= qp.getLSItem("user_token"),
		item_id 		= false;


	// if(qp.getLocation() != "buy") {
	 	item_id = qp.getUrlVars("id") || window.location.href.split("b")[1];
	// } 

	if (!item_id) {
		qp.error("link_not_found");
		return;
	}

	$("textarea").autoGrow();


	var $item_container = 			 $(".item-b"),
		$get_bt =					 $(".get-bt", $item_container),
		$purchase_bt =				 $(".purchase-bt", $item_container),
		$info_container =			 $(".item-b-info", 	$item_container),
		$name_field = 				 $(".item-b-name",  $item_container),
		$description_field = 		 $(".item-b-desc", 	$item_container),
		$price_field = 				 $(".item-b-price", $item_container),
		$payment_systems_container = $(".payment-systems"),


		$mail_container = $(".item-b-mail"),
		$buy_form = $(".buy-form"),

		$item_id_field = 		 $("#fld-payment-item-id"),
		$amount_field = 		 $("#fld-payment-amount"),
		$email_field = 		 $("#fld-email"),

		is_payment_opened = false;



	var fillItem = function (itemObj) {
		if(!!qp.user.get() && !!qp.user.get().email) {
			$email_field.val(qp.user.get().email);
		}

		$name_field.text(itemObj.name);
		$description_field.text(itemObj.description);
		$price_field.html(qp.priceDesc(itemObj.price, "rur"));
		$amount_field.val(itemObj.price);
		$item_id_field.val(item_id);
		$item_container.fadeIn();
	}




	// запрос сервиса ссылки по id
	qp.processShow("start", "Загружаемся");
	$.ajax({
			type: "GET",
			url: qp.opts.apiPath + "links/"+item_id,
			// dataType: "json",
			success: function(data, textStatus, jqXHR){
				if (typeof(data) == 'string')
					data = $.parseJSON(data);
					
				if (data.success) {
					qp.processShow("success", /*data.result.message*/"Ух-ты данные загрузились успешно");
					// собираем по шаблону item
					fillItem(data.result);
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


	// var itemGetDo = function(e) {
	// 	if(true || !is_payment_opened) {
	// 		is_payment_opened = true;


	// 		$get_bt.fadeOut(200,
	// 			function (argument) {
	// 				$price_field.animate({top:"233px"}, 200);
	// 				$info_container.slideUp(200);
	// 				$payment_systems_container.slideDown(
	// 					200, 
	// 					function(){
	// 						$("#fld-payment-card-num",$payment_systems_container).focus();
	// 					}
	// 				);
	// 			}
	// 		);

	// 	} 
	// 	// else {
	// 	// 	$(".payment-card-form").submit();

	// 	// }
	// 	return false;
	// }

	var itemGetDo = function(e) {
		$get_bt.fadeOut(200,
			function (argument) {
				$price_field.animate({top:"110px"}, 200);
				$info_container.slideUp(200);
				$mail_container.slideDown(
					200, 
					function(){
						$email_field.focus();
					}
				);
			}
		);

		$buy_form.on("submit", function(e){
			e.preventDefault(); 
			e.stopPropagation();
			$.ajax({
					type: "POST",
					url: qp.opts.apiPath + "invoices/",
					data: {
						amount: $amount_field.val(),
						currency: (!!qp.user.get() && !!qp.user.get().currency) ? qp.user.get().currency : "RUB",
						link_id: item_id,
						buyer_email: $email_field.val()
					},
					success: function(data, textStatus, jqXHR){
						if (typeof(data) == 'string')
							data = $.parseJSON(data);
							
						if (data.success) {
							// посылаем 2й запрос на покупку - обналичивание invoice
							purchase(data.result.id);
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
			return false;
		});
		return false;
	}


	var purchase = function (id) {
		$.ajax({
				type: "POST",
				url: qp.opts.apiPath + "purchases/",
				data: {
					invoice_id: id
				},
				success: function(data, textStatus, jqXHR){
					if (typeof(data) == 'string')
						data = $.parseJSON(data);
						
					if (data.success) {
						// посылаем 3й запрос на покупку
						purchaseOut(data.result);
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

	var purchaseOut =function (form_data) {
		// dirty hack - form creation
		$form = $("<form class='hidden' action='"+form_data.submitUrl+"' method='"+form_data.method+"'>"+
      "<input type=hidden name='MrchLogin' value='"+form_data.parameters.MrchLogin+"'>"+
      "<input type=hidden name='OutSum' value='"+form_data.parameters.OutSum+"'>"+
      "<input type=hidden name='InvId' value='"+form_data.parameters.InvId+"'>"+
      "<input type=hidden name='Desc' value='"+form_data.parameters.Desc+"'>"+
      "<input type=hidden name='SignatureValue' value='"+form_data.parameters.SignatureValue+"'>"+
      "<input type=submit value='Pay'>"+
      "</form>");
		$("body").append($form);
		$form.submit();
	}

	$get_bt.on("click", itemGetDo);

})(jQuery);
