/* exported numVowels */
function numVowels(string: string): number {
  const vowels = 'aeiouAEIOU';
  return Array.from(string).filter((char) => vowels.includes(char)).length;
}
