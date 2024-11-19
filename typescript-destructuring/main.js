'use strict';
const book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryId: 3353,
};
const title = book1.title;
const author = book1.author;
const libraryId = book1.libraryId;
console.log(
  `The title of the book is ${title}, the author is ${author}, and the library id is ${libraryId}.`
);
const book2 = {
  title: 'Les Fleurs du Mal',
  author: 'Charles Baudelaire',
  libraryId: 2345,
};
const { title: title2, author: author2, libraryId: id } = book2;
console.log(
  `The title of the book is ${title2}, the author is ${author2}, and the library id is ${id}.`
);
const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryId: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryId: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryId: 3245,
  },
  {
    title: "Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryId: 1233,
  },
];
const [book3, book4, book5] = library;
console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);
const [, , , book6] = library;
console.log('book6:', book6);
