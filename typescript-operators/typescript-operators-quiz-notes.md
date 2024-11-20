# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  Logical and is the operator that returns true if both are truthy and false if at least one is falsy. Logical or is true if at least one of the operands are truthy or false if they are both falsy; combining the variable and conditional together.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  the behavior of logical operators that stop evaluating expressions as soon as the result is determined. For &&, the first condition being false makes the whole expression false while its the opposite for ||.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  the operator that handles variables that might be null or undefined. this returns a falsy value while || returns a boolean.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  an operator that returns one of two expressions based off the condition. This differs from if/else because it only picks up one line of code while if/else picks up multiple lines of code. It also only picks up truthy/falsy.
- What is the `?.` (optional chaining) operator? When would you use it?
  an operator that accesses properties or calls a function. You use it when attempting to call a method that doesn't exist.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  an iterable that can be expanded in places where zero or more arguments/elements are expected. With objects, you use it by spreading copies from one object to another. With arrays, you can copy or merge arrays with spread syntax.
- What data types can be spread into an array? Into an object?
  Iterables could be spread into an array while anything can be spread into an object.
- How does spread syntax differ from rest syntax?
  spread syntax expands an array into its elements while rest syntax collects elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
