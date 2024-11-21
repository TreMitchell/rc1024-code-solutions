/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const lowerCase: string = word.toLowerCase();
  if (word === lowerCase) {
    return true;
  } else {
    return false;
  }
}
