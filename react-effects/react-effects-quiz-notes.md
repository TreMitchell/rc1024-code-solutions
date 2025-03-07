# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When its first created and inserted the DOM.
- What is a React Effect?
  a way to perform side effects in functional components
- When should you use an Effect and when should you not use an Effect?
  you should use an effect when you interact with an api, you shouldn't use an effect when transforming props into state during their intial render.
- When do Effects run?
  effects run after every render.
- What function is used to declare an Effect?
  the useEffect() function
- What are Effect dependencies and how do you declare them?
  effect dependencies are values that causes the effect to rerun when they are changed. You declare them by passing an array as the second argument.
- Why would you want to clean up from an Effect?
  To prevent memory leaks
- How do you clean up from an Effect?
  you clean up from an effect by returning a function from the effect's callback.
- When does the cleanup function run?
  it runs before the effect re-run or when the components unmounts.

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
