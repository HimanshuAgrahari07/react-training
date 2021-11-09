# [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

State is similar to props, but it is private and fully controlled by the component.

Whenever a component is rendered to the DOM for the first time. This is called “mounting” in React.
Whenever DOM produced by the component is removed , this is called “unmounts” in React.


### [Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class)


#### Lifecycle methods
- componentDidMount() => runs after the component output has been rendered to the DOM
- componentWillUnmount()

##### 1) Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- [componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)




##### 2) Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- [componentDidUpdate()](https://reactjs.org/docs/react-component.html#componentdidmount) =>  invoked immediately after updating occurs. This method is not called for the initial render.


##### 3) Unmounting
This method is called when a component is being removed from the DOM:

- componentWillUnmount()

##### 4) Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- static getDerivedStateFromError()
- componentDidCatch()
