const heroes = ['Batman', 'Superman', 'Iron Man', 'Captain America'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

const library = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(0, 3, css, js);
console.log('new library:', library);

const fullName = 'Tré Mitchell';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

const employee = [
  { name: 'Bill', age: 32, position: 'Front Desk' },
  { name: 'Lance', age: 30, position: 'Sales Rep' },
  { name: 'Jeff', age: 26, position: 'Intern' },
];
const employeeKeys = Object.keys(employee[0]);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee[0]);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee[0]);
console.log('employeePairs:', employeePairs);
