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

  buffer += "<div class=\"adddialog-cont\">\n	<a href=\"add\" class=\"adddialog__add\"><i class=\"qi qi-add\"></i><span class=\"adddialog__add-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add", "itemlist", options) : helperMissing.call(depth0, "_", "Add", "itemlist", options)))
    + "</span></a>\n	<div class=\"adddialog__dialog\">\n		<div class=\"adddialog__header\"><i class=\"qi qi-add_open\"></i>";
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
    + "\">\n					</div>\n				</div>\n				<div class=\"itemedit__file\">\n					<div class=\"qst__inp-cont\">\n						<div class=\"itemedit__inp-file-process\"></div>\n						<span class=\"itemedit__inp-file-title\">";
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
  
  var stack1;
  if (stack1 = helpers.ship_limit) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ship_limit; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  
  return "0";
  }

function program9(depth0,data) {
  
  
  return " class=\"active\"";
  }

function program11(depth0,data) {
  
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

function program13(depth0,data) {
  
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
  buffer += "\">\n							</div>\n						</label>\n					</div>\n					<div class=\"qst__inp-cont\">\n						<label>\n							<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Limit", "itemlist", options) : helperMissing.call(depth0, "_", "Limit", "itemlist", options)))
    + "</span>\n							<div class=\"qst__inp-cont-in\">\n								<input type=\"text\" class=\"qst__inp\" name=\"ship_limit\" value=\"";
  stack2 = helpers['if'].call(depth0, depth0.ship_limit, {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
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
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "link", options) : helperMissing.call(depth0, "ifEq", depth0.state, "link", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"link\" class=\"item-link item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a link", "itemlist", options) : helperMissing.call(depth0, "_", "give a link", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.state, "file", options) : helperMissing.call(depth0, "ifEq", depth0.state, "file", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "><a href=\"file\" class=\"item-file item__types-item\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "give a file", "itemlist", options) : helperMissing.call(depth0, "_", "give a file", "itemlist", options)))
    + "</a></li>\n						<li";
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data};
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
    + "\">\n							</div>\n						</label>\n					</div>\n				</div>\n				<div class=\"itemedit__file\">\n					<div class=\"qst__inp-cont\">\n						<div class=\"itemedit__inp-file-process\"></div>\n						<span class=\"itemedit__inp-file-title\">";
  options = {hash:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),data:data};
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
    + "</p>\n			<ul class=\"itemedit__share-ul\">\n				<li>\n					<a href=\"vk\" class=\"itemedit__share-btn itemedit__share-vk-btn\"><i class=\"qi qi-share-vk\"></i><span class=\"itemedit__share-btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Vkontakte", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Vkontakte", "itemedit", options)))
    + "</span></a>\n				</li><li>\n					<a href=\"facebook\" class=\"itemedit__share-btn itemedit__share-fb-btn\"><i class=\"qi qi-share-fb\"></i><span class=\"itemedit__share-btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Facebook", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Facebook", "itemedit", options)))
    + "</span></a>\n				</li><li>\n					<a href=\"twitter\" class=\"itemedit__share-btn itemedit__share-tw-btn\"><i class=\"qi qi-share-tw\"></i><span class=\"itemedit__share-btn-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share on Twitter", "itemedit", options) : helperMissing.call(depth0, "_", "Share on Twitter", "itemedit", options)))
    + "</span></a>\n				</li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"itemedit__slide itemedit__slide_showcase\">\n	<div class=\"showcase__window\">\n		<div class=\"showcase__head\">\n			<div class=\"showcase__head_lt\"></div>\n			<div class=\"showcase__head_rt\"></div>\n			<div class=\"showcase__head_ct\">\n				<span class=\"showcase__head-title\">Qstoq &ndash; ";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span>\n			</div>\n		</div>\n		<div class=\"showcase__cont\">\n			<div class=\"showcase__form\">\n				<div class=\"showcase__form__col1\">\n					<div class=\"showcase__form__img-cont load-bg\">\n						<img src=\"/images_static/empty.png\" alt=\"\" class=\"showcase__form__img lazy\" data-width=\"320\" data-height=\"180\" data-bg=\"1\"data-crop=\"1\">\n					</div>\n					<h1 class=\"showcase__form-h\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h1>\n					<p class=\"showcase__form-desc\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n					<ul class=\"showcase__share\">\n						<li class=\"showcase__share-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "item", options) : helperMissing.call(depth0, "_", "Share", "item", options)))
    + "</li>\n						<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n						<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n						<li class=\"showcase__share-itm\"><a class=\"showcase__share-itm-a\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n					</ul>\n				</div>\n				<div class=\"showcase__form__col2\">\n					<span class=\"showcase__form-price\"><span class=\"showcase__form-price-val\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)))
    + "</span>&nbsp;";
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
    + "</span></span>\n				</div>\n				<div class=\"showcase__form__bottom-row\">\n					<div class=\"showcase__form__bottom-row__col1\"><a href=\"http://qstoq.ru\" target=\"_blank\">Qstoq</a> &mdash; ";
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
    + "</span>\n			</div>\n		</div>\n		<div class=\"finish__form-add-comment\">\n			<i class=\"is is-com finish__form-add-comment__icn\"></i>\n			<ul class=\"finish__form-add-comment__list\">\n				<li class=\"finish__form-add-comment__add\"><a href=\"add\" class=\"finish__form-add-comment-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add your<br/>message on the receipt", "itemedit", options) : helperMissing.call(depth0, "_", "Add your<br/>message on the receipt", "itemedit", options)))
    + "</a></li>\n				<li class=\"finish__form-add-comment__edit\"><a href=\"edit\" class=\"finish__form-add-comment-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit your message on the receipt", "itemedit", options) : helperMissing.call(depth0, "_", "Edit your message on the receipt", "itemedit", options)))
    + "</a></li>\n			</ul>\n		</div>\n		<div class=\"finish__cont\">\n			<div class=\"finish__form-t\"></div>\n			<div class=\"finish__form\">\n				<div class=\"finish__form-col\">\n					<span class=\"finish__form-line\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Purchased", "item", options) : helperMissing.call(depth0, "_", "Purchased", "item", options)))
    + "</span>\n					<span class=\"finish__form-price\"><span class=\"finish__form-price-val\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._number_format || depth0._number_format),stack1 ? stack1.call(depth0, depth0.price, options) : helperMissing.call(depth0, "_number_format", depth0.price, options)))
    + "</span>&nbsp;";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.currency, "currency", options) : helperMissing.call(depth0, "_", depth0.currency, "currency", options)))
    + "</span>\n					<h1 class=\"finish__form-h\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</h1>\n					<span class=\"finish__form__buy-btn\"><span class=\"finish__form__buy-btn-in\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get link", "item", options) : helperMissing.call(depth0, "_", "Get link", "item", options)))
    + "</span></span>\n					<div class=\"finish__form-receipt_desc-group qst__inp-group\">\n						<div class=\"finish__form-receipt_desc-cont qst__inp-cont\">\n							<textarea value=\"\" class=\"finish__form-receipt_desc qst__inp\" name=\"receipt_comment\">";
  if (stack2 = helpers.receipt_comment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.receipt_comment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</textarea>\n						</div>\n						<ul class=\"finish__form-receipt_desc-action-list\"><li class=\"finish__form-receipt_desc-action finish__form-receipt_desc-action_cancel\"><a href=\"receipt-cancel\" class=\"finish__form-receipt_desc-action-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "itemedit", options) : helperMissing.call(depth0, "_", "Cancel", "itemedit", options)))
    + "</a></li><li class=\"finish__form-receipt_desc-action finish__form-receipt_desc-action_save\"><a href=\"receipt-cancel\" class=\"finish__form-receipt_desc-action-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Save", "itemedit", options) : helperMissing.call(depth0, "_", "Save", "itemedit", options)))
    + "</a></li>\n						</ul>\n					</div>\n					<p class=\"finish__form-desc\">";
  if (stack2 = helpers.receipt_comment) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.receipt_comment; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</p>\n					<p class=\"finish__form-desc-static\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "All purchasement info we&#39;ve sent to your email", "item", options) : helperMissing.call(depth0, "_", "All purchasement info we&#39;ve sent to your email", "item", options)))
    + "</p>\n					<a href=\"";
  if (stack2 = helpers.url_short) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.url_short; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\" class=\"finish__form-buy-another\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Purchase more", "item", options) : helperMissing.call(depth0, "_", "Purchase more", "item", options)))
    + "</a>\n					<ul class=\"finish__share\">\n						<li class=\"finish__share-itm\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share", "item", options) : helperMissing.call(depth0, "_", "Share", "item", options)))
    + "</li>\n						<li class=\"finish__share-itm\"><a class=\"showcase__share-itm-a\" href=\"vk\"><i class=\"is is-shc-vk\"></i></a></li>\n						<li class=\"finish__share-itm\"><a class=\"showcase__share-itm-a\" href=\"facebook\"><i class=\"is is-shc-fb\"></i></a></li>\n						<li class=\"finish__share-itm\"><a class=\"showcase__share-itm-a\" href=\"twitter\"><i class=\"is is-shc-tw\"></i></a></li>\n					</ul>\n					<div class=\"finish__form-service-desc\"><a href=\"http://qstoq.ru\" target=\"_blank\">Qstoq</a> &mdash; ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "selling in lightning speed", "itemedit", options) : helperMissing.call(depth0, "_", "selling in lightning speed", "itemedit", options)))
    + "</div>\n\n				</div>\n			</div>\n			<div class=\"finish__form-b\"></div>\n		</div>\n	</div>\n	<p class=\"showcase__desc\">";
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


  buffer += "<div class=\"navbar-inner  navbar_unauthed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" alt=\"QSTOQ\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"navbar__item-how\"><a href=\"/how\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does it work", "navbar", options) : helperMissing.call(depth0, "_", "How does it work", "navbar", options)))
    + "</a></li>\n				<li class=\"navbar__item-where\"><a href=\"/\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Where can I use it", "navbar", options) : helperMissing.call(depth0, "_", "Where can I use it", "navbar", options)))
    + "</a></li>\n				<li class=\"nav__login\"><a href=\"/login\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in / Sign up", "navbar", options) : helperMissing.call(depth0, "_", "Log in / Sign up", "navbar", options)))
    + "</a></li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"navbar-inner navbar_authed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" alt=\"QSTOQ\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"nav__my-items\"><a href=\"/items\"><i class=\"qi nav__icn qi-my-items\"></i><span class=\"nav__my-items-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "My items", "navbar", options) : helperMissing.call(depth0, "_", "My items", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__profile\"><a href=\"/profile\"><i class=\"qi nav__icn qi-profile\"></i><span class=\"nav__profile-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Profile", "navbar", options) : helperMissing.call(depth0, "_", "Profile", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__balance\"><a href=\"/profile\"><i class=\"qi nav__icn qi-balance\"></i><span class=\"nav__balance-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Nothing yet", "navbar", options) : helperMissing.call(depth0, "_", "Nothing yet", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__logout\"><a href=\"/logout\"><i class=\"qi nav__icn qi-logout\"></i><span class=\"nav__logout-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log out", "navbar", options) : helperMissing.call(depth0, "_", "Log out", "navbar", options)))
    + "</span></a></li>\n			</ul>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/preview-upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"preview-upload__group\">\n	<div class=\"qst__inp-cont\">\n		<div class=\"preview-upload__inp-file-process\"></div>\n		<div class=\"preview-upload__img-cont load-bg\">\n			<img src=\"/images_static/empty.png\" alt=\"\" class=\"preview-upload__img lazy\" data-width=\"320\" data-height=\"180\" data-bg=\"1\"data-crop=\"1\">\n		</div>\n		<h2 class=\"preview-upload__add-h\" >";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add preview", "preview_upload", options) : helperMissing.call(depth0, "_", "Add preview", "preview_upload", options)))
    + "</h2>\n		<span class=\"preview-upload__add-another\" >";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add another", "preview_upload", options) : helperMissing.call(depth0, "_", "Add another", "preview_upload", options)))
    + "</span>\n		<a class=\"preview-upload__delete\" href=\"delete\">";
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
  
  
  return "\n<ul class=\"profile__social\">\n	<li class=\"profile__social-item\"><a href=\"https://www.facebook.com/qstoq\" target=\"_blank\"><i class=\"isc isc-fb_prfl\"></i></a></li>\n	<li class=\"profile__social-item\"><a href=\"https://twitter.com/WeHeartPicsCom\" target=\"_blank\"><i class=\"isc isc-tw_prfl\"></i></a></li>\n	<li class=\"profile__social-item\"><a href=\"http://vk.com/qstoq\" target=\"_blank\"><i class=\"isc isc-vk_prfl\"></i></a></li>\n</ul>\n";
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
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<section class=\"landing-section landing-section1\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h1 class=\"landing__h1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Get payments online<br/>for what ever and where ever you want", "landing_page", options) : helperMissing.call(depth0, "_", "Get payments online<br/>for what ever and where ever you want", "landing_page", options)))
    + "</h1>\n			<p class=\"landing-section1-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section1-p", "landing_page", options)))
    + "</p>\n			<a href=\"/auth\" class=\"landing__start-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Start", "landing_page", options) : helperMissing.call(depth0, "_", "Start", "landing_page", options)))
    + "</a>\n		</div>\n	</div>\n	<a href=\"/next\" class=\"landing__next-a\">\n		<span class=\"landing__next-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does it work", "landing_page", options) : helperMissing.call(depth0, "_", "How does it work", "landing_page", options)))
    + "</span>\n		<i class=\"ib ib-arr\"></i>\n	</a>\n</section>\n<section class=\"landing-section landing-section2\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "How does Qstoq work", "landing_page", options) : helperMissing.call(depth0, "_", "How does Qstoq work", "landing_page", options)))
    + "</h2>\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-1\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "1. Add your product", "landing_page", options) : helperMissing.call(depth0, "_", "1. Add your product", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-1-1-p", "landing_page", options)))
    + "</p>\n					<h4 class=\"landing__list-itm-h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Prepaire for sale", "landing_page", options) : helperMissing.call(depth0, "_", "Prepaire for sale", "landing_page", options)))
    + "</h4>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-1-2-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-1-2-p", "landing_page", options)))
    + "</p>\n\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-2\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "2. Publish the link", "landing_page", options) : helperMissing.call(depth0, "_", "2. Publish the link", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-2-1-p", "landing_page", options)))
    + "</p>\n					<h4 class=\"landing__list-itm-h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sell where your audience is", "landing_page", options) : helperMissing.call(depth0, "_", "Sell where your audience is", "landing_page", options)))
    + "</h4>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-2-2-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-2-2-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-3\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "3. Receive money", "landing_page", options) : helperMissing.call(depth0, "_", "3. Receive money", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-3-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-3-1-p", "landing_page", options)))
    + "</p>\n					<h4 class=\"landing__list-itm-h2\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Clear terms of cooperation", "landing_page", options) : helperMissing.call(depth0, "_", "Clear terms of cooperation", "landing_page", options)))
    + "</h4>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section2-3-2-p", "landing_page", options) : helperMissing.call(depth0, "_", "section2-3-2-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n		</div>\n	</div>\n</section>\n<section class=\"landing-section landing-section3\">\n	<div class=\"landing__container\">\n		<div class=\"landing__container-in\">\n			<h2 class=\"landing-s-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Qstoq will help you to get payments online in many situations:", "landing_page", options) : helperMissing.call(depth0, "_", "Qstoq will help you to get payments online in many situations:", "landing_page", options)))
    + "</h2>\n			<ul class=\"landing__list\">\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-1\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Donate", "landing_page", options) : helperMissing.call(depth0, "_", "Donate", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-1-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-1-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-2\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sell of content", "landing_page", options) : helperMissing.call(depth0, "_", "Sell of content", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-2-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-2-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-4\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-learning and consultations", "landing_page", options) : helperMissing.call(depth0, "_", "E-learning and consultations", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-3-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-3-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-5\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Goods and services", "landing_page", options) : helperMissing.call(depth0, "_", "Goods and services", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-4-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-4-1-p", "landing_page", options)))
    + "</p>\n				</li>\n				<li class=\"landing__list-itm\">\n					<i class=\"ib ib-land-6\"></i>\n					<h3 class=\"landing__list-itm-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Charity", "landing_page", options) : helperMissing.call(depth0, "_", "Charity", "landing_page", options)))
    + "</h3>\n					<p class=\"landing__list-itm-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "section3-5-1-p", "landing_page", options) : helperMissing.call(depth0, "_", "section3-5-1-p", "landing_page", options)))
    + "</p>\n				</li>\n			</ul>\n			<a href=\"/auth\" class=\"landing__start-a\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Start", "landing_page", options) : helperMissing.call(depth0, "_", "Start", "landing_page", options)))
    + "</a>\n		</div>\n	</div>\n</section>";
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


  buffer += "<div class=\"auth__cont\">\n	<i class=\"qi qi-auth-close auth__close\"></i>\n	<div class=\"auth__social\">\n		<h2 class=\"auth__social-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Social log in", "auth", options) : helperMissing.call(depth0, "_", "Social log in", "auth", options)))
    + "</h2>\n		<ul class=\"auth__social-list\">\n			<li class=\"auth__social-item\"><a href=\"vk\" class=\"auth__social-item-lnk auth__social-item-lnk_vk\"><i class=\"qi qi-share-vk auth__social-item-icn\"></i><span class=\"auth__social-item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "VKontakte", "auth", options) : helperMissing.call(depth0, "_", "VKontakte", "auth", options)))
    + "</span></a></li><li class=\"auth__social-item\"><a href=\"fb\" class=\"auth__social-item-lnk auth__social-item-lnk_fb\"><i class=\"qi qi-share-fb auth__social-item-icn\"></i><span class=\"auth__social-item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Facebook", "auth", options) : helperMissing.call(depth0, "_", "Facebook", "auth", options)))
    + "</span></a></li>\n		</ul>\n	</div>\n	<div class=\"auth__sign\">\n		<span class=\"auth__sign-toggler\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or", "auth", options) : helperMissing.call(depth0, "_", "or", "auth", options)))
    + " <a href=\"signup\" class=\"auth__sign-toggler-lnk auth__sign-toggler_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "sign up", "auth", options) : helperMissing.call(depth0, "_", "sign up", "auth", options)))
    + "</a>\n		<a href=\"signin\" class=\"auth__sign-toggler-lnk auth__sign-toggler_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "log in by e-mail", "auth", options)))
    + "</a>\n		</span>\n		<h2 class=\"auth__sign-h auth__sign-h_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in by e-mail", "auth", options) : helperMissing.call(depth0, "_", "Log in by e-mail", "auth", options)))
    + "</h2>\n		<h2 class=\"auth__sign-h auth__sign-h_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
    + "</h2>\n		<form action=\"/auth\" class=\"auth__sign-form\">\n			<div class=\"qst__inp-group\">\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "auth", options) : helperMissing.call(depth0, "_", "E-mail", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"50\" type=\"text\" class=\"qst__inp\" name=\"email\" value=\"\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont auth__sign-inp-name-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Name", "auth", options) : helperMissing.call(depth0, "_", "Name", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"55\" type=\"text\" class=\"qst__inp\" name=\"name\" value=\"\">\n						</div>\n					</label>\n				</div>\n				<div class=\"qst__inp-cont\">\n					<label>\n						<span class=\"qst__lbl\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Password", "auth", options) : helperMissing.call(depth0, "_", "Password", "auth", options)))
    + "</span>\n						<div class=\"qst__inp-cont-in\">\n							<input maxlength=\"45\" type=\"password\" class=\"qst__inp\" name=\"password\" value=\"\">\n						</div>\n					</label>\n				</div>\n			</div>\n			<div class=\"auth__sign-user-agreement\">\n				";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "I admit <a href=\"/docs/user_agreement.html\" target=\"_blank\">user agreement</a>", "auth", options) : helperMissing.call(depth0, "_", "I admit <a href=\"/docs/user_agreement.html\" target=\"_blank\">user agreement</a>", "auth", options)))
    + "\n			</div>\n			<input type=\"submit\" class=\"auth__sign-submit-hidden\">\n			<div class=\"auth__sign-submit\">\n				<span class=\"auth__sign-submit-error\"></span>\n				<a href=\"signin\" class=\"auth__sign-submit-a auth__sign-submit_signin\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log in", "auth", options) : helperMissing.call(depth0, "_", "Log in", "auth", options)))
    + "</a><a href=\"signup\" class=\"auth__sign-submit-a auth__sign-submit_signup\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Sign up", "auth", options) : helperMissing.call(depth0, "_", "Sign up", "auth", options)))
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