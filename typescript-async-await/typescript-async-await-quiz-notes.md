# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  `async` is used for returning the Promise if it returns a value. The Promise is resolved with that value. `await` is used for pausing the execution of a function until the Promise is either fulfilled or rejected.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  they differ by their readability.Async/await make asynchronous code look more like synchronous code with eliminates the use of `Promise.then` and `Promise.catch`.
- When do you use `async`?
  - You can use `async` when you want the function to return a promise.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  - You use await when an asynchronous operation returns a promise. You don't use await when synchronous operations don't need to wait and returns a value immediately. If you try to await a synchronous function, it won’t cause an error, but it’s unnecessary and can disrupt the flow of your code.
- How do you handle errors with `await`?
  - You handle errors with `await` with using try-catch blocks.
- What do `try`, `catch` and `throw` do? When do you use them?
  - `Try` allows you to run code that might throw an error. `Catch` handles any errors inside the code and provide a fallback to prevent the program from crashing. `Throw`signals an error condition when your function encounters anything unexpected, like invalid outputs or a critical failure in the process.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  - If the promise is rejected, the await expression throws the rejected value and the caller function won't appear in the stack trace.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  - I prefer the async/await style of asynchronous programming because its easy to understand while with callbacks and `promise.then` makes me have to think about how would anything I want need to line up perfectly with each other, which would potentially require making more files.

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
