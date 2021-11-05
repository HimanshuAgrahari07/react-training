# [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

State is similar to props, but it is private and fully controlled by the component.

Whenever a component is rendered to the DOM for the first time. This is called “mounting” in React.
Whenever DOM produced by the component is removed , this is called “unmounts” in React.


### [Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)


#### Lifecycle methods
- componentDidMount() => runs after the component output has been rendered to the DOM
- componentWillUnmount()