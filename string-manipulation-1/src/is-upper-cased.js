'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const upperCase = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}
