import React, { useEffect, useState } from "react";
import "./App.css";

// function App() {
//   // const [render, setRender] = useState(true);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setRender(false);
//   //   }, 10000);
//   // }, []);
//   // useEffect(() => {
//   //   setInterval(() => {
//   //     setRender((render) => !render);
//   //   }, 5000);
//   // }, []);

//   return (
//     <>
//       {/* {render ? <MyComponent /> : <div></div>} */}
//     </>
//   );
// }

//functional component
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     setCount(count - 1);
//   }

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//       <button onClick={decrementCount}>Decrement</button>
//     </div>
//   );
// }

//class based component
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   decrementCount = () => {
//     this.setState({count : this.state.count - 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//         <button onClick={this.decrementCount}>Decrement</button>
//       </div>
//     );
//   }
// }

//LifeCycle Event
//Functional component
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     //first step in life cycle
//     console.log("Component mounted");

//     //this will run when either state changes or dependency array changes then this will run 2 step in life cycle
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("Component unmounted");
//     };
//   }, []);

//   // Render UI
//   return <div>From Inside my component</div>;
// }

//Lifecycle Event
// //class based component
// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("Component mounted");
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("Component unmounted");
//   }

//   render() {
//     // Render UI
//     return <div>From Inside my component</div>;
//   }
// }

//Custom Hooks
//useTodo
// import axios from 'axios'

// function useTodos(n) {
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//         .then(res => {
//           setTodos(res.data.todos);
//           setLoading(false);
//         })
//     }, n * 1000)

//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       })

//     return () => {
//       clearInterval(value)
//     }
//   }, [n])

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos(10);

//   if (loading) {
//     return <div> loading... </div>
//   }

//   return (
//     <>
//       {todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
// }
//Does same as above using swr library
// import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then((res) => res.json());
// This function is used to fetch data from an API endpoint
// It accepts a URL as an argument and returns the data as a JSON object
// const fetcher = async function(url) {
//   // Fetch the data from the API endpoint using the URL provided
//   const data = await fetch(url);
//   // Parse the fetched data as a JSON object
//   const json = await data.json();
//   // Return the parsed JSON object
//   return json;
// };

// // This component displays the number of todos available in the API endpoint
// function Profile() {
//   // Use the useSWR hook to fetch data from the API endpoint
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)

//   // If there is an error while fetching the data, display a message
//   if (error) return <div>failed to load</div>
//   // If the data is still loading, display a loading message
//   if (isLoading) return <div>loading...</div>
//   // If the data is successfully fetched, display the number of todos
//   return <div>hello, you have {data.todos.length} todos!</div>
// }

// This custom hook checks whether the user's device is connected to the internet
function useIsOnline() {
  // Use the useState hook to create a state variable to store the online status
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  // Use the useEffect hook to add event listeners for the online and offline events
  useEffect(() => {
    // Add an event listener for the online event and update the online status when the event is triggered
    window.addEventListener("online", () => setIsOnline(true));
    // Add an event listener for the offline event and update the online status when the event is triggered
    window.addEventListener("offline", () => setIsOnline(false));

    // Clean up the event listeners when the component is unmounted
    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, []);

  // Return the online status
  return isOnline;
}

// This custom hook tracks the mouse pointer position
const useMousePointer = () => {
  // Use the useState hook to create a state variable to store the mouse pointer position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Define a function to handle the mouse move event and update the mouse pointer position
  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  // Use the useEffect hook to add an event listener for the mouse move event
  useEffect(() => {
    // Add an event listener for the mouse move event and update the mouse pointer position when the event is triggered
    window.addEventListener("mousemove", handleMouseMove);
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Return the mouse pointer position
  return position;
};

// This custom hook sets up an interval that triggers a callback function at a specified interval
const useInterval = (callback, delay) => {
  // Use the useEffect hook to set up the interval
  useEffect(() => {
    // Set up the interval using the setInterval function and the callback function and specified delay
    const intervalId = setInterval(callback, delay);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [callback, delay]);
};

// This custom hook debounces a value by delaying its update until a specified delay has passed without any new updates
const useDebounce = (value, delay) => {
  // Use the useState hook to create a state variable to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Use the useEffect hook to set up the debounce timer
  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  // Return the debounced value
  return debouncedValue;
};

// This is the main component that uses the custom hooks and displays the timer and input field
function App() {
  // Use the useState hook to create state variables to store the count and input value
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  // Use the useDebounce hook to debounce the input value
  const debouncedValue = useDebounce(inputValue, 500);

  // Use the useInterval hook to set up an interval that triggers the count increment every second
  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  // Render the timer and input field
  return (
    <>
      {/* Display the current count */}
      {/* <div>Timer is at {count}</div> */}
      {/* Display an input field that updates the input value state */}
      debounce value is {debouncedValue}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </>
  );
}

export default App;
