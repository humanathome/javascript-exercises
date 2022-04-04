const removeFromArray = function(arr, ...itemsToRemove) {
  // if an element in arr is also in the itemsToRemove, do not include it in the new array
  return arr.filter(item => !(itemsToRemove.includes(item)));
};

// Do not edit below this line
module.exports = removeFromArray;
