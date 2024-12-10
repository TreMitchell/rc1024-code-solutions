'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}
