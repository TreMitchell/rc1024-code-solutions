'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const array = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  }
  return array;
}
