'use strict';
/* exported dropRight */
function dropRight(array, count) {
  if (count >= array.length) {
    return [];
  }
  return array.slice(0, array.length - count);
}
