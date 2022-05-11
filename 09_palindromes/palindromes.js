const palindromes = function (str) {
	let normalizedString = str.toLowerCase().replace(/[^a-z\d]/gi, '');
	let arr = Array.from(normalizedString);
	return arr.reverse().join('') === normalizedString;
};

// Do not edit below this line
module.exports = palindromes;
