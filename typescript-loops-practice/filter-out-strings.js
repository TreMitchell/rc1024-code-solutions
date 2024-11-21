'use strict';
/* exported filterOutStrings */
function filterOutStrings(values) {
  return values.filter((value) => typeof value !== 'string');
}
