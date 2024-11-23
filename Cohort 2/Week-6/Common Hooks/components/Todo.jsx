import axios from "axios";
import { useState, useEffect } from "react";

export function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response) => setTodo(response.data.todo));
  }, [id]);

  return (
    <div>
      <h3>ID : {id}</h3>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  );
}

// export function Todo(props){
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </div>
//     )
// }
