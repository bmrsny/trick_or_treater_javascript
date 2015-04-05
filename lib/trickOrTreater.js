var Bag = require('../lib/bag');

function TrickOrTreater(costume) {
	this.costume = costume;
};

TrickOrTreater.prototype.bag = new Bag;

TrickOrTreater.prototype.hasCandy = function() {
	this.bag.isEmpty;
};

TrickOrTreater.prototype.candyCount = function() {
	return this.bag.candies.length;
};

TrickOrTreater.prototype.eat = function() {
	this.bag.candies.pop();
};



module.exports = TrickOrTreater;
