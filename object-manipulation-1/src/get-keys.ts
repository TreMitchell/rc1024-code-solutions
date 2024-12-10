/* exported getKeys */
function getKeys(object: Record<string, unknown>): string[] {
  const keys: string[] = [];

  for (const key in object) {
    if (object[key]) {
      keys.push(key);
    }
  }
  return keys;
}
