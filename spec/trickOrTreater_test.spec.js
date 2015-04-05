var TrickOrTreater = require('../lib/trickOrTreater');
var Candy = require('../lib/candy')
var Costume = require('../lib/costume');
var Bag = require('../lib/bag');

describe("trick or treater", function() {

	it("has a costume", function() {
		var costume = new Costume("Batman");
		var style = costume.style
		var treater = new TrickOrTreater(style);

		expect(costume.style).toEqual("Batman");
		expect(treater.costume).toEqual("Batman");
	});

	it("has an empty bag by default", function() {
		var bag = new Bag
		var costume = new Costume("Batman");
		var style = costume.style
		var treater = new TrickOrTreater(style);
		
		expect(treater.bag.isEmpty()).toEqual(true);
	});

	it("has no candy by defualt", function() {
		var bag = new Bag
		var costume = new Costume("Batman");
		var style = costume.style
		var treater = new TrickOrTreater(style);
		
		// the bag instance is still holding onto the candies?
		expect(treater.bag.hasCandy()).toEqual(false); 
	});

		it("has no candy by defualt", function() {
			var candy = new Candy("cookies")
			var bag = new Bag
			var costume = new Costume("Batman");
			var style = costume.style
			var treater = new TrickOrTreater(style);

			treater.bag.addCandy(candy)
			expect(treater.bag.hasCandy("cookies")).toEqual(true);
			treater.bag.candies.pop();
	});

		it("has a candy count", function() {
			var candy = new Candy("milky way")
			var bag = new Bag
			var costume = new Costume("Power Ranger");
			var style = costume.style
			var treater = new TrickOrTreater(style);

			treater.bag.addCandy(candy)
			expect(treater.bag.hasCandy("milky way")).toEqual(true);
			expect(treater.candyCount()).toEqual(1);
			treater.bag.candies.pop();
			treater.bag.candies.pop();
			treater.bag.candies.pop();
	});

	it("has can eat a candy", function() {
			var candy = new Candy("milky way")
			var bag = new Bag
			var costume = new Costume("Power Ranger");
			var style = costume.style
			var treater = new TrickOrTreater(style);
			treater.bag.addCandy(candy)
			treater.eat();
			
			expect(treater.candyCount()).toEqual(0);
	});
});
