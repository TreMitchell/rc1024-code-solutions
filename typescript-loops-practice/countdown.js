'use strict';
/* exported countdown */
function countdown(num) {
  const numArray = [];
  let count = num;
  while (count >= 0) {
    numArray.push(count);
    count--;
  }
  return numArray;
}
