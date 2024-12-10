/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  if (count >= array.length) {
    return array.slice();
  }
  return array.slice(array.length - count);
}
