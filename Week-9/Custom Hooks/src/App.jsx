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
import axios from 'axios'

function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const value = setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
    }, n * 1000)
  
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })

    return () => {
      clearInterval(value)
    }
  }, [n])

  return {todos, loading};
}

function App() {
  const {todos, loading} = useTodos(10);

  if (loading) {
    return <div> loading... </div>
  }

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}
//Does same as above using swr library 
// import useSWR from 'swr'

// // const fetcher = (url) => fetch(url).then((res) => res.json());
// const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }

export default App;
