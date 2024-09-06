//useReducer
import React, { useReducer } from 'react'

function App() {

  // This is a reducer function. It takes in two parameters: the current state 
  // and an action object. It returns a new state object based on the action type.
  // The reducer function is passed to the useReducer hook.
  const reducer = (state, action) => {
    // Log the action and current state to the console for debugging purposes.
    console.log(action, state);

    // Check if the action type is 'incr'. If so, increment the count in the 
    // state object by 1 and return the new state object.
    if (action.type === 'incr') {
      return {count : state.count + 1};
    }
    // Check if the action type is 'decr'. If so, decrement the count in the 
    // state object by 1 and return the new state object.
    else if (action.type === 'decr') {
      return {count : state.count - 1};
    }
    // If the action type is neither 'incr' nor 'decr', throw an error.
    else {
      throw new Error('Invalid action');
    }
  }

  // Call the useReducer hook, passing in the reducer function and an initial 
  // state object with a count property set to 0. The useReducer hook returns an 
  // array with two elements: the current state and a dispatch function.
  const [state, dispatch] = useReducer(reducer, {count : 0});

  // Define a function handleClickInc that dispatches an action object with a 
  // type property set to 'incr'.
  const handleClickInc = () => {
    dispatch({type : 'incr'});
  }

  // Define a function handleClickDec that dispatches an action object with a 
  // type property set to 'decr'.
  const handleClickDec = () => {
    dispatch({type : 'decr'});
  }

  // Return JSX that renders a div with an h1 element displaying the current 
  // count and two buttons. When the increment button is clicked, the 
  // handleClickInc function is called, which dispatches an action to increment 
  // the count. When the decrement button is clicked, the handleClickDec 
  // function is called, which dispatches an action to decrement the count.
  return (
    <div>
      <h1>Count : {state.count}</h1>
      <button onClick={handleClickInc}>Increment</button>
      <button onClick={handleClickDec}>Decrement</button>
    </div>
  )
}


//useRef
// import { useEffect, useState, useRef } from "react";

// function App() {
//   const [incomeTax, setIncomeTax] = useState(12000);
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() =>{
//       console.log(divRef.current);
//       divRef.current.innerHTML = 10;
//       // document.getElementById("container").innerHTML = 10;
//     }, 5000);
//   }, [])


//   return (
//     <div>
//       {/* hi there, your income tax is <div id="container">{incomeTax}</div> */}
//       hi there, your income tax is <div ref={divRef}>{incomeTax}</div>
//     </div>
//   )
// }

//useCallback
// import { useEffect, useState, useCallback } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({ returns: 0 });
//   const [exchange2Data, setExchange2Data] = useState({ returns: 0 });
//   const [bankData, setBankData] = useState({ income: 0 });

//   useEffect(() => {
//     console.log("Setting exchange1Data");
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     console.log("Setting exchange2Data");
//     setExchange2Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("Setting bankData");
//       setBankData({
//         income: 100,
//       });
//     }, 5000);
//   }, []);

//   const calcCrypto = useCallback(function calculateCryptoReturns() {
//     console.log("Calculating crypto returns");
//     return exchange1Data.returns + exchange2Data.returns;
//   },[exchange1Data, exchange2Data]);

//   const incomeTax = (calcCrypto() + bankData.income) * 0.3;

//   console.log("Income tax:", incomeTax);

//   return (
//     <div>
//       {bankData.income !== 0 &&
//         exchange1Data.returns !== 0 &&
//         exchange2Data.returns !== 0 && <h1>Income Tax: {incomeTax}</h1>}
//     </div>
//   );
// }

//useMemo
// import { useEffect, useState, useMemo } from "react";

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({ returns: 0 });
//   const [exchange2Data, setExchange2Data] = useState({ returns: 0 });
//   const [bankData, setBankData] = useState({ income: 0 });

//   useEffect(() => {
//     setExchange1Data({
//       returns: 100,
//     });
//   }, []);

//   useEffect(() => {
//     setExchange2Data({
//       returns: 200,
//     });
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     }, 5000);
//   }, []);

