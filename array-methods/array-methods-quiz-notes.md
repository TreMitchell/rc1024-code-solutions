# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    - Array.forEach executes a provided function once for each array element.
  - What should the callback function do?
    - The callback function should execute on each element, taking whatever arguments are being called.
  - What is `Array.forEach` useful for?
    - Array.forEach is useful for executing side effects at the end of a chain.

- `Array.map`:

  - What does `Array.map` do?
    - Array.map creates a new array populated with the results of calling a provided function on every element in the calling array.
  - What should the callback function return?
    - The callback function should return a new array with each element being the result of the callback function.
  - What is `Array.map` useful for?
    - Array.map is useful for converting data formats, such as converting an array of numbers to strings, or appending information.

- `Array.find`:

  - What does `Array.find` do?
    - Array.find returns the first element in the provided array that satisfies the provided testing condition.
  - What should the callback function return?
    - The callback function should return the value of the first element in the array that satisfies the provided testing function; otherwise, undefined.
  - What is `Array.find` useful for?
    - Array.find is useful for finding a single element based on its properties or values.

- `Array.filter`:
  - What does `Array.filter` do?
    - Array.filter creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
  - What should the callback function return?
    - The callback function returns a new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
  - What is `Array.filter` useful for?
    - Array.filter is useful for removing unwanted or invalid data from the array.

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
