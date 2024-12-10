/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  for (const element of array) {
    if (element === 7) {
      return true;
    }
  }
  return false;
}
