/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newChunk: unknown[] = [];
  for (let i = 0; i < array.length; i += size) {
    newChunk.push(array.slice(i, i + size));
  }
  return newChunk;
}
