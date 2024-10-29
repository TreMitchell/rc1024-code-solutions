'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (const word of words) {
    newArray.push(word + suffix);
  }
  return newArray;
}
