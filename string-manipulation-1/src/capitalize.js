'use strict';
/* exported capitalize */
function capitalize(word) {
  if (word.length === 0) {
    return word;
  }
  const firstChar = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();
  return firstChar + restOfWord;
}
