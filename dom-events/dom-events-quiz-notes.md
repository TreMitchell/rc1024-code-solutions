# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to check and make sure our output is correct for debugging
- What is the purpose of events and event handling?
  to respond to user actions; to define what should happen when a user's action occur.
- Are all possible parameters required to use a JavaScript method or function?
  No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  a function passed as an argument to another function
- What object is passed into an event listener callback when the event fires?
  the event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the event.target refers to the DOM element that triggered the event; to check, console.log(event.target); Google / MDN Docs on `event.target`
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  handleClick is passed as a reference to the event listener and is called when the event occurs while handleClick() is called immediately and the return value is passed into the addEventListener.

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
