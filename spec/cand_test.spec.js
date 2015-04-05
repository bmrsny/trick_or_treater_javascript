var Candy = require('../lib/candy')

describe("Candy", function(){
	
	it("candy has a type", function(){
		var candy = new Candy("Resses");
		expect(candy.type).toEqual("Resses");
	});

	it("candy can have a  different type", function(){
		var candy = new Candy("M & M's");
		expect(candy.type).toEqual("M & M's");
	});
});
