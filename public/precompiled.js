(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['main.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div class=\"pin__content-container\">\n			<div class=\"pin__image-container\">\n				<img class=\"pin__image\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"MediaUrl") : depth0), depth0))
    + "\">\n			</div>\n			<div class=\"pin__author_container\">\n				<img class=\"pin__author_avatar\" src=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"AuthorAvatar") : depth0), depth0))
    + "\">\n				<p>"
    + ((stack1 = alias1((depth0 != null ? lookupProperty(depth0,"AuthorName") : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n			</div>\n		</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"feed__layout-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pins") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":12,"column":10}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
})();