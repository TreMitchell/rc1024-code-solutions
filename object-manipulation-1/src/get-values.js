'use strict';
/* exported getValues */
function getValues(object) {
  const values = [];
  for (const key in object) {
    if (object[key]) {
      values.push(object[key]);
    }
  }
  return values;
}
