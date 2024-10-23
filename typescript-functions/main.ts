function convertMinutesToSeconds(minutes: number): number {
  const seconds: number = minutes * 60;
  return seconds;
}
const convertMinutesToSecondsResult: number = convertMinutesToSeconds(6);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name: string): string {
  const greeting: string = 'Hello ' + name + '!';
  return greeting;
}
const greetResult: string = greet('Zack');
console.log('greetResult:', greetResult);

const getArea = (width: number, height: number): number => width * height;
const getAreaResult: number = getArea(12, 15);
console.log('getAreaResult:', getAreaResult);

interface Person {
  firstName: string;
  lastName?: string;
}
const getFirstName = (person: Person): string => person.firstName;
const getFirstNameResult: string = getFirstName({
  firstName: 'Michael',
  lastName: 'Power',
});
console.log('getFirstNameResult:', getFirstNameResult);

const getLastElement = (array: string[]): string => array[array.length - 1];
const getLastElementResult: string = getLastElement([
  'car',
  'truck',
  'house',
  'bed',
]);
console.log('getLastElementResult:', getLastElementResult);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}
const callOtherFunctionResult: Function = callOtherFunction(
  convertMinutesToSeconds,
  10
);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
