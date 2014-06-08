this["qst"] = this["qst"] || {};
this["qst"]["Templates"] = this["qst"]["Templates"] || {};
this["qst"]["Templates"]["ptemplates"] = this["qst"]["Templates"]["ptemplates"] || {};

this["qst"]["Templates"]["ptemplates"]["blocks/account"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n<div class=\"account__email account-row\">\n	<div class=\"account-col-label\">\n		<h2 class=\"account-col-label-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Login with e-mail", "profile", options) : helperMissing.call(depth0, "_", "Login with e-mail", "profile", options)))
    + "</h2>\n	</div>\n	<div class=\"account-col\">\n		<form action=\"/auth\" class=\"account__email-form\">\n			<div class=\"qst__inp-group\">\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "auth", options) : helperMissing.call(depth0, "_", "E-mail", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"50\" type=\"text\" disabled=\"disabled\" class=\"qst__inp\" name=\"email\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Password", "auth", options) : helperMissing.call(depth0, "_", "Password", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"45\" type=\"password\" disabled=\"disabled\" class=\"qst__inp\" name=\"password\" value=\"*******\">\n						</div>\n					</label>\n				</div>\n			</div>\n			<input type=\"submit\" class=\"hidden-submit\">\n		</form>\n	</div>\n</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n			<li class=\"account__social-item account__social-item-vk\">\n				<div class=\"social_icn\"><i class=\"qi qi-share-vk\"></i></div>\n				<a class=\"account__social-item__title\" href=\"http://vk.com/profile.php?id="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.vkontakte)),stack1 == null || stack1 === false ? stack1 : stack1.uid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.vkontakte)),stack1 == null || stack1 === false ? stack1 : stack1.first_name), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n			</li>\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.vkontakte)),stack1 == null || stack1 === false ? stack1 : stack1.first_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.vkontakte)),stack1 == null || stack1 === false ? stack1 : stack1.last_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  return buffer;
  }

function program6(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.vkontakte)),stack1 == null || stack1 === false ? stack1 : stack1.uid)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program8(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<li class=\"account__social-item account__social-item-vk\">\n				<a href=\".\" rel=\"nofollow\" class=\"account__social-item__connect-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect", "profile", options) : helperMissing.call(depth0, "_", "Connect", "profile", options)))
    + "</a>\n				<div class=\"social_icn\"><i class=\"qi qi-share-vk\"></i></div>\n				<span class=\"account__social-item__title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "not connected", "profile", options) : helperMissing.call(depth0, "_", "not connected", "profile", options)))
    + "</span>\n			</li>\n			";
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<li class=\"account__social-item account__social-item-fb\">\n				<div class=\"social_icn\"><i class=\"qi qi-share-fb\"></i></div>\n				<a class=\"account__social-item__title\" href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n			</li>\n			";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<li class=\"account__social-item account__social-item-fb\">\n				<a href=\".\" rel=\"nofollow\" class=\"account__social-item__connect-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect", "profile", options) : helperMissing.call(depth0, "_", "Connect", "profile", options)))
    + "</a>\n				<div class=\"social_icn\"><i class=\"qi qi-share-fb\"></i></div>\n				<span class=\"account__social-item__title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "not connected", "profile", options) : helperMissing.call(depth0, "_", "not connected", "profile", options)))
    + "</span>\n			</li>\n			";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li class=\"profile__social-item\"><a href=\"https://twitter.com/account/redirect_by_id?id="
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\"><i class=\"isc isc-tw_prfl\"></i></a></li>";
  return buffer;
  }

  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.email), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n<div class=\"account-row\">\n	<div class=\"account-col-label\">\n		<h2 class=\"account-col-label-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Social networks", "profile", options) : helperMissing.call(depth0, "_", "Social networks", "profile", options)))
    + "</h2>\n	</div>\n	<div class=\"account-col\">\n		<ul class=\"account__social\">\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.vkontakte), {hash:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.external)),stack1 == null || stack1 === false ? stack1 : stack1.facebook), {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<!-- stuff about twitter -->\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</ul>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"container footer__menu-cont\">\n	<ul class=\"footer__menu\">\n		<!-- <li><a class=\"footer__menu-a\" href=\"/how\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "About Qstoq", "footer", options) : helperMissing.call(depth0, "_", "About Qstoq", "footer", options)))
    + "</a></li> -->\n		<li><a class=\"footer__menu-a\" href=\"/how\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does it work?", "footer", options) : helperMissing.call(depth0, "_", "How does it work?", "footer", options)))
    + "</a></li>\n		<li><a class=\"footer__menu-a\" href=\"/i/questions-and-answers/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Questions & answers", "footer", options) : helperMissing.call(depth0, "_", "Questions & answers", "footer", options)))
    + "</a></li>\n		<li><a class=\"footer__menu-a\" href=\"/i/api/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Qstoq API", "footer", options) : helperMissing.call(depth0, "_", "Qstoq API", "footer", options)))
    + "</a></li>\n	</ul>\n	<ul class=\"footer__menu\">\n		<li><a class=\"footer__menu-a\" href=\"/i/user-agreement/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "User agreement", "footer", options) : helperMissing.call(depth0, "_", "User agreement", "footer", options)))
    + "</a></li>\n		<!-- <li><a class=\"footer__menu-a\" target=\"_blank\" href=\"/docs/privacy.html\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Privacy", "footer", options) : helperMissing.call(depth0, "_", "Privacy", "footer", options)))
    + "</a></li> -->\n		<li><a class=\"footer__menu-a\" href=\"/i/team/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Team", "footer", options) : helperMissing.call(depth0, "_", "Team", "footer", options)))
    + "</a></li>\n		<li><a class=\"footer__menu-a\" href=\"/business/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Business", "footer", options) : helperMissing.call(depth0, "_", "Business", "footer", options)))
    + "</a></li>\n	</ul>\n	<ul class=\"footer__menu\">\n		<li><a class=\"footer__menu-a\" href=\"/i/feedback/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Feedback", "footer", options) : helperMissing.call(depth0, "_", "Feedback", "footer", options)))
    + "</a></li>\n		<li><a class=\"footer__menu-a\" target=\"_blank\" href=\"http://vk.com/qstoq\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Vkontakte", "footer", options) : helperMissing.call(depth0, "_", "Vkontakte", "footer", options)))
    + "</a></li>\n		<li><a class=\"footer__menu-a\" target=\"_blank\" href=\"http://www.facebook.com/qstoq\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Facebook", "footer", options) : helperMissing.call(depth0, "_", "Facebook", "footer", options)))
    + "</a></li>\n		<li><a class=\"footer__menu-a\" target=\"_blank\" href=\"https://twitter.com/qstoq\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Twitter", "footer", options) : helperMissing.call(depth0, "_", "Twitter", "footer", options)))
    + "</a></li>\n	</ul>\n	<div class=\"footer__misc-cont\">\n		<p class=\"footer__misc-p\">&copy; ";
  if (stack2 = helpers.year) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.year; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " Qstoq</p>\n		<p class=\"footer__misc-p footer__desc-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "The easy payment system of purchase and delivery of digital content", "footer", options) : helperMissing.call(depth0, "_", "The easy payment system of purchase and delivery of digital content", "footer", options)))
    + "</p>\n		<ul class=\"footer__lang\">\n			<li class=\"footer__lang-item footer__lang-item_ru\">\n				<i class=\"qi qi-ru\"></i>\n			</li><li class=\"footer__lang-item footer__lang-item_en\">\n				<i class=\"qi qi-us\"></i>\n			</li>\n		</ul>\n	</div>\n</div>\n<div class=\"footer__adv\"></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\">\n	<h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n	<div class=\"helper\"></div>\n	<p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/info-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\">\n	<ul class=\"nav\">\n		<li class=\"item_questions-and-answers\"><a href=\"/i/questions-and-answers/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Questions & answers", "info_menu", options) : helperMissing.call(depth0, "_", "Questions & answers", "info_menu", options)))
    + "</a></li>\n		<li class=\"item_user-agreement\"><a href=\"/i/user-agreement/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "User agreement", "info_menu", options) : helperMissing.call(depth0, "_", "User agreement", "info_menu", options)))
    + "</a></li>\n		<li class=\"item_api\"><a href=\"/i/api/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Qstoq API", "info_menu", options) : helperMissing.call(depth0, "_", "Qstoq API", "info_menu", options)))
    + "</a></li>\n		<li class=\"item_team\"><a href=\"/i/team/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Team", "info_menu", options) : helperMissing.call(depth0, "_", "Team", "info_menu", options)))
    + "</a></li>\n		<li class=\"item_feedback\"><a href=\"/i/feedback/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Feedback", "info_menu", options) : helperMissing.call(depth0, "_", "Feedback", "info_menu", options)))
    + "</a></li>\n	</ul>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"info__slide info__slide_feedback\"></div>\n<div class=\"info__slide info__slide_api\"></div>\n<div class=\"info__slide info__slide_team\"></div>\n<div class=\"info__slide info__slide_user-agreement\"></div>\n<div class=\"info__slide info__slide_questions-and-answers\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["blocks/item-receipt"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n				";
  options = {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.external, "0", options) : helperMissing.call(depth0, "ifEq", depth0.external, "0", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n					<span class=\"receipt__form__buy-btn\"><a class=\"receipt__form__buy-btn-in\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get file", "itemreceipt", options) : helperMissing.call(depth0, "_", "Get file", "itemreceipt", options)))
    + "</a></span>\n				";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n					<span class=\"receipt__form__buy-btn\"><a class=\"receipt__form__buy-btn-in\" href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get link", "itemreceipt", options) : helperMissing.call(depth0, "_", "Get link", "itemreceipt", options)))
    + "</a></span>\n				";
  return buffer;
  }

  buffer += "<div class=\"receipt__form-add-comment\">\n	<i class=\"is is-com receipt__form-add-comment__icn\"></i>\n	<ul class=\"receipt__form-add-comment__list\">\n		<li class=\"receipt__form-add-comment__add\"><a href=\"add\" rel=\"nofollow\" class=\"receipt__form-add-comment-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add your<br/>message on the receipt", "itemreceipt", options) : helperMissing.call(depth0, "_", "Add your<br/>message on the receipt", "itemreceipt", options)))
    + "</a></li>\n		<li class=\"receipt__form-add-comment__edit\"><a href=\"edit\" rel=\"nofollow\" class=\"receipt__form-add-comment-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit your message on the receipt", "itemreceipt", options) : helperMissing.call(depth0, "_", "Edit your message on the receipt", "itemreceipt", options)))
    + "</a></li>\n	</ul>\n</div>\n<div class=\"receipt__cont\">\n	<div class=\"receipt__form-t\"></div>\n	<div class=\"receipt__form\">\n		<div class=\"receipt__form-col\">\n			<span class=\"receipt__form-line\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Purchased", "itemreceipt", options) : helperMissing.call(depth0, "_", "Purchased", "itemreceipt", options)))
    + "</span>\n			<span class=\"receipt__form-price\"><span class=\"receipt__form-price-val\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)))
    + "</span>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n			<h1 class=\"receipt__form-h\"><a href=\"";
  if (stack2 = helpers.url_short) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></h1>\n			";
  stack2 = helpers['if'].call(depth0, depth0.url, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"receipt__form-receipt_desc-group qst__inp-group\">\n				<div class=\"receipt__form-receipt_desc-cont qst__inp-cont\">\n					<textarea value=\"\" class=\"receipt__form-receipt_desc qst__inp\" name=\"receipt_comment\">";
  if (stack2 = helpers.receipt_comment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.receipt_comment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\n				</div>\n				<ul class=\"receipt__form-receipt_desc-action-list\"><li class=\"receipt__form-receipt_desc-action receipt__form-receipt_desc-action_cancel\"><a href=\"receipt-cancel\" rel=\"nofollow\" class=\"receipt__form-receipt_desc-action-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "itemreceipt", options) : helperMissing.call(depth0, "_", "Cancel", "itemreceipt", options)))
    + "</a></li><li class=\"receipt__form-receipt_desc-action receipt__form-receipt_desc-action_save\"><a href=\"receipt-save\" rel=\"nofollow\" class=\"receipt__form-receipt_desc-action-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "itemreceipt", options) : helperMissing.call(depth0, "_", "Save", "itemreceipt", options)))
    + "</a></li>\n				</ul>\n			</div>\n			<p class=\"receipt__form-desc\">";
  if (stack2 = helpers.receipt_comment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.receipt_comment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n			<p class=\"receipt__form-desc-static\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "All purchasement info we&#39;ve sent to your email", "itemreceipt", options) : helperMissing.call(depth0, "_", "All purchasement info we&#39;ve sent to your email", "itemreceipt", options)))
    + "</p>\n			<ul class=\"receipt__share\">\n				<li class=\"receipt__share-itm receipt__share-itm-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "itemreceipt", options) : helperMissing.call(depth0, "_", "Share", "itemreceipt", options)))
    + "</li>\n				<li class=\"receipt__share-itm\"><a class=\"receipt__share-itm-a\" rel=\"nofollow\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n				<li class=\"receipt__share-itm\"><a class=\"receipt__share-itm-a\" rel=\"nofollow\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n				<li class=\"receipt__share-itm\"><a class=\"receipt__share-itm-a\" rel=\"nofollow\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n			</ul>\n		</div>\n		<div class=\"receipt__service-desc\"><a href=\"http://qstoq.me\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemreceipt", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemreceipt", options)))
    + "</div>\n	</div>\n	<div class=\"receipt__form-b\"></div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/item-showcase"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<!-- 4future showcase to module -->\n<div class=\"showcase__cont\">\n	<div class=\"showcase__form\">\n		<div class=\"showcase__form__col1\">\n			<div class=\"showcase__form__img-cont load-bg\">\n				<img src=\"/images_static/empty.png\" alt=\"\" class=\"showcase__form__img lazy\">\n			</div>\n			<h1 class=\"showcase__form-h\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n			<p class=\"showcase__form-desc\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n			<ul class=\"showcase__share\">\n				<li class=\"showcase__share-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "itemshowcase", options) : helperMissing.call(depth0, "_", "Share", "itemshowcase", options)))
    + "</li>\n				<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" rel=\"nofollow\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n				<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" rel=\"nofollow\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n				<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" rel=\"nofollow\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n			</ul>\n		</div>\n		<div class=\"showcase__form__col2\">\n			<span class=\"showcase__form-price\"><span class=\"showcase__form-price-val\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)))
    + "</span>&nbsp;";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n			<div class=\"showcase__form-email-group qst__inp-group\">\n				<div class=\"showcase__form-email-cont qst__inp-cont\">\n					<input type=\"text\" value=\"\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "email", "itemshowcase", options) : helperMissing.call(depth0, "_", "email", "itemshowcase", options)))
    + "\" class=\"showcase__form-email qst__inp\" disabled=\"disabled\" name=\"customer_email\">\n				</div>\n			</div>\n			<p class=\"showcase__form-price-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "for notifications about your purchases<br/>and feedback", "itemshowcase", options) : helperMissing.call(depth0, "_", "for notifications about your purchases<br/>and feedback", "itemshowcase", options)))
    + "</p>\n\n			<span class=\"showcase__form__buy-btn\"><span class=\"showcase__form__buy-btn-in\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Buy", "itemshowcase", options) : helperMissing.call(depth0, "_", "Buy", "itemshowcase", options)))
    + "</span></span>\n		</div>\n		<div class=\"showcase__form__bottom-row\">\n			<div class=\"showcase__form__bottom-row__col1\"><a href=\"http://qstoq.me\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemshowcase", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemshowcase", options)))
    + "</div>\n			<div class=\"showcase__form__bottom-row__col2\"><i class=\"is is-lock showcase__form__safe-icn\"></i><span class=\"showcase__form__safe-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Safe payment", "itemshowcase", options) : helperMissing.call(depth0, "_", "Safe payment", "itemshowcase", options)))
    + "</span></div>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/itemadd"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " class=\"active\"";
  }

  buffer += "<div class=\"itemadd-cont\">\n	<div class=\"itemadd__dialog\">\n		<div class=\"itemadd__form\">\n			<form action=\"add\" class=\"itemadd__form-el\">\n				<div class=\"qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<input type=\"text\" class=\"qst__inp\" name=\"name\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Title", "itemlist", options) : helperMissing.call(depth0, "_", "Title", "itemlist", options)))
    + "\">\n					</div>\n					<div class=\"qst__inp-cont\">\n						<input type=\"text\" class=\"qst__inp\" name=\"price\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Price, RUB", "itemlist", options) : helperMissing.call(depth0, "_", "Price, RUB", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<div class=\"item__types-cont\">\n					<span class=\"item__types-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "After payment", "itemlist", options) : helperMissing.call(depth0, "_", "After payment", "itemlist", options)))
    + "</span>\n					<ul class=\"item__types\">\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "link", options) : helperMissing.call(depth0, "ifEq", depth0.state, "link", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"link\" rel=\"nofollow\" class=\"item-link item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a link", "itemlist", options) : helperMissing.call(depth0, "_", "give a link", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"file\" rel=\"nofollow\" class=\"item-file item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a file", "itemlist", options) : helperMissing.call(depth0, "_", "give a file", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "nothing", options) : helperMissing.call(depth0, "ifEq", depth0.state, "nothing", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"nothing\" rel=\"nofollow\" class=\"item-nothing item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give nothing", "itemlist", options) : helperMissing.call(depth0, "_", "give nothing", "itemlist", options)))
    + "</a></li>\n					</ul>\n				</div>\n				<div class=\"itemedit__link qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<input type=\"text\" class=\"qst__inp\" name=\"link\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<div class=\"itemedit__file\">\n					<div class=\"qst__inp-cont\">\n						<div class=\"itemedit__inp-file-process\"></div>\n						<span class=\"itemedit__inp-file-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Drop or choose a file", "itemlist", options) : helperMissing.call(depth0, "_", "Drop or choose a file", "itemlist", options)))
    + "</span>\n						<input type=\"file\" class=\"qst__inp itemedit__inp-file\" name=\"file\" id=\"file_uploader\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<input type=\"submit\" class=\"inv\">\n			</form>\n		</div>\n		<div class=\"itemadd__submit\">\n			<span class=\"itemadd__error\"></span><a href=\"add\" rel=\"nofollow\" class=\"itemadd__submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add item", "itemlist", options) : helperMissing.call(depth0, "_", "Add item", "itemlist", options)))
    + "</a>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/itemedit-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<ul class=\"nav\">\n	<li class=\"item_main\"><a href=\"/item/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Main", "itemedit", options) : helperMissing.call(depth0, "_", "Main", "itemedit", options)))
    + "</a></li>\n	<li class=\"item_showcase\"><a href=\"/item/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/showcase\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Showcase", "itemedit", options) : helperMissing.call(depth0, "_", "Showcase", "itemedit", options)))
    + "</a></li>\n	<li class=\"item_finish\"><a href=\"/item/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/finish\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Purchase finish", "itemedit", options) : helperMissing.call(depth0, "_", "Purchase finish", "itemedit", options)))
    + "</a></li>\n	<li class=\"item_buyers\"><a href=\"/item/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/buyers\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Customers", "itemedit", options) : helperMissing.call(depth0, "_", "Customers", "itemedit", options)))
    + "</a></li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/itemedit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return " checked=\"checked\"";
  }

