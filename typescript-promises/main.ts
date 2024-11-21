import { takeAChance } from './take-a-chance.js';

takeAChance('Tre')
  .then((message) => console.log(`${message}`))
  .catch((error) => console.error(`${error.message}`));
