/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const upperCase: string = word.toUpperCase();
  if (word === upperCase) {
    return true;
  } else {
    return false;
  }
}
