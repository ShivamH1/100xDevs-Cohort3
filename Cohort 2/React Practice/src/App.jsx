import React from "react";
import "./App.css";
import Nineteen from "./components/Nineteen";
import { CartProvider } from "./components/CartContext";
// import Two from '../components/Two'
// import Three from '../components/Three'
// import Four from '../components/Four'
// import Five from '../components/Five'
// import Six from '../components/Six'
// import Seven from "../components/Seven";
// import Eight from "../components/Eight";
// import Nine from "../components/Nine";
// import Ten from "../components/Ten";
// import Eleven from "../components/Eleven";
// import Twelfth from "../components/Twelfth";
// import Thirteen from "../components/Thirteen";
// import Fourteen from "../components/Fourteen";
// import Fifteen from "../components/fifteen";
// import Sixteen from "./components/Sixteen";
// import Seventeen from "./components/Seventeen";
// import Eighteen from "./components/Eighteen";
// import { ThemeProvider } from "./components/ThemeContext";
// import EighteenComp from "./components/EighteenComp";

export default function App() {
  // const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5','Another Item1', 'Another Item2'];
  return (
    <div>
      {/* <Two /> */}
      {/* <Three />
        <Four />
        <Five />
        <Six /> */}
      {/* <Seven /> */}
      {/* <Eight /> */}
      {/* <Nine /> */}
      {/* <Ten /> */}
      {/* <Eleven /> */}
      {/* <Twelfth /> */}
      {/* <Thirteen /> */}
      {/* <Fourteen /> */}
      {/* <Fifteen items={items}/> */}
      {/* <Sixteen /> */}
      {/* <Seventeen /> */}
      {/* <ThemeProvider>
        <div className="App">
          <Eighteen />
          <EighteenComp />
        </div>
      </ThemeProvider> */}
      <CartProvider>
        <Nineteen />
      </CartProvider>
    </div>
  );
}
