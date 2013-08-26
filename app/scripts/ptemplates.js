this["qst"] = this["qst"] || {};
this["qst"]["Templates"] = this["qst"]["Templates"] || {};
this["qst"]["Templates"]["ptemplates"] = this["qst"]["Templates"]["ptemplates"] || {};

this["qst"]["Templates"]["ptemplates"]["blocks/adddialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return " class=\"active\"";
  }

  buffer += "<div class=\"adddialog-cont\">\n	<a href=\"add\" class=\"adddialog__add\"><i class=\"qi qi-add\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add", "itemlist", options) : helperMissing.call(depth0, "_", "Add", "itemlist", options)))
    + "</a>\n	<div class=\"adddialog__dialog\">\n		<div class=\"adddialog__header\"><i class=\"qi qi-add_open\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add", "itemlist", options) : helperMissing.call(depth0, "_", "Add", "itemlist", options)))
    + "<i class=\"qi qi-dclose\"></i></div>\n		<div class=\"adddialog__form\">\n			<form action=\"add\" class=\"adddialog__form-el\">\n				<div class=\"qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<input type=\"text\" class=\"qst__inp\" name=\"name\" placeholder=\"";
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
  buffer += "><a href=\"link\" class=\"item-link item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a link", "itemlist", options) : helperMissing.call(depth0, "_", "give a link", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"file\" class=\"item-file item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a file", "itemlist", options) : helperMissing.call(depth0, "_", "give a file", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "nothing", options) : helperMissing.call(depth0, "ifEq", depth0.state, "nothing", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"nothing\" class=\"item-nothing item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give nothing", "itemlist", options) : helperMissing.call(depth0, "_", "give nothing", "itemlist", options)))
    + "</a></li>\n					</ul>\n				</div>\n				<div class=\"itemedit__link qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<input type=\"text\" class=\"qst__inp\" name=\"link\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<div class=\"itemedit__file qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<div class=\"itemedit__inp-file-process\"></div>\n						<span class=\"itemedit__inp-file-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Drop or choose a file", "itemlist", options) : helperMissing.call(depth0, "_", "Drop or choose a file", "itemlist", options)))
    + "</span>\n						<input type=\"file\" class=\"qst__inp itemedit__inp-file\" name=\"file\" id=\"file_uploader\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<input type=\"submit\" class=\"inv\">\n			</form>\n		</div>\n		<div class=\"adddialog__submit\">\n			<span class=\"adddialog__error\"></span><a href=\"add\" class=\"adddialog__submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add item", "itemlist", options) : helperMissing.call(depth0, "_", "Add item", "itemlist", options)))
    + "</a>\n		</div>\n	</div>\n</div>";
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
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Buyers", "itemedit", options) : helperMissing.call(depth0, "_", "Buyers", "itemedit", options)))
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
  
  
  return " class=\"active\"";
  }

