const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  return arr.reduce((memo, val) => memo + val, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((memo, val) => memo * val);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  const arr = [...Array(num - 0).keys()].map(x => x + 1);
  return arr.reduce((memo, val) => memo * val, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
