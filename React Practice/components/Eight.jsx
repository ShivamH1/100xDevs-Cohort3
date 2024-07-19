// Importing the React library and the useState hook from the react library
import React, { useState } from "react";

// Defining a functional component named Eight
export default function Eight() {
  // Initializing a state variable named input with an empty string
  const [input, setInput] = useState("");

  // Initializing a state variable named todos with an empty array
  const [todos, setTodos] = useState([]);

  // Defining a function named addTodo
  const addTodo = () => {
    // Checking if the input is not an empty string
    if(input.trim() !== "") {
      // Adding the input to the todos array using the spread operator
      setTodos([...todos, input]);
      // Setting the input to an empty string
      setInput('');
    }
  }

  // Defining a function named removeTodo
  const removeTodo = (idx) => {
    // Creating a new array named updatedTodo by filtering out the element at the index idx
    const updatedTodo = todos.filter((_,i) => i !== idx);
    // Setting the todos state variable to the updatedTodo array
    setTodos(updatedTodo);
  }

  // Returning JSX code
  return (
    <div>
      {/* Creating an input element with a type of text and an onChange event handler */}
      <input type="text" onChange={(e) => setInput(e.target.value)}/>
      {/* Creating a button with an onClick event handler */}
      <button onClick={addTodo}>Add</button>
      {/* Creating an unordered list */}
      <ul>
        {/* Mapping over the todos array and rendering a list item for each todo */}
        {todos.map((todo,index) => (
          <li key={index}> {/* Adding a unique key to each list item */}
            {/* Displaying the todo */}
            {todo} 
            {/* Creating a button with an onClick event handler */}
            <button onClick={()=>removeTodo(index)}>Remove</button> {/* Passing the index to the removeTodo function */}
          </li>
        ))}
      </ul>
    </div>
  );
}

