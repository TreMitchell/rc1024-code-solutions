# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the target of an event when a user action occurs.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  because of event delegation, the dom events will bubble up from the target element
- What DOM element property tells you what type of element it is?
  .tagName
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a CSS Selector and it returns null
- How can you remove an element from the DOM?
  .remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  event delegation; add an event listener to an ancestor of a new element rather than a clickable item itself.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
