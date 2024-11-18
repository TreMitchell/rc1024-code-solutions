const $heading = document.querySelector(".message");

function helloThere(): void {
  if (!$heading) throw new Error("$heading is null");

  $heading.textContent = "Hello There";
}
const timeoutId = setTimeout(helloThere, 2000);

