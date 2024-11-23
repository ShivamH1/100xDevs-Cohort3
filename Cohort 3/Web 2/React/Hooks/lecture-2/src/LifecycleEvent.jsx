import React, { useEffect, useState } from "react";

// In React, lifecycle events (or lifecycle methods) refer to the specific points in a component's life where you can
// execute code in response to changes or actions. These events help you manage tasks such as data fetching, subscriptions, and cleaning up resources.

// ### Class-Based Lifecycle Methods

// In class components, lifecycle methods are divided into three main phases:

// 1. **Mounting**: When the component is being inserted into the DOM.
//     - `constructor()`: Called when the component is initialized.
//     - `componentDidMount()`: Called immediately after the component is mounted. Ideal for data fetching.
// 2. **Updating**: When the component is being re-rendered due to changes in props or state.
//     - `componentDidUpdate(prevProps, prevState)`: Called after the component has updated. Good for operations based on prop/state changes.
// 3. **Unmounting**: When the component is being removed from the DOM.
//     - `componentWillUnmount()`: Ideal for cleanup tasks, like invalidating timers or canceling network requests.

function LifecycleEvent() {
  return (
    <div>
      <h1>Lifecycle Event</h1>
      <MyComponent />
      <MyComponent2 />
    </div>
  );
}

// ### Class-Based Lifecycle Example:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

// ### Functional Component with useEffect Hook
function MyComponent2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count updated");
  }, [count]); // Runs on mount and when count changes

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default LifecycleEvent;
