import React from "react";

function Categories() {
  return (
    <div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">CHOOSE YOUR SPORT</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🏈 <span className="ml-2">NFL</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🏀 <span className="ml-2">NBA</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🏒 <span className="ml-2">NHL</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              ⚽ <span className="ml-2">MLS</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🏈 <span className="ml-2"> Football</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🏀 <span className="ml-2"> Basketball</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🎾 <span className="ml-2">Tennis</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              🏌️ <span className="ml-2">Golf</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              ⚽ <span className="ml-2"> League</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              ⚽ <span className="ml-2">La Liga</span>
            </span>
            <span>&gt;</span>
          </button>
          <button className="flex items-center justify-between px-4 py-2 border rounded hover:bg-blue-100">
            <span className="flex items-center">
              ⚽ <span className="ml-2">Liga MX</span>
            </span>
            <span>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
