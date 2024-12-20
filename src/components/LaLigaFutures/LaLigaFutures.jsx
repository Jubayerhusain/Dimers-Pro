import React from "react";

function LaLigaFutures (){
  const teams = [
    {
      name: "Real Madrid",
      percentage: "53.1%",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Sp0aFcmPDL9AQCryoaOYrrc4SmlYS5GkQ&s", 
    },
    {
      name: "Barcelona",
      percentage: "28.3%",
      logo: "https://yt3.googleusercontent.com/obnnFvh_OSUvbvEiHR8bW1W5z7fxmGBh3AWWXCoeH_iyB7gVjqA20NK4f1RWZgGaFzva7M_Wb3Q=s900-c-k-c0x00ffffff-no-rj", 
    },
    {
      name: "Atletico Madrid",
      percentage: "17.9%",
      logo: "https://imageio.forbes.com/i-forbesimg/media/lists/teams/atletico-de-madrid_416x416.jpg?format=jpg",
    },
  ];

  return (
    <div className="w-full mx-auto bg-white border my-4 border-gray-200 rounded-lg shadow p-4">
      {/* Header Section */}
      <h2 className="text-gray-900 text-sm font-semibold mb-4">La Liga Futures</h2>

      {/* Teams List */}
      <div className="space-y-2">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 p-2 rounded"
          >
            <div className="flex items-center gap-2">
              <img
                src={team.logo}
                alt={`${team.name} logo`}
                className="w-6 h-6"
              />
              <p className="text-sm text-gray-800 font-medium">{team.name}</p>
            </div>
            <span className="text-sm font-semibold text-blue-600">
              {team.percentage}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="w-full mt-4 py-2 text-blue-600 border border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
        See All La Liga Futures
      </button>
    </div>
  );
};

export default LaLigaFutures;
