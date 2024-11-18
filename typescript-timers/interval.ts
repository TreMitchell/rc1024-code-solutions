let count = 4;
const $countdownDisplay = document.querySelector(".countdown-display");

function countDown(): void {
  if (!$countdownDisplay) throw new Error("$countdownDisplay is null");

  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count.toString();
  } else {
    $countdownDisplay.textContent = "~Earth Below Us~";
    clearInterval(countDownId);
  }
}

const countDownId = setInterval(countDown, 1000);
