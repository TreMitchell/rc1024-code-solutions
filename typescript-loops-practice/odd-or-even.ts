/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  const array: string[] = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  }
  return array;
}
