# Handling Events
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

Ex: In HTML
```HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

While in react

```HTML
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

**Note:** We can not return **false** to prevent default behavior in React
Instead, we need to call **preventDefault** method explicitly

