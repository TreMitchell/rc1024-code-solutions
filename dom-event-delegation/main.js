'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList query failed');
$taskList.addEventListener('click', (event) => {
  const eventTarget = event?.target;
  console.log('eventTarget:', eventTarget);
  console.log('tagName:', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    const listItem = eventTarget.closest('.task-list-item');
    console.log('listItem:', listItem);
    listItem.remove();
  }
});
