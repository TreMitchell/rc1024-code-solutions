'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const lowerCase = word.toLowerCase();
  if (word === lowerCase) {
    return true;
  } else {
    return false;
  }
}
