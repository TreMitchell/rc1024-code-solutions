'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(6);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);
function greet(name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}
const greetResult = greet('Zack');
console.log('greetResult:', greetResult);
const getArea = (width, height) => width * height;
const getAreaResult = getArea(12, 15);
console.log('getAreaResult:', getAreaResult);
const getFirstName = (person) => person.firstName;
const getFirstNameResult = getFirstName({
  firstName: 'Michael',
  lastName: 'Power',
});
console.log('getFirstNameResult:', getFirstNameResult);
const getLastElement = (array) => array[array.length - 1];
const getLastElementResult = getLastElement(['car', 'truck', 'house', 'bed']);
console.log('getLastElementResult:', getLastElementResult);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 10);
console.log('callOtherFunctionResult:', callOtherFunctionResult);
