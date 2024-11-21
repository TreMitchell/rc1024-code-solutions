/* exported compact */
function compact(array: unknown[]): unknown {
  const compactArray: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
