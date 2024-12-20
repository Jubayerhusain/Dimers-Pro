import React from "react";
import Marque from "./../Marque/Marque";

function HolidaySale() {
  return (
    <div className="rounded-lg border-2 my-4">
      <div className="text-center w-full">
        {/* Holiday Sale Section */}
        <div className="text-gray-100 bg-blue-600 p-5 py-8 rounded-t-lg flex justify-between items-end">
          <div className="flex-col flex justify-start ">
            <div className="font-bold text-start text-4xl  text-yellow-400">
              HOLIDAY SALE
            </div>
            <p className="text-start text-lg">
              Get 50% off your first month of Dimers Pro
            </p>
          </div>
          <a
            href="#"
            className="underline text-white text-sm font-semibold hover:text-yellow-300"
          >
            Claim Now &gt;
          </a>
        </div>

        {/* Main Content Section */}
        <div className="bg-white text-gray-900 p-6 mt-6 rounded shadow-lg">
          {/* Logo Section */}
          <h1 className="text-4xl font-bold flex justify-center items-center space-x-2">
            <span className="border-blue-600 border-4 p-1">DIMERS</span>
            <span className="text-blue-600">PRO</span>
          </h1>

          {/* Tagline */}
          <p className="mt-4 text-xl font-semibold text-center">
            Every Bet, Every Game, Every Day
          </p>

          {/* Description */}
          <p className="text-center text-gray-600 mt-2">
            Access the smartest betting models on the market and join millions
            of Dimers users who trust our data-driven insights to help them
            place the best bets.
          </p>

          {/* Features */}
          <div className="bg-gray-50 mt-4 p-4 rounded-md shadow">
            <ul className="space-y-3 text-sm text-gray-800">
              {[
                "Unlimited best bets",
                "Unlimited props",
                "Unlimited trends",
                "Unlimited customizable parlays",
                "Bet filters",
                "Exclusive Discord community",
                "Full site access",
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 r text-blue-600 rounded-full border-2 border-blue-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414-1.414l-7.949 7.949-2.122-2.121a1 1 0 00-1.414 1.414l2.829 2.828a1 1 0 001.414 0l8.657-8.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Get Dimers Pro
            </button>
          </div>
        </div>
      </div>
      <Marque></Marque>
    </div>
  );
}

export default HolidaySale;
