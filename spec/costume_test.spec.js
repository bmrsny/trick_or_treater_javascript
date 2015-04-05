var Costume = require('../lib/costume')

describe("Costume", function() {

	it("has a style", function() {
		var costume = new Costume("Batman");
		expect(costume.style).toEqual("Batman");
	});
});



