/* exported initial */
function initial(array: unknown[]): unknown {
  const lastArray: unknown[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    lastArray.push(array[i]);
  }
  return lastArray;
}
