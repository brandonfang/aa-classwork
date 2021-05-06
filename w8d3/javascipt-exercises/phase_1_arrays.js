Array.prototype.uniq = function() {
	let result = [];
	this.forEach( ele => {
		if (!result.includes(ele)) {
			result.push(ele);
		}
	})
	
	return result;
};

Array.prototype.twoSum = function() {
	let result = [];
	for (let i = 0; i < this.length; i++) {
		for (let j = i + 1; j < this.length; j++) {
			if (this[i] + this[j] === 0) {
				result.push([i, j]);
			}
		}
	}
	
	return result;
};

Array.prototype.transpose = function() {
	let result = [];
	for (let i = 0; i < this[0].length; i++) {
		let row = [];
		for (let j = 0; j < this.length; j++) {
				row.push(this[j][i]);
		}
		
		result.push(row);
	}

	return result;
};