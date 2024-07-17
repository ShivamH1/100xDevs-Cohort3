// Import the useState hook from the React library
import { useState } from "react";

// Import the CSS file for styling the component
import "./App.css";

// Define the main component of the application
function App() {
  // Use the useState hook to create a state variable called 'count' and a setter function called 'setCount'
  // The initial value of 'count' is 0
  const [count, setCount] = useState(0);

  // Render the component
  return (
    // Wrap the content in a div
    <div>
      {/* Render the Count component, passing the 'count' state variable and the 'setCount' setter function as props */}
      <Count count={count} setCount={setCount} />
    </div>
  );
}

// Define the Count component
function Count({ count, setCount }) {
  // Render the component
  return (
    // Wrap the content in a div
    <div>
      {/* Display the current value of 'count' */}
      {count}
      {/* Render the Buttons component, passing the 'count' state variable and the 'setCount' setter function as props */}
      <Buttons count={count} setCount={setCount} />
    </div>
  );
}

// Define the Buttons component
function Buttons({ count, setCount }) {
  // Render the component
  return (
    // Wrap the content in a div
    <div>
      {/* Render an increment button */}
      <button
        // Attach an onClick event handler to the button
        onClick={() => {
          // Call the 'setCount' function with the current value of 'count' incremented by 1
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      {/* Render a decrement button */}
      <button
        // Attach an onClick event handler to the button
        onClick={() => {
          // Call the 'setCount' function with the current value of 'count' decremented by 1
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

// Export the App component as the default export of the module
export default App;

