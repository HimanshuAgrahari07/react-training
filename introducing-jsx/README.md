### JSX example
```JS
const element = <h1>Hello, world!</h1>
```

### Embedding Expressions in JSX
We can use any custom variable inside JSX to generate it dynamically.
Ex:

```JSX
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

Or maybe call a function inside JSX
```JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const formattedNameElement = <h1>Hello, {formatName(user)}</h1>;
```

### JSX is an Expression Too
We can return an expression generated dynamically JSX from a function

```JS
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
We can add attributes to this dynamically generated JSX
```JS
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;
```

#### Note: JSX uses camelCase property naming convention instead of HTML attribute names

For example, class becomes className in JSX, and tabindex becomes tabIndex.

