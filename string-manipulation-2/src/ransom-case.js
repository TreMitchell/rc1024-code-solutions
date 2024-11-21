'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let oddUpperCased = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      oddUpperCased += string[i].toLowerCase();
    } else {
      oddUpperCased += string[i].toUpperCase();
    }
  }
  return oddUpperCased;
}
