'use strict';
setTimeout(() => {
  const $message = document.querySelector('.message');
  if ($message) {
    $message.textContent = 'Hello There';
  }
}, 2000);
