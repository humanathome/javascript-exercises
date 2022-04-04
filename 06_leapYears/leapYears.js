const leapYears = function(year) {
  // evaluates to true if year is evenly divisible by 4, 100 and 400, otherwise false
  const divBy4 = year % 4 === 0;
  const divBy100 = year % 100 === 0;
  const divBy400 = year % 400 === 0;
  
  // first solution using ternary operator
  return divBy100 ? divBy400 : divBy4;
  
  // second solution using if...else statement
  // if (divBy4 && !divBy100) {
  //   return true;
  // } else {
  //   return divBy4 && divBy100 && divBy400;
  // }
  
  // third solution using switch statement
  // switch (true) {
  //   case divBy4 && divBy100:
  //     return divBy400;
  //   case divBy4 && !divBy100:
  //     return true;
  //   default:
  //     return false;
  // }
};

// Do not edit below this line
module.exports = leapYears;
