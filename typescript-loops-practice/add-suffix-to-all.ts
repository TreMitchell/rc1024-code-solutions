/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const newArray: string[] = [];
  for (const word of words) {
    newArray.push(word + suffix);
  }
  return newArray;
}
