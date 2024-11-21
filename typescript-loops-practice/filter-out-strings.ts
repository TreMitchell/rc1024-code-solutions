/* exported filterOutStrings */
function filterOutStrings(values: unknown[]): unknown[] {
  return values.filter((value) => typeof value !== 'string');
}
