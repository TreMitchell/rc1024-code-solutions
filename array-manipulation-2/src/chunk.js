'use strict';
/* exported chunk */
function chunk(array, size) {
  const newChunk = [];
  for (let i = 0; i < array.length; i += size) {
    newChunk.push(array.slice(i, i + size));
  }
  return newChunk;
}
