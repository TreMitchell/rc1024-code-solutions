'use strict';
/* exported numVowels */
function numVowels(string) {
  const vowels = 'aeiouAEIOU';
  return Array.from(string).filter((char) => vowels.includes(char)).length;
}
