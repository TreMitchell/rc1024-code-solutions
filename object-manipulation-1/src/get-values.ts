/* exported getValues */
function getValues(object: string[]): string[] {
  const values: string[] = [];
  for (const key in object) {
    if (object[key]) {
      values.push(object[key]);
    }
  }
  return values;
}
