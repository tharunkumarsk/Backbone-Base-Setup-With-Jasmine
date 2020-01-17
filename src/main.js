var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");
var template = require("./template.html");

var MainView = Backbone.View.extend({
  initialize: function() {
    this.el = $("#root");
    $(this.el).html(template);
    this.el.find(".child").html("Text passed from main view");
    this.render();
  },
  render: function() {
    let result = this.add2Numbers(2, 3);
    this.el.find(".result").html("The program result = " + result);
  },
  add2Numbers: function(nbr1, nbr2) {
    return nbr1 + nbr2;
  }
});

module.exports = MainView;
