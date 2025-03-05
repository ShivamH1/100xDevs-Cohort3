// THIS CLIENT COMPONENT
// "use client"

import axios from "axios";
// import { useEffect, useState } from "react";

// type Todo = {
//   id: number;
//   title: string;
//   completed: boolean;
// };

// export default function User() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<Todo[] | undefined>();

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
//       setData(response.data);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex flex-col space-y-4">
//       <h1 className="text-3xl font-bold">Todo List:</h1>
//       {data?.map((todo) => (
//         <div key={todo.id} className="flex items-center space-x-4">
//           <p className="text-lg">{todo.title}</p>
//           <span
//             className={`${
//               todo.completed ? "bg-green-500" : "bg-red-500"
//             } px-2 py-1 rounded-full text-white`}
//           >
//             {todo.completed ? "Completed" : "Not Completed"}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

// TO MAKE IT SERVER SIDE COMPONENT -
export default async function Todo() {
  // const response = await axios.get(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );

  //connecting to server
  const response = await axios.get("http://localhost:3000/api/v1/user/details");

  // await new Promise(r => setTimeout(r, 5000));

  const data = response.data;

  return (
    <div className="flex border p-4">
      {/* Todo : */}
      User: {data.user}
      <div className="flex flex-col justify-between items-center">
        {/* {data.title}{" "}
        {data.completed ? "Done" : "Not Completed"} */}
        <div>Email: {data.email}</div>
      </div>
    </div>
  );
}
