'use strict';

// Write a function that checks, if an array contains a number
// that has 5 as divisor. If it has it should return true otherwise false.

function hasDivisableBy5(array) {
  var count = 0;
  array.forEach(function(number) {
    if (number % 5 === 0) {
      count++;
    }
  });
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}


console.log(hasDivisableBy5([1, 8, 3, 6, 2])); // false
console.log(hasDivisableBy5([11, 7, 15, 9])); // true
