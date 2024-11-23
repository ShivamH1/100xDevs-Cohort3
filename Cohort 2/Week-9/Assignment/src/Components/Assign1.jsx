import React from "react";

export function Assign1({ name, age }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div
        className="bg-cover bg-center h-24"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1691932186194-09d0d98c073c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
      ></div>
      <div className="p-4">
        <div className="flex items-center justify-center -mt-12">
          <img
            className="h-24 w-24 rounded-full border-2 border-white"
            src="https://images.unsplash.com/photo-1614502875832-77fe801288ba?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-semibold">
            {name} <span className="text-gray-500 text-sm">{age}</span>
          </h2>
          <p className="text-gray-500">London</p>
        </div>
        <div className="mt-4 flex justify-around">
          <div className="text-center">
            <p className="text-xl font-bold">80K</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">803K</p>
            <p className="text-gray-500">Likes</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">1.4K</p>
            <p className="text-gray-500">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
