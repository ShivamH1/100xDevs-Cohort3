import { useState } from "react";
// import { useEffect } from "react";
import { Todo } from "../components/Todo";

function App() {
  const [selectedButtonId, setSelectedButtonId] = useState(1);

  const handleButtonPress = (buttonId) => {
    setSelectedButtonId(buttonId);
  };

  return (
    <div>
      <button onClick={() => handleButtonPress(1)}>1</button>
      <button onClick={() => handleButtonPress(2)}>2</button>
      <button onClick={() => handleButtonPress(3)}>3</button>
      <button onClick={() => handleButtonPress(4)}>4</button>
      <Todo id={selectedButtonId} />
    </div>
  );
}

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
