this["qst"] = this["qst"] || {};
this["qst"]["Templates"] = this["qst"]["Templates"] || {};
this["qst"]["Templates"]["ptemplates"] = this["qst"]["Templates"]["ptemplates"] || {};

this["qst"]["Templates"]["ptemplates"]["blocks/adddialog"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"adddialog-cont\">\n	<a href=\"add\" class=\"adddialog__add\"><i class=\"qi qi-add\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add item", "itemlist", options) : helperMissing.call(depth0, "_", "Add item", "itemlist", options)))
    + "</a>\n	<div class=\"adddialog__dialog\">\n		<div class=\"adddialog__header\"><i class=\"qi qi-add_open\"></i>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add item", "itemlist", options) : helperMissing.call(depth0, "_", "Add item", "itemlist", options)))
    + "<i class=\"qi qi-dclose\"></i></div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/comment-pane"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<i class=\"i comment-pane__more\"></i>\n<h4 class=\"comment-pane__total\" data-total=\"";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-decl=\"comment\">";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.total; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._plural || depth0._plural),stack1 ? stack1.call(depth0, depth0.total, "comment", options) : helperMissing.call(depth0, "_plural", depth0.total, "comment", options)))
    + "</h4>\n<div class=\"comment-pane__spinner\"></div>\n<div class=\"comment-pane__container\"></div>\n<div class=\"comment-pane__add\">\n	<textarea placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add comment", "comment_pane", options) : helperMissing.call(depth0, "_", "Add comment", "comment_pane", options)))
    + "\" class=\"comment-pane__add-input input_clear\" maxlength=\"1000\"></textarea>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/comment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.i106x106)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"40\" height=\"40\">";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "<i class=\"i i-no-avatar_40\"></i>";
  }

  buffer += "<span class=\"comment__ts\" data-ts=\"";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._timegap || depth0._timegap),stack1 ? stack1.call(depth0, depth0.date, options) : helperMissing.call(depth0, "_timegap", depth0.date, options)))
    + "</span>\n<a class=\"comment__avatar\" href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\">";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.photo), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</a>\n<div class=\"comment__content\">\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"comment__user unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n	<div class=\"comment__text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uinput || depth0._uinput),stack1 ? stack1.call(depth0, depth0.text, options) : helperMissing.call(depth0, "_uinput", depth0.text, options)))
    + "</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/dailylist-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<li class=\"story-menu__item-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " story-menu__item";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth1.ifEq),stack1 ? stack1.call(depth0, depth1.story, depth0.id, options) : helperMissing.call(depth0, "ifEq", depth1.story, depth0.id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><a data-id=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" href=\""
    + escapeExpression(((stack1 = depth1.root_path),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/daily/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/"
    + escapeExpression(((stack1 = depth1.sort),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.filter),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\"><span class=\"story-menu__item-title\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></a></li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " active";
  }

  stack2 = helpers.each.call(depth0, ((stack1 = depth0.stories),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  });

this["qst"]["Templates"]["ptemplates"]["blocks/explore-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<li class=\"explore-menu__item-";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " explore-menu__item";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.name, "location", options) : helperMissing.call(depth0, "ifEq", depth0.name, "location", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth1.ifEq),stack1 ? stack1.call(depth0, depth1.sort, depth0.name, options) : helperMissing.call(depth0, "ifEq", depth1.sort, depth0.name, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><a href=\"/explore/"
    + escapeExpression(((stack1 = depth1.category),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.story),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/"
    + escapeExpression(((stack1 = depth1.filter),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\"><i class=\"iexp iexp-";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></i><span class=\"explore-menu__item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.title, "explore_menu", options) : helperMissing.call(depth0, "_", depth0.title, "explore_menu", options)))
    + "</span></a></li>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return " hidden";
  }

function program4(depth0,data) {
  
  
  return " active";
  }

function program6(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<li class=\"explore-menu__item-";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " explore-menu__item";
  options = {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth1.ifEq),stack1 ? stack1.call(depth0, depth1.filter, depth0.name, options) : helperMissing.call(depth0, "ifEq", depth1.filter, depth0.name, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><a href=\"/explore/"
    + escapeExpression(((stack1 = depth1.category),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.story),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.sort),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/\"><i class=\"iexp iexp-";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></i><span class=\"explore-menu__item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, depth0.title, "explore_menu", options) : helperMissing.call(depth0, "_", depth0.title, "explore_menu", options)))
    + "</span></a></li>\n";
  return buffer;
  }

  buffer += "<ul class=\"explore-menu__items explore-menu__items-sorts\">\n";
  stack1 = helpers.each.call(depth0, depth0.sorts, {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n<ul class=\"explore-menu__items explore-menu__items-filters\">\n";
  stack1 = helpers.each.call(depth0, depth0.filters, {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
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
  
  
  return " on";
  }

function program3(depth0,data) {
  
  
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
  buffer += escapeExpression(stack1)
    + "</span></td>\n	<td class=\"link__view-count\"><span class=\"link__view-count-sp\">";
  if (stack1 = helpers.counter_view) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.counter_view; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n	<td class=\"link__sold-count\"><span class=\"link__sold-count-sp\">";
  if (stack1 = helpers.counter_ship) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.counter_ship; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n	<td class=\"link__ctr\"><span>";
  if (stack1 = helpers.ctr) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.ctr; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n	<td class=\"link__overall\"><span>";
  if (stack1 = helpers.overall) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.overall; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></td>\n	<td class=\"link__toggle";
  stack1 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"><span class=\"link__toggle-sp\"><a href=\"on\" class=\"link__toggle-a link__toggle_on\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "On", "itemlist", options) : helperMissing.call(depth0, "_", "On", "itemlist", options)))
    + "</a> / <a href=\"off\" class=\"link__toggle-a link__toggle_off\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Off", "itemlist", options) : helperMissing.call(depth0, "_", "Off", "itemlist", options)))
    + "</a></span></td>\n	<td class=\"link__delete\"><span><a href=\"del\" class=\"link__delete-a\" data-method=\"delete\" data-url=\"/v1/links/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Do you want to delete this item?", "itemlist", options) : helperMissing.call(depth0, "_", "Do you want to delete this item?", "itemlist", options)))
    + "\" data-ok=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "itemlist", options) : helperMissing.call(depth0, "_", "Ok", "itemlist", options)))
    + "\" data-close=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "itemlist", options) : helperMissing.call(depth0, "_", "Cancel", "itemlist", options)))
    + "\" data-success=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Item deleted.", "itemlist", options) : helperMissing.call(depth0, "_", "Item deleted.", "itemlist", options)))
    + "\" data-error=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Something went wrong...", "itemlist", options) : helperMissing.call(depth0, "_", "Something went wrong...", "itemlist", options)))
    + "\" data-event=\"link:delete\"  data-eventdata='{\"id\": ";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " }'><i class=\"qi qi-del\"></i></a></span></td>\n</tr>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/navbar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"navbar-inner  navbar_unauthed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" width=\"82\" height=\"30\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"navbar__item-landing\"><a href=\"/\">";
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
    + "</a></li>\n			</ul>\n		</div>\n	</div>\n</div>\n<div class=\"navbar-inner navbar_authed\">\n	<div class=\"container\">\n		<a class=\"brand\" href=\"/\"><div class=\"navbar__logo\"><img src=\"/images_static/empty.png\" width=\"82\" height=\"30\" alt=\"We heart\"></div></a>\n		<div class=\"nav-collapse collapse\">\n			<ul class=\"nav pull-right\">\n				<li class=\"nav__my-items\"><a href=\"/items\"><i class=\"qi qi-my-items\"></i><span class=\"nav__my-items-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "My items", "navbar", options) : helperMissing.call(depth0, "_", "My items", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__profile\"><a href=\"/profile\"><i class=\"qi qi-profile\"></i><span class=\"nav__profile-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Profile", "navbar", options) : helperMissing.call(depth0, "_", "Profile", "navbar", options)))
    + "</span></a></li>\n				<li class=\"nav__logout\"><a href=\"/logout\"><i class=\"qi qi-logout\"></i><span class=\"nav__logout-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Log out", "navbar", options) : helperMissing.call(depth0, "_", "Log out", "navbar", options)))
    + "</span></a></li>\n			</ul>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/notification"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return " new";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  return buffer;
  }