function program7(depth0,data) {
  
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

function program9(depth0,data) {
  
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
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Price, RUB", "itemlist", options) : helperMissing.call(depth0, "_", "Price, RUB", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"price\" value=\"";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.price; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2);
  stack2 = helpers['if'].call(depth0, depth0.price_pwyw, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n							</div>\n						</label>\n					</div>\n					<div class=\"qst__inp-cont qst__inp-cont-ta\">\n						<textarea name=\"description\" class=\"itemedit__description qst__inp\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Descrition", "itemedit", options) : helperMissing.call(depth0, "_", "Descrition", "itemedit", options)))
    + "\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\n					</div>\n				</div>\n				<div class=\"item__types-cont\">\n					<span class=\"item__types-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "After payment", "itemlist", options) : helperMissing.call(depth0, "_", "After payment", "itemlist", options)))
    + "</span>\n					<ul class=\"item__types\">\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "link", options) : helperMissing.call(depth0, "ifEq", depth0.state, "link", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"link\" class=\"item-link item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a link", "itemlist", options) : helperMissing.call(depth0, "_", "give a link", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"file\" class=\"item-file item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a file", "itemlist", options) : helperMissing.call(depth0, "_", "give a file", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "nothing", options) : helperMissing.call(depth0, "ifEq", depth0.state, "nothing", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"nothing\" class=\"item-nothing item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give nothing", "itemlist", options) : helperMissing.call(depth0, "_", "give nothing", "itemlist", options)))
    + "</a></li>\n					</ul>\n				</div>\n				<div class=\"itemedit__link qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"link\" value=\"";
  if (stack2 = helpers.url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n							</div>\n						</label>\n					</div>\n				</div>\n				<div class=\"itemedit__file qst__inp-group\">\n					<div class=\"qst__inp-cont\">\n						<div class=\"itemedit__inp-file-process\"></div>\n						<span class=\"itemedit__inp-file-title\">";
  options = {hash:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span>\n						<input type=\"file\" class=\"qst__inp itemedit__inp-file\" name=\"file\" id=\"file_uploader\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Link", "itemlist", options) : helperMissing.call(depth0, "_", "Link", "itemlist", options)))
    + "\">\n					</div>\n				</div>\n				<input type=\"submit\" class=\"inv\">\n			</form>\n			<div class=\"itemedit__submit\">\n				<a href=\"\" class=\"itemedit__delete-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Remove link", "itemedit", options) : helperMissing.call(depth0, "_", "Remove link", "itemedit", options)))
    + "</a><span class=\"itemedit__error\"></span><a href=\"save\" class=\"itemedit__submit-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "itemedit", options) : helperMissing.call(depth0, "_", "Save", "itemedit", options)))
    + "</a>\n			</div>\n		</div>\n		<div class=\"span4\">\n			<p class=\"itemedit__share-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "When all will be done you can spread the word on your site, on blog or social networks. Post the link, so your clients can send you money", "itemedit", options) : helperMissing.call(depth0, "_", "When all will be done you can spread the word on your site, on blog or social networks. Post the link, so your clients can send you money", "itemedit", options)))
    + "</p>\n			<ul class=\"itemedit__share-ul\">\n				<li>\n					<span class=\"itemedit__share-inp-cont\">\n						<i class=\"qi qi-share-link\"></i><input type=\"text\" value=\"";
  if (stack2 = helpers.url_short_path) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short_path; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"qst__inp\" readonly=\"readonly\">	\n					</span>\n				</li>\n				<li>\n					<a href=\"vk\" class=\"itemedit__share-btn\"><i class=\"qi qi-share-vk\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Vkontakte", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Vkontakte", "itemedit", options)))
    + "</a>\n				</li>\n				<li>\n					<a href=\"facebook\" class=\"itemedit__share-btn\"><i class=\"qi qi-share-fb\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Facebook", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Facebook", "itemedit", options)))
    + "</a>\n				</li>\n				<li>\n					<a href=\"twitter\" class=\"itemedit__share-btn\"><i class=\"qi qi-share-tw\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Twitter", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Twitter", "itemedit", options)))
    + "</a>\n				</li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"itemedit__slide itemedit__slide_showcase\"></div>\n<div class=\"itemedit__slide itemedit__slide_finish\"></div>\n<div class=\"itemedit__slide itemedit__slide_buyers\"></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/itemlist"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"itemlist__cont\">\n	<table class=\"itemlist__table-head\">\n		<tr>\n			<th class=\"link__caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "title", "itemlist", options) : helperMissing.call(depth0, "_", "title", "itemlist", options)))
    + "</th>\n			<th class=\"link__price\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "price", "itemlist", options) : helperMissing.call(depth0, "_", "price", "itemlist", options)))
    + "</th>\n			<th class=\"link__view-count\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "visits", "itemlist", options) : helperMissing.call(depth0, "_", "visits", "itemlist", options)))
    + "</th>\n			<th class=\"link__sold-count\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sold", "itemlist", options) : helperMissing.call(depth0, "_", "sold", "itemlist", options)))
    + "</th>\n			<th class=\"link__ctr\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "CTR", "itemlist", options) : helperMissing.call(depth0, "_", "CTR", "itemlist", options)))
    + "</th>\n			<th class=\"link__overall\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "overall", "itemlist", options) : helperMissing.call(depth0, "_", "overall", "itemlist", options)))
    + "</th>\n			<th class=\"link__toggle\">&nbsp;</th>\n			<th class=\"link__delete\">&nbsp;</th>\n		</tr>\n	</table>\n	<div class=\"itemlist__table-cont1\">\n		<div class=\"itemlist__table-cont2\">\n			<div class=\"itemlist__table\"></div>\n		</div>\n	</div>\n	<div class=\"itemlist__spinner\"></div>\n</div>";
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

  buffer += "<tr>\n	<td class=\"link__caption\"><a href=\"/item/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"link__caption-a\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n	<td class=\"link__price\"><span class=\"link__price-sp\">";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.price_pwyw, "1", options) : helperMissing.call(depth0, "ifEq", depth0.price_pwyw, "1", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</span></td>\n	<td class=\"link__view-count\"><span class=\"link__view-count-sp\">";
  if (stack2 = helpers.counter_view) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.counter_view; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n	<td class=\"link__sold-count\"><span class=\"link__sold-count-sp\">";
  if (stack2 = helpers.counter_ship) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.counter_ship; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n	<td class=\"link__ctr\"><span>";
  if (stack2 = helpers.ctr) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.ctr; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n	<td class=\"link__overall\"><span>";
  if (stack2 = helpers.overall) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.overall; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></td>\n	<td class=\"link__toggle";
  stack2 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><span class=\"link__toggle-sp\"><a href=\"on\" class=\"link__toggle-a link__toggle_on\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "On", "itemlist", options) : helperMissing.call(depth0, "_", "On", "itemlist", options)))
    + "</a> / <a href=\"off\" class=\"link__toggle-a link__toggle_off\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Off", "itemlist", options) : helperMissing.call(depth0, "_", "Off", "itemlist", options)))
    + "</a></span></td>\n	<td class=\"link__delete\"><span><a href=\"del\" class=\"link__delete-a\"><i class=\"qi qi-del\"></i></a></span></td>\n</tr>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"navbar-inner  navbar_unauthed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" alt=\"QSTOQ\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"navbar__item-landing\"><a href=\"/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "About", "navbar", options) : helperMissing.call(depth0, "_", "About", "navbar", options)))
    + "</a></li>\n				<li class=\"navbar__item-explore\"><a href=\"/explore\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Explore", "navbar", options) : helperMissing.call(depth0, "_", "Explore", "navbar", options)))
    + "</a></li>\n				<li class=\"navbar__item-popular\"><a href=\"/popular\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Popular", "navbar", options) : helperMissing.call(depth0, "_", "Popular", "navbar", options)))
    + "</a></li>\n				<li class=\"nav__login\"><a href=\"/login\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log In", "navbar", options) : helperMissing.call(depth0, "_", "Log In", "navbar", options)))
    + "</a></li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"navbar-inner navbar_authed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" alt=\"QSTOQ\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"nav__my-items\"><a href=\"/items\"><i class=\"qi qi-my-items\"></i><span class=\"nav__my-items-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "My items", "navbar", options) : helperMissing.call(depth0, "_", "My items", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__profile\"><a href=\"/profile\"><i class=\"qi qi-profile\"></i><span class=\"nav__profile-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Profile", "navbar", options) : helperMissing.call(depth0, "_", "Profile", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__balance\"><a href=\"/profile\"><i class=\"qi qi-balance\"></i><span class=\"nav__balance-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Nothing yet", "navbar", options) : helperMissing.call(depth0, "_", "Nothing yet", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__logout\"><a href=\"/logout\"><i class=\"qi qi-logout\"></i><span class=\"nav__logout-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log out", "navbar", options) : helperMissing.call(depth0, "_", "Log out", "navbar", options)))
    + "</span></a></li>\n			</ul>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/user-info"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function";

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"profile__invite\"><i class=\"ip ip-invite\"></i><a class=\"profile__invite-title\" href=\"/invite\">";
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
  buffer += "\n	<a href=\"/add/avatar/nice-to-meet-u/\"><img src=\"";
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
  
  
  return "\n<ul class=\"profile__social\">\n	<li class=\"profile__social-item\"><a href=\"https://www.facebook.com/weheartpics\" target=\"_blank\"><i class=\"isc isc-fb_prfl\"></i></a></li>\n	<li class=\"profile__social-item\"><a href=\"https://twitter.com/WeHeartPicsCom\" target=\"_blank\"><i class=\"isc isc-tw_prfl\"></i></a></li>\n	<li class=\"profile__social-item\"><a href=\"http://vk.com/weheartpics\" target=\"_blank\"><i class=\"isc isc-vk_prfl\"></i></a></li>\n</ul>\n";
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
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sorry, can’t let you get any further than this.<br/>Please <a href=\"auth:show\" type=\"event\" class=\"lnk\">log in</a> or <a  href=\"auth:show\" type=\"event\" class=\"lnk\">sign up</a> to see this page.", "p403", options) : helperMissing.call(depth0, "_", "Sorry, can’t let you get any further than this.<br/>Please <a href=\"auth:show\" type=\"event\" class=\"lnk\">log in</a> or <a  href=\"auth:show\" type=\"event\" class=\"lnk\">sign up</a> to see this page.", "p403", options)))
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
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "You can also Search for this user, photo or story;", "p404", options) : helperMissing.call(depth0, "_", "You can also Search for this user, photo or story;", "p404", options)))
    + "</li>\n	<li class=\"error-page__list-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or drop us a line to <a href=\"mailto:support@qstoq.ru\" class=\"lnk\">support@qstoq.ru.</a>", "p404", options) : helperMissing.call(depth0, "_", "or drop us a line to <a href=\"mailto:support@qstoq.ru\" class=\"lnk\">support@qstoq.ru.</a>", "p404", options)))
    + "</li>\n</ul>";
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
  


  return "<div class=\"itemlist-row\"><h1>Hello i'm lil itemlist</h1></div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/landing-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<section class=\"landing-section landing-section1 landing-section-img";
  if (stack1 = helpers.img_num) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.img_num; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"landing__container\">\n		<div class=\"landing-slogan lnd-pos landing-slogan_";
  if (stack1 = helpers.lang) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lang; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></div>\n\n		<ul class=\"landing-inter\">\n			<li class=\"landing-inter__item landing-inter__item-signup\"><a href=\"signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up now", "landing_page", options) : helperMissing.call(depth0, "_", "Sign up now", "landing_page", options)))
    + "</a></li>\n			<li class=\"landing-inter__item\"><a href=\"";
  if (stack2 = helpers._itunes_link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._itunes_link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\"><i class=\"isc isc-apple-store\"></i></a></li>\n			<li class=\"landing-inter__item\"><a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\"><i class=\"isc isc-play-store\"></i></a></li>\n		</ul>\n\n	</div>\n	<div class=\"isc isc-arr-land landing-arr lnd-pos\"></div>	\n</section>\n<section class=\"landing-section landing-section2\">\n	<div class=\"landing__container\">\n		<ul class=\"landing__gal lnd-pos\">\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/594073.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/712491.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/717659.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/272859.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/606308.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/777051.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/776675.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/774826.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/709757.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/718614.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/754845.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/777132.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/747655.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/774119.jpg\" alt=\"\"></li>\n			<li class=\"landing__gal-item\"><img src=\"http://img.weheartpics.com/photo/212x212/312178.jpg\" alt=\"\"></li>\n		</ul>\n		<div class=\"landing-s2__text lnd-pos\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Grow your network", "landing_page", options) : helperMissing.call(depth0, "_", "Grow your network", "landing_page", options)))
    + "</h2>\n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "<strong>Connect</strong> with friends and <strong>meet</strong> new interesting people.", "landing_page", options) : helperMissing.call(depth0, "_", "<strong>Connect</strong> with friends and <strong>meet</strong> new interesting people.", "landing_page", options)))
    + "</p>\n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Follow other users <br class=\"hbr\"/>to build your own <br class=\"hbr\"/>personalized <br class=\"hbr\"/><strong>Photo Feed</strong>.", "landing_page", options) : helperMissing.call(depth0, "_", "Follow other users <br class=\"hbr\"/>to build your own <br class=\"hbr\"/>personalized <br class=\"hbr\"/><strong>Photo Feed</strong>.", "landing_page", options)))
    + "</p>\n		</div>\n		<div class=\"landing-s2__pph lnd-pos\"></div>\n	</div>\n</section>\n<section class=\"landing-section landing-section3\">\n	<div class=\"landing__container\">\n		<div class=\"landing-s3__text lnd-pos\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Take great shots and&nbsp;show them off", "landing_page", options) : helperMissing.call(depth0, "_", "Take great shots and&nbsp;show them off", "landing_page", options)))
    + "</h2>\n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Use any one of our hundreds of&nbsp;ideas and compete in Daily stories!", "landing_page", options) : helperMissing.call(depth0, "_", "Use any one of our hundreds of&nbsp;ideas and compete in Daily stories!", "landing_page", options)))
    + "</p> \n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "<strong>Upload</strong> photos to one of our categories, tag your friends and&nbsp;the&nbsp;place where you took your picture, then easily <strong>share</strong> your work.", "landing_page", options) : helperMissing.call(depth0, "_", "<strong>Upload</strong> photos to one of our categories, tag your friends and&nbsp;the&nbsp;place where you took your picture, then easily <strong>share</strong> your work.", "landing_page", options)))
    + "</p>\n		</div>\n		<div class=\"landing-s3__pub lnd-pos\"></div>\n		<div class=\"landing-s3__ment lnd-pos\"></div>\n		<div class=\"landing-s3__map lnd-pos\"></div>\n	</div>\n</section>\n<section class=\"landing-section landing-section4\">\n	<div class=\"landing__container\">\n		<div class=\"landing-s4__text lnd-pos\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Communicate <br class=\"thbr\"/>with like&nbsp;minded people", "landing_page", options) : helperMissing.call(depth0, "_", "Communicate <br class=\"thbr\"/>with like&nbsp;minded people", "landing_page", options)))
    + "</h2>\n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Make your messages picture perfect with <strong>Dialogs</strong>.", "landing_page", options) : helperMissing.call(depth0, "_", "Make your messages picture perfect with <strong>Dialogs</strong>.", "landing_page", options)))
    + "</p> \n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Send messages, photos, and&nbsp;emoticons to share what&nbsp;you see or&nbsp;how you feel.", "landing_page", options) : helperMissing.call(depth0, "_", "Send messages, photos, and&nbsp;emoticons to share what&nbsp;you see or&nbsp;how you feel.", "landing_page", options)))
    + "</p>\n		</div>\n		<div class=\"landing-s4__ipdg lnd-pos\"></div>\n		<div class=\"landing-s4__mbdg lnd-pos\"></div>\n	</div>\n</section>\n<section class=\"landing-section landing-section5\">\n	<div class=\"landing-s5__sub1\">\n		<div class=\"landing-s5__text lnd-pos\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Multiplatform", "landing_page", options) : helperMissing.call(depth0, "_", "Multiplatform", "landing_page", options)))
    + "</h2>\n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "A one-of-a-kind, photo-powered, full&#8209;featured social network available&nbsp;at <a href=\"{{_itunes_link}}\" target=\"_blank\">App&nbsp;Store</a> and&nbsp;<a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Google&nbsp;Play</a>.", "landing_page", options) : helperMissing.call(depth0, "_", "A one-of-a-kind, photo-powered, full&#8209;featured social network available&nbsp;at <a href=\"{{_itunes_link}}\" target=\"_blank\">App&nbsp;Store</a> and&nbsp;<a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Google&nbsp;Play</a>.", "landing_page", options)))
    + "</p>\n			<p class=\"landing-s-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Our new website and iPad&nbsp;version <br class=\"thbr\">are almost ready!", "landing_page", options) : helperMissing.call(depth0, "_", "Our new website and iPad&nbsp;version <br class=\"thbr\">are almost ready!", "landing_page", options)))
    + "</p>\n		</div>\n		<div class=\"landing-s5__mult lnd-pos\"></div>\n	</div>\n	<div class=\"landing-s5__sub2\">\n		<div class=\"landing-s5__social lnd-pos\">\n			<h3 class=\"landing-s-h3\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up with one click", "landing_page", options) : helperMissing.call(depth0, "_", "Sign up with one click", "landing_page", options)))
    + "</h3>\n			<p class=\"landing-s-social-menu\"><a href=\"signup/facebook\" class=\"signup_fb\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Facebook", "landing_page", options) : helperMissing.call(depth0, "_", "Facebook", "landing_page", options)))
    + "</a> <span class=\"landing-bull\">▪</span> <a href=\"signup/twitter\" class=\"signup_tw\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Twitter", "landing_page", options) : helperMissing.call(depth0, "_", "Twitter", "landing_page", options)))
    + "</a> <span class=\"landing-bull\">▪</span> <a href=\"signup/vkontakte\" class=\"signup_vk\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "VKontakte", "landing_page", options) : helperMissing.call(depth0, "_", "VKontakte", "landing_page", options)))
    + "</a></p>\n			<form action=\"signup\" class=\"landing-signup__form\">\n			<p class=\"landing-s-pinp\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or simply", "landing_page", options) : helperMissing.call(depth0, "_", "or simply", "landing_page", options)))
    + " <input class=\"landing-signup__inp input_clear\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Enter your e-mail here", "landing_page", options) : helperMissing.call(depth0, "_", "Enter your e-mail here", "landing_page", options)))
    + "\" type=\"text\"><span class=\"fake-input\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Enter your e-mail here", "landing_page", options) : helperMissing.call(depth0, "_", "Enter your e-mail here", "landing_page", options)))
    + "</span></p>\n			<input type=\"submit\" class=\"hidden\">\n			</form>\n		</div>\n	</div>\n</section>\n<div class=\"landing-footer\">\n	<ul class=\"pull-left landing-footer__lst\">\n		<li class=\"landing-footer__itm\"><a href=\"/docs/terms_of_service.html\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Terms of service", "landing_page", options) : helperMissing.call(depth0, "_", "Terms of service", "landing_page", options)))
    + "</a></li>\n		<li class=\"landing-footer__itm\"><a href=\"/docs/privacy_policy.html\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Privacy policy", "landing_page", options) : helperMissing.call(depth0, "_", "Privacy policy", "landing_page", options)))
    + "</a></li>\n		<li class=\"landing-footer__itm\"><a href=\"/docs/jobs.html\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Jobs", "landing_page", options) : helperMissing.call(depth0, "_", "Jobs", "landing_page", options)))
    + "<span class=\"landing-footer__cnt\">4</span></a></li>\n		<li class=\"landing-footer__itm\"><a href=\"mailto:hi@weheartpics.com?subject=web\" target=\"_self\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Contact us", "landing_page", options) : helperMissing.call(depth0, "_", "Contact us", "landing_page", options)))
    + "</a></li>\n	</ul>\n	<ul class=\"pull-right landing-footer__lst\">\n		<li class=\"landing-footer__icn\"><a target=\"_blank\" href=\"http://vk.com/weheartpics\"><i class=\"isc isc-vk_land\"></i></a></li>\n		<li class=\"landing-footer__icn\"><a target=\"_blank\" href=\"https://twitter.com/WeHeartPicsCom\"><i class=\"isc isc-tw_land\"></i></a></li>\n		<li class=\"landing-footer__icn\"><a target=\"_blank\" href=\"https://www.facebook.com/weheartpics\"><i class=\"isc isc-fb_land\"></i></a></li>\n	</ul>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/profile-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "profile-menu_explore";
  }

  buffer += "<div class=\"row page-profile_";
  if (stack1 = helpers.section) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.section; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n	<div class=\"user-info-col span3\"></div>\n	<div class=\"span10\">\n		<div class=\"profile-menu-row ";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.section, "explore", options) : helperMissing.call(depth0, "ifEq", depth0.section, "explore", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n			<div class=\"profile-feed-lnk\">\n				<a href=\"/user/";
  if (stack2 = helpers.user) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/feed\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Activity feed", "profile_page", options) : helperMissing.call(depth0, "_", "Activity feed", "profile_page", options)))
    + "</a>\n			</div>\n			<div class=\"story-menu-row\"></div>\n			<div class=\"profile-explore-lnk\">\n				<a href=\"/user/";
  if (stack2 = helpers.user) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/explore\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "All", "profile_page", options) : helperMissing.call(depth0, "_", "All", "profile_page", options)))
    + " <span class=\"profile-explore__count\"></span> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "photos", "profile_page", options) : helperMissing.call(depth0, "_", "photos", "profile_page", options)))
    + "</a>\n			</div>\n		</div>\n		<div class=\"profile-feed-col\"><h1></h1></div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["popups/auth"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"auth-popup_close\"></div>\n<div id=\"auth-popup_container\">\n	<div id=\"auth-popup_login\">\n		<div class=\"header\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "</div>\n		<div id=\"auth-popup_services\">\n			<div class=\"login-via-fb\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Facebook", "auth", options) : helperMissing.call(depth0, "_", "Facebook", "auth", options)))
    + "</div>\n			<div class=\"login-via-tw\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Twitter", "auth", options) : helperMissing.call(depth0, "_", "Twitter", "auth", options)))
    + "</div>\n			<div class=\"login-via-vk\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "VKontakte", "auth", options) : helperMissing.call(depth0, "_", "VKontakte", "auth", options)))
    + "</div>\n			<div class=\"login-via-email\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "auth", options) : helperMissing.call(depth0, "_", "E-mail", "auth", options)))
    + "</div>\n		</div>\n	</div>\n\n	<div class=\"auth-popup__registration\">\n		<h2 class=\"header\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Register by e-mail", "auth", options) : helperMissing.call(depth0, "_", "Register by e-mail", "auth", options)))
    + "</h2>\n		<form class=\"auth-popup__form\">\n			<input type=\"email\" name=\"email0\" id=\"registration-email0\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "auth", options) : helperMissing.call(depth0, "_", "E-mail", "auth", options)))
    + "\">\n			<input type=\"password\" name=\"password0\" id=\"registration-password0\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Password", "auth", options) : helperMissing.call(depth0, "_", "Password", "auth", options)))
    + "\">\n			<div class=\"clearfix\"></div>\n		<div class=\"auth-popup__registration_next\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "<i class=\"icn icn-arrow-medium_right\"></i></div>\n			<input type=\"submit\" class=\"inv\">\n		</form>\n		<div class=\"auth-error auth-popup__registration-error\"></div>\n	</div>\n\n	<div class=\"auth-popup__registration-names\">\n		<div class=\"auth-popup__registration-names_dummy\">\n			<div class=\"dummy\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", options) : helperMissing.call(depth0, "_", "Log in", options)))
    + "</div>\n			<div class=\"clearfix\"></div>\n			<div class=\"dummy\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Facebook", "auth", options) : helperMissing.call(depth0, "_", "Facebook", "auth", options)))
    + "</div>\n			<div class=\"dummy\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Twitter", "auth", options) : helperMissing.call(depth0, "_", "Twitter", "auth", options)))
    + "</div>\n			<div class=\"dummy\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "VKontakte", "auth", options) : helperMissing.call(depth0, "_", "VKontakte", "auth", options)))
    + "</div>\n			<div class=\"dummy\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "auth", options) : helperMissing.call(depth0, "_", "E-mail", "auth", options)))
    + "</div>\n		</div>\n\n		<div class=\"back-header auth-popup__registration_back\"><i class=\"icn icn-arrow-medium_left\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail &amp; password", "auth", options) : helperMissing.call(depth0, "_", "E-mail &amp; password", "auth", options)))
    + "</div>\n\n		<div class=\"header\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Account information", "auth", options) : helperMissing.call(depth0, "_", "Account information", "auth", options)))
    + "</div>\n		<form  class=\"auth-popup__form\">\n			<input type=\"text\" name=\"first_name0\" id=\"registration-first_name0\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "First name", "auth", options) : helperMissing.call(depth0, "_", "First name", "auth", options)))
    + "\" maxlength=\"32\">\n			<input type=\"text\" name=\"last_name0\" id=\"registration-last_name0\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Last name", "auth", options) : helperMissing.call(depth0, "_", "Last name", "auth", options)))
    + "\" maxlength=\"32\">\n			<div class=\"clearfix\"></div>\n			<div class=\"auth-popup__registration_ok\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "<i class=\"icn icn-arrow-medium_right\"></i></div>\n			<input type=\"submit\" class=\"inv\">\n		</form>\n		<div class=\"auth-error auth-popup__registration-names-error\"></div>\n	</div>\n\n\n	<div class=\"auth-popup__login-email\">\n		<div class=\"back-header auth-popup__login-email_back\"><i class=\"icn icn-arrow-medium_left\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in / sign up", "auth", options) : helperMissing.call(depth0, "_", "Log in / sign up", "auth", options)))
    + "</div>\n		<h2 class=\"header\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "Log in by e-mail", "auth", options)))
    + "</h2>\n		<form action=\"/api/auth/\" class=\"auth-popup__form\">\n			<input type=\"email\" name=\"email\" id=\"login-email\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "auth", options) : helperMissing.call(depth0, "_", "E-mail", "auth", options)))
    + "\">\n			<div class=\"clearfix\"></div>\n			<input type=\"password\" name=\"password\" id=\"login-password\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Password", "auth", options) : helperMissing.call(depth0, "_", "Password", "auth", options)))
    + "\">\n			<a class=\"auth-popup__login-email_forgot\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Forgot?", "auth", options) : helperMissing.call(depth0, "_", "Forgot?", "auth", options)))
    + "</a>\n			<div class=\"clearfix\"></div>\n			<div type=\"submit\" class=\"auth-popup__login-email_ok\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "<i class=\"icn icn-arrow-medium_right\"></i></div>\n			<input type=\"submit\" class=\"inv\">\n		</form>\n		<div class=\"auth-error auth-popup__login-error\"></div>\n	</div>\n\n\n\n</div>";
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

this["qst"]["Templates"]["ptemplates"]["popups/popup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<table class=\"popup__table ";
  if (stack1 = helpers['class']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['class']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" tabindex=\"-1\">\n	<tr>\n		<td class=\"popup__td\">\n			<div class=\"popup__close\">\n				<div class=\"popup__close-col\">\n					<span class=\"close\">&times;</span>\n				</div>\n			</div>\n			<div class=\"popup__previous\">\n				<div class=\"popup__previous-col\">\n					<i class=\"prev\"></i>\n				</div>\n			</div>\n			<div class=\"popup__inner\">\n				<div class=\"popup__content\">\n					";
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