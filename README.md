# Rendering Elements

An element describes what you want to see on the screen
Unlike browser DOM elements, React elements are plain objects, and are cheap to create.
React DOM takes care of updating the DOM to match the React elements.

### Rendering an Element into the DOM
If an app is build completely based on the React, it will have single root element usually
```JS
<div id="root"></div>
```

If integrating React into an existing app, you may have as many isolated root DOM nodes as you like
