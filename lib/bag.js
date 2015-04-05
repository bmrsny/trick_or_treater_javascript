function Bag(){
	this.candies = [];	
};


Bag.prototype.count = function(){
	var counter = this.candies.length;
	return counter;
};

Bag.prototype.isEmpty = function(){
	if(this.candies.length == 0) {
		return true;
	} else {
		return false;
	}
};

Bag.prototype.addCandy = function(candy){
	this.candies.push(candy);
};

Bag.prototype.hasCandy = function(candyType){
	function wordMatch(element, index){
		return element.type === candyType;
	};
	return this.candies.some(wordMatch);
};

Bag.prototype.removeLastCandy = function(){
	return this.candies.pop();
};


module.exports = Bag