function program5(depth0,data) {
  
  var stack1, stack2, options;
  options = {hash:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 4, options) : helperMissing.call(depth0, "ifEq", depth0.type, 4, options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "/photo/"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "\n			<i class=\"i i-notif-hi\"></i>\n		";
  }

function program10(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		";
  options = {hash:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 4, options) : helperMissing.call(depth0, "ifEq", depth0.type, 4, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program11(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<a href=\"/photo/"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\"><img src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.url), "160x160", options) : helperMissing.call(depth0, "_uphoto", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.url), "160x160", options)))
    + "\"width=\"70\" height=\"70\"></a>\n		";
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n		<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "liked your photo", "notification_page", options) : helperMissing.call(depth0, "_", "liked your photo", "notification_page", options)))
    + "\n";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.program(19, program19, data),fn:self.program(16, program16, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 2, options) : helperMissing.call(depth0, "ifEq", depth0.type, 2, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program16(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "said", "notification_page", options) : helperMissing.call(depth0, "_", "said", "notification_page", options)));
  stack2 = helpers['if'].call(depth0, depth0.val, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += ":<br/>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uinput || depth0._uinput),stack1 ? stack1.call(depth0, depth0.val, options) : helperMissing.call(depth0, "_uinput", depth0.val, options)));
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 3, options) : helperMissing.call(depth0, "ifEq", depth0.type, 3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program20(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "is now following you", "notification_page", options) : helperMissing.call(depth0, "_", "is now following you", "notification_page", options)))
    + "\n";
  return buffer;
  }

function program22(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.program(25, program25, data),fn:self.program(23, program23, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 4, options) : helperMissing.call(depth0, "ifEq", depth0.type, 4, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program23(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "joined We Heart Pics", "notification_page", options) : helperMissing.call(depth0, "_", "joined We Heart Pics", "notification_page", options)))
    + "\n";
  return buffer;
  }

function program25(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.program(28, program28, data),fn:self.program(26, program26, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 5, options) : helperMissing.call(depth0, "ifEq", depth0.type, 5, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program26(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "replied to your comment", "notification_page", options) : helperMissing.call(depth0, "_", "replied to your comment", "notification_page", options)));
  stack2 = helpers['if'].call(depth0, depth0.val, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }

function program28(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 6, options) : helperMissing.call(depth0, "ifEq", depth0.type, 6, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "tag you on photo", "notification_page", options) : helperMissing.call(depth0, "_", "tag you on photo", "notification_page", options)))
    + "\n";
  return buffer;
  }

function program31(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(32, program32, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 8, options) : helperMissing.call(depth0, "ifEq", depth0.type, 8, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program32(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "mentioned you on a photo", "notification_page", options) : helperMissing.call(depth0, "_", "mentioned you on a photo", "notification_page", options)))
    + "\n";
  options = {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 9, options) : helperMissing.call(depth0, "ifEq", depth0.type, 9, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }
