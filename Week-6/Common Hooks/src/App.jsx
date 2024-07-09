import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function logSomething() {
    console.log("child clicked");
  }

  return (
    <div>
      <Child onClick={logSomething} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child rendered");
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
});

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
