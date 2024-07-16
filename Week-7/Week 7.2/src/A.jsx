import React, { createContext } from "react";
import B from "./B";

// Provider

const GreetContext = createContext();

export default function A() {
  const greet = "Hello";
  const greet2 = "Hey there!";

  return (
    <div>
      <GreetContext.Provider value={{ greet, greet2 }}>
          <B />
      </GreetContext.Provider>
    </div>

    // <div>
    //     <B greet={ greet }/>
    // </div>
  );
}

export { GreetContext };
