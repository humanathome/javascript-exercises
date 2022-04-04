const sumAll = function(start, end) {
  
  if ((typeof start !== 'number') || (typeof end !== 'number')) {
    return "ERROR";
  } else if (start < 0 || end < 0) {
    return "ERROR";
  } else if (start > end) {
    const copyOfStart = start;
    start = end;
    end = copyOfStart;
  }
  
  let sum = 0;
  while (start <= end) {
    sum += start
    start++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