function program3(depth0,data) {
  
  
  return "+";
  }

function program5(depth0,data) {
  
  
  return " selected";
  }

function program7(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.ship_limit) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ship_limit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program9(depth0,data) {
  
  
  return "0";
  }

function program11(depth0,data) {
  
  
  return " class=\"active\"";
  }

function program13(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"itemedit__inp-file-title-a\" target=\"_blank\">";
  if (stack1 = helpers.filename) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.filename; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>";
  return buffer;
  }

function program15(depth0,data) {
  
  var stack1, options;
  options = {hash:{},data:data};
  return escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Drop or choose a file", "itemlist", options) : helperMissing.call(depth0, "_", "Drop or choose a file", "itemlist", options)));
  }

  buffer += "<div class=\"itemedit__short-link\"><span class=\"itemedit__short-link-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link for purchasing:", "itemedit", options) : helperMissing.call(depth0, "_", "Link for purchasing:", "itemedit", options)))
    + "</span> <a class=\"itemedit__short-link-a\" href=\"";
  if (stack2 = helpers.url_short) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\">";
  if (stack2 = helpers.url_short_path) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short_path; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a></div>\n<div class=\"itemedit__slide itemedit__slide_main\">\n	<div class=\"row\">\n		<div class=\"span8 itemedit__slide1__col1\">\n			<form action=\"edit\">\n				<div class=\"itemedit__activate-cont\">\n					<label>\n						<input type=\"checkbox\" value=\"1\"";
  stack2 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " name=\"active\"/>\n						<span class=\"itemedit__active-label\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Available or purchase", "itemedit", options) : helperMissing.call(depth0, "_", "Available or purchase", "itemedit", options)))
    + "</span>\n					</label>\n				</div>\n				<div class=\"qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Title", "itemlist", options) : helperMissing.call(depth0, "_", "Title", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"name\" value=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n							</div>\n						</label>\n					</div>\n					<div class=\"qst__inp-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Price", "itemlist", options) : helperMissing.call(depth0, "_", "Price", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"price\" value=\"";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  stack2 = helpers['if'].call(depth0, depth0.price_pwyw, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n							</div>\n						</label>\n					</div>\n					<div class=\"qst__inp-cont qst__select-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Currency", "itemedit", options) : helperMissing.call(depth0, "_", "Currency", "itemedit", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<select name=\"currency\" class=\"qst__select\">\n									<option value=\"RUB\"";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.currency, "RUB", options) : helperMissing.call(depth0, "ifEq", depth0.currency, "RUB", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ruble", "currency", options) : helperMissing.call(depth0, "_", "Ruble", "currency", options)))
    + "</option>\n									<option value=\"USD\"";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.currency, "USD", options) : helperMissing.call(depth0, "ifEq", depth0.currency, "USD", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "US Dollar", "currency", options) : helperMissing.call(depth0, "_", "US Dollar", "currency", options)))
    + "</option>\n									<option value=\"EUR\"";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.currency, "EUR", options) : helperMissing.call(depth0, "ifEq", depth0.currency, "EUR", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Euro", "currency", options) : helperMissing.call(depth0, "_", "Euro", "currency", options)))
    + "</option>\n									<!-- <option value=\"BTC\"";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.currency, "BTC", options) : helperMissing.call(depth0, "ifEq", depth0.currency, "BTC", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Bitcoin", "currency", options) : helperMissing.call(depth0, "_", "Bitcoin", "currency", options)))
    + "</option> -->\n								</select>\n							</div>\n						</label>\n					</div>\n					<div class=\"qst__inp-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Limit", "itemlist", options) : helperMissing.call(depth0, "_", "Limit", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"ship_limit\" value=\"";
  stack2 = helpers['if'].call(depth0, depth0.ship_limit, {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n							</div>\n						</label>\n					</div>\n					<div class=\"qst__inp-cont qst__inp-cont-ta\">\n						<textarea name=\"description\" class=\"itemedit__description qst__inp\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Descrition", "itemedit", options) : helperMissing.call(depth0, "_", "Descrition", "itemedit", options)))
    + "\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\n					</div>\n				</div>\n				<div class=\"item__preview-upload-cont\">\n				</div>\n				<div class=\"item__types-cont\">\n					<span class=\"item__types-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "After payment", "itemlist", options) : helperMissing.call(depth0, "_", "After payment", "itemlist", options)))
    + "</span>\n					<ul class=\"item__types\">\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "link", options) : helperMissing.call(depth0, "ifEq", depth0.state, "link", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"link\" rel=\"nofollow\" class=\"item-link item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a link", "itemlist", options) : helperMissing.call(depth0, "_", "give a link", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"file\" rel=\"nofollow\" class=\"item-file item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a file", "itemlist", options) : helperMissing.call(depth0, "_", "give a file", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "nothing", options) : helperMissing.call(depth0, "ifEq", depth0.state, "nothing", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"nothing\" rel=\"nofollow\" class=\"item-nothing item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give nothing", "itemlist", options) : helperMissing.call(depth0, "_", "give nothing", "itemlist", options)))
    + "</a></li>\n					</ul>\n				</div>\n				<div class=\"itemedit__link qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"link\" value=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n							</div>\n						</label>\n					</div>\n				</div>\n				<div class=\"itemedit__file\">\n					<div class=\"qst__inp-cont\">\n						<div class=\"itemedit__inp-file-process\"></div>\n						<span class=\"itemedit__inp-file-title\">";
  options = {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n						<input type=\"file\" class=\"qst__inp itemedit__inp-file\" name=\"file\" id=\"file_uploader\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<input type=\"submit\" class=\"inv\">\n			</form>\n			<div class=\"itemedit__submit\">\n				<a href=\"\" rel=\"nofollow\" class=\"itemedit__delete-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Remove link", "itemedit", options) : helperMissing.call(depth0, "_", "Remove link", "itemedit", options)))
    + "</a><span class=\"itemedit__error\"></span><a href=\"save\" rel=\"nofollow\" class=\"itemedit__submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "itemedit", options) : helperMissing.call(depth0, "_", "Save", "itemedit", options)))
    + "</a>\n			</div>\n		</div>\n		<div class=\"span4\">\n			<h3 class=\"itemedit__share-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link for purchase", "itemedit", options) : helperMissing.call(depth0, "_", "Link for purchase", "itemedit", options)))
    + "</h3>\n			<div class=\"itemedit__share-inp-cont\">\n				<i class=\"qi qi-share-link\"></i><input type=\"text\" value=\"";
  if (stack2 = helpers.url_short_path) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short_path; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"qst__inp\" readonly=\"readonly\">	\n			</div>\n			<p class=\"itemedit__share-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Clicking on that link your customers will get a purchase screen", "itemedit", options) : helperMissing.call(depth0, "_", "Clicking on that link your customers will get a purchase screen", "itemedit", options)))
    + "</p>\n			<p class=\"itemedit__share-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Spread the word on your site, on blog or social networks", "itemedit", options) : helperMissing.call(depth0, "_", "Spread the word on your site, on blog or social networks", "itemedit", options)))
    + "</p>\n			<ul class=\"itemedit__share-ul\">\n				<li>\n					<a href=\"vk\" rel=\"nofollow\" class=\"itemedit__share-btn itemedit__share-vk-btn\"><i class=\"qi qi-share-vk\"></i><span class=\"itemedit__share-btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Vkontakte", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Vkontakte", "itemedit", options)))
    + "</span></a>\n				</li><li>\n					<a href=\"facebook\" rel=\"nofollow\" class=\"itemedit__share-btn itemedit__share-fb-btn\"><i class=\"qi qi-share-fb\"></i><span class=\"itemedit__share-btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Facebook", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Facebook", "itemedit", options)))
    + "</span></a>\n				</li><li>\n					<a href=\"twitter\" rel=\"nofollow\" class=\"itemedit__share-btn itemedit__share-tw-btn\"><i class=\"qi qi-share-tw\"></i><span class=\"itemedit__share-btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Twitter", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Twitter", "itemedit", options)))
    + "</span></a>\n				</li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"itemedit__slide itemedit__slide_showcase\">\n	<div class=\"showcase__window\">\n		<div class=\"showcase__head\">\n			<div class=\"showcase__head_lt\"></div>\n			<div class=\"showcase__head_rt\"></div>\n			<div class=\"showcase__head_ct\">\n				<span class=\"showcase__head-title\">Qstoq &ndash; ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n			</div>\n		</div>\n		<div class=\"showcase__cont\">\n			<div class=\"showcase__form\">\n				<div class=\"showcase__form__col1\">\n					<div class=\"showcase__form__img-cont load-bg\">\n						<img src=\"/images_static/empty.png\" alt=\"\" class=\"showcase__form__img lazy\">\n					</div>\n					<h1 class=\"showcase__form-h\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h1>\n					<pre class=\"showcase__form-desc\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</pre>\n					<ul class=\"showcase__share\">\n						<li class=\"showcase__share-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "item", options) : helperMissing.call(depth0, "_", "Share", "item", options)))
    + "</li>\n						<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" rel=\"nofollow\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n						<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" rel=\"nofollow\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n						<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" rel=\"nofollow\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n					</ul>\n				</div>\n				<div class=\"showcase__form__col2\">\n					<span class=\"showcase__form-price\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)));
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n					<div class=\"showcase__form-email-group qst__inp-group\">\n						<div class=\"showcase__form-email-cont qst__inp-cont\">\n							<input type=\"text\" value=\"\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "email", "itemedit", options) : helperMissing.call(depth0, "_", "email", "itemedit", options)))
    + "\" class=\"showcase__form-email qst__inp\" disabled=\"disabled\" name=\"customer_email\">\n						</div>\n					</div>\n					<p class=\"showcase__form-price-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "for notifications about your purchases<br/>and feedback", "itemedit", options) : helperMissing.call(depth0, "_", "for notifications about your purchases<br/>and feedback", "itemedit", options)))
    + "</p>\n\n					<span class=\"showcase__form__buy-btn\"><span class=\"showcase__form__buy-btn-in\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Buy", "itemedit", options) : helperMissing.call(depth0, "_", "Buy", "itemedit", options)))
    + "</span></span>\n				</div>\n				<div class=\"showcase__form__bottom-row\">\n					<div class=\"showcase__form__bottom-row__col1\"><a href=\"http://qstoq.me\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemedit", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemedit", options)))
    + "</div>\n					<div class=\"showcase__form__bottom-row__col2\"><i class=\"is is-lock showcase__form__safe-icn\"></i><span class=\"showcase__form__safe-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Safe payment", "item", options) : helperMissing.call(depth0, "_", "Safe payment", "item", options)))
    + "</span></div>\n				</div>\n			</div>\n		</div>\n	</div>\n	<p class=\"showcase__desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "It is a preview of the purchase page your customers will see", "itemedit", options) : helperMissing.call(depth0, "_", "It is a preview of the purchase page your customers will see", "itemedit", options)))
    + "</p>\n</div>\n<div class=\"itemedit__slide itemedit__slide_finish\">\n	<div class=\"showcase__window\">\n		<div class=\"showcase__head\">\n			<div class=\"showcase__head_lt\"></div>\n			<div class=\"showcase__head_rt\"></div>\n			<div class=\"showcase__head_ct\">\n				<span class=\"showcase__head-title\">Qstoq &ndash; ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n			</div>\n		</div>\n		<div class=\"receipt-holder__cont\"></div>\n	</div>\n	<p class=\"showcase__desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "It is a receipt your customers will see", "itemedit", options) : helperMissing.call(depth0, "_", "It is a receipt your customers will see", "itemedit", options)))
    + "</p>\n</div>\n<div class=\"itemedit__slide itemedit__slide_buyers\"><h2 class=\"buyers__head\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Coming soon. The list of your buyer will help you to stay close to your customers", "itemedit", options) : helperMissing.call(depth0, "_", "Coming soon. The list of your buyer will help you to stay close to your customers", "itemedit", options)))
    + "</h2></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/itemlist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"itemlist__cont\">\n	<div class=\"itemlist__table-cont\">\n		<table class=\"itemlist__table\">\n			<thead>\n				<tr class=\"itemlist__table-head\">\n					<th class=\"link__caption\"><span class=\"link__sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "title", "itemlist", options) : helperMissing.call(depth0, "_", "title", "itemlist", options)))
    + "</span></th>\n					<th class=\"link__price\"><span class=\"link__sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "price", "itemlist", options) : helperMissing.call(depth0, "_", "price", "itemlist", options)))
    + "</span></th>\n					<th class=\"link__view-count\"><span class=\"link__sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "visits", "itemlist", options) : helperMissing.call(depth0, "_", "visits", "itemlist", options)))
    + "</span></th>\n					<th class=\"link__sold-count\"><span class=\"link__sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sold", "itemlist", options) : helperMissing.call(depth0, "_", "sold", "itemlist", options)))
    + "</span></th>\n					<th class=\"link__overall\"><span class=\"link__sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "overall", "itemlist", options) : helperMissing.call(depth0, "_", "overall", "itemlist", options)))
    + "</span></th>\n					<th class=\"link__link\"><span class=\"link__sp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "link", "itemlist", options) : helperMissing.call(depth0, "_", "link", "itemlist", options)))
    + "</span></th>\n					<th class=\"link__toggle\">&nbsp;</th>\n				</tr>\n			</thead>\n			<tbody></tbody>\n		</table>\n	</div>\n	<div class=\"itemlist__spinner\"></div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/link"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "+";
  }

