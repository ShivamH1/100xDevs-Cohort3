import React, { useEffect, useState } from "react";

export default function Seven() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  return <div>Time Left : {time} sec</div>;
}

// The useEffect hook in React is used to perform side effects in function components. It allows you to run additional code after every render, including the initial render.

// In the provided code snippet, useEffect is used to manage the countdown timer. Here's why it's necessary and where it should be used:

// 1.
// Side Effects: The timer functionality involves updating the state (time) and setting up a timer (setTimeout). These are considered side effects because they affect something outside the function's scope (the component's state and the browser's timer).
// 2.
// Component Lifecycle: useEffect is called after every render, including the initial render. This ensures that the timer is set up correctly when the component mounts and updated correctly when the component updates.
// 3.
// Cleaning Up: The timer is cleared using clearTimeout when the component unmounts. This is done in the cleanup function returned by useEffect. This ensures that no memory leaks occur and that the timer is properly stopped when the component is no longer needed.
// 4.
// Dependency Array: The dependency array [time] is provided to useEffect. This means that the effect will only run when the time state changes. This prevents unnecessary re-runs of the effect when other state variables change.
