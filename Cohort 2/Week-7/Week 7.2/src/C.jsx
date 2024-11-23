import React, { useContext } from "react";
import { GreetContext } from "./A";

//useContext
export default function C() {
  const context = useContext(GreetContext);
  return (
    <div>
      <h1>
        Greet : {context.greet} {context.greet2}
      </h1>
    </div>
  );
}

// Receiver/Consumer

// export default function C() {
//   return (
//     <GreetContext.Consumer>
//         {
//             (val) => {
//                 return <h1>Greet : {val}</h1>
//             }
//         }
//     </GreetContext.Consumer>

//   )
// }

// export default function C(props) {
//     console.log(props);
//   return (
//     <div>
//         {props.greet}
//     </div>
//   )
// }