function program3(depth0,data) {
  
  
  return " on";
  }

function program5(depth0,data) {
  
  
  return " off";
  }

  buffer += "<td class=\"link__caption\"><a href=\"/item/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"link__caption-a\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n<td class=\"link__price\"><span class=\"link__sp\">";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.price_pwyw, "1", options) : helperMissing.call(depth0, "ifEq", depth0.price_pwyw, "1", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)));
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span></td>\n<td class=\"link__view-count\"><span class=\"link__sp\">";
  if (stack2 = helpers.counter_view) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.counter_view; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n<td class=\"link__sold-count\"><span class=\"link__sp\">";
  if (stack2 = helpers.counter_ship) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.counter_ship; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n<td class=\"link__overall\"><span class=\"link__sp\">";
  if (stack2 = helpers.overall) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.overall; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n<td class=\"link__link\"><span class=\"link__link-sp link__sp\"><input type=\"text\" value=\"";
  if (stack2 = helpers.url_short_path) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short_path; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"qst__inp\" readonly=\"readonly\"></span></td>\n<td class=\"qst__toggle link__toggle";
  stack2 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><span class=\"qst__toggle-sp link__sp\"><a href=\"on\" rel=\"nofollow\" class=\"qst__toggle-a qst__toggle_on\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "On", "misc", options) : helperMissing.call(depth0, "_", "On", "misc", options)))
    + "</a><a href=\"off\" rel=\"nofollow\" class=\"qst__toggle-a qst__toggle_off\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Off", "misc", options) : helperMissing.call(depth0, "_", "Off", "misc", options)))
    + "</a></span></td>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"navbar-inner  navbar_unauthed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" alt=\"QSTOQ\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"navbar__item-how\"><a href=\"/how\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does it work", "navbar", options) : helperMissing.call(depth0, "_", "How does it work", "navbar", options)))
    + "</a></li>\n				<li class=\"navbar__item-where\"><a href=\"/where\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Where can I use it", "navbar", options) : helperMissing.call(depth0, "_", "Where can I use it", "navbar", options)))
    + "</a></li>\n				<li class=\"nav__login\"><a href=\"/auth\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in / Sign up", "navbar", options) : helperMissing.call(depth0, "_", "Log in / Sign up", "navbar", options)))
    + "</a></li>\n				<li class=\"nav__lang\"><a href=\"/l/en\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "lang", "navbar", options) : helperMissing.call(depth0, "_", "lang", "navbar", options)))
    + "</a></li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"navbar-inner navbar_authed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" alt=\"QSTOQ\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"nav__itemlist\"><a href=\"/items\"><span class=\"nav__my-items-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "My items", "navbar", options) : helperMissing.call(depth0, "_", "My items", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__paysystem\"><a href=\"/payments\"><span class=\"nav__payments-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Payments", "navbar", options) : helperMissing.call(depth0, "_", "Payments", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__profile\"><a href=\"/profile\"><span class=\"nav__profile-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Profile", "navbar", options) : helperMissing.call(depth0, "_", "Profile", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__logout\"><a href=\"/logout\" rel=\"nofollow\"><i class=\"qi qi-logout nav__icn\"></i></a></li>\n				<li class=\"nav__lang\"><a href=\"/l/en\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "lang", "navbar", options) : helperMissing.call(depth0, "_", "lang", "navbar", options)))
    + "</a></li>\n			</ul>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/paysystem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<p class=\"paysystem__misc-p error\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase2_1", "paysystem", options) : helperMissing.call(depth0, "_", "phrase2_1", "paysystem", options)))
    + "</p>\n			<!-- <p class=\"paysystem__misc-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase2_2", "paysystem", options) : helperMissing.call(depth0, "_", "phrase2_2", "paysystem", options)))
    + "</p> -->\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<p class=\"paysystem__misc-p error\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase2_1", "paysystem", options) : helperMissing.call(depth0, "_", "phrase2_1", "paysystem", options)))
    + "</p>\n			";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<!-- <p class=\"paysystem__misc-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase2_3", "paysystem", options) : helperMissing.call(depth0, "_", "phrase2_3", "paysystem", options)))
    + "</p> -->\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n			<div class=\"paysystem__item\">\n				<div class=\"paysystem__item__toggler\">\n					<label class=\"qst__toggle";
  stack1 = helpers['if'].call(depth0, depth0.toggle, {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"qst__toggle-sp\"><span class=\"qst__toggle-a qst__toggle_on\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "On", "misc", options) : helperMissing.call(depth0, "_", "On", "misc", options)))
    + "</span><span class=\"qst__toggle-a qst__toggle_off\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Off", "misc", options) : helperMissing.call(depth0, "_", "Off", "misc", options)))
    + "</span></span><input type=\"checkbox\" class=\"hidden-input qst__toggle__inp\" name=\"";
  if (stack2 = helpers.key) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.key; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "_active\" data-paysys=\"";
  if (stack2 = helpers.key) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.key; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-name=\"active\" value=\"1\"";
  stack2 = helpers['if'].call(depth0, depth0.toggle, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "></label>\n				</div>\n				<div class=\"paysystem__item__icons\">\n					";
  stack2 = helpers.each.call(depth0, depth0.icons, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n				</div>\n				<div class=\"paysystem__item__label\">\n					<span class=\"paysystem__item__label-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.key, "paysystem", options) : helperMissing.call(depth0, "_", depth0.key, "paysystem", options)))
    + "</span>\n				</div>\n				<div class=\"paysystem__item__setup\">\n					<a href=\"/payments/add/";
  if (stack2 = helpers.key) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.key; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/\" class=\"paysystem__item__setup-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "setup", "paysystem", options) : helperMissing.call(depth0, "_", "setup", "paysystem", options)))
    + "</a>\n				</div>\n			</div>\n			";
  return buffer;
  }
function program8(depth0,data) {
  
  
  return " on";
  }

function program10(depth0,data) {
  
  
  return " off";
  }

function program12(depth0,data) {
  
  
  return " checked=\"checked\"";
  }

function program14(depth0,data) {
  
  var buffer = "";
  buffer += "\n					<i class=\"p p-ps-"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"></i>\n					";
  return buffer;
  }

  buffer += "<div class=\"paysystem__cont\">\n	<div class=\"row\">\n		<div class=\"span4 paysystem__misc__cont\">\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "no", options) : helperMissing.call(depth0, "ifEq", depth0.state, "no", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "noactive", options) : helperMissing.call(depth0, "ifEq", depth0.state, "noactive", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "one", options) : helperMissing.call(depth0, "ifEq", depth0.state, "one", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<p class=\"paysystem__misc-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase2_4", "paysystem", options) : helperMissing.call(depth0, "_", "phrase2_4", "paysystem", options)))
    + "<a href=\"mailto:ola@qstoq.me\" target=\"mail\" class=\"paysystem__misc-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ask us", "paysystem", options) : helperMissing.call(depth0, "_", "Ask us", "paysystem", options)))
    + "</a></p>\n		</div>\n		<div class=\"span6 paysystem__item-cont\">\n			";
  stack2 = helpers.each.call(depth0, depth0.paysys, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"paysystem__fader\"></div>\n		</div>\n	</div>\n</div>\n<div class=\"paysystem__direct-hello\">\n	<div class=\"paysystem__direct-hello-in\">\n		<p class=\"paysystem__direct-hello-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase3_1", "paysystem", options) : helperMissing.call(depth0, "_", "phrase3_1", "paysystem", options)))
    + "</p>\n		<p class=\"paysystem__direct-hello-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase3_2", "paysystem", options) : helperMissing.call(depth0, "_", "phrase3_2", "paysystem", options)))
    + "</p>\n		<a class=\"paysystem__direct-hello-a\" target=\"mail\" href=\"mailto:ola@qstoq.me?subject=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect me", "paysystem", options) : helperMissing.call(depth0, "_", "Connect me", "paysystem", options)))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect me", "paysystem", options) : helperMissing.call(depth0, "_", "Connect me", "paysystem", options)))
    + "</a>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/paysystemadd"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.bitcoin)),stack1 == null || stack1 === false ? stack1 : stack1.payout_address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.bitcoin)),stack1 == null || stack1 === false ? stack1 : stack1.payout_limit)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program5(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_r)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program7(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_r)),stack1 == null || stack1 === false ? stack1 : stack1.purse_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program9(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_r)),stack1 == null || stack1 === false ? stack1 : stack1.purse_key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program11(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_z)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program13(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_z)),stack1 == null || stack1 === false ? stack1 : stack1.purse_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program15(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_z)),stack1 == null || stack1 === false ? stack1 : stack1.purse_key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program17(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_e)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program19(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_e)),stack1 == null || stack1 === false ? stack1 : stack1.purse_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program21(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_e)),stack1 == null || stack1 === false ? stack1 : stack1.purse_key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program23(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program25(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program27(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist)),stack1 == null || stack1 === false ? stack1 : stack1.password)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program29(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist)),stack1 == null || stack1 === false ? stack1 : stack1.salt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program31(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.qiwi)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program33(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.qiwi)),stack1 == null || stack1 === false ? stack1 : stack1.password)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program35(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paypal)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program37(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paypal)),stack1 == null || stack1 === false ? stack1 : stack1.secret)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program39(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.robokassa)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program41(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.robokassa)),stack1 == null || stack1 === false ? stack1 : stack1.pass1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program43(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.robokassa)),stack1 == null || stack1 === false ? stack1 : stack1.pass2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program45(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paymaster)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program47(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paymaster)),stack1 == null || stack1 === false ? stack1 : stack1.rest_login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program49(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paymaster)),stack1 == null || stack1 === false ? stack1 : stack1.rest_password)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program51(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.ymoney)),stack1 == null || stack1 === false ? stack1 : stack1.merchant_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program53(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.ymoney)),stack1 == null || stack1 === false ? stack1 : stack1.secret)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

  buffer += "<div class=\"paysystemadd__cont\">\n	<div class=\"paysystemadd__row bitcoin-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "bitcoin_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "bitcoin_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "bitcoin_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "bitcoin_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "bitcoin_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "bitcoin_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "bitcoin_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "bitcoin_itm_3", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"bitcoin_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "bitcoin_payout_address", "paysystemadd", options) : helperMissing.call(depth0, "_", "bitcoin_payout_address", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"payout_address\" name=\"bitcoin_payout_address\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.bitcoin), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "bitcoin_payout_limit", "paysystemadd", options) : helperMissing.call(depth0, "_", "bitcoin_payout_limit", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"bitcoin_payout_limit\" data-name=\"payout_limit\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.bitcoin), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row webmoney_r-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_r_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_r_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_r_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_r_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "webmoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_5", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"webmoney_r_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"webmoney_r_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_r), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_r_purse_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_r_purse_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"webmoney_r_purse_id\" data-name=\"purse_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_r), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_purse_key", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_purse_key", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"webmoney_r_purse_key\" data-name=\"purse_key\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_r), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row webmoney_z-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_z_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_z_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_z_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_z_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "webmoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_5", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"webmoney_z_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"webmoney_z_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_z), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_z_purse_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_z_purse_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"webmoney_z_purse_id\" data-name=\"purse_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_z), {hash:{},inverse:self.noop,fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_purse_key", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_purse_key", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"webmoney_z_purse_key\" data-name=\"purse_key\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_z), {hash:{},inverse:self.noop,fn:self.program(15, program15, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row webmoney_e-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_e_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_e_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_e_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_e_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "webmoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_itm_5", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"checkbox\" class=\"hidden-input\" name=\"webmoney_e_active\" data-name=\"active\" value=\"1\" checked=\"checked\">\n					<div class=\"qst__inp-group\">\n						<input type=\"hidden\" name=\"webmoney_e_active\" data-name=\"active\" value=\"1\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"webmoney_e_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_e), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_e_purse_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_e_purse_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"webmoney_e_purse_id\" data-name=\"purse_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_e), {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "webmoney_purse_key", "paysystemadd", options) : helperMissing.call(depth0, "_", "webmoney_purse_key", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"webmoney_e_purse_key\" data-name=\"purse_key\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.webmoney_e), {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row assist-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_4", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_itm_4", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_itm_5", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_6", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_itm_6", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_itm_7", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "assist_itm_7", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"assist_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"assist_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist), {hash:{},inverse:self.noop,fn:self.program(23, program23, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_login", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_login", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"assist_login\" data-name=\"login\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist), {hash:{},inverse:self.noop,fn:self.program(25, program25, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_password", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_password", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"assist_password\" data-name=\"password\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist), {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "assist_salt", "paysystemadd", options) : helperMissing.call(depth0, "_", "assist_salt", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"assist_salt\" data-name=\"salt\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.assist), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row qiwi-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_itm_4", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_itm_4", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_itm_5", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "qiwi_itm_5", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_itm_6", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_itm_6", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"qiwi_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"qiwi_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.qiwi), {hash:{},inverse:self.noop,fn:self.program(31, program31, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "qiwi_password", "paysystemadd", options) : helperMissing.call(depth0, "_", "qiwi_password", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"qiwi_password\" data-name=\"password\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.qiwi), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row paypal-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_itm_2", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "paypal_itm_2", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_itm_4", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_itm_4", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_itm_5", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"paypal_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_merch_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_merch_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"paypal_merch_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paypal), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paypal_secret", "paysystemadd", options) : helperMissing.call(depth0, "_", "paypal_secret", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"paypal_secret\" data-name=\"secret\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paypal), {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row robokassa-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_2", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "robokassa_itm_2", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_4", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_itm_4", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_itm_5", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_6", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "robokassa_itm_6", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_7", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_itm_7", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_itm_8", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_itm_8", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"robokassa_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_merch_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_merch_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"robokassa_merch_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.robokassa), {hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_pass1", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_pass1", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"robokassa_pass1\" data-name=\"pass1\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.robokassa), {hash:{},inverse:self.noop,fn:self.program(41, program41, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "robokassa_pass2", "paysystemadd", options) : helperMissing.call(depth0, "_", "robokassa_pass2", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"robokassa_pass2\" data-name=\"pass2\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.robokassa), {hash:{},inverse:self.noop,fn:self.program(43, program43, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row paymaster-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_2", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "paymaster_itm_2", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_4", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_itm_4", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_itm_5", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_6", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "paymaster_itm_6", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_itm_7", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_itm_7", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"paymaster_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"paymaster_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paymaster), {hash:{},inverse:self.noop,fn:self.program(45, program45, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_rest_login", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_rest_login", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"paymaster_rest_login\" data-name=\"rest_login\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paymaster), {hash:{},inverse:self.noop,fn:self.program(47, program47, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "paymaster_rest_password", "paysystemadd", options) : helperMissing.call(depth0, "_", "paymaster_rest_password", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"paymaster_rest_password\" data-name=\"rest_password\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.paymaster), {hash:{},inverse:self.noop,fn:self.program(49, program49, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n	<div class=\"paysystemadd__row ymoney-row\">\n		<h1 class=\"paysystemadd__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_h", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_h", "paysystemadd", options)))
    + "</h1>\n		<div class=\"row\">\n			<div class=\"span6\">\n				<ul class=\"paysystemadd__info-list\">\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_itm_1", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_itm_1", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_itm_2", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_itm_2", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_itm_3", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_itm_3", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options) : helperMissing.call(depth0, "_", "ymoney_itm_4", "paysystemadd", ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.id), options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_itm_5", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_itm_5", "paysystemadd", options)))
    + "</li>\n					<li class=\"paysystemadd__info-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_itm_6", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_itm_6", "paysystemadd", options)))
    + "</li>\n				</ul>\n			</div>\n			<div class=\"span5\">\n				<form action=\"\" class=\"paysystemadd__form\">\n					<input type=\"hidden\" name=\"ymoney_active\" data-name=\"active\" value=\"1\">\n					<div class=\"qst__inp-group\">\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_merchant_id", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_merchant_id", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" data-name=\"merchant_id\" name=\"ymoney_merchant_id\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.ymoney), {hash:{},inverse:self.noop,fn:self.program(51, program51, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n						<div class=\"qst__inp-cont\">\n							<label>\n								<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ymoney_secret", "paysystemadd", options) : helperMissing.call(depth0, "_", "ymoney_secret", "paysystemadd", options)))
    + "</span>\n								<div class=\"qst__inp-cont-in\">\n									<input type=\"text\" class=\"qst__inp\" name=\"ymoney_secret\" data-name=\"secret\" value=\"";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.settings),stack1 == null || stack1 === false ? stack1 : stack1.paysys)),stack1 == null || stack1 === false ? stack1 : stack1.ymoney), {hash:{},inverse:self.noop,fn:self.program(53, program53, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n								</div>\n							</label>\n						</div>\n					</div>\n					<input type=\"submit\" class=\"hidden-input\">\n					<div class=\"paysystemadd__form-submit\">\n						<span class=\"paysystemadd__form-submit-error\"></span>\n						<a href=\"submit\" rel=\"nofollow\" class=\"paysystemadd__form-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "paysystemadd", options) : helperMissing.call(depth0, "_", "Save", "paysystemadd", options)))
    + "</a>\n					</div>\n				</form>\n			</div>\n		</div>\n	</div>\n</div>\n<div class=\"paysystemadd__fader\"></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/preview-upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"preview-upload__group\">\n	<div class=\"qst__inp-cont\">\n		<div class=\"preview-upload__inp-file-process\"></div>\n		<div class=\"preview-upload__img-cont load-bg\">\n			<img src=\"/images_static/empty.png\" alt=\"\" class=\"preview-upload__img lazy\">\n		</div>\n		<h2 class=\"preview-upload__add-h\" >";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add preview", "preview_upload", options) : helperMissing.call(depth0, "_", "Add preview", "preview_upload", options)))
    + "</h2>\n		<span class=\"preview-upload__add-another\" >";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add another", "preview_upload", options) : helperMissing.call(depth0, "_", "Add another", "preview_upload", options)))
    + "</span>\n		<a class=\"preview-upload__delete\" href=\"delete\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Remove preview", "preview_upload", options) : helperMissing.call(depth0, "_", "Remove preview", "preview_upload", options)))
    + "</a>\n		<span class=\"preview-upload__add-desc\" >";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "jpg, png or gif. The image will be resized to 320px x 180px", "preview_upload", options) : helperMissing.call(depth0, "_", "jpg, png or gif. The image will be resized to 320px x 180px", "preview_upload", options)))
    + "</span>\n		<input type=\"file\" class=\"qst__inp preview-upload__inp-file itemedit__inp-file\" name=\"file_preview\" id=\"file_uploader_preview\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\" accept=\"image/jpeg,image/png,image/gif\">\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/profile-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"nav\">\n	<li class=\"item_account\"><a href=\"/profile\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Account", "profile", options) : helperMissing.call(depth0, "_", "Account", "profile", options)))
    + "</a></li>\n	<li class=\"item_withdrawal\"><a href=\"/profile/withdrawal\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Withdrawal", "profile", options) : helperMissing.call(depth0, "_", "Withdrawal", "profile", options)))
    + "</a></li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/user-info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"profile__invite\"><i class=\"ip ip-invite\"></i><a class=\"profile__invite-title\" href=\"/invite\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Invite friends", "user_info", options) : helperMissing.call(depth0, "_", "Invite friends", "user_info", options)))
    + "</a></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<div class=\"profile__follow-head ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.follow), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n		<div class=\"profile__follow-unfollow\">\n			<span class=\"profile__follow-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Remove", "user_info", options) : helperMissing.call(depth0, "_", "Remove", "user_info", options)))
    + "</span>\n			<i class=\"ip ip-unfollow\"></i>\n		</div>\n		<div class=\"profile__follow-follow\">\n			<span class=\"profile__follow-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Follow", "user_info", options) : helperMissing.call(depth0, "_", "Follow", "user_info", options)))
    + "</span>\n			<i class=\"ip ip-follow\"></i>\n		</div>\n	</div>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "followed";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"load-bg\">\n			<img src=\"/images_static/empty.png \" data-orig=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.background)),stack1 == null || stack1 === false ? stack1 : stack1.i640x640)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"100%\" class=\"lazy profile__bg-img\">\n		</div>\n	";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n		<img src=\"/images_static/empty.png \" width=\"100%\" class=\"profile__bg-img\">\n	";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<a href=\"/add/avatar/nice-to-meet-u/\" rel=\"nofollow\"><img src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.url), "212x212", options) : helperMissing.call(depth0, "_uphoto", ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.url), "212x212", options)))
    + "\" width=\"110\" height=\"110\" class=\"profile__avatar-img\"></a>\n	";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<img src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.url), "212x212", options) : helperMissing.call(depth0, "_uphoto", ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.url), "212x212", options)))
    + "\" width=\"110\" height=\"110\" class=\"profile__avatar-img\">\n	";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n	<div class=\"profile__interact profile__interact-bio\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio), {hash:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n	";
  return buffer;
  }
