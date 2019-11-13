var Backbone = require('backbone');

var MainView = Backbone.View.extend({
  
    initialize: function() {
        this.render;
    },
    render: function() {
        console.log("You are on main view!")

    },
    add2Numbers: function(nbr1,nbr2) {
        return (nbr1+nbr2);
    }
});

module.exports = MainView;
