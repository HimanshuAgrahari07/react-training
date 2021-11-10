# [lists_and_keys](https://reactjs.org/docs/lists-and-keys.html)

- Always provide keys for list items
- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
- Using index of an array while using map function to generate list of items, we should avoid using index, it can create bugs. More read [here](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)

- Keys Must Only Be Unique Among Siblings, they don’t need to be globally unique.
- Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name:

```JS
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```

In above example, the Post component can read props.id, but not props.key.