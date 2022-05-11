const fibonacci = function(end) {
	end = Number(end);
	if (end < 0) return "OOPS";
	
	let a = 0;
	let b = 1;
	let temp;
	
	while (end >= 0) {
		temp = a;
		a = a + b;
		b = temp;
		end--;
	}
	
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
