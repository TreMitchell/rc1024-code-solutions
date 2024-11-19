'use strict';
const $images = document.querySelectorAll('.pokemon-image');
const $progressDots = document.querySelectorAll(
  '.carousel-progress > .fa-circle'
);
if (!$images) throw new Error('image query failed!');
if (!$progressDots) throw new Error('progressDots query failed!');
let timerID;
let currentIndex = 0;
function showIndex(targetIndex) {
  for (let i = 0; i < $images.length; i++) {
    if (i === targetIndex) {
      $images[i].className = 'pokemon-image';
      $progressDots[i].className = 'fa solid';
    } else {
      $images[i].className = 'pokemon-image';
      $progressDots[i].className = 'fa regular';
    }
  }
  currentIndex = targetIndex;
  autoPlay();
}
function autoPlay() {
  clearTimeout(timerID);
  timerID = setTimeout(function () {
    showIndex(getNextIndex());
  }, 3000);
}
function getNextIndex() {
  if (currentIndex === $images.length - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}
function getPreviousIndex() {
  if (currentIndex === 0) {
    return $images.length - 1;
  } else {
    return currentIndex - 1;
  }
}
function handleClick(event) {
  const $eventTarget = event.target;
  if ($eventTarget.matches('.previous')) {
    showIndex(getPreviousIndex());
    return;
  }
  if ($eventTarget.matches('.next')) {
    showIndex(getNextIndex());
    return;
  }
  if (!$eventTarget.matches('.fa-circle')) {
    return;
  }
  for (let i = 0; i < $progressDots.length; i++) {
    if ($eventTarget === $progressDots[i]) {
      showIndex(i);
      break;
    }
  }
}
const $carouselContainer = document.querySelector('.carousel-container');
if (!$carouselContainer) throw new Error('carouselContainer query failed!');
$carouselContainer.addEventListener('click', handleClick);
autoPlay();
