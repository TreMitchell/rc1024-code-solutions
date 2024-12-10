/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  if (count >= array.length) {
    return [];
  }
  return array.slice(0, array.length - count);
}
