var Bag = require('../lib/bag')
var Candy = require('../lib/candy')

describe("Bag", function(){
	it ("has no candies by default in the bag", function(){
		var bag = new Bag;
		expect(bag.candies).toEqual([]);
	});

	it("returns a count of the candies in the bag", function(){
		var bag = new Bag;
		expect(bag.count()).toEqual(0)
	});

	it("is an empty bag by default", function(){
		var bag = new Bag
		expect(bag.isEmpty()).toEqual(true)
	})

	it("can have candies added", function(){
		var candy = new Candy("Hershey")
		var bag = new Bag

		bag.addCandy(candy)
		expect(bag.candies).toEqual([candy])
		expect(bag.isEmpty()).toBe(false)
	});

	it("can have candies added", function(){
		var candy1 = new Candy("Hershey")
		var candy2 = new Candy("Yummies")
		var bag = new Bag

		bag.addCandy(candy1)
		bag.addCandy(candy2)
		expect(bag.candies).toEqual([ { type : 'Hershey' }, { type : 'Yummies' } ])
		expect(bag.isEmpty()).toBe(false)
		expect(bag.count()).toEqual(2)
	});

	it("candy has a type", function(){
		var candy1 = new Candy("Hershey")
		var candy2 = new Candy("Yummies")
		var bag = new Bag

		bag.addCandy(candy1)
		bag.addCandy(candy2)
		expect(bag.candies).toEqual([ { type : 'Hershey' }, { type : 'Yummies' } ])

		expect(bag.isEmpty()).toBe(false)
		expect(bag.count()).toEqual(2)
		expect(bag.candies[0].type).toEqual("Hershey")
		expect(bag.candies[1].type).toEqual("Yummies")
	});

	it("contains a candy type", function(){
		var candy1 = new Candy("hershey")
		var candy2 = new Candy("yummies")
		var bag = new Bag
		bag.addCandy(candy1)
		bag.addCandy(candy2)

		expect(bag.hasCandy("yummies")).toBe(true);
	});

	it("can remove an item from the bag", function(){
		var candy1 = new Candy("hershey")
		var candy2 = new Candy("yummies")
		var bag = new Bag
		bag.addCandy(candy1)
		bag.addCandy(candy2)
	
		expect(bag.removeLastCandy().type).toEqual("yummies")
	});
});
