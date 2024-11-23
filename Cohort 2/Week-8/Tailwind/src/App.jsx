import React from "react";

function App() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ backgroundColor: "red" }}>Hi</div>
        <div style={{ backgroundColor: "yellow" }}>Hi</div>
        <div style={{ backgroundColor: "green" }}>Hi</div>
      </div><br></br>
      <div className="flex justify-around">
        <div className="bg-red-500">Hi</div>
        <div className="bg-yellow-500">Hi</div>
        <div className="bg-green-500">Hi</div>
      </div><br></br>

      <div className="flex gap-4">
        <div className="bg-red-500 w-[40%]">Hi</div>
        <div className="bg-yellow-500 w-[40%]">Hi</div>
        <div className="bg-green-500 w-[20%]">Hi</div>
      </div><br></br>
      <div className="grid grid-cols-10 gap-4">
        <div className="bg-red-500 col-span-5">Hi</div>
        <div className="bg-yellow-500 col-span-3">Hi</div>
        <div className="bg-green-500 col-span-2">Hi</div>
      </div><br></br>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        <div className="bg-red-500">Hi there</div>
        <div className="bg-blue-500">Hi there</div>
        <div className="bg-green-500">Hi there</div>
      </div>
    </>
  );
}

export default App;
