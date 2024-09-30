import React from "react";
import "./App.css";
import { useMutation, useQuery } from "@tanstack/react-query";

function App() {
  // useQuery hook is used to fetch data from server and cache it.
  // It can also handle refetching, retrying, polling and many more.
  // queryKey is the unique key for the data. It is used for caching.
  // queryFn is the function that will be called to fetch the data.
  // enabled is a boolean that determines whether the data should be fetched or not.
  // It is used for optimization. If the data is not needed, it will not be fetched.
  const userData = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      return fetch("https://jsonplaceholder.typicode.com/users").then(
        (response) => response.json()
      );
    },
    enabled: false,
  });

  const mutatePost = useMutation({
    mutationKey: "posts",
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json()),
  });

  //   Difference between useQuery and useMutation
  // Purpose: useQuery is for reading data, while useMutation is for modifying data.
  // Typical Use Case: useQuery is used when you want to fetch and display data, while useMutation is used when you want to make changes to that data.
  // Return Values: useQuery returns { data, error, isLoading, isFetching }, while useMutation returns { mutate, data, error, isError, isLoading, isSuccess }.
  // Error Handling: Both hooks handle errors, but useMutation provides additional features for handling optimistic updates and rollbacks in case of errors during mutations.

  return (
    <div>
      <div>
        <button onClick={() => userData.refetch()}>Get Users</button>
        <div>
          {userData.isFetching && <div>Fetching user data...</div>}
          {userData.isError && <div>{`Error get data!!!`}</div>}
          {userData.data &&
            userData.data.length > 0 &&
            userData.data.map((user) => <div>{user.name}</div>)}
        </div>
      </div>
      <hr />
      <div>
        <button
          onClick={() =>
            mutatePost.mutate({
              title: "First Post",
              body: "First Post Body",
              userId: 1,
            })
          }
        >
          Add New Post
        </button>
        <div>
          {mutatePost.isLoading && <div>Adding new post...</div>}
          {mutatePost.isError && <div>{`Error add new post!!!`}</div>}
          {mutatePost.data && (
            <div>{`Success add new post with title : '${mutatePost.data.title}'`}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// React Query is a valuable addition to the React ecosystem, making data fetching and synchronization easier than ever.

export default App;
