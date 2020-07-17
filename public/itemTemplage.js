(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['viewpage'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.city : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":1},"end":{"line":7,"column":8}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.item,depth0,{"name":"item","data":data,"indent":"\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<main class = \"content\">\n"
    + ((stack1 = container.invokePartial(partials.content,depth0,{"name":"content","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<section id = \"posts\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":8,"column":11}}})) != null ? stack1 : "")
    + "</section>\n"
    + ((stack1 = container.invokePartial(partials.sell,depth0,{"name":"sell","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</main>\n";
},"usePartial":true,"useData":true});
templates['404'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <main class=\"error-container\">\n      <h2>404</h2>\n      <h3>Woops!  We couldn't find that page.</h3>\n    </main>\n";
},"useData":true});
templates['main'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title>Benny's List</title>\n\n    <!-- This 3rd-party stylesheet makes available the font families to be used for this page (\"Roboto\" and \"Roboto Slab\"). -->\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab:100\" rel=\"stylesheet\">\n\n    <!-- This 3rd-party stylesheet incorporates SVG icons from Font Awesome: http://fontawesome.com/ -->\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.11.2/css/all.css\" crossorigin=\"anonymous\">\n\n    <link rel=\"stylesheet\" href=\"/style.css\">\n\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.4.2/handlebars.runtime.js\" charset=\"utf-8\" defer></script>\n    <script src=\"/itemTemplate.js\" charset=\"utf-8\" defer></script>\n    <script src=\"/index.js\" charset=\"utf-8\" defer></script>\n  </head>\n  <body>\n\n    <header>\n\n      <div class=\"header-image-container\">\n        <img src=\"/benny.jpg\" alt=\"Benny logo\">\n      </div>\n\n      <h1 class=\"site-title\"><a href=\"#\">Benny's List</a></h1>\n\n    </header>\n\n    "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"body","hash":{},"data":data,"loc":{"start":{"line":31,"column":4},"end":{"line":31,"column":14}}}) : helper))) != null ? stack1 : "")
    + "\n  </body>\n</html>\n";
},"useData":true});
templates['content'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "      <aside class=\"filter-container\">\n\n        <h2>Filters</h2>\n\n        <div class=\"filter-input-container\">\n          <label for=\"filter-text\" class=\"filter-input-label\">Text</label>\n          <div class=\"filter-input-element\">\n            <input type=\"text\" name=\"filter-text\" id=\"filter-text\" class=\"filter-input\">\n          </div>\n        </div>\n\n        <div class=\"filter-input-container\">\n          <label for=\"filter-min-price\" class=\"filter-input-label\">Price</label>\n          <div class=\"filter-input-element\">\n            <input type=\"text\" name=\"filter-min-price\" id=\"filter-min-price\" class=\"filter-input\" placeholder=\"min\">\n          </div>\n          <div class=\"filter-input-element\">\n            <input type=\"text\" name=\"filter-max-price\" id=\"filter-max-price\" class=\"filter-input\" placeholder=\"max\">\n          </div>\n        </div>\n\n        <div class=\"filter-input-container\">\n          <label for=\"filter-city\">City</label>\n          <div class=\"filter-input-element\">\n            <select id=\"filter-city\" class=\"filter-input\" name=\"filter-city\">\n              <option selected value=\"\">Any</option>\n              <option>Corvallis</option>\n              <option>Albany</option>\n              <option>Eugene</option>\n              <option>Portland</option>\n              <option>Salem</option>\n              <option>Bend</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"filter-input-container\">\n          <fieldset id=\"filter-condition\" class=\"filter-fieldset\">\n            <legend>Condition</legend>\n            <div>\n              <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-new\" value=\"new\">\n              <label for=\"filter-condition-new\">New</label>\n            </div>\n            <div>\n              <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-excellent\" value=\"excellent\">\n              <label for=\"filter-condition-excellent\">Excellent</label>\n            </div>\n            <div>\n              <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-good\" value=\"good\">\n              <label for=\"filter-condition-good\">Good</label>\n            </div>\n            <div>\n              <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-fair\" value=\"fair\">\n              <label for=\"filter-condition-fair\">Fair</label>\n            </div>\n            <div>\n              <input type=\"checkbox\" name=\"filter-condition\" id=\"filter-condition-poor\" value=\"poor\">\n              <label for=\"filter-condition-poor\">Poor</label>\n            </div>\n          </fieldset>\n        </div>\n\n        <button id=\"filter-update-button\" class=\"action-button\">Update</button>\n\n      </aside>\n";
},"useData":true});
templates['item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"post\" data-price=\""
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":40}}}) : helper)))
    + "\" data-city=\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":1,"column":53},"end":{"line":1,"column":61}}}) : helper)))
    + "\" data-condition=\""
    + alias4(((helper = (helper = helpers.condition || (depth0 != null ? depth0.condition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"condition","hash":{},"data":data,"loc":{"start":{"line":1,"column":79},"end":{"line":1,"column":92}}}) : helper)))
    + "\">\n  <div class=\"post-contents\">\n   <div class=\"post-image-container\">\n    <img src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":26}}}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":48}}}) : helper)))
    + "\">\n   </div>\n   <div class=\"post-info-container\">\n    <a href=\"#\" class=\"post-title\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":35},"end":{"line":7,"column":50}}}) : helper)))
    + "</a> <span class=\"post-price\">$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data,"loc":{"start":{"line":7,"column":81},"end":{"line":7,"column":90}}}) : helper)))
    + "</span> <span class=\"post-city\">("
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data,"loc":{"start":{"line":7,"column":123},"end":{"line":7,"column":131}}}) : helper)))
    + ")</span>\n   </div>\n  </div>\n </div>\n";
},"useData":true});
templates['sell'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "    <button type=\"button\" id=\"sell-something-button\"><i class=\"fas fa-plus\"></i></button>\n\n    <div id=\"modal-backdrop\" class=\"hidden\"></div>\n    <div id=\"sell-something-modal\" class=\"hidden\">\n      <div class=\"modal-dialog\">\n\n        <div class=\"modal-header\">\n          <h3>Sell something on Benny's List</h3>\n          <button type=\"button\" id=\"modal-close\" class=\"modal-hide-button\">&times;</button>\n        </div>\n\n        <div class=\"modal-body\">\n\n          <div class=\"post-input-element\">\n            <label for=\"post-text-input\">Item description</label>\n            <input type=\"text\" id=\"post-text-input\"></input>\n          </div>\n\n          <div class=\"post-input-element\">\n            <label for=\"post-photo-input\">Photo URL</label>\n            <input type=\"text\" id=\"post-photo-input\">\n          </div>\n\n          <div class=\"post-input-element\">\n            <label for=\"post-price-input\">Selling price ($)</label>\n            <input type=\"number\" id=\"post-price-input\">\n          </div>\n\n          <div class=\"post-input-element\">\n            <label for=\"post-city-input\">City</label>\n            <input type=\"text\" id=\"post-city-input\">\n          </div>\n\n          <div class=\"post-input-element\">\n            <fieldset id=\"post-condition-fieldset\" class=\"post-fieldset\">\n              <legend>Condition</legend>\n              <div>\n                <input type=\"radio\" name=\"post-condition\" id=\"post-condition-new\" value=\"new\" checked>\n                <label for=\"post-condition-new\">New</label>\n              </div>\n              <div>\n                <input type=\"radio\" name=\"post-condition\" id=\"post-condition-excellent\" value=\"excellent\">\n                <label for=\"post-condition-excellent\">Excellent</label>\n              </div>\n              <div>\n                <input type=\"radio\" name=\"post-condition\" id=\"post-condition-good\" value=\"good\">\n                <label for=\"post-condition-good\">Good</label>\n              </div>\n              <div>\n                <input type=\"radio\" name=\"post-condition\" id=\"post-condition-fair\" value=\"fair\">\n                <label for=\"post-condition-fair\">Fair</label>\n              </div>\n              <div>\n                <input type=\"radio\" name=\"post-condition\" id=\"post-condition-poor\" value=\"poor\">\n                <label for=\"post-condition-poor\">Poor</label>\n              </div>\n            </fieldset>\n          </div>\n\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" id=\"modal-cancel\" class=\"modal-hide-button action-button\">Cancel</button>\n          <button type=\"button\" id=\"modal-accept\" class=\"action-button\">Create Post</button>\n        </div>\n\n      </div>\n    </div>\n\n  </body>\n</html>\n";
},"useData":true});
})();