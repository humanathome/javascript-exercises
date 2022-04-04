const reverseString = function(string) {
  const splitString = string.split('');
  const reverseName = splitString.reverse();
  
  return reverseName.join('');
};

// Do not edit below this line
module.exports = reverseString;