function program15(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<i class=\"ip ip-bio\"></i><span class=\"profile__interact-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit bio", "user_info", options) : helperMissing.call(depth0, "_", "Edit bio", "user_info", options)))
    + "</span>\n		";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<i class=\"ip ip-bio\"></i><span class=\"profile__interact-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add bio", "user_info", options) : helperMissing.call(depth0, "_", "Add bio", "user_info", options)))
    + "</span>\n		";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"profile__interact profile__interact-message\">\n		<i class=\"ip ip-message\"></i><span class=\"profile__interact-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Message", "user_info", options) : helperMissing.call(depth0, "_", "Message", "user_info", options)))
    + "</span>\n	</div>\n	";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"profile__bio\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n";
  return buffer;
  }
function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<textarea placeholder=\"\" class=\"profile__bio-input input_clear\" maxlength=\"249\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n	";
  return buffer;
  }

function program24(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n		<p class=\"profile__bio-text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uinput || depth0._uinput),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio), options) : helperMissing.call(depth0, "_uinput", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio), options)))
    + "</p>\n	";
  return buffer;
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.noop,fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"profile__bio profile__bio-hidden\">\n		<textarea placeholder=\"\" class=\"profile__bio-input input_clear\" maxlength=\"249\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</textarea>\n	</div>\n	";
  return buffer;
  }

