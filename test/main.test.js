var Backbone = require('backbone');

var MainView = require('../src/main');

describe('My main View', function() {
    it('should give addition of 2 numbers', function() {
       
        var mainView = new MainView();
        expect(mainView.add2Numbers(5,5)).toEqual(10);
    });
});
