// This is the main App component which is the root component of our React application.

// We import the necessary dependencies: useContext and useState from React, and CountContext from our context file.

import { useContext, useState } from "react";
import { CountContext } from "./context";

// The App component is a functional component that uses the useState hook to create a state variable called 'count' and a function to update it called 'setCount'.
function App() {
  const [count, setCount] = useState(0);

  // The return statement renders the JSX for our App component. It creates a div element and sets its value to the count state variable using the CountContext Provider.

  return (
    <div>
      {/* The CountContext Provider is a component that provides the count state variable to its children components. It wraps the Count component and passes the setCount function as a prop. */}
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </div>
  );
}

// The Count component is another functional component that uses the useContext hook to access the count state variable from the CountContext. It also uses the setCount function as a prop from its parent component.

function Count({ setCount }) {
  console.log("count re-rendered");
  return (
    <div>
      {/* The CountRenderer component is a functional component that uses the useContext hook to access the count state variable from the CountContext. It returns a div element and displays the count state variable. */}
      <CountRenderer />
      {/* The Buttons component is a functional component that uses the useContext hook to access the count state variable from the CountContext. It returns a div element and contains two buttons: Increase and Decrease. Each button calls the setCount function with the appropriate increment/decrement operation. */}
      <Buttons setCount={setCount} />
    </div>
  );
}

// The CountRenderer component is a functional component that uses the useContext hook to access the count state variable from the CountContext. It returns a div element and displays the count state variable.

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>{count}</div>;
}

// The Buttons component is a functional component that uses the useContext hook to access the count state variable from the CountContext. It returns a div element and contains two buttons: Increase and Decrease. Each button calls the setCount function with the appropriate increment/decrement operation.

function Buttons({ setCount }) {
  const count = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

// Finally, we export the App component as the default export of our file.

export default App;