function program29(depth0,data) {
  
  
  return "\n<ul class=\"profile__social\">\n	<li class=\"profile__social-item\"><a href=\"https://www.facebook.com/qstoq\" target=\"_blank\"><i class=\"isc isc-fb_prfl\"></i></a></li>\n	<li class=\"profile__social-item\"><a href=\"https://twitter.com/qstoq\" target=\"_blank\"><i class=\"isc isc-tw_prfl\"></i></a></li>\n	<li class=\"profile__social-item\"><a href=\"http://vk.com/qstoq\" target=\"_blank\"><i class=\"isc isc-vk_prfl\"></i></a></li>\n</ul>\n";
  }

function program31(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data};
  stack2 = ((stack1 = helpers.ifOR || depth0.ifOR),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.fb_id), ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id), ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.vk_id), options) : helperMissing.call(depth0, "ifOR", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.fb_id), ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id), ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.vk_id), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<ul class=\"profile__social\">\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.fb_id), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.vk_id), {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li class=\"profile__social-item\"><a href=\"https://facebook.com/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.fb_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\"><i class=\"isc isc-fb_prfl\"></i></a></li>";
  return buffer;
  }

function program35(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li class=\"profile__social-item\"><a href=\"https://twitter.com/account/redirect_by_id?id="
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\"><i class=\"isc isc-tw_prfl\"></i></a></li>";
  return buffer;
  }

