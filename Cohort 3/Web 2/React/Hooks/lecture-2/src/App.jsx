import { useEffect, useState } from "react";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* <Counter /> */}
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </Modal>
      <Collapsible title="Section 1">
        <p>This is the content of section 1.</p>
      </Collapsible>
      <Collapsible title="Section 2">
        <p>This is the content of section 2.</p>
      </Collapsible>
    </div>
  );
}
// When rendering lists, each item should have a unique key prop for React to track changes efficiently.
// The key prop is a string or number that uniquely identifies the item in the list.

//children passing and wrapping
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  );
};

//children passing and wrapping
const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? "-" : "+"}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

// function Counter() {
//   const [count, setCount] = useState(0);

//   //hooking into lifecycle events
//   //In react, when a component is added to the DOM, it is called mounting
//   //When a component is removed from the DOM, it is called unmounting
//   //A lifecycle event is an event that occurs when a component is mounted or unmounted
//   //A lifecycle event can be used to perform actions when a component is added or removed from the DOM

//   console.log("Inside Counter");
//   //In react everytime the state is changed, the component re-renders
//   // setInterval(() => {
//   //   setCount(count + 1);
//   // },1000);

//   //what we can do here is use useEffect to avoid the re-rendering problem
//   useEffect(() => {
//     setInterval(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//     console.log("Inside useEffect - mounted");
//   },[]);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);

//   // In React, components are the building blocks of the user interface. They allow you to split the UI into independent,
//   // reusable pieces that can be thought of as custom, self-contained HTML elements.

//   // useState is a Hook that lets you add state to functional components. It returns an array with the current state and a function to update it.

//   //   Before we understand useEffect , let’s understand what are Side effects.
//   //   ## Side effects

//   // Side effects are operations that interact with the outside world or have effects beyond the component's rendering. Examples include:

//   // - **Fetching data** from an API.
//   // - **Modifying the DOM** manually.
//   // - **Subscribing to events** (like WebSocket connections, timers, or browser events).
//   // - **Starting a clock**

//   // These are called side effects because they don't just compute output based on the input—they affect things outside the component itself.

//   // ---

//   // ### Problem in running side effects in React components

//   // If you try to introduce side effects directly in the rendering logic of a component (in the return statement or before it), React would run that code every time the component renders. This can lead to:

//   // - **Unnecessary or duplicated effects** (like multiple API calls).
//   // - **Inconsistent behavior** (side effects might happen before rendering finishes).
//   // - **Performance issues** (side effects could block rendering or cause excessive re-rendering).

//   useEffect(() => {
//     // Code here is the "effect" — this is where side effects happen
//     fetchData();

//     // Optionally, return a cleanup function that runs when the component unmounts.
//     return () => {
//       // Cleanup code, e.g., unsubscribing from an event or clearing timers.
//     };
//   }, [/* dependencies */]);
//   return (
//     <>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => setCount((count) => count - 1)}>
//           count is {count}
//         </button>
//         <button onClick={() => setCount(0)}>Reset</button>
//       </div>
//     </>
//   );
// }

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//       //when mount
//       const interval = setInterval(() => {
//           setSeconds(prev => prev + 1);
//       }, 1000);

//       return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return <div>{seconds} seconds elapsed</div>;
// };

// export default App;

// // You can render different components or elements based on certain conditions.
// const ToggleMessage = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//       <div>
//           <button onClick={() => setIsVisible(!isVisible)}>
//               Toggle Message
//           </button>
//           {isVisible && <p>This message is conditionally rendered!</p>}
//       </div>
//   );
// };

export default App;
