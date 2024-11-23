// Import necessary modules from 'recoil'
import {
  RecoilRoot, // Root component for Recoil
  useRecoilState, // Hook to get state from atoms
  useRecoilValue, // Hook to get value from atoms
  useSetRecoilState, // Hook to set state from atoms
} from "recoil";

// Import atoms from '../store/atoms/count'
import { countAtom, evenSelector } from "../store/atoms/count";

// Main App component
function App() {
  // Render the RecoilRoot component
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

// Count component
function Count() {
  // Log a message when the component is rendered
  console.log("count re-rendered");
  return (
    <div>
      {/* Render the CountRenderer component */}
      <CountRenderer />
      {/* Render the Buttons component */}
      <Buttons />
    </div>
  );
}

// CountRenderer component
function CountRenderer() {
  // Get the value of the 'countAtom' using the useRecoilValue hook
  const count = useRecoilValue(countAtom);
  // Render the EvenCountRenderer component
  return (
    <div>
      {/* Display the value of 'countAtom' */}
      <b>{count}</b>
      {/* Render the EvenCountRenderer component */}
      <EvenCountRenderer />
    </div>
  );
}

// EvenCountRenderer component
function EvenCountRenderer() {
  // Get the value of 'evenSelector' using the useRecoilValue hook
  const isEven = useRecoilValue(evenSelector);
  // Check if the value of 'countAtom' is even or odd
  // return (
  //   <div>
  //     {/* Display "Even" if 'countAtom' is even, otherwise display "Odd" */}
  //     {count % 2 == 0 ? "Even" : "Odd"}
  //   </div>
  // );
  // Render the "Even" text if 'evenSelector' is true
  return (
    <div>
      {/* Display "Even" if 'evenSelector' is true, otherwise display nothing */}
      {isEven ? "Even" : null}
    </div>
  );
}

// Buttons component
function Buttons() {
  // Get the set state function of 'countAtom' using the useSetRecoilState hook
  // const [count, setCount] = useRecoilState(countAtom); // Get the state and set state function from 'countAtom'
  // help in not re-rendering buttons when clicked
  const setCount = useSetRecoilState(countAtom); // Get the set state function from 'countAtom'
  // Log a message when the component is rendered
  console.log("button re-rendered");

  return (
    <div>
      {/* Render two buttons */}
      <button
        onClick={() => {
          // Call the setCount function with the incremented value of 'countAtom'
          // setCount(count + 1);
          // Call the setCount function with the incremented value of 'countAtom'
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          // Call the setCount function with the decremented value of 'countAtom'
          // setCount(count - 1);
          // Call the setCount function with the decremented value of 'countAtom'
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

// Export the App component
export default App;

