/* Author: proll
item медиа
*/

(function($){
	if(!qp.is_offline && location.href.indexOf("item")==-1) return;


	var user_token 		= qp.getLSItem("user_token"),
		item_id 		= qp.getUrlVars("id");

	if (!item_id) {
		qp.error("link_not_found");
		if(!qp.is_offline) return;
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

		$item_id_field = 		 $("#fld-payment-item-id"),
		$amount_field = 		 $("#fld-payment-amount"),

		is_payment_opened = false;



	var fillItem = function (itemObj) {
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


	var itemGetDo = function(e) {
		if(true || !is_payment_opened) {
			is_payment_opened = true;


			$get_bt.fadeOut(200,
				function (argument) {
					$price_field.animate({top:"233px"}, 200);
					$info_container.slideUp(200);
					$payment_systems_container.slideDown(
						200, 
						function(){
							$("#fld-payment-card-num",$payment_systems_container).focus();
						}
					);
				}
			);

		} 
		// else {
		// 	$(".payment-card-form").submit();

		// }
		return false;
	}

	$get_bt.on("click", itemGetDo);

})(jQuery);
