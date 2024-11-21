/* exported capitalize */
function capitalize(word: string): string {
  if (word.length === 0) {
    return word;
  }
  const firstChar: string = word[0].toUpperCase();
  const restOfWord: string = word.slice(1).toLowerCase();

  return firstChar + restOfWord;
}
