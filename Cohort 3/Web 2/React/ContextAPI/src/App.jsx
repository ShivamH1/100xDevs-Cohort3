import { useState } from 'react'
import './App.css'
import Parent from './ContextAPI'

// Rolling up the state, unoptimal re-renders
// As your application grows, you might find that multiple components need access to the same state. Instead of duplicating state 
// in each component, you can lift the state up to the LCA, allowing the common ancestor to manage it

function App() {
  return <div>
    <LightBulb />
    {/* {Context API component below} */}
    <Parent />
  </div>
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true)

  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={() => setBulbOn(!bulbOn)}>Toggle the bulb</button>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App


// import React, { useEffect, useState } from 'react';

// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Incrase count={count} setCount={setCount} />
//       <Decrease count={count} setCount={setCount} />
//       <Value count={count} setCount={setCount} />
//     </>
//   );
// }

// function Decrease({ count, setCount }) {
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Incrase({ count, setCount }) {
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value({ count }) {
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;
