/* exported countdown */
function countdown(num: number): number[] {
  const numArray: number[] = [];
  let count: number = num;
  while (count >= 0) {
    numArray.push(count);
    count--;
  }
  return numArray;
}
