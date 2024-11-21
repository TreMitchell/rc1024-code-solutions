'use strict';
/* exported initial */
function initial(array) {
  const lastArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    lastArray.push(array[i]);
  }
  return lastArray;
}
