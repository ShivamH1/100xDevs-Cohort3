import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // In React, components are the building blocks of the user interface. They allow you to split the UI into independent,
  // reusable pieces that can be thought of as custom, self-contained HTML elements.

  // useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.

  //   Before we understand useEffect , let’s understand what are Side effects.
  //   ## Side effects

  // Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:

  // - **Fetching data** from an API.
  // - **Modifying the DOM** manually.
  // - **Subscribing to events** (like WebSocket connections, timers, or browser events).
  // - **Starting a clock**

  // These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.

  // ---

  // ### Problem in running side effects in React components

  // If you try to introduce side effects directly in the rendering logic of a component (in the return statement or before it), React would run that code every time the component renders. This can lead to:

  // - **Unnecessary or duplicated effects** (like multiple API calls).
  // - **Inconsistent behavior** (side effects might happen before rendering finishes).
  // - **Performance issues** (side effects could block rendering or cause excessive re-rendering).

  useEffect(() => {
    // Code here is the "effect" — this is where side effects happen
    fetchData();
  
    // Optionally, return a cleanup function that runs when the component unmounts.
    return () => {
      // Cleanup code, e.g., unsubscribing from an event or clearing timers.
    };
  }, [/* dependencies */]);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
      //when mount
      const interval = setInterval(() => {
          setSeconds(prev => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <div>{seconds} seconds elapsed</div>;
};

export default App;

// You can render different components or elements based on certain conditions.
const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
      <div>
          <button onClick={() => setIsVisible(!isVisible)}>
              Toggle Message
          </button>
          {isVisible && <p>This message is conditionally rendered!</p>}
      </div>
  );
};
