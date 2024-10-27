import React, { useRef, useState } from "react";

function ClockuseRef() {
  //optimal approach - useRef what it does -
  //useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  // The returned object will persist for the full lifetime of the component.
  //The value of .current is updated during the next render when a component's state or props change.
  //The useRef Hook is useful when you need to store a value that doesn't cause a re-render when it changes.

  const timer = useRef();

  //raw approach using variable and state
  const [currentCount, setCurrentCount] = useState(0);
  // what happens here is that for every re-render the timer is initalized to 0. This means that the timer will always start at 0.
  //That's why this approach is incorrect to intialize raw variable
  //   let timer = 0;
  //what we can do instead of this is to initialize the state
  //   const [timer, setTimer] = useState(1);
  //But the problem of using this is re-rendering a extra re-render because the setTimer(value) is called before the interval,
  //the html page is not changed still it re-renders cuz of setTimer(value) been called early.

  function startClock() {
    //raw variable approach
    // timer = setInterval(() => {
    //   // Use a function inside setCurrentCount to ensure that state updates are based on the latest state
    //   // If we don't use a function inside setCurrentCount, and instead use setCurrentCount(currentCount + 1),
    //   // the state update will be based on the initial state (0), not the latest state.
    //   // This is because the state update is not triggered by the re-render of the component, but by the setInterval function.
    //   // To ensure that the state update is based on the latest state, we need to use a function inside setCurrentCount.
    //   setCurrentCount((c) => c + 1);
    // }, 1000);

    //state approch
    // let value = setInterval(() => {
    //   setCurrentCount((c) => c + 1);
    // }, 1000);
    // setTimer(value);

    //useRef approach
    let value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    //This line will not trigger a re-render
    timer.current = value;
  }
  function stopClock() {
    // clearInterval(timer);

    clearInterval(timer.current);
  }

  return (
    <div>
      {currentCount}
      <br></br>
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
}

export default ClockuseRef;
