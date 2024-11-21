/* exported toObject */
function toObject(keyValuePair: [string, unknown]): unknown {
  const object: Record<string, unknown> = {};
  const [key, value] = keyValuePair;

  object[key] = value;

  return object;
}
