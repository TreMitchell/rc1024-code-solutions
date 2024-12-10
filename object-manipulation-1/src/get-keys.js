'use strict';
/* exported getKeys */
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    if (object[key]) {
      keys.push(key);
    }
  }
  return keys;
}
