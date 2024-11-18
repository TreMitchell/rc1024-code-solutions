'use strict';
let isOn = false;
const $ceiling = document.querySelector('.ceiling');
const $bulb = document.querySelector('.bulb');
if (!$ceiling) throw new Error('$lightbulb query failed');
if (!$bulb) throw new Error('$bulb query failed');
$bulb.addEventListener('click', () => {
  isOn = !isOn;
  if (isOn) {
    $ceiling.className = 'ceiling lit';
    $bulb.className = 'bulb is-on';
  } else {
    $ceiling.className = 'ceiling';
    $bulb.className = 'bulb';
  }
});
