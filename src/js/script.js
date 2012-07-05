/* Author: proll

*/
var qp = {
	// общие параметры
	opts : {
		apiPath : "/api/v1/"
	},

	//Выводим цену
	priceDesc : function (price_value, currency) {
		var price_arr = price_value.split("");
		
		price_value = "";
		// собираем по 3 цифры с пробелом число - цену
		for (var i = price_arr.length - 1; i >= 0; i--) {
			if((price_arr.length - 1 - i)%3 == 0) 	price_value = price_arr[i] + "&nbsp;" + price_value;
			else 			price_value = price_arr[i] + price_value;
		};
		currency = currency.toLowerCase();
		if (currency == "rur") {
			return price_value + "р.";
		} else if (currency == "usd") {
			return "$" + price_value;
		} else if (currency == "eur") {
			return "€" + price_value;
		} else if (currency == "gbp") {
			return "£" + price_value;
		} else if (currency == "jpy") {
			return "¥" + price_value;
		} else {
			return price_value + " " + currency;
		}
	},

	// параметры get из урл
	getUrlVars: function (param_name){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    for(var i = 0; i < hashes.length; i++)
	    {
	        hash = hashes[i].split('=');
	        vars.push(hash[0]);
	        vars[hash[0]] = hash[1];
	    }

	    if (typeof param_name != "undefined") {
	    	return vars[param_name];
	    } else {
	    	return vars;
	    }
	},

	// http://stackoverflow.com/questions/1303872/trying-to-validate-url-using-javascript
	isURL: function(textval) {
      var urlregex = new RegExp(
            "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
      return urlregex.test(textval);
    },

    // http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric
    isNum: function (n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	},

	// визуализация процессов в приложинии
	processShow : function (status, message) {
		var el = ""
		if (status == "start") {
			el = '<div class="msg-ok">'+message+'</div>';
		}else if(status == "error") {
			el = '<div class="msg-err">'+message+'</div>';
		}else if(status == "success") {
			el = '<div class="msg-ok">'+message+'</div>';
		}else{
			el = '<div class="msg-ok">'+message+'</div>';
		}

		$(el)
			.appendTo(".msg-out")
			.fadeIn(500)
			.delay(3000)
			.fadeOut(1000)
			.queue(function() { $(this).remove(); });

		console.log(status + ":");
		console.log(message);
	},

	// записываем параметр в localStorage
	setLSItem : function (nm, val) {
		if ( typeof(localStorage) !== 'undefined' ) {
			try {
				localStorage.setItem(nm, val);
				return true;
			} catch (e) {
				if ((e.name).toUpperCase() == "QUOTA_EXCEEDED_ERR") {
					console.log('localStorage Кончилось место'); //данные не сохранены, так как кончилось доступное место
					return false;
				}
			}
		} else {
			return false;
		}
	},

	// читаем параметр из localStorage
	getLSItem : function (nm) {
		if (typeof(localStorage) != 'undefined') {
			return localStorage.getItem(nm);
		} else {
			return false;
		}
	},

	// обработчик ошибок
	error : function (errorDesc) {
		console.log(errorDesc);
	},

	readOnlyInputs : function(){
		$(".qp-inp-ro").click(function() {
		   $(this).select();
		});
	}
}