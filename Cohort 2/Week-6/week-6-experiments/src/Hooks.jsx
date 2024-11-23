import { useState, useEffect } from "react";

// React Hooks
function Hooks() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    setInterval(() => {
      fetchTodoItems();
    }, 10000);
  }, []);

  const fetchTodoItems = async () => {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const data = await response.json();
    setTodoItems(data.todos);
  };

  return (
    <div>
      {todoItems.map((item) => (
        <Todo key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Hooks;
