const books = [
  { isbn: '123-4567890', title: 'Goosebumps', author: 'R.L. Stine' },
  { isbn: '987-6543210', title: 'Farenheit 451', author: 'Ray Bradbury' },
  { isbn: '532-6784354', title: 'Hunger Games', author: 'Suzanne Collins' },
];
console.log('Array of books:', books);
console.log('typeof books:', typeof books);

const json = JSON.stringify(books);
console.log('JSON of books:', json);
console.log('typeof json:', typeof json);

const studentJson = '{ "number id": 102934, "name": "Tré" }';
console.log('studentJson:', studentJson);
console.log('typeof studentJson:', typeof studentJson);

const studentObject = JSON.parse(studentJson);
console.log('studentObject:', studentObject);
console.log('typeof studentObject:', typeof studentObject);
