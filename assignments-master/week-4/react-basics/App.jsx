import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go for Running",
      description: "Go for Running from 7:30 - 9",
      completed: false,
    },
    {
      title: "Attend Cohort 2",
      description: "Attend Cohort 2 from 9-11",
      completed: true,
    },
  ]);

  function addNewTodo() {
    setTodos([
      ...todos,
      {
        title: "New todo",
        description: "Description",
      },
    ]);
  }

  return (
    <div>
      <button onClick={addNewTodo}>Add a random todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>
      <Todo title={todos[1].title} description={todos[1].description}></Todo> */}
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

// let state = {
//   count : 0
// }

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//       <CustomButton count={count+1} setCount={setCount}></CustomButton>
//       <CustomButton count={count-1} setCount={setCount}></CustomButton>
//       <CustomButton count={count*100} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// //component
// function CustomButton(props){

//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>
// }

export default App;
