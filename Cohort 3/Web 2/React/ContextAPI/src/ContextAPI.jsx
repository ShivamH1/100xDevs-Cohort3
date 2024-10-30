import React, { createContext } from 'react'
// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, 
// especially when dealing with deeply nested components/prop drilling.
// The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down 
// manually at every level. 

// ### Jargon
// - **Context**: This is created using `React.createContext() or createContext()`. It serves as a container for the data you want to share.
// - **Provider**: This component wraps part of your application and provides the context value to all its descendants. 
//                 Any component that is a child of this Provider can access the context <CountContext.Provider>< Count /></CountContext.Provider>.
// - **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)
//Note : context should defined in a separate file. useContext provides you a object, you need to destructure the key/value to use it.
// The Context API primarily addresses the issue of prop drilling by allowing you to share state across your component tree 
// without needing to pass props through every level.
// It doesn’t optimise renders in your application, which becomes important if/when your application becomes bigger


//*new and better way - Context API

//creating a context
const CountContext = createContext();

//provider function 
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

// Wrap your app inside the CountContextProvider
function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

// Consume the context in individual components
function Decrease() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const {count, setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

export default Parent;

//*old way - prop drilling

// import React, { useEffect, useState } from 'react';

// function Parent() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Incrase count={count} setCount={setCount} />
//       <Decrease count={count} setCount={setCount} />
//       <Value count={count} setCount={setCount} />
//     </>
//   );
// }

// function Decrease({ count, setCount }) {
//   return <button onClick={() => setCount(count - 1)}>Decrease</button>;
// }

// function Incrase({ count, setCount }) {
//   return <button onClick={() => setCount(count + 1)}>Increase</button>;
// }

// function Value({ count }) {
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;