//   // console.log("hi there before");
//   // const cryptoReturns = exchange1Data.returns + exchange2Data.returns;
//   // console.log("hi there after");

//   const cryptoReturns = useMemo(() => {
//     // console.log("hi there before");
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data.returns, exchange2Data.returns]);

//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return (
//     <div>
//       {bankData.income !== 0 &&
//         exchange1Data.returns !== 0 &&
//         exchange2Data.returns !== 0 && <h1>Income Tax: {incomeTax}</h1>}
//     </div>
//   );
// }

//useEffect
// import { useEffect, useState } from "react";

// function App() {
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});
//   console.log("App rendered");

//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({
//         income: 100,
//       });
//     }, 3000);
//   }, [])

//   // setTimeout(() => {
//   //   setBankData({
//   //     income: 100,
//   //   });
//   // }, 3000);

//   // fetch("https://google.com", async (res) => {
//   //   const json = await res.json();
//   //   setBankData({income : 100});
//   // });

//   useEffect(() => {
//     setTimeout(() => {
//       setExchangeData({
//         returns: 100,
//       });
//     }, 1000);
//   }, [])

//   // setTimeout(() => {
//   //   setExchangeData({
//   //     returns: 100,
//   //   });
//   // }, 1000);

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.2;

//   return (
//     <div>
//       <h1>Income Tax: {incomeTax}</h1>
//     </div>
//   )
// }

//reconcilation
// import { useState } from "react";
// function App(){
//   const [count, setCount] = useState(0);
//   console.log("App rendered");
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>count is {count}</button>
//     </div>
//   )
// }

// import { memo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   function logSomething() {
//     console.log("child clicked");
//   }

//   return (
//     <div>
//       <Child onClick={logSomething} />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me {count}
//       </button>
//     </div>
//   );
// }

// const Child = memo(({ onClick }) => {
//   console.log("child rendered");
//   return (
//     <div>
//       <button onClick={onClick}>Click me</button>
//     </div>
//   );
// });

// import { useEffect, useMemo, useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputVal, setInputVal] = useState(1);
//   // const [finalVal, setFinalVal] = useState(0);

//   const count = useMemo(() => {
//     let finalCount = 0;
//     for (let i = 1; i <= inputVal; i++) {
//       finalCount += i;
//     }
//     return finalCount;
//   }, [inputVal]);

//   // useEffect(() => {
//   //   let count = 0;
//   //   for (let i = 1; i <= inputVal; i++) {
//   //     count += i;
//   //   }
//   //   setFinalVal(count);
//   // }, [inputVal]);

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setInputVal(e.target.value)}
//         placeholder="Enter a value"
//       ></input>
//       <p>
//         Sum for {inputVal} is {count}
//         {/* Sum for {inputVal} is {finalVal} */}
//       </p>
//       <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
//     </div>
//   );
// }

// import { useState } from "react";
// // import { useEffect } from "react";
// import { Todo } from "../components/Todo";

// function App() {
//   const [selectedButtonId, setSelectedButtonId] = useState(1);

//   const handleButtonPress = (buttonId) => {
//     setSelectedButtonId(buttonId);
//   };

//   return (
//     <div>
//       <button onClick={() => handleButtonPress(1)}>1</button>
//       <button onClick={() => handleButtonPress(2)}>2</button>
//       <button onClick={() => handleButtonPress(3)}>3</button>
//       <button onClick={() => handleButtonPress(4)}>4</button>
//       <Todo id={selectedButtonId} />
//     </div>
//   );
// }

// import { useState } from "react";
// import { Todo } from "../components/Todo";
// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     // fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//     //   const json = await res.json();
//     //   setTodos(json.todos);
//     // });
// // },[]);

//     axios.get("https://sum-server.100xdevs.com/todos")
//      .then(response => setTodos(response.data.todos))
//      .catch(error => console.error(error)); // handle errors
//   }, []);
//   // empty[](dependency array) means it only runs once, its a condition to render
//   // [] takes state variables as input for condition anytime this state variable change this code re runs

//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//   </div>
// }

export default App;
