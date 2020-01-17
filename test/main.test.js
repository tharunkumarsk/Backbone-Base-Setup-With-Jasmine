var $ = require("jquery");

var MainView = require("../src/main");

describe("My main View", function() {
  $("body").append('<div id="root"/>');
  it("should render with default main html", function() {
    var mainView = new MainView();
    console.log($("#root").textContent);
    // expect($(".main-header").textContent).to.equal("A New Day");
  });

  it("should give addition of 2 numbers", function() {
    var mainView = new MainView();
    expect(mainView.add2Numbers(5, 5)).toEqual(10);
  });
});
