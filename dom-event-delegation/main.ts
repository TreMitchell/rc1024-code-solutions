const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('$taskList query failed');

$taskList.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('$eventTarget:', $eventTarget);
  console.log('tagName:', $eventTarget.tagName);

  if ($eventTarget.tagName === 'BUTTON') {
    const $taskListItem = $eventTarget.closest(
      '.task-list-item'
    ) as HTMLElement;
    console.log('$taskListItem:', $taskListItem);
    $taskListItem.remove();
  }
});