function program37(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<li class=\"profile__social-item\"><a href=\"http://vk.com/profile.php?id="
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.vk_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\"><i class=\"isc isc-vk_prfl\"></i></a></li>";
  return buffer;
  }

function program39(depth0,data) {
  
  
  return "\n";
  }

function program41(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	";
  options = {hash:{},inverse:self.program(44, program44, data),fn:self.program(42, program42, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id), 6176, options) : helperMissing.call(depth0, "ifEq", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id), 6176, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program42(depth0,data) {
  
  
  return "\n	";
  }

function program44(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n		<div class=\"profile__report\"><i class=\"ip ip-report\"></i><span class=\"profile__report-title\" data-url=\"/api/complaint/user/\" data-content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Do you want to report this user?", "user_info", options) : helperMissing.call(depth0, "_", "Do you want to report this user?", "user_info", options)))
    + "\" data-ok=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Report", "user_info", options) : helperMissing.call(depth0, "_", "Report", "user_info", options)))
    + "\" data-close=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "user_info", options) : helperMissing.call(depth0, "_", "Cancel", "user_info", options)))
    + "\" data-success=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "User reported.", "user_info", options) : helperMissing.call(depth0, "_", "User reported.", "user_info", options)))
    + "\" data-error=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Something went wrong...", "user_info", options) : helperMissing.call(depth0, "_", "Something went wrong...", "user_info", options)))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Report user", "user_info", options) : helperMissing.call(depth0, "_", "Report user", "user_info", options)))
    + "</span></div>\n	";
  return buffer;
  }

  buffer += "<div class=\"profile__follow\">\n";
  stack1 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"profile__bg\">\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.background), {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	<div class=\"profile__follow-cont\">\n		<div class=\"profile__followers\" data-decl=\"follower\"><strong class=\"follow_count\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.followers_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong><span class=\"follow_decl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._plural || depth0._plural),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.followers_count), "follower", options) : helperMissing.call(depth0, "_plural", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.followers_count), "follower", options)))
    + "</span></div>\n		<div class=\"profile__following\" data-decl=\"following\"><strong class=\"follow_count\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.followings_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong><span class=\"follow_decl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._plural || depth0._plural),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.followings_count), "following", options) : helperMissing.call(depth0, "_plural", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.followings_count), "following", options)))
    + "</span></div>\n	</div>\n</div>\n<div class=\"profile__avatar\">\n	";
  stack2 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(12, program12, data),fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  stack2 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(19, program19, data),fn:self.program(14, program14, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio), {hash:{},inverse:self.program(26, program26, data),fn:self.program(21, program21, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  options = {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id), 6176, options) : helperMissing.call(depth0, "ifEq", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id), 6176, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  stack2 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(41, program41, data),fn:self.program(39, program39, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/403-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"error-page__description\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phr001", "p403", options) : helperMissing.call(depth0, "_", "phr001", "p403", options)))
    + "</p>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/404-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"error-page__list\">\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Make sure that URL entered correctly;", "p404", options) : helperMissing.call(depth0, "_", "Make sure that URL entered correctly;", "p404", options)))
    + "</li>\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or drop us a line to <a href=\"mailto:support@qstoq.me\" class=\"lnk\">support@qstoq.me.</a>", "p404", options) : helperMissing.call(depth0, "_", "or drop us a line to <a href=\"mailto:support@qstoq.me\" class=\"lnk\">support@qstoq.me.</a>", "p404", options)))
    + "</li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/business-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<section class=\"business-section business-section1\">\n	<div class=\"business__container\">\n		<div class=\"business__container-in\">\n			<h1 class=\"business__h1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec1-h1", "business_page", options) : helperMissing.call(depth0, "_", "sec1-h1", "business_page", options)))
    + "</h1>\n			<p class=\"business-section1-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec1-p", "business_page", options) : helperMissing.call(depth0, "_", "sec1-p", "business_page", options)))
    + "</p>\n			<div class=\"business__start\">\n				<a target=\"mail\" href=\"mailto:ola@qstoq.meq?subject=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect me", "paysystem", options) : helperMissing.call(depth0, "_", "Connect me", "paysystem", options)))
    + "\" class=\"business__start-a\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect", "business_page", options) : helperMissing.call(depth0, "_", "Connect", "business_page", options)))
    + "</a>\n			</div>\n		</div>\n	</div>\n</section>\n<section class=\"business-section business-section2\">\n	<div class=\"business__container\">\n		<div class=\"business__container-in\">\n			<ul class=\"business__list\">\n				<li class=\"business__list-itm\">\n					<h3 class=\"business__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-0-h", "business_page", options) : helperMissing.call(depth0, "_", "sec2-0-h", "business_page", options)))
    + "</h3>\n					<p class=\"business__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-0-p", "business_page", options) : helperMissing.call(depth0, "_", "sec2-0-p", "business_page", options)))
    + "</p>\n				</li>\n				<li class=\"business__list-itm\">\n					<h3 class=\"business__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-1-h", "business_page", options) : helperMissing.call(depth0, "_", "sec2-1-h", "business_page", options)))
    + "</h3>\n					<p class=\"business__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-1-p", "business_page", options) : helperMissing.call(depth0, "_", "sec2-1-p", "business_page", options)))
    + "</p>\n				</li>\n				<li class=\"business__list-itm\">\n					<h3 class=\"business__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-2-h", "business_page", options) : helperMissing.call(depth0, "_", "sec2-2-h", "business_page", options)))
    + "</h3>\n					<p class=\"business__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-2-p", "business_page", options) : helperMissing.call(depth0, "_", "sec2-2-p", "business_page", options)))
    + "</p>\n				</li>\n				<li class=\"business__list-itm\">\n					<h3 class=\"business__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-3-h", "business_page", options) : helperMissing.call(depth0, "_", "sec2-3-h", "business_page", options)))
    + "</h3>\n					<p class=\"business__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-3-p", "business_page", options) : helperMissing.call(depth0, "_", "sec2-3-p", "business_page", options)))
    + "</p>\n				</li>\n				<li class=\"business__list-itm\">\n					<h3 class=\"business__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-4-h", "business_page", options) : helperMissing.call(depth0, "_", "sec2-4-h", "business_page", options)))
    + "</h3>\n					<p class=\"business__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sec2-4-p", "business_page", options) : helperMissing.call(depth0, "_", "sec2-4-p", "business_page", options)))
    + "</p>\n				</li>\n			</ul>\n			<div class=\"business__screen1\"></div>\n			<div class=\"business__screen2\"></div>\n		</div>\n	</div>\n</section>\n<section class=\"business-section business-section3\">\n	<div class=\"business__container\">\n		<div class=\"business__container-in\">\n			<div class=\"business__toggler toggle1\">\n				<ul class=\"business__toggler-menu\">\n					<li class=\"business__toggler-menu-itm\">\n						<a class=\"business__toggler-menu-itm-a\" href=\".\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "tools", "business_page", options) : helperMissing.call(depth0, "_", "tools", "business_page", options)))
    + "</a>\n					</li>\n					<li class=\"business__toggler-menu-itm\">\n						<a class=\"business__toggler-menu-itm-a\" href=\".\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "systems", "business_page", options) : helperMissing.call(depth0, "_", "systems", "business_page", options)))
    + "</a>\n					</li>\n				</ul>\n				<div class=\"business__toggler-tools\"></div>\n				<div class=\"business__toggler-systems\">\n					<div class=\"business__toggler-systems-col\">\n						<ul class=\"business__toggler-systems-list\">\n							<li class=\"business__toggler-system\"><strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Mobile phone", "business_page", options) : helperMissing.call(depth0, "_", "Mobile phone", "business_page", options)))
    + "</strong></li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "MTS", "business_page", options) : helperMissing.call(depth0, "_", "MTS", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Megafon", "business_page", options) : helperMissing.call(depth0, "_", "Megafon", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Beeline", "business_page", options) : helperMissing.call(depth0, "_", "Beeline", "business_page", options)))
    + "</li>\n						</ul>\n						<ul class=\"business__toggler-systems-list\">\n							<li class=\"business__toggler-system\"><strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Terminals", "business_page", options) : helperMissing.call(depth0, "_", "Terminals", "business_page", options)))
    + "</strong></li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal1", "business_page", options) : helperMissing.call(depth0, "_", "terminal1", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal2", "business_page", options) : helperMissing.call(depth0, "_", "terminal2", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal3", "business_page", options) : helperMissing.call(depth0, "_", "terminal3", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal4", "business_page", options) : helperMissing.call(depth0, "_", "terminal4", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal5", "business_page", options) : helperMissing.call(depth0, "_", "terminal5", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal6", "business_page", options) : helperMissing.call(depth0, "_", "terminal6", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal7", "business_page", options) : helperMissing.call(depth0, "_", "terminal7", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "terminal8", "business_page", options) : helperMissing.call(depth0, "_", "terminal8", "business_page", options)))
    + "</li>\n						</ul>\n					</div>\n					<div class=\"business__toggler-systems-col\">\n						<ul class=\"business__toggler-systems-list\">\n							<li class=\"business__toggler-system\"><strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Credit cards", "business_page", options) : helperMissing.call(depth0, "_", "Credit cards", "business_page", options)))
    + "</strong></li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Visa", "business_page", options) : helperMissing.call(depth0, "_", "Visa", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "MasterCard", "business_page", options) : helperMissing.call(depth0, "_", "MasterCard", "business_page", options)))
    + "</li>\n						</ul>\n						<ul class=\"business__toggler-systems-list\">\n							<li class=\"business__toggler-system\"><strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Emoney", "business_page", options) : helperMissing.call(depth0, "_", "Emoney", "business_page", options)))
    + "</strong></li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney1", "business_page", options) : helperMissing.call(depth0, "_", "emoney1", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney2", "business_page", options) : helperMissing.call(depth0, "_", "emoney2", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney3", "business_page", options) : helperMissing.call(depth0, "_", "emoney3", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney4", "business_page", options) : helperMissing.call(depth0, "_", "emoney4", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney5", "business_page", options) : helperMissing.call(depth0, "_", "emoney5", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney6", "business_page", options) : helperMissing.call(depth0, "_", "emoney6", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney7", "business_page", options) : helperMissing.call(depth0, "_", "emoney7", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney8", "business_page", options) : helperMissing.call(depth0, "_", "emoney8", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "emoney9", "business_page", options) : helperMissing.call(depth0, "_", "emoney9", "business_page", options)))
    + "</li>\n						</ul>\n					</div>\n					<div class=\"business__toggler-systems-col\">\n						<ul class=\"business__toggler-systems-list\">\n							<li class=\"business__toggler-system\"><strong>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Internet banks", "business_page", options) : helperMissing.call(depth0, "_", "Internet banks", "business_page", options)))
    + "</strong></li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank1", "business_page", options) : helperMissing.call(depth0, "_", "ibank1", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank2", "business_page", options) : helperMissing.call(depth0, "_", "ibank2", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank3", "business_page", options) : helperMissing.call(depth0, "_", "ibank3", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank4", "business_page", options) : helperMissing.call(depth0, "_", "ibank4", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank5", "business_page", options) : helperMissing.call(depth0, "_", "ibank5", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank6", "business_page", options) : helperMissing.call(depth0, "_", "ibank6", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank7", "business_page", options) : helperMissing.call(depth0, "_", "ibank7", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank8", "business_page", options) : helperMissing.call(depth0, "_", "ibank8", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank9", "business_page", options) : helperMissing.call(depth0, "_", "ibank9", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank10", "business_page", options) : helperMissing.call(depth0, "_", "ibank10", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank11", "business_page", options) : helperMissing.call(depth0, "_", "ibank11", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank12", "business_page", options) : helperMissing.call(depth0, "_", "ibank12", "business_page", options)))
    + "</li>\n						</ul>\n					</div>\n					<div class=\"business__toggler-systems-col\">\n						<ul class=\"business__toggler-systems-list\">\n							<li class=\"business__toggler-system\"><strong> </strong></li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank13", "business_page", options) : helperMissing.call(depth0, "_", "ibank13", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank14", "business_page", options) : helperMissing.call(depth0, "_", "ibank14", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank15", "business_page", options) : helperMissing.call(depth0, "_", "ibank15", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank16", "business_page", options) : helperMissing.call(depth0, "_", "ibank16", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank17", "business_page", options) : helperMissing.call(depth0, "_", "ibank17", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank18", "business_page", options) : helperMissing.call(depth0, "_", "ibank18", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank19", "business_page", options) : helperMissing.call(depth0, "_", "ibank19", "business_page", options)))
    + "</li>\n							<li class=\"business__toggler-system\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ibank20", "business_page", options) : helperMissing.call(depth0, "_", "ibank20", "business_page", options)))
    + "</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</section>\n<section class=\"business-section business-section4\">\n	<div class=\"business__container\">\n		<div class=\"business__container-in\">\n			<ul class=\"business__response\">\n				<li class=\"business__response-itm\">\n					<div class=\"business__response-face\"></div>\n				</li>\n				<li class=\"business__response-itm\">\n					<div class=\"business__response-pos\">\n						<h3 class=\"business__response-name\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "nm", "business_page", options) : helperMissing.call(depth0, "_", "nm", "business_page", options)))
    + "</h3>\n						<span class=\"business__response-ocup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ocup", "business_page", options) : helperMissing.call(depth0, "_", "ocup", "business_page", options)))
    + "</span>\n					</div>\n				</li>\n				<li class=\"business__response-itm\">\n					<div class=\"business__response-quote\">\n						<i class=\"ib2 ib2-quo\"></i>\n					</div>\n				</li>\n				<li class=\"business__response-itm\">\n					<div class=\"business__response-desc\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "response_description", "business_page", options) : helperMissing.call(depth0, "_", "response_description", "business_page", options)))
    + "</div>\n				</li>\n				<li class=\"business__response-itm\">\n					<div class=\"business__response-logo\"><i class=\"ib2 ib2-jh-logo\"></i></div>\n				</li>\n			</ul>\n		</div>\n	</div>\n</section>\n<section class=\"business-section business-section5\">\n	<div class=\"business__container\">\n		<div class=\"business__container-in\">\n			<h2 class=\"business__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect Qstoq", "business_page", options) : helperMissing.call(depth0, "_", "Connect Qstoq", "business_page", options)))
    + "</h2>\n			<form class=\"business__connect-form\">\n				<input type=\"text\" class=\"business__connect-email\" name=\"email\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "e-mail", "business_page", options) : helperMissing.call(depth0, "_", "e-mail", "business_page", options)))
    + "\">\n				<button type=\"submit\" class=\"business__connect-submit\" value=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "submit", "business_page", options) : helperMissing.call(depth0, "_", "submit", "business_page", options)))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "submit", "business_page", options) : helperMissing.call(depth0, "_", "submit", "business_page", options)))
    + "</button>\n			</form>\n			<p class=\"business__connect-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "connect-p", "business_page", options) : helperMissing.call(depth0, "_", "connect-p", "business_page", options)))
    + "</p>\n		</div>\n	</div>\n</section>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/info-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"page-info_";
  if (stack1 = helpers.section) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.section; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"info__menu-row\"></div>\n	<div class=\"info__section-row container\"></div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/itemedit-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"page-itemedit_";
  if (stack1 = helpers.section) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.section; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"itemedit__menu-row\"></div>\n	<div class=\"itemedit__section-row\"></div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/itemlist-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"itemlist-head\">\n	<div class=\"itemlist-head__cnt\"></div>\n	<div class=\"itemlist-head__btn\">\n		<a href=\"add\" rel=\"nofollow\" class=\"itemadd__btn\"><i class=\"qi qi-add\"></i><span class=\"itemadd__btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add", "itemlist", options) : helperMissing.call(depth0, "_", "Add", "itemlist", options)))
    + "</span></a>\n	</div>\n</div>\n<div class=\"itemlist-row\"></div>\n<div class=\"itemlist-row_empty\">\n	<div class=\"row\">\n		<div class=\"span10 offset1\">\n			<h1 class=\"itemlist__h1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_h", "itemlist", options) : helperMissing.call(depth0, "_", "empty_h", "itemlist", options)))
    + "</h1>\n		</div>\n	</div>\n	<div class=\"row\">\n		<div class=\"span6 offset1\">\n		<ul class=\"itemlist__empty-list\">\n			<li class=\"itemlist__empty-item\">\n				<h2 class=\"itemlist__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_h1", "itemlist", options) : helperMissing.call(depth0, "_", "empty_h1", "itemlist", options)))
    + "</h2>\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p1_1", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p1_1", "itemlist", options)))
    + "</p>\n				<!-- <p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p1_2", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p1_2", "itemlist", options)))
    + "</p> -->\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p1_3", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p1_3", "itemlist", options)))
    + "</p>\n			</li>\n			<li class=\"itemlist__empty-item\">\n				<h2 class=\"itemlist__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_h2", "itemlist", options) : helperMissing.call(depth0, "_", "empty_h2", "itemlist", options)))
    + "</h2>\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p2_1", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p2_1", "itemlist", options)))
    + "</p>\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p2_2", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p2_2", "itemlist", options)))
    + "</p>\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p2_3", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p2_3", "itemlist", options)))
    + "</p>\n			</li>\n			<li class=\"itemlist__empty-item\">\n				<h2 class=\"itemlist__h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_h3", "itemlist", options) : helperMissing.call(depth0, "_", "empty_h3", "itemlist", options)))
    + "</h2>\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p3_1", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p3_1", "itemlist", options)))
    + "</p>\n				<p class=\"itemlist__p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "empty_p3_2", "itemlist", options) : helperMissing.call(depth0, "_", "empty_p3_2", "itemlist", options)))
    + "</p>\n			</li>\n		</ul>\n		</div>\n		<div class=\"span4\">\n			<div class=\"itemlist__direct-hello\">\n				<div class=\"itemlist__direct-hello-in\">\n					<p class=\"itemlist__direct-hello-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase3_1", "paysystem", options) : helperMissing.call(depth0, "_", "phrase3_1", "paysystem", options)))
    + "</p>\n					<p class=\"itemlist__direct-hello-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase3_2", "paysystem", options) : helperMissing.call(depth0, "_", "phrase3_2", "paysystem", options)))
    + "</p>\n					<a class=\"itemlist__direct-hello-a\" target=\"mail\" href=\"mailto:ola@qstoq.me?subject=";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect me", "paysystem", options) : helperMissing.call(depth0, "_", "Connect me", "paysystem", options)))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect me", "paysystem", options) : helperMissing.call(depth0, "_", "Connect me", "paysystem", options)))
    + "</a>\n				</div>\n			</div>\n			<div class=\"itemlist__col2__l1\">\n				<i class=\"qi qi-view\"></i><a href=\"http://s.qstoq.me/b877\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Qstoq price tag example", "itemlist", options) : helperMissing.call(depth0, "_", "Qstoq price tag example", "itemlist", options)))
    + "</a>\n			</div>\n			<h2 class=\"itemlist__h2 itemlist__col2__l2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Any questions?", "itemlist", options) : helperMissing.call(depth0, "_", "Any questions?", "itemlist", options)))
    + "<br/>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Please, open the page of answers", "itemlist", options) : helperMissing.call(depth0, "_", "Please, open the page of answers", "itemlist", options)))
    + "</h2>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/landing-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<section class=\"landing-section landing-section1\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h1 class=\"landing__h1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get payments online<br/>for what ever and where ever you want", "landing_page", options) : helperMissing.call(depth0, "_", "Get payments online<br/>for what ever and where ever you want", "landing_page", options)))
    + "</h1>\n			<p class=\"landing-section1-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section1-p", "landing_page", options)))
    + "</p>\n			<div class=\"landing__start\">\n				<a href=\"/auth\" class=\"landing__start-a\" rel=\"nofollow\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Start", "landing_page", options) : helperMissing.call(depth0, "_", "Start", "landing_page", options)))
    + "</a>\n\n				<div class=\"landing__start-example\">\n					<i class=\"ib ib-pt\"></i><a href=\"http://s.qstoq.me/b877\" target=\"_blank\" class=\"landing__start-example-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Pricetag example", "landing_page", options) : helperMissing.call(depth0, "_", "Pricetag example", "landing_page", options)))
    + "</a>\n				</div>\n			</div>\n\n		</div>\n	</div>\n	<a href=\"/next\" class=\"landing__next-a\" rel=\"nofollow\">\n		<span class=\"landing__next-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does it work", "landing_page", options) : helperMissing.call(depth0, "_", "How does it work", "landing_page", options)))
    + "</span>\n		<i class=\"ib ib-arr\"></i>\n	</a>\n</section>\n<section class=\"landing-section landing-section2\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does Qstoq work", "landing_page", options) : helperMissing.call(depth0, "_", "How does Qstoq work", "landing_page", options)))
    + "</h2>\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-l1\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Connect your payment systems", "landing_page", options) : helperMissing.call(depth0, "_", "Connect your payment systems", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-0-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-0-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-l2\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Create a price tag", "landing_page", options) : helperMissing.call(depth0, "_", "Create a price tag", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-l3\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Publish the link", "landing_page", options) : helperMissing.call(depth0, "_", "Publish the link", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section3\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get payments in any cases", "landing_page", options) : helperMissing.call(depth0, "_", "Get payments in any cases", "landing_page", options)))
    + "</h2>\n			<p class=\"landing-section3-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-p", "landing_page", options)))
    + "</p>\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li1\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Donate", "landing_page", options) : helperMissing.call(depth0, "_", "Donate", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li2\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Payments for digital content", "landing_page", options) : helperMissing.call(depth0, "_", "Payments for digital content", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li3\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Selling reallife goods", "landing_page", options) : helperMissing.call(depth0, "_", "Selling reallife goods", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-3-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-3-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li4\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Freelance and services", "landing_page", options) : helperMissing.call(depth0, "_", "Freelance and services", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-4-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-4-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li5\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Group buying", "landing_page", options) : helperMissing.call(depth0, "_", "Group buying", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-5-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-5-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li6\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Charity", "landing_page", options) : helperMissing.call(depth0, "_", "Charity", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-6-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-6-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li7\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-learning and consultations", "landing_page", options) : helperMissing.call(depth0, "_", "E-learning and consultations", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-7-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-7-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-li8\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "And much more", "landing_page", options) : helperMissing.call(depth0, "_", "And much more", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-8-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-8-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section4\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Fast", "landing_page", options) : helperMissing.call(depth0, "_", "Fast", "landing_page", options)))
    + "</h3>\n					<i class=\"ib ib-l4_1\"></i>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section4-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section4-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cozy", "landing_page", options) : helperMissing.call(depth0, "_", "Cozy", "landing_page", options)))
    + "</h3>\n					<i class=\"ib ib-l4_2\"></i>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section4-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section4-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Free", "landing_page", options) : helperMissing.call(depth0, "_", "Free", "landing_page", options)))
    + "</h3>\n					<i class=\"ib ib-l4_3\"></i>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section4-3-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section4-3-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n			<div class=\"landing__start-cont\"><a href=\"/auth\" rel=\"nofollow\" class=\"landing__start-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Start Qstoq", "landing_page", options) : helperMissing.call(depth0, "_", "Start Qstoq", "landing_page", options)))
    + "</a></div>\n		</div>\n	</div>\n</section>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/paysystem-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"paysystem-row\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/paysystemadd-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"paysystemadd-row\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/profile-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<div class=\"page-profile_";
  if (stack1 = helpers.section) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.section; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"profile__menu-row\"></div>\n	<div class=\"profile__section-account-row\"></div>\n	<!-- <div class=\"profile__section-withdrawal-row\">\n		<h1 class=\"withdrawal-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phrase-s2", "profile", options) : helperMissing.call(depth0, "_", "phrase-s2", "profile", options)))
    + "</h1>\n	</div> -->\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/auth"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"auth__cont\">\n	<div class=\"auth__social\">\n		<h2 class=\"auth__social-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Social log in", "auth", options) : helperMissing.call(depth0, "_", "Social log in", "auth", options)))
    + "</h2>\n		<ul class=\"auth__social-list\">\n			<li class=\"auth__social-item\"><a href=\"vk\" rel=\"nofollow\" class=\"auth__social-item-lnk auth__social-item-lnk_vk\"><i class=\"qi qi-share-vk auth__social-item-icn\"></i></a></li><li class=\"auth__social-item\"><a href=\"fb\" rel=\"nofollow\" class=\"auth__social-item-lnk auth__social-item-lnk_fb\"><i class=\"qi qi-share-fb auth__social-item-icn\"></i></a></li>\n		</ul>\n	</div>\n	<div class=\"auth__sign\">\n		<span class=\"auth__sign-toggler\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or", "auth", options) : helperMissing.call(depth0, "_", "or", "auth", options)))
    + " <a href=\"signup\" rel=\"nofollow\" class=\"auth__sign-toggler-lnk auth__sign-toggler_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sign up", "auth", options) : helperMissing.call(depth0, "_", "sign up", "auth", options)))
    + "</a>\n		<a href=\"signin\" rel=\"nofollow\" class=\"auth__sign-toggler-lnk auth__sign-toggler_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "log in by e-mail", "auth", options)))
    + "</a>\n		</span>\n		<h2 class=\"auth__sign-h auth__sign-h_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "Log in by e-mail", "auth", options)))
    + "</h2>\n		<h2 class=\"auth__sign-h auth__sign-h_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "</h2>\n		<h2 class=\"auth__sign-h auth__sign-h_emailconfirm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Enter your e-mail", "auth", options) : helperMissing.call(depth0, "_", "Enter your e-mail", "auth", options)))
    + "</h2>\n		<form action=\"/auth\" class=\"auth__sign-form\">\n			<div class=\"qst__inp-group\">\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "e-mail", "auth", options) : helperMissing.call(depth0, "_", "e-mail", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"50\" type=\"text\" class=\"qst__inp\" name=\"login\" value=\"\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont auth__sign-inp-name-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "name", "auth", options) : helperMissing.call(depth0, "_", "name", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"55\" type=\"text\" class=\"qst__inp\" name=\"fio\" value=\"\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont auth__sign-inp-password-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "password", "auth", options) : helperMissing.call(depth0, "_", "password", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"45\" type=\"password\" class=\"qst__inp\" name=\"password\" value=\"\">\n						</div>\n					</label>\n				</div>\n			</div>\n			<div class=\"auth__sign-user-agreement\">\n				";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "I admit <a href=\"/i/user-agreement/\">user agreement</a>", "auth", options) : helperMissing.call(depth0, "_", "I admit <a href=\"/i/user-agreement/\">user agreement</a>", "auth", options)))
    + "\n			</div>\n			<input type=\"submit\" class=\"auth__sign-submit-hidden\">\n			<div class=\"auth__sign-submit\">\n				<span class=\"auth__sign-submit-error\"></span>\n				<a href=\"signin\" rel=\"nofollow\" class=\"auth__sign-submit-a auth__sign-submit_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "</a><a href=\"signup\" rel=\"nofollow\" class=\"auth__sign-submit-a auth__sign-submit_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "</a><a href=\"emailconfirm\" rel=\"nofollow\" class=\"auth__sign-submit-a auth__sign-submit_emailconfirm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "</a>\n			</div>\n		</form>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/confirm"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p class=\"confirm__p\">";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<ul class=\"confirm__line\">\n	<li class=\"confirm__ok\">";
  if (stack1 = helpers.ok_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ok_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n	<li class=\"confirm__close\">";
  if (stack1 = helpers.close_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.close_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\n</ul>\n<p class=\"confirm__p_success\">";
  if (stack1 = helpers.success_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.success_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n<p class=\"confirm__p_error\">";
  if (stack1 = helpers.error_title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.error_title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/feedback"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"feedback__cont\">\n	<div class=\"feedback__s1\">\n		<h2 class=\"feedback__s1-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Let us help you", "feedback", options) : helperMissing.call(depth0, "_", "Let us help you", "feedback", options)))
    + "</h2>\n		<form action=\"/feedback\" class=\"feedback__s1-form\">\n			<div class=\"qst__inp-group\">\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "call", "feedback", options) : helperMissing.call(depth0, "_", "call", "feedback", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input type=\"text\" class=\"qst__inp\" maxlength=\"100\" name=\"name\" value=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "phone", "feedback", options) : helperMissing.call(depth0, "_", "phone", "feedback", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input  type=\"tel\" class=\"qst__inp\" maxlength=\"100\" name=\"phone\" value=\"";
  if (stack2 = helpers.phone) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.phone; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "email", "feedback", options) : helperMissing.call(depth0, "_", "email", "feedback", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input type=\"text\" class=\"qst__inp\" maxlength=\"100\" name=\"email\" value=\"";
  if (stack2 = helpers.email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n						</div>\n					</label>\n				</div>\n			</div>\n			<input type=\"submit\" class=\"feedback__s1-submit-hidden\">\n			<div class=\"feedback__s1-submit\">\n				<span class=\"feedback__s1-submit-error\"></span>\n				<a href=\"/payments\" rel=\"nofollow\" class=\"feedback__s1-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Send request", "feedback", options) : helperMissing.call(depth0, "_", "Send request", "feedback", options)))
    + "</a>\n			</div>\n		</form>\n	</div>\n	<div class=\"feedback__s2\">\n		<i class=\"i i-fb-ok\"></i>\n		<h2 class=\"feedback__s2-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "finish", "feedback", options) : helperMissing.call(depth0, "_", "finish", "feedback", options)))
    + "</h2>\n		<div class=\"feedback__s2-submit\">\n			<a href=\"/payments\" rel=\"nofollow\" class=\"feedback__s2-submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Close", "feedback", options) : helperMissing.call(depth0, "_", "Close", "feedback", options)))
    + "</a>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/popup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"popup__table ";
  if (stack1 = helpers.klass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n	<tr>\n		<td class=\"popup__td\">\n			<div class=\"popup__close\">\n				<div class=\"popup__close-col\">\n					<span class=\"close\">&times;</span>\n				</div>\n			</div>\n			<div class=\"popup__previous\">\n				<div class=\"popup__previous-col\">\n					<i class=\"prev\"></i>\n				</div>\n			</div>\n			<div class=\"popup__inner\">\n				<div class=\"popup__content\">\n					<i class=\"qi qi-popup-close popup__close-btn\"></i>\n					";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n				</div>\n			</div>\n		</td>\n	</tr>\n</table>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/warning"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<h1 class=\"warning__h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Warning!", "warning", options) : helperMissing.call(depth0, "_", "Warning!", "warning", options)))
    + "</h1>\n<p class=\"warning__p\">";
  if (stack2 = helpers.content) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.content; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\n<span class=\"warning__close\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "warning", options) : helperMissing.call(depth0, "_", "Ok", "warning", options)))
    + "</span>";
  return buffer;
  });