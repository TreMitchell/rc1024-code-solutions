let count = 4;
const countdownInterval = setInterval(() => {
  const $countdown = document.querySelector('.countdown-display');
  if (!$countdown) throw new Error('countdown query failed!');
  if (count > 0) {
    $countdown.textContent = count.toString();
    count--;
  } else {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownInterval);
  }
}, 1000);
