var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");

var MainView = Backbone.View.extend({
  initialize: function(template) {
    this.el = $("#root");
    $(this.el).html(template);
    this.el.find(".child").html("Text passed from main view");
    this.render();
  },
  render: function() {},
  add2Numbers: function(nbr1, nbr2) {
    return nbr1 + nbr2;
  }
});

module.exports = MainView;