function program33(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"unm\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "mentioned you in a comment", "notification_page", options) : helperMissing.call(depth0, "_", "mentioned you in a comment", "notification_page", options)));
  stack2 = helpers['if'].call(depth0, depth0.val, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  return buffer;
  }

  buffer += "<div class=\"notification__item";
  stack1 = helpers['if'].call(depth0, depth0.is_new, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-href=\"";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 3, options) : helperMissing.call(depth0, "ifEq", depth0.type, 3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n	<div class=\"notification__time\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._timegap || depth0._timegap),stack1 ? stack1.call(depth0, depth0.date, options) : helperMissing.call(depth0, "_timegap", depth0.date, options)))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "ago", "notification_page", options) : helperMissing.call(depth0, "_", "ago", "notification_page", options)))
    + "</div><div class=\"notification__img\">\n		";
  options = {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 3, options) : helperMissing.call(depth0, "ifEq", depth0.type, 3, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n	<div class=\"notification__txt\">\n";
  options = {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.type, 1, options) : helperMissing.call(depth0, "ifEq", depth0.type, 1, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/photo-likers"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n	<div class=\"photo-likers__user-cont\">\n	";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.likers),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"photo-likers__user\">\n			";
  stack1 = helpers['if'].call(depth0, depth0.photo, {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n	";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"/user/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\"><img src=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.i106x106)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"50\" height=\"50\"></a>\n			";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<a href=\"/user/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\"><i class=\"i i-no-avatar_50\"></i></a>\n			";
  return buffer;
  }

  buffer += "<div class=\"photo-likers__total-cont\">\n	<h3 class=\"photo-likers__total\" data-total=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.likers),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-decl=\"like\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.likers),stack1 == null || stack1 === false ? stack1 : stack1.total)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<span class=\"photo-likers__total-decl\"> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._plural || depth0._plural),stack1 ? stack1.call(depth0, ((stack1 = depth0.likers),stack1 == null || stack1 === false ? stack1 : stack1.total), "like", options) : helperMissing.call(depth0, "_plural", ((stack1 = depth0.likers),stack1 == null || stack1 === false ? stack1 : stack1.total), "like", options)))
    + "</span></h3>\n</div>\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.likers),stack1 == null || stack1 === false ? stack1 : stack1.total), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/photo-share"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "<li class=\"photo-share__item photo-share__delete\">\n		<a href=\"\" class=\"photo-share__link\" data-url=\"/api/photo/delete/\" data-content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Do you want to delete this photo?", "photo_share", options) : helperMissing.call(depth0, "_", "Do you want to delete this photo?", "photo_share", options)))
    + "\" data-ok=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Delete", "photo_share", options) : helperMissing.call(depth0, "_", "Delete", "photo_share", options)))
    + "\" data-close=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "photo_share", options) : helperMissing.call(depth0, "_", "Cancel", "photo_share", options)))
    + "\" data-success=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Photo deleted.", "photo_share", options) : helperMissing.call(depth0, "_", "Photo deleted.", "photo_share", options)))
    + "\" data-error=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Something went wrong...", "photo_share", options) : helperMissing.call(depth0, "_", "Something went wrong...", "photo_share", options)))
    + "\" data-backreload=\"true\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Delete photo", "photo_share", options) : helperMissing.call(depth0, "_", "Delete photo", "photo_share", options)))
    + "</a>\n	</li>\n	";
  return buffer;
  }

  buffer += "<h3 class=\"photo-share__title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share this photo:", "photo_share", options) : helperMissing.call(depth0, "_", "Share this photo:", "photo_share", options)))
    + "</h3>\n<ul class=\"photo-share__menu\">\n	<li class=\"photo-share__item photo-share__fb\"><a class=\"photo-share__link\" href=\"";
  if (stack2 = helpers.add_this_api) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.add_this_api; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/forward/facebook/offer?url=http://weheartpics.com/photo/";
  if (stack2 = helpers.photo_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/&title=";
  if (stack2 = helpers.story_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.story_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&description=";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "%20";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + "%20";
  if (stack2 = helpers.user_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&pubid=prolll&text=";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "%20";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + "%20";
  if (stack2 = helpers.user_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&via=WeHeartPics.com\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Facebook", "photo_share", options) : helperMissing.call(depth0, "_", "Facebook", "photo_share", options)))
    + "</a></li>\n	<li class=\"photo-share__item photo-share__tw\"><a class=\"photo-share__link\" href=\"";
  if (stack2 = helpers.add_this_api) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.add_this_api; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/forward/twitter/offer?url=http://weheartpics.com/photo/";
  if (stack2 = helpers.photo_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/&title=";
  if (stack2 = helpers.story_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.story_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&description=";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "%20";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + "%20";
  if (stack2 = helpers.user_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&pubid=prolll&text=";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "%20";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + "%20";
  if (stack2 = helpers.user_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&via=WeHeartPicsCom\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Twitter", "photo_share", options) : helperMissing.call(depth0, "_", "Twitter", "photo_share", options)))
    + "</a></li>\n	<li class=\"photo-share__item photo-share__vk\"><a class=\"photo-share__link\"  href=\"http://vk.com/share.php?url=http://weheartpics.com/photo/";
  if (stack2 = helpers.photo_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/&image=";
  if (stack2 = helpers.photo_link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&title=";
  if (stack2 = helpers.story_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.story_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "&description=";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "%20";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + "%20";
  if (stack2 = helpers.user_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" target=\"_blank\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Vkontakte", "photo_share", options) : helperMissing.call(depth0, "_", "Vkontakte", "photo_share", options)))
    + "</a></li>\n	<li class=\"photo-share__item photo-share__pt\"><a class=\"photo-share__link\" href=\"\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Pinterest", "photo_share", options) : helperMissing.call(depth0, "_", "Pinterest", "photo_share", options)))
    + "</a></li>\n	<li class=\"photo-share__item photo-share__email\"><a class=\"photo-share__link\" target=\"_blank\" href=\"mailto:?body=http://weheartpics.com/photo/";
  if (stack2 = helpers.photo_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/&subject=";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "%20";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + "%20";
  if (stack2 = helpers.user_name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.user_name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "E-mail", "photo_share", options) : helperMissing.call(depth0, "_", "E-mail", "photo_share", options)))
    + "</a></li>\n	<div></div>\n	<li class=\"photo-share__item photo-share__download\"><a class=\"photo-share__link\" target=\"_blank\" href=\"";
  if (stack2 = helpers.photo_link) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_link; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" download=\"";
  if (stack2 = helpers.photo_id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.photo_id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Download photo", "photo_share", options) : helperMissing.call(depth0, "_", "Download photo", "photo_share", options)))
    + "</a></li>\n	<li class=\"photo-share__item photo-share__report\">\n		<a href=\"\" class=\"photo-share__link\" data-url=\"/api/complaint/photo/\" data-content=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Do you want to report this photo?", "photo_share", options) : helperMissing.call(depth0, "_", "Do you want to report this photo?", "photo_share", options)))
    + "\" data-ok=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Report", "photo_share", options) : helperMissing.call(depth0, "_", "Report", "photo_share", options)))
    + "\" data-close=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "photo_share", options) : helperMissing.call(depth0, "_", "Cancel", "photo_share", options)))
    + "\" data-success=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Photo reported.", "photo_share", options) : helperMissing.call(depth0, "_", "Photo reported.", "photo_share", options)))
    + "\" data-error=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Something went wrong...", "photo_share", options) : helperMissing.call(depth0, "_", "Something went wrong...", "photo_share", options)))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Report photo", "photo_share", options) : helperMissing.call(depth0, "_", "Report photo", "photo_share", options)))
    + "</a>\n	</li>\n	";
  stack2 = helpers['if'].call(depth0, depth0.my, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/photo__after"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<h2 class=\"photo__caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uinput || depth0._uinput),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options) : helperMissing.call(depth0, "_uinput", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options)))
    + "</h2>\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		<div class=\"photo__location\">\n			<div class=\"photo__location-map\">\n				<a href=\"https://maps.google.com/maps?q="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"photo__location-link\">\n					<img src=\"http://maps.googleapis.com/maps/api/staticmap?center="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&zoom=13&size=290x84&scale=2&markers=shadow:false|icon:http://weheartpics.com/images/map/marker.png|"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&sensor=true\" width=\"100%\" class=\"photo__location-image\">\n				</a>\n			</div>\n			<i class=\"i i-streetview\"></i>\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.address), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		</div>\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<h3 class=\"photo__location-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n			";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<h4 class=\"photo__location-addr\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n			";
  return buffer;
  }

  buffer += "<div class=\"photo__text-row\">\n	<div class=\"photo__pic-col1\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		<div class=\"photo-comment-pane__cont\"></div>\n	</div>\n	<div class=\"photo__pic-col2\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		<div class=\"photo-likers__cont\"></div>\n		<div class=\"photo-share__cont\"></div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/photo__after_phone"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<h2 class=\"photo__caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uinput || depth0._uinput),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options) : helperMissing.call(depth0, "_uinput", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options)))
    + "</h2>\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		<div class=\"photo__location\">\n			<i class=\"i i-streetview\"></i>\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.address), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			<div class=\"photo__location-map\">\n				<a href=\"https://maps.google.com/maps?q="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" target=\"_blank\" class=\"photo__location-link\">\n					<img src=\"http://maps.googleapis.com/maps/api/staticmap?center="
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&zoom=13&size=290x84&scale=2&markers=shadow:false|icon:http://weheartpics.com/images/map/marker.png|"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.latitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ","
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.longitude)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "&sensor=true\" width=\"290\" height=\"84\" class=\"photo__location-image\">\n				</a>\n			</div>\n		</div>\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<h3 class=\"photo__location-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n			";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<h4 class=\"photo__location-addr\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n			";
  return buffer;
  }

  buffer += "<div class=\"photo__text-row\">\n	<div class=\"photo__pic-col1\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		<div class=\"photo-likers__cont\"></div>\n	</div>\n	<div class=\"photo__pic-col2\">\n		<div class=\"photo-comment-pane__cont\"></div>\n		<div class=\"photo-share__cont\"></div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/photo__pre"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"photo__pic\">\n	<div class=\"photo__pic-tile load-bg\">\n		<img src=\"/images_static/empty.png \" data-orig=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._prephoto || depth0._prephoto),stack1 ? stack1.call(depth0, "1000x1000", depth0.photo_id, options) : helperMissing.call(depth0, "_prephoto", "1000x1000", depth0.photo_id, options)))
    + "\" width=\"100%\" class=\"lazy\">\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/photo__story-line"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return " active";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<span class=\"photo__story-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<a href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._storyhref || depth0._storyhref),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story), options) : helperMissing.call(depth0, "_storyhref", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story), options)))
    + "\" class=\"photo__story-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n	";
  return buffer;
  }

  buffer += "<div class=\"i photo__vote i-vote";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.wasvote), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n	<span class=\"photo__vote-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.like)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n</div>\n<div class=\"photo__story\">\n	";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.type), "TIMELINE", options) : helperMissing.call(depth0, "ifEq", ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.type), "TIMELINE", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"photo__story-by\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "photo", options) : helperMissing.call(depth0, "_", "by", "photo", options)))
    + "</span> <a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"photo__user-name unm\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class=\"photo__ts\" data-ts=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.timestamp)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._timegap || depth0._timegap),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options) : helperMissing.call(depth0, "_timegap", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options)))
    + "</span>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/pictile-grid"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"pic-tile pic-add\">\n		<a href=\"/add\">\n			<img src=\"/images_static/empty.png \" width=\"196\" height=\"196\">\n			<div class=\"pic-add__cont\">\n				<i class=\"i i-add_passive\"></i>\n				<span class=\"pic-add__title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add your photo", "pictile_grid", options) : helperMissing.call(depth0, "_", "Add your photo", "pictile_grid", options)))
    + "</span>\n			</div>\n		</a>\n	</div>\n";
  return buffer;
  }

  buffer += "<div class=\"pic-tile-grid__container\">\n";
  stack1 = helpers['if'].call(depth0, depth0.addphoto, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"pic-tile-grid__spinner\"></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/pictile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a href=\"/photo/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" title=\"";
  if (stack1 = helpers.caption) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.caption; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.source),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-keeper=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.source),stack1 == null || stack1 === false ? stack1 : stack1.keeper)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img data-orig=\"";
  if (stack2 = helpers.src) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.src; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" src=\"/images_static/empty.png \" alt=\"";
  if (stack2 = helpers.caption) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.caption; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" width=\"174\" height=\"174\" class=\"lazy\"></a>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/popular-first"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return " active";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<span class=\"photofeed__story-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n			";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<a href=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._storyhref || depth0._storyhref),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story), options) : helperMissing.call(depth0, "_storyhref", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story), options)))
    + "\" class=\"photofeed__story-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n			";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<h2 class=\"photofeed__caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uinput || depth0._uinput),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options) : helperMissing.call(depth0, "_uinput", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options)))
    + "</h2>\n		";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.address), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<h3 class=\"photofeed__location-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\n		";
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<h4 class=\"photofeed__location-addr\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location)),stack1 == null || stack1 === false ? stack1 : stack1.address)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n		";
  return buffer;
  }

  buffer += "<div class=\"row\">\n	<div class=\"span6 photofeed__photo\">\n		<div class=\"photofeed__photo-pic load-bg\">\n			<a href=\"/photo/"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.source),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-keeper=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.source),stack1 == null || stack1 === false ? stack1 : stack1.keeper)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n				<div class=\"popular__delta\">+"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.delta)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <i class=\"i i-hrt_pop\"></i> ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "in last 24 hours", "popular_first", options) : helperMissing.call(depth0, "_", "in last 24 hours", "popular_first", options)))
    + "</div>\n				<img src=\"/images_static/empty.png \" data-orig=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.url), "1000x1000", options) : helperMissing.call(depth0, "_uphoto", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.url), "1000x1000", options)))
    + "\" alt=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._mention_clear || depth0._mention_clear),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options) : helperMissing.call(depth0, "_mention_clear", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), options)))
    + "\" width=\"620\" height=\"620\" class=\"lazy\"></a>\n		</div>\n		<!-- <div class=\"i photo__vote i-vote";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.wasvote), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n			<span class=\"photo__vote-title\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.like)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n		</div> -->\n		<i class=\"i i-bge-1\"></i>\n		<div class=\"photofeed__story\">\n			";
  options = {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.type), "TIMELINE", options) : helperMissing.call(depth0, "ifEq", ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.story)),stack1 == null || stack1 === false ? stack1 : stack1.type), "TIMELINE", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <span class=\"photofeed__story-by\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "popular_first", options) : helperMissing.call(depth0, "_", "by", "popular_first", options)))
    + "</span> <a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"photofeed__user-name\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> <span class=\"photofeed__ts\" data-ts=\"";
  if (stack2 = helpers.timestamp) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.timestamp; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._timegap || depth0._timegap),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options) : helperMissing.call(depth0, "_timegap", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.timestamp), options)))
    + "</span>\n		</div>\n	</div>\n	<div class=\"span4 photofeed__misc\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.caption), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.location), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		<span class=\"photofeed__comments-total\" data-total=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.comments_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-decl=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.comments_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._plural || depth0._plural),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.comments_count), "comment", options) : helperMissing.call(depth0, "_plural", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.comments_count), "comment", options)))
    + "</span>\n		<div class=\"photofeed__post-inter\">\n			<div class=\"photofeed__post-likers\"></div>\n			<div class=\"photofeed__post-comments\"></div>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/popular"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<div class=\"popular__tile load-bg\">\n			<div class=\"popular__delta\">+";
  if (stack1 = helpers.delta) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.delta; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " <i class=\"i i-hrt_pop\"></i></div>\n			<a href=\"/photo/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/\" data-type=\""
    + escapeExpression(((stack1 = ((stack1 = depth1.source),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-keeper=\""
    + escapeExpression(((stack1 = ((stack1 = depth1.source),stack1 == null || stack1 === false ? stack1 : stack1.keeper)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"><img data-orig=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, depth0.url, "320x320", options) : helperMissing.call(depth0, "_uphoto", depth0.url, "320x320", options)))
    + "\" src=\"/images_static/empty.png \" width=\"300\" height=\"300\" class=\"lazy\">\n			<span class=\"popular__author\">";
  stack2 = helpers['if'].call(depth0, depth0.second, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  stack2 = helpers['if'].call(depth0, depth0.third, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "popular", options) : helperMissing.call(depth0, "_", "by", "popular", options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\n			</a>\n		</div>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "<i class=\"i i-bge-2\"></i>";
  }

function program4(depth0,data) {
  
  
  return "<i class=\"i i-bge-3\"></i>";
  }

  buffer += "<div class=\"popular__item\">\n	<h2 class=\"popular__block-h popular__block-h_first\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "1st place", "popular", options) : helperMissing.call(depth0, "_", "1st place", "popular", options)))
    + "</h2>\n	<div class=\"popular__item_first\"></div>\n</div>\n<div class=\"popular__item\">\n	<h2 class=\"popular__block-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "2nd–7th place", "popular", options) : helperMissing.call(depth0, "_", "2nd–7th place", "popular", options)))
    + "</h2>\n	<div class=\"popular__item_other\">\n	";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.photos),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/story-menu"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return " default";
  }

function program3(depth0,data) {
  
  
  return " active";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n		<li class=\"story-menu__category-item-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " story-menu__category-item";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth1.ifEq),stack1 ? stack1.call(depth0, depth1.category, depth0.id, options) : helperMissing.call(depth0, "ifEq", depth1.category, depth0.id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><span href=\""
    + escapeExpression(((stack1 = depth1.root_path),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/whole/"
    + escapeExpression(((stack1 = depth1.sort),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.filter),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\" class=\"story-menu__category-link\"><i class=\"iexp iexp-category-";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></i><span class=\"story-menu__category-item-title\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span><i class=\"iexp iexp-sub\"></i></span>\n			<ul class=\"story-menu__items\">\n			";
  stack2 = helpers['if'].call(depth0, depth1.with_whole, {hash:{},inverse:self.noop,fn:self.programWithDepth(6, program6, data, depth0, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			";
  stack2 = helpers.each.call(depth0, depth0.stories, {hash:{},inverse:self.noop,fn:self.programWithDepth(9, program9, data, depth0, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n			</ul>\n		</li>\n	";
  return buffer;
  }
function program6(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n				<li class=\"story-menu__item-whole story-menu__item";
  options = {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth1),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth1.ifEq),stack1 ? stack1.call(depth0, depth1.category, depth0.id, options) : helperMissing.call(depth0, "ifEq", depth1.category, depth0.id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><a href=\""
    + escapeExpression(((stack1 = depth2.root_path),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/whole/"
    + escapeExpression(((stack1 = depth2.sort),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.filter),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\"><span class=\"story-menu__item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth2['_']),stack1 ? stack1.call(depth0, "Show all photos", "story_menu", options) : helperMissing.call(depth0, "_", "Show all photos", "story_menu", options)))
    + "</span></a></li>\n			";
  return buffer;
  }
function program7(depth0,data,depth2) {
  
  var stack1, stack2, options;
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth2.ifEq),stack1 ? stack1.call(depth0, depth2.story, "whole", options) : helperMissing.call(depth0, "ifEq", depth2.story, "whole", options));
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
  }

function program9(depth0,data,depth1,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n				<li class=\"story-menu__item-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " story-menu__item";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth2.ifEq),stack1 ? stack1.call(depth0, depth2.story, depth0.id, options) : helperMissing.call(depth0, "ifEq", depth2.story, depth0.id, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><a href=\""
    + escapeExpression(((stack1 = depth2.root_path),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth1.id),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/"
    + escapeExpression(((stack1 = depth2.sort),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/"
    + escapeExpression(((stack1 = depth2.filter),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/\"><span class=\"story-menu__item-title\">";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</span></a></li>\n			";
  return buffer;
  }

  buffer += "<span class=\"story-menu__opener";
  stack1 = helpers['if'].call(depth0, depth0.is_default, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	<i class=\"iexp iexp-cat-icn iexp-";
  if (stack1 = helpers.current_id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.current_id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i><span class=\"story-menu__opener-title\"></span><i class=\"iexp iexp-droparrow\"></i><a href=\"";
  if (stack1 = helpers.root_path) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.root_path; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><i class=\"iexp iexp-clear\"></i></a>\n</span>\n<ul class=\"story-menu__category-items\">\n		<li class=\"story-menu__category-item-daily story-menu__category-item";
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, depth0.category, "daily", options) : helperMissing.call(depth0, "ifEq", depth0.category, "daily", options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"><span href=\"";
  if (stack2 = helpers.root_path) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.root_path; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/daily/whole/";
  if (stack2 = helpers.sort) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.sort; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/";
  if (stack2 = helpers.filter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.filter; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "/\" class=\"story-menu__category-link\"><i class=\"iexp iexp-category-daily\"></i><span class=\"story-menu__category-item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Daily Stories", "story_menu", options) : helperMissing.call(depth0, "_", "Daily Stories", "story_menu", options)))
    + "</span><i class=\"iexp iexp-sub\"></i></span>\n			<ul class=\"story-menu__items\"></ul>\n		</li>\n	";
  stack2 = helpers.each.call(depth0, depth0.storycats, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-caption"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"upload__caption-input-container\">\n	<input placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Write a caption", "upload_caption", options) : helperMissing.call(depth0, "_", "Write a caption", "upload_caption", options)))
    + "\" class=\"upload__caption-input input_clear\" maxlength=\"300\" type=\"text\">\n	<i class=\"i i-input-ment\"></i>\n	<i class=\"i i-input-hash\"></i>\n</div>\n<div class=\"upload__caption-mentions\">\n	<div class=\"upload__loader\"></div>\n	<div class=\"upload__caption-mentions-results\"></div>\n</div>\n<div class=\"upload__caption-hashes\">\n	<!-- <div class=\"upload__loader\"></div> -->\n	<div class=\"upload__caption-hashes-results\"></div>\n</div>\n\n";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-crop"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"upload__crop-title\">\n	<h1 class=\"upload__editor-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Crop", "upload_crop", options) : helperMissing.call(depth0, "_", "Crop", "upload_crop", options)))
    + "</h1>\n	<p class=\"upload__editor-caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "You can move your photo", "upload_crop", options) : helperMissing.call(depth0, "_", "You can move your photo", "upload_crop", options)))
    + "</p>\n</div>\n<div class=\"upload__crop-cont\">\n	<div class=\"upload__crop-box\">\n		<img class=\"upload__crop-original\">\n		<div class=\"upload__crop-colorbar-1\"></div>\n		<div class=\"upload__crop-shadow-1\"></div>\n		<div class=\"upload__crop-colorbar-2\"></div>\n		<div class=\"upload__crop-shadow-2\"></div>\n	</div>\n	<ul class=\"upload__crop-finish\">\n		<li class=\"upload__crop-finish-item\"><a href=\".\" class=\"upload__crop-finish-btn upload__crop-ok\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Done", "upload_crop", options) : helperMissing.call(depth0, "_", "Done", "upload_crop", options)))
    + "</a></li>\n		<li class=\"upload__crop-finish-item\"><a href=\".\" class=\"upload__crop-finish-btn upload__crop-cancel\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Cancel", "upload_crop", options) : helperMissing.call(depth0, "_", "Cancel", "upload_crop", options)))
    + "</a></li>\n	</ul>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-editor"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"upload__editor-title\">\n	<h1 class=\"upload__editor-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit", "upload_editor", options) : helperMissing.call(depth0, "_", "Edit", "upload_editor", options)))
    + "</h1>\n	<p class=\"upload__editor-caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit your photo and choose category to post", "upload_editor", options) : helperMissing.call(depth0, "_", "Edit your photo and choose category to post", "upload_editor", options)))
    + "</p>\n</div>\n<div class=\"row upload__editor-cont\">\n	<div class=\"span5\">\n		<div class=\"upload__image-container\"></div>\n		<div class=\"upload__image-filters\"></div>\n	</div>\n	<div class=\"upload__editor-misc span5\">\n		<ul class=\"upload__misc-control\">\n			<li class=\"upload__misc-control-item upload__crop\"><a href=\".\"><i class=\"i i-crop\"></i></a></li>\n			"
    + "\n		</ul>\n		<div class=\"upload__caption\"></div>\n		<div class=\"upload__story-menu\"></div>\n		<div class=\"upload__geo\"></div>\n		<div class=\"upload__share\"></div>\n		<a href=\".\" class=\"upload__publish-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Publish", "upload_editor", options) : helperMissing.call(depth0, "_", "Publish", "upload_editor", options)))
    + "</a>\n	</div>\n</div>\n<div class=\"upload__image-crop\"></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-filters"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<li class=\"upload__filter-item\" data-filter=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><a href=\".\" class=\"iu iu-";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"upload__filter-item-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></a></li>\n";
  return buffer;
  }

  buffer += "<canvas class=\"upload__image_filtered\" width=\"510\" height=\"510\"></canvas>\n<ul class=\"upload__filter-list\">\n	<li class=\"upload__filter-item upload__normalize-item active\" data-filter=\"normalize\"><a href=\".\" class=\"iu iu-normalize\"><span class=\"upload__filter-item-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Original", "upload_filters", options) : helperMissing.call(depth0, "_", "Original", "upload_filters", options)))
    + "</span></a></li>\n";
  stack2 = helpers.each.call(depth0, depth0.filters, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n<div class=\"filter-loader\"></div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-finish"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<ul class=\"upload__finish-list\">\n	<li class=\"upload__finish-item upload__finish-upload\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Uploading...", "upload_finish", options) : helperMissing.call(depth0, "_", "Uploading...", "upload_finish", options)))
    + "<span class=\"upload__finish-upload-pers\"></span></li>\n	<li class=\"upload__finish-item upload__finish-fail\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Upload failed", "upload_finish", options) : helperMissing.call(depth0, "_", "Upload failed", "upload_finish", options)))
    + "</li>\n	<li class=\"upload__finish-item upload__finish-success\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Success!", "upload_finish", options) : helperMissing.call(depth0, "_", "Success!", "upload_finish", options)))
    + "</li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<img class=\"upload__image-original\">\n<canvas class=\"upload__image\" width=\"1000\" height=\"1000\"></canvas>";
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-share"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<h2 class=\"upload__share-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Share this photo:", "upload_share", options) : helperMissing.call(depth0, "_", "Share this photo:", "upload_share", options)))
    + "</h2>\n	<ul class=\"upload__share-list\">\n	";
  stack2 = helpers['if'].call(depth0, depth0.can_facebook, {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  stack2 = helpers['if'].call(depth0, depth0.can_twitter, {hash:{},inverse:self.noop,fn:self.programWithDepth(5, program5, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	";
  stack2 = helpers['if'].call(depth0, depth0.can_vkontakte, {hash:{},inverse:self.noop,fn:self.programWithDepth(7, program7, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</ul>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += "<li class=\"upload__share-item\"><a href=\"facebook\"";
  stack1 = helpers['if'].call(depth0, depth1.facebook, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth1['_']),stack1 ? stack1.call(depth0, "Facebook", "upload_share", options) : helperMissing.call(depth0, "_", "Facebook", "upload_share", options)))
    + "</a></li>";
  return buffer;
  }
function program3(depth0,data) {
  
  
  return " class=\"active\"";
  }

function program5(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += "<li class=\"upload__share-item\"><a href=\"twitter\"";
  stack1 = helpers['if'].call(depth0, depth1.twitter, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth1['_']),stack1 ? stack1.call(depth0, "Twitter", "upload_share", options) : helperMissing.call(depth0, "_", "Twitter", "upload_share", options)))
    + "</a></li>";
  return buffer;
  }

function program7(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += "<li class=\"upload__share-item\"><a href=\"vkontakte\"";
  stack1 = helpers['if'].call(depth0, depth1.vkontakte, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth1['_']),stack1 ? stack1.call(depth0, "Vkontakte", "upload_share", options) : helperMissing.call(depth0, "_", "Vkontakte", "upload_share", options)))
    + "</a></li>";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.can_share, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload-source"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<h1 class=\"upload__source-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Pick a source", "upload_source", options) : helperMissing.call(depth0, "_", "Pick a source", "upload_source", options)))
    + "</h1>\n<ul class=\"upload__source-list\">\n	<li class=\"upload__source-item upload__source_file\"><a href=\".\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "From computer", "upload_source", options) : helperMissing.call(depth0, "_", "From computer", "upload_source", options)))
    + "</a></li>\n</ul>\n<input type=\"file\" name=\"local_file\" class=\"upload__input_file\" accept=\"image/jpeg,image/png,image/gif\">";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["blocks/upload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"upload__source\"></div>\n<div class=\"upload__editor\"></div>\n<div class=\"upload__finish\"></div>";
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

this["qst"]["Templates"]["ptemplates"]["blocks/user-info_phone"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";

function program1(depth0,data) {
  
  
  return "\n";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<div class=\"profile__follow\">\n	<div class=\"profile__follow-head ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.follow), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\">\n		<div class=\"profile__follow-unfollow\">\n			<span class=\"profile__follow-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Remove", "user_info", options) : helperMissing.call(depth0, "_", "Remove", "user_info", options)))
    + "</span>\n			<i class=\"ip ip-unfollow\"></i>\n		</div>\n		<div class=\"profile__follow-follow\">\n			<span class=\"profile__follow-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Follow", "user_info", options) : helperMissing.call(depth0, "_", "Follow", "user_info", options)))
    + "</span>\n			<i class=\"ip ip-follow\"></i>\n		</div>\n	</div>\n</div>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "followed";
  }

