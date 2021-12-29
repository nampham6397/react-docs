![Life-Cycle](/img/life-cycle.webp "Life-Cycle")

## Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount() : is invoked immediately after a component is mounted

## Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate() : is invoked immediately after updating occurs. This method is not called for the initial render.

## Unmounting
This method is called when a component is being removed from the DOM:

- componentWillUnmount() : is invoked immediately before a component is unmounted and destroyed
## Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- static getDerivedStateFromError()
- componentDidCatch()
