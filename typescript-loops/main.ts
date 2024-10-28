/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  let currentNumber: number = 1;
  const numbers: number[] = [];
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  let currentNumber: number = 2;
  const evenNumbers: number[] = [];
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function sumArray(numbers: number[]): number {
  let sum: number = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

/* For-in loop example
const obj1 = {
  name: 'Luke',
  age: 25,
  occupation: 'Fighter Pilot',
  callSign: 'red 5',
};

const array = [0, 1, 2, 3, 4, 5];

for (const prop in array) {
  console.log('prop', prop);
}
*/

function reverseString(str: string): string {
  let reversed: string = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
