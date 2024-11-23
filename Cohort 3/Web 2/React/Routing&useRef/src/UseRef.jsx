import React, { useRef } from 'react'
// In React, useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but 
// does not trigger a re-render when the value changes.
// ### Key Characteristics of `useRef`:

// 1. **Persistent Across Renders**: The value stored in `useRef` persists between component re-renders. This means the value of 
// a `ref` does not get reset when the component re-renders, unlike regular variables.
// 2. **No Re-Renders on Change**: Changing the value of a `ref` (`ref.current`) does **not** cause a component to re-render. 
// This is different from state (`useState`), which triggers a re-render when updated.

function UseRef() {
  const inputRef = useRef();

  function focusOnInput() {
    //Both line does same thing
    // document.getElementById("name").focus();
    inputRef.current.focus()
  }

  return (
    <div>
      SugnUp
      <input ref={inputRef} type='text' id='name'></input>
      <input type='text'></input>
      <button onClick={focusOnInput}>Submit</button>
    </div>
  )
}

// import React, { useRef } from 'react';

// function FocusInput() {
//   // Step 1: Create a ref to store the input element
//   const inputRef = useRef(null);

//   // Step 2: Define the function to focus the input
//   const handleFocus = () => {
//     // Access the DOM node and call the focus method
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       {/* Step 3: Attach the ref to the input element */}
//       <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
//       <button onClick={handleFocus}>Focus the input</button>
//     </div>
//   );
// }

// export default FocusInput;

// import React, { useEffect, useRef, useState } from 'react';

// function Chat() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} 
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// export default Chat;


export default UseRef