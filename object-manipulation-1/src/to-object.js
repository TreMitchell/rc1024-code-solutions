'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const object = {};
  const [key, value] = keyValuePair;
  object[key] = value;
  return object;
}