function program6(depth0,data) {
  
  
  return " profile__bg-mine";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<div class=\"load-bg\">\n			<img src=\"/images_static/empty.png \" data-orig=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.background)),stack1 == null || stack1 === false ? stack1 : stack1.i640x640)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" width=\"100%\" class=\"lazy profile__bg-img\">\n		</div>\n	";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n		<img src=\"/images_static/empty.png \" width=\"100%\" class=\"profile__bg-img\">\n	";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n	<div class=\"profile__interact profile__interact-bio\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio), {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</div>\n	";
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<i class=\"ip ip-bio\"></i><span class=\"profile__interact-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Edit bio", "user_info", options) : helperMissing.call(depth0, "_", "Edit bio", "user_info", options)))
    + "</span>\n		";
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n			<i class=\"ip ip-bio\"></i><span class=\"profile__interact-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Add bio", "user_info", options) : helperMissing.call(depth0, "_", "Add bio", "user_info", options)))
    + "</span>\n		";
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"profile__interact profile__interact-message\">\n		<i class=\"ip ip-message\"></i><span class=\"profile__interact-title\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Message", "user_info", options) : helperMissing.call(depth0, "_", "Message", "user_info", options)))
    + "</span>\n	</div>\n	";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"profile__invite\"><i class=\"ip ip-invite\"></i><a class=\"profile__invite-title\" href=\"/invite\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Invite friends", "user_info", options) : helperMissing.call(depth0, "_", "Invite friends", "user_info", options)))
    + "</a></div>\n";
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
  buffer += "\n	<ul class=\"profile__social\">\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.fb_id), {hash:{},inverse:self.noop,fn:self.program(33, program33, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.tw_id), {hash:{},inverse:self.noop,fn:self.program(35, program35, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n		";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.vk_id), {hash:{},inverse:self.noop,fn:self.program(37, program37, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</ul>\n";
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
  
  var buffer = "", stack1, options;
  buffer += "\n	<div class=\"profile-menu_phone__title\"><h3 class=\"profile-menu_phone__title-text\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Show photos", "user_info", options) : helperMissing.call(depth0, "_", "Show photos", "user_info", options)))
    + "</h3></div>\n	<ul class=\"profile-menu_phone\">\n		<li class=\"profile-menu_phone__item\">\n			<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/explore\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "All", "user_info", options) : helperMissing.call(depth0, "_", "All", "user_info", options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photos_count)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._plural || depth0._plural),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photos_count), "photo", options) : helperMissing.call(depth0, "_plural", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photos_count), "photo", options)))
    + "</a>\n		</li>\n		<li class=\"profile-menu_phone__item profile-menu_phone__item-activity\">\n			<a href=\"/user/"
    + escapeExpression(((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/feed\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Activity feed", "user_info", options) : helperMissing.call(depth0, "_", "Activity feed", "user_info", options)))
    + "</a>\n		</li>\n	</ul>\n";
  return buffer;
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

  stack1 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"profile__bg";
  stack1 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.background), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
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
    + "</span></div>\n	</div>\n</div>\n<div class=\"profile__avatar\">\n	<img src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.url), "212x212", options) : helperMissing.call(depth0, "_uphoto", ((stack1 = ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photo)),stack1 == null || stack1 === false ? stack1 : stack1.url), "212x212", options)))
    + "\" width=\"110\" height=\"110\" class=\"profile__avatar-img\">\n	";
  stack2 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(17, program17, data),fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</div>\n";
  stack2 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.bio), {hash:{},inverse:self.program(26, program26, data),fn:self.program(21, program21, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  options = {hash:{},inverse:self.program(31, program31, data),fn:self.program(29, program29, data),data:data};
  stack2 = ((stack1 = helpers.ifEq || depth0.ifEq),stack1 ? stack1.call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id), 6176, options) : helperMissing.call(depth0, "ifEq", ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.id), 6176, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.user_obj),stack1 == null || stack1 === false ? stack1 : stack1.photos_count), {hash:{},inverse:self.noop,fn:self.program(39, program39, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n";
  stack2 = helpers['if'].call(depth0, depth0.mine, {hash:{},inverse:self.program(41, program41, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["misc/pinterest-share"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.caption) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.caption; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " - ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.pinterest_hashtags) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pinterest_hashtags; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  stack1 = helpers['if'].call(depth0, depth0.storycat, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  if (stack1 = helpers.pinterest_hashtags) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.pinterest_hashtags; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.caption, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (stack1 = helpers.story_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.story_name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "by", "misc", options) : helperMissing.call(depth0, "_", "by", "misc", options)))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ";
  stack2 = helpers['if'].call(depth0, depth0.story, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " #GetWeHeartPics";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["misc/upload-mentions"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data,depth1) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<ul class=\"upload__mention-list\">\n	";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.users),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.noop,fn:self.programWithDepth(2, program2, data, depth1),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</ul>\n";
  return buffer;
  }
function program2(depth0,data,depth2) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n	<li class=\"upload__mention-item\">\n		<a href=\".\" class=\"upload__mention-item-a\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-uid=\"";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" data-name=\"";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.name; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n			<img class=\"upload__mention-img\" src=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._uphoto || depth0._uphoto),stack1 ? stack1.call(depth0, ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.url), "160x160", options) : helperMissing.call(depth0, "_uphoto", ((stack1 = depth0.photo),stack1 == null || stack1 === false ? stack1 : stack1.url), "160x160", options)))
    + "\" width=\"60\" height=\"60\">\n			<span class=\"upload__mention-name\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers._tagWrap || depth0._tagWrap),stack1 ? stack1.call(depth0, depth0.name, depth2.current_mention, "strong", options) : helperMissing.call(depth0, "_tagWrap", depth0.name, depth2.current_mention, "strong", options)))
    + "</span>\n		</a></li>\n	";
  return buffer;
  }

  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.users),stack1 == null || stack1 === false ? stack1 : stack1.list), {hash:{},inverse:self.noop,fn:self.programWithDepth(1, program1, data, depth0),data:data});
  if(stack2 || stack2 === 0) { return stack2; }
  else { return ''; }
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
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "or drop us a line to <a href=\"mailto:hi@weheartpics.com\" class=\"lnk\">hi@weheartpics.com.</a>", "p404", options) : helperMissing.call(depth0, "_", "or drop us a line to <a href=\"mailto:hi@weheartpics.com\" class=\"lnk\">hi@weheartpics.com.</a>", "p404", options)))
    + "</li>\n</ul>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/add-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"add-page-row\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/confirmation-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<form action=\".\" class=\"confirmation-form\">\n	<ul class=\"confirmation-caption-list\">\n		<li class=\"confirmation-caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "We have sent you e-mail with confirmation link. Again. Please confirm.", "confirmation_page", options) : helperMissing.call(depth0, "_", "We have sent you e-mail with confirmation link. Again. Please confirm.", "confirmation_page", options)))
    + "</li>\n		<li class=\"confirmation-caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "We have sent you e-mail with confirmation link. Please confirm.", "confirmation_page", options) : helperMissing.call(depth0, "_", "We have sent you e-mail with confirmation link. Please confirm.", "confirmation_page", options)))
    + "</li>\n		<li class=\"confirmation-caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "We have sent you e-mail with confirmation link. Again. Please confirm.", "confirmation_page", options) : helperMissing.call(depth0, "_", "We have sent you e-mail with confirmation link. Again. Please confirm.", "confirmation_page", options)))
    + "</li>\n		<li class=\"confirmation-caption\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "We have sent you e-mail with confirmation link. Please confirm.", "confirmation_page", options) : helperMissing.call(depth0, "_", "We have sent you e-mail with confirmation link. Please confirm.", "confirmation_page", options)))
    + "</li>\n	</ul>\n	<div class=\"confirmation-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Resend", "confirmation_page", options) : helperMissing.call(depth0, "_", "Resend", "confirmation_page", options)))
    + "<i class=\"icn icn-arrow-medium_right\"></i></div>\n	<input type=\"submit\" class=\"inv\">\n</form>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/dialogs-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"dialogs-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Dialogs are only available for <a href=\"{{_itunes_link}}\" target=\"_blank\">iOS</a> and <a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Android</a> applications. <br/>Soon you will be able to chat on our site as well.", "dialogs_page", options) : helperMissing.call(depth0, "_", "Dialogs are only available for <a href=\"{{_itunes_link}}\" target=\"_blank\">iOS</a> and <a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Android</a> applications. <br/>Soon you will be able to chat on our site as well.", "dialogs_page", options)))
    + "</p>\n<a href=\"/\" class=\"dialogs-ok\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "dialogs_page", options) : helperMissing.call(depth0, "_", "Ok", "dialogs_page", options)))
    + "</a>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/explore-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"explore-menu-row\">\n	<div class=\"row\">\n		<div class=\"story-menu-row span3\"></div>\n		<div class=\"sort-menu-row span10\">\n		</div>\n	</div>\n</div>\n<div class=\"row\">\n	<div class=\"span3\"></div>\n	<div class=\"pic-tile-grid-col span10\">\n	</div>\n</div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/invite-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"invite-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Invites are only available for <a href=\"{{_itunes_link}}\" target=\"_blank\">iOS</a> and <a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Android</a> applications. <br/>Soon you will be able to use it on our site as well.", "invite_page", options) : helperMissing.call(depth0, "_", "Invites are only available for <a href=\"{{_itunes_link}}\" target=\"_blank\">iOS</a> and <a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Android</a> applications. <br/>Soon you will be able to use it on our site as well.", "invite_page", options)))
    + "</p>\n<a href=\"/\" class=\"invite-ok\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "invite_page", options) : helperMissing.call(depth0, "_", "Ok", "invite_page", options)))
    + "</a>";
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

