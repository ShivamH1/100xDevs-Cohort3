import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  //hooking into lifecycle events
  //In react, when a component is added to the DOM, it is called mounting
  //When a component is removed from the DOM, it is called unmounting
  //A lifecycle event is an event that occurs when a component is mounted or unmounted
  //A lifecycle event can be used to perform actions when a component is added or removed from the DOM

  console.log("Inside Counter");
  //In react everytime the state is changed, the component re-renders
  // setInterval(() => {
  //   setCount(count + 1);
  // },1000);

  //what we can do here is use useEffect to avoid the re-rendering problem
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log("Inside useEffect - mounted");
  },[]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
