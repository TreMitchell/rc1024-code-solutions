/* exported getSumOfSquares */
function getSumOfSquares(x: number, y: number): number {
  return x ** 2 + y ** 2;
  /* this can also work:
    const xSquared: number = x ** 2 or x * x;
    const ySquared: number = y ** 2 or y * y;
    const sumOfSqaures: number = xSquared + ySquared;
    return sumOfSquares;
  */
}
