import React, { useState, useEffect } from "react";
import winImage from "./../../assets/icons8-win-48.png";
import crownImage from "./../../assets/icons8-crown-50.png";
const GamePrediction = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/prediction.json")
      .then((response) => response.json())
      .then((matchesData) => setData(matchesData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8 px-5">
      <h1 className="text-lg font-bold text-gray-800 mb-6">GAME PREDICTIONS</h1>
      <div className="border border-gray-500 my-2"></div>
      <div className="border-none my-3">
        <select className="select border-2 border-black/80 select-md w-full max-w-xs">
          <option disabled selected>
            All Sports
          </option>
          <option>NFL</option>
          <option>NBA</option>
          <option>NHL</option>
          <option>CFB</option>
          <option>CBB</option>
          <option>EPL</option>
          <option>ESP</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((match, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            {/* Match Time */}
            <div className="text-gray-500 text-sm text-center mb-4">
              {match.time}
            </div>

            {/* Teams */}
            {match.teams.map((team, idx) => (
              // start
              <div
                key={idx}
                className="flex justify-between items-center mb-3 last:mb-0"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{team.name}</p>
                  </div>
                </div>
                {/* END */}
                <div className="flex items-center space-x-2">
                  <div>
                    <p className={`text-sm font-medium`}>
                      {`${team.percentage}%`}
                    </p>
                  </div>
                  <div>
                        <img className="w-5 h-5" src={winImage} alt="" />
                    </div>
                  <div
                    className={` text-sm bg-blue-500 font-bold py-1 px-3 rounded-md`}
                  >
                    {team.spread}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center">
              {/* Match Type */}
              <div className="text-center text-sm text-gray-600 mt-4">
                {match.type}
              </div>

              {/* See Matchup Link */}
              <div className="text-blue-500 text-sm text-center mt-2 font-medium cursor-pointer hover:underline">
                See Matchup
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePrediction;
