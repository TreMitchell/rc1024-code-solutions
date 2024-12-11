# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are functions that allow components to have access to state and other React features.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter, hooks can be called by React components and other custom hooks, and all hooks in a component must always be called at the top level of a component, and in the same order.
- What is the purpose of state in React?
  The purpose of state in React is to create both the state variable and the function that is used to update the value of the state variable.
- Why can't we just maintain state in a local variable?
  Because the header won't be able to react to user interaction dynamically and schedule a re-render for a component.
- What two actions happen when you call a `state setter` function?
  The state setter function when called updates the value of the state and is cached by React.
- When does the local `state variable` get updated with the new value?
  The local state variable gets updated with the new value when the component is re-rendered.

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
