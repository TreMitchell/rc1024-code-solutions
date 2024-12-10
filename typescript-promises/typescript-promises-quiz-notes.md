# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  Create promise, then synchronously put onto the event queue, execution of calling code continues until the end of the functions. When complete, the Event loop runs, the promise task is taken away from the event queue and is executed. After it the Promise task completes, it either catches the `.then()` handler or the `.catch()` handler depending on the condition's truthiness. It will lastly, call the finally handler (in all cases).
- What are the three states a Promise can be in?
  the three states a Promise can be in are Pending, Fulfilled, and Rejected
- How do you handle the fulfillment of a Promise?
  by attaching a `.then()` method to the Promise. This will take a callback function when the promise is resolved.
- How do you handle the rejection of a Promise?
  by attaching a `.catch()` method to the Promise. This will take a callback when the promise is rejected.

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
