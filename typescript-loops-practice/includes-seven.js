'use strict';
/* exported includesSeven */
function includesSeven(array) {
  for (const element of array) {
    if (element === 7) {
      return true;
    }
  }
  return false;
}
