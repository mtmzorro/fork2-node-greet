// var expect = require("chai").expect;
var greet = require("../index.js");


describe('greet', function() {

    it("ishould greet a person by name", function() {
        expect(greet.init("mtmzorro")).to.eql("hello, mtmzorro");
    });

    it("should greet a person flirtatiously if drunk", function() {
        expect(greet.init("mtmzorro", true)).to.eql("hello mtmzorro, you look sexy today");
    });

});