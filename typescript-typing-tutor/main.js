'use strict';
let currentIndex = 0;
const $phrase = document.querySelectorAll('span');
let $currentCharacter = $phrase[currentIndex];
if (!$phrase) throw new Error('$phrase query failed!');
document.addEventListener('keydown', (event) => {
  if (currentIndex === $phrase.length) {
    return;
  }
  if (event.key === $currentCharacter.textContent) {
    $currentCharacter.className = 'correct';
    console.log('match');
    currentIndex++;
    $currentCharacter = $phrase[currentIndex];
    $currentCharacter.className = 'phrase';
  } else {
    console.log('wrong');
    $currentCharacter.className = 'current incorrect';
  }
});
