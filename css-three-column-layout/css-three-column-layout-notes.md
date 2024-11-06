# css-three-column-layout-notes

## Notes

All student notes should be written here.

- When trying to fix the size of an image, we would need a new div with a fixed size for the image so the extra space caused won't cut off once we do the border-radius property. Once completed, add the width property to something < 100% (width: 50%;)
- HTML/CSS Syntax for above note:

```html
<div class="column-third">
  <div class="image-container">
    <img class="class-name" src="image.png" alt="alternate Title" />
  </div>
</div>
```

```css
.image-container {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
}
img {
  width: 50%;
}
```

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
