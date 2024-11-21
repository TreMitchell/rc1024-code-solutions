'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  const temp = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = temp;
  return chars.join('');
}