this["qst"]["Templates"]["ptemplates"]["pages/notifications-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"notifications-header\">\n		<h1>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n		<p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n	</div>\n	";
  return buffer;
  }

  buffer += "<div class=\"notifications-page__cont\">\n	";
  stack1 = helpers['if'].call(depth0, depth0.in_popup, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<div class=\"notifications-feed-row\"></div>\n</div>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/photo-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"photo-page-row\"></div>";
  });

this["qst"]["Templates"]["ptemplates"]["pages/popular-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\">\n	<div class=\"row\">\n		<div class=\"span3\"></div>\n		<div class=\"popular-col span10\">\n			<div class=\"popular-prize\"></div>\n			<div class=\"popular__item\">\n				<h2 class=\"popular__block-h\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Running up", "popular_page", options) : helperMissing.call(depth0, "_", "Running up", "popular_page", options)))
    + "</h2>\n				<div class=\"popular-grid\"></div>\n			</div>\n		</div>\n	</div>\n</div>";
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

this["qst"]["Templates"]["ptemplates"]["pages/reset-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<form action=\".\" class=\"reset-form\">\n	<input type=\"email\" name=\"email\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Enter e-mail you used for registration", "reset_page", options) : helperMissing.call(depth0, "_", "Enter e-mail you used for registration", "reset_page", options)))
    + "\" class=\"reset-login input_clear\" maxlength=\"32\">\n	<span class=\"reset-error reset-error_invalid\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Doesn&#39;t look like a valid e-mail", "reset_page", options) : helperMissing.call(depth0, "_", "Doesn&#39;t look like a valid e-mail", "reset_page", options)))
    + "</span>\n	<span class=\"reset-error reset-error_nouser\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "No user with this e-mail", "reset_page", options) : helperMissing.call(depth0, "_", "No user with this e-mail", "reset_page", options)))
    + "</span>\n	<div class=\"reset-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Reset", "reset_page", options) : helperMissing.call(depth0, "_", "Reset", "reset_page", options)))
    + "<i class=\"icn icn-arrow-medium_right\"></i></div>\n	<input type=\"submit\" class=\"inv\">\n</form>\n<span class=\"reset-success\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Password was sent to your <a href=\"http://gmail.com\" target=\"_blank\" class=\"reset-success\">e-mail</a>.", "reset_page", options) : helperMissing.call(depth0, "_", "Password was sent to your <a href=\"http://gmail.com\" target=\"_blank\" class=\"reset-success\">e-mail</a>.", "reset_page", options)))
    + "</span>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/setpassword-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<form action=\".\" class=\"setpassword-form\">\n	<input type=\"password\" name=\"password\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "New password", "setpassword_page", options) : helperMissing.call(depth0, "_", "New password", "setpassword_page", options)))
    + "\" class=\"setpassword-password input_clear\" maxlength=\"16\" autocomplete=\"off\">\n	<span class=\"setpassword-error setpassword-error_invalid\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Please use at least 6 characters", "setpassword_page", options) : helperMissing.call(depth0, "_", "Please use at least 6 characters", "setpassword_page", options)))
    + "</span>\n	<span class=\"setpassword-error setpassword-error_error\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Something went wrong (;_;)", "setpassword_page", options) : helperMissing.call(depth0, "_", "Something went wrong (;_;)", "setpassword_page", options)))
    + "</span>\n	<div class=\"setpassword-btn\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Set", "setpassword_page", options) : helperMissing.call(depth0, "_", "Set", "setpassword_page", options)))
    + "<i class=\"icn icn-arrow-medium_right\"></i></div>\n	<input type=\"submit\" class=\"inv\">\n</form>\n<span class=\"setpassword-success\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Password was changed.", "setpassword_page", options) : helperMissing.call(depth0, "_", "Password was changed.", "setpassword_page", options)))
    + "</span>";
  return buffer;
  });

this["qst"]["Templates"]["ptemplates"]["pages/settings-page"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<p class=\"settings-p\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Settings are only available for <a href=\"{{_itunes_link}}\" target=\"_blank\">iOS</a> and <a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Android</a> applications. <br/>Soon you will be able to use it on our site as well.", "settings_page", options) : helperMissing.call(depth0, "_", "Settings are only available for <a href=\"{{_itunes_link}}\" target=\"_blank\">iOS</a> and <a href=\"https://play.google.com/store/apps/details?id=com.weheartpics\" target=\"_blank\">Android</a> applications. <br/>Soon you will be able to use it on our site as well.", "settings_page", options)))
    + "</p>\n<a href=\"/\" class=\"settings-ok\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers['_'] || depth0['_']),stack1 ? stack1.call(depth0, "Ok", "settings_page", options) : helperMissing.call(depth0, "_", "Ok", "settings_page", options)))
    + "</a>";
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