import React, { useState } from "react";
import winImage from "./../../assets/icons8-win-48.png";
import crownImage from "./../../assets/icons8-crown-50.png";
const TopNav = () => {
  const sliderData = [
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "12 AM, Dec 23",
      team1: "CLE",
      team2: "CIN",
      team1Percent: 25,
      team2Percent: 75,
      spread1: "+7.5",
      spread2: "-7.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "6 AM, Dec 20",
      team1: "OKC",
      team2: "ORL",
      team1Percent: 73,
      team2Percent: 27,
      spread1: "-6.5",
      spread2: "+6.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "6 AM, Dec 20",
      team1: "UTA",
      team2: "DET",
      team1Percent: 37,
      team2Percent: 63,
      spread1: "+4.5",
      spread2: "-4.5",
    },
    {
      time: "12 AM, Dec 23",
      team1: "CLE",
      team2: "CIN",
      team1Percent: 25,
      team2Percent: 75,
      spread1: "+7.5",
      spread2: "-7.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "9:00 AM, Dec 20",
      team1: "PEI",
      team2: "GIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "12 AM, Dec 23",
      team1: "CLE",
      team2: "CIN",
      team1Percent: 25,
      team2Percent: 75,
      spread1: "+7.5",
      spread2: "-7.5",
    },
    {
      time: "6 AM, Dec 20",
      team1: "CHA",
      team2: "WAS",
      team1Percent: 64,
      team2Percent: 36,
      spread1: "-3.5",
      spread2: "+3.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "6:30 AM, Dec 20",
      team1: "CHI",
      team2: "BOS",
      team1Percent: 14,
      team2Percent: 86,
      spread1: "+14.0",
      spread2: "-14.0",
    },
    {
      time: "6 AM, Dec 20",
      team1: "CHA",
      team2: "WAS",
      team1Percent: 64,
      team2Percent: 36,
      spread1: "-3.5",
      spread2: "+3.5",
    },
    {
      time: "7:30 AM, Dec 20",
      team1: "NYK",
      team2: "ATL",
      team1Percent: 49,
      team2Percent: 51,
      spread1: "+1.5",
      spread2: "-1.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },

    {
      time: "7:00 AM, Dec 20",
      team1: "LAL",
      team2: "SAS",
      team1Percent: 45,
      team2Percent: 55,
      spread1: "-2.0",
      spread2: "+2.0",
    },
    {
      time: "6 AM, Dec 20",
      team1: "CHA",
      team2: "WAS",
      team1Percent: 64,
      team2Percent: 36,
      spread1: "-3.5",
      spread2: "+3.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "7:30 AM, Dec 20",
      team1: "NYK",
      team2: "ATL",
      team1Percent: 49,
      team2Percent: 51,
      spread1: "+1.5",
      spread2: "-1.5",
    },
    {
      time: "6 AM, Dec 20",
      team1: "CHA",
      team2: "WAS",
      team1Percent: 64,
      team2Percent: 36,
      spread1: "-3.5",
      spread2: "+3.5",
    },
    {
      time: "8:00 AM, Dec 20",
      team1: "PHI",
      team2: "MIA",
      team1Percent: 60,
      team2Percent: 40,
      spread1: "-3.0",
      spread2: "+3.0",
    },
    {
      time: "6 AM, Dec 20",
      team1: "CHA",
      team2: "WAS",
      team1Percent: 64,
      team2Percent: 36,
      spread1: "-3.5",
      spread2: "+3.5",
    },
    {
      time: "7:30 AM, Dec 20",
      team1: "NYK",
      team2: "ATL",
      team1Percent: 49,
      team2Percent: 51,
      spread1: "+1.5",
      spread2: "-1.5",
    },
  ];

  const cardsPerView = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex + cardsPerView < sliderData.length) {
      setCurrentIndex(currentIndex + cardsPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between xl:justify-around items-center bg-slate-900 text-white px-4">
      {/* Left Logo */}
      <div>
        <h1 className="text-4xl font-bold bg-yellow-500 text-black py-2 px-4 rounded-lg">
          DIMERS
        </h1>
      </div>

      {/* Slider Section */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ◀
        </button>

        {/* Visible Cards */}
        <div className="flex space-x-4 overflow-x-hidden max-w-full">
          {sliderData
            .slice(currentIndex, currentIndex + cardsPerView)
            .map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] h-28 rounded-xl md:p-6 shadow-lg "
              >
                {/* Card Header */}
                <div className="text-xs text-gray-300">{item.time}</div>
                {/* Teams and Stats */}
                <div className="flex justify-between items-center">
                  {/* Team */}
                  <div className="flex flex-col items-center ">
                    <span className="font-bold text-lg text-white">
                      {item.team1}
                    </span>
                    <span className=" px-3 py-1 rounded-full text-sm font-medium">
                      {item.team1}
                    </span>
                  </div>
                  {/* parsent  */}
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-400 text-sm">
                      <span className="text-green-500 font-bold">
                        {item.team1Percent}%
                      </span>
                    </span>
                    <span className="text-gray-400 text-sm">
                      <span className="text-blue-500 font-bold">
                        {item.team2Percent}%
                      </span>
                    </span>
                  </div>
                  <div className="flex ml-2 space-y-2 flex-col">
                    <img className="w-5 h-5" src={winImage} />
                    <img className="w-5 h-5" src={crownImage} />
                  </div>
                  {/* spread */}
                  <div className="flex flex-col items-center space-y-2">
                    <span className="font-bold text-lg text-white">
                      {item.spread1}
                    </span>
                    <span className=" text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.spread2}
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={currentIndex + cardsPerView >= sliderData.length}
          className={`bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center ${
            currentIndex + cardsPerView >= sliderData.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default TopNav;
