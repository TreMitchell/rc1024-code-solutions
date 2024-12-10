/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): unknown[] {
  return values.filter((value) => value != null);
}
