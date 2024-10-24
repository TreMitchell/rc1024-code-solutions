'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
// arrow function: const isUnderFive = (number: number): boolean => number < 5;
function isUnderFive(number) {
  // also works: return number < 5;
  const lessThanFive = number < 5;
  return lessThanFive;
}
// arrow function: const isEven = (number: number): boolean => number % 2 === 0;
function isEven(number) {
  // also works: return number % 2 === 0;
  const divisibleByTwo = number % 2 === 0;
  return divisibleByTwo;
}
// arrow function: const startsWithJ = (string: string): boolean => string[0] === 'J';
function startsWithJ(string) {
  // also works: return string[0] === 'J';
  const capJ = string[0] === 'J';
  return capJ;
}
// arrow function: const isOldEnoughToDrink = (person: Person): boolean => person.age >= 21;
function isOldEnoughToDrink(person) {
  // also works: return person.age >= 21;
  const legalDrinkAge = person.age >= 21;
  if (legalDrinkAge) {
    return true;
  } else {
    return false;
  }
}
// arrow function: const isOldEnoughToDrinkAndDrive = (person: Person): boolean => false;
function isOldEnoughToDrinkAndDrive(person) {
  const drinkAndDrive = person.age >= 21;
  if (drinkAndDrive) {
    return false;
  }
  return drinkAndDrive;
}
function categorizeAcidity(pH) {
  const pHLevel = pH;
  if (pHLevel === 7) {
    return 'neutral';
  } else if (pHLevel >= 0 && pHLevel < 7) {
    return 'acid';
  } else if (pHLevel > 7 && pHLevel < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody';
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'ACTION MOVIE';
    case 'comedy':
      return 'COMEDY MOVIE';
    case 'horror':
      return 'HORROR MOVIE';
    case 'drama':
      return 'DRAMA MOVIE';
    case 'musical':
      return 'MUSICAL MOVIE';
    case 'sci-fi':
      return 'SCI-FI MOVIE';
    default:
      return 'invalid movie genre';
  }
}
