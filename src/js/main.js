var Backbone = require("backbone");
var _ = require("underscore");
var $ = require("jquery");

var MainView = Backbone.View.extend({
  initialize: function(template) {
    this.el = $("#root");
    $(this.el).html(template);
    this.el.find(".child").html("Text passed from main view");
  },
  showResult: function() {
    //just for testing purpose hardcoded the input as 5,5
    this.el
      .find(".result")
      .html("Your program result is : " + this.add2Numbers(5, 5));
  },

  add2Numbers: function(nbr1, nbr2) {
    return nbr1 + nbr2;
  }
});

module.exports = MainView;
