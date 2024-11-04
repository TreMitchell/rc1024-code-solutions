function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event target:', event.target);
}
const $clickButton = document.querySelector('.click-button');

if (!$clickButton) throw new Error('$clickButton query failed');

$clickButton.addEventListener('click', handleClick);

function handleMouseOver(event: Event): void {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $hoverButton = document.querySelector('.hover-button');

if (!$hoverButton) throw new Error('$hoverButton query failed!');

$hoverButton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $doubleClickButton = document.querySelector('.double-click-button');

if (!$doubleClickButton) throw new Error('$doubleClickButton query failed');

$doubleClickButton.addEventListener('dblclick', handleDoubleClick);
