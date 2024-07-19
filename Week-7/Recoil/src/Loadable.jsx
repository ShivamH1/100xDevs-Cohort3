import './App.css'
import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from '../stores/atoms/selectorFam.js';

function Loadable() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

// The Todo component is responsible for rendering a single todo item.
// It uses the 'useRecoilStateLoadable' hook to get the todo item with the given 'id'.
// The 'useRecoilStateLoadable' hook returns an array with two elements: the todo item and a setter function.
// The todo item is stored in the 'contents' property of the array.
// The 'state' property of the array indicates the loading state of the todo item.
// If the loading state is "loading", the component displays a "loading..." message.
// If the loading state is "hasValue" or "hasError", the component displays the todo item.

function Todo({id}) {
   // Get the todo item with the given 'id' and a setter function.
//    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

   // Get the todo item with the given 'id'.
   const todoValue = useRecoilValueLoadable(todosAtomFamily(id));

   // If the todo item is still loading, display a "loading..." message.
   if (todoValue.state === "loading") {
      return <div>loading...</div>
   }

   // If the todo item is available, display it.
   // The 'contents' property of the todo item contains the actual todo item.
   // The 'contents' property is accessed using dot notation.
   // The 'title' and 'description' properties of the todo item are displayed.
   // The '<br />' tag is used to add a line break between the title and description.
   return (
    <>
      {todoValue.contents.title}
      {todoValue.contents.description}
      <br />
    </>
  )
}

export default Loadable;

// Suspense and ErrorBoundary are features in React that help you handle asynchronous data fetching and error handling more gracefully.

// Suspense is a new React feature that allows components to "wait" for some asynchronous operation to complete before rendering. It's particularly useful when you're fetching data using libraries like React Query, Relay, or Apollo Client.

// ErrorBoundary is a component that catches errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. If an error is caught, ErrorBoundary renders a fallback UI instead of the component tree that caused the error.

// To use Suspense and ErrorBoundary in your code, you can wrap your components with <React.Suspense> and <ErrorBoundary> components. 

// import React from 'react';
// import { RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
// import { todosAtomFamily } from '../stores/atoms/selectorFam.js';

// function Loadable() {
//   return (
//     <RecoilRoot>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <ErrorBoundary>
//           <Todo id={1} />
//           <Todo id={2} />
//         </ErrorBoundary>
//       </React.Suspense>
//     </RecoilRoot>
//   );
// }

// function ErrorBoundary({ children }) {
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     if (error) {
//       // Log the error or display a fallback UI
//       console.error(error);
//     }
//   }, [error]);

//   if (error) {
//     return <div>An error occurred: {error.message}</div>;
//   }

//   return <>{children}</>;
// }

// function Todo({ id }) {
//   const todoValue = useRecoilValueLoadable(todosAtomFamily(id));

//   if (todoValue.state === 'loading') {
//     throw todoValue; // Throw the loading state to trigger Suspense
//   }

//   if (todoValue.state === 'hasValue') {
//     return (
//       <>
//         {todoValue.contents.title}
//         {todoValue.contents.description}
//         <br />
//       </>
//     );
//   }

//   if (todoValue.state === 'hasError') {
//     throw todoValue.contents; // Throw the error to trigger ErrorBoundary
//   }
// }

// export default Loadable;