//key
import { useState } from "react";

// let counter = 3;
function App() {
  const [todos, setTodos] = useState([
    { id: "1", title: "Go for Running", description: "Go for Running from 7:30 - 9" },
    { id: "2", title: "Attend Cohort 2", description: "Attend Cohort 2 from 9-11" },
    { id: "3", title: "Learn React", description: "Learn React from 10:00 - 12" },
  ]);

  function addTodo() {
    const newTodo = {
      // id : counter++,
      id: String(todos.length + 1),
      title: "Learn Node.js",
      description: "Learn Node.js from 13:00 - 15",
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}


//React return a single child not siblings
// import React, { useState } from 'react'
// import { memo } from "react";
// import './App.css'
// // import { Headers } from '../components/Headers.jsx'

// function App() {
//   const [title, setTitle] = useState("Shivam");
//   return (
//     // <React.Fragmeny></React.Fragmeny> does same as <>
//     <div>
//     <button onClick={() => setTitle(Math.random())}>Click Me to change</button>
//       <Headers title={title}></Headers>
//       {/* <HeaderWithButton></HeaderWithButton> */}
//       <Headers title="Sun shining"></Headers>
//       <Headers title="Sun shining"></Headers>
//       <Headers title="Sun shining"></Headers>
//     </div>
//   )
// }

// re-render optimization
// //push downed the state to avoid re-render
// // function HeaderWithButton(){
// //   const [title, setTitle] = useState("Shivam");

// //   return(
// //     <div>
// //       <button onClick={() => setTitle(Math.random())}>Click Me to change</button>
// //       <Headers title={title}></Headers>
// //     </div>
// //   )

// // }

// //react memo
// const Headers = React.memo(function Headers({ title }) {
//   return (
//     <div>
//       <>My name is {title}</>
//     </div>
//   );
// });

export default App;
