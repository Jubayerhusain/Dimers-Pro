import React from "react";

function NextBestBet() {
  return (
    <div className="w-full px-8 bg-white border border-gray-200 rounded-lg shadow p-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-900 text-sm font-semibold">Next Best Bet</h2>
        <span role="img" aria-label="fire" className="text-yellow-500 text-lg">
          🔥
        </span>
      </div>

      {/* Match Time & Teams */}
      <div className="flex justify-between items-center">
        <div className="text-gray-500 text-xs font-medium mb-2">
          IN 15 HOURS
        </div>
        <div className="text-gray-800 text-sm font-bold mb-4">TUL vs. FLA</div>
      </div>
      {/* Logo and Prediction */}
      <div className="bg-gray-50 p-4 rounded flex flex-col items-center justify-center">
        <img
          src="https://amandalonergan.wordpress.com/wp-content/uploads/2015/05/dragon.jpg"
          alt="Team Logo"
          className="mb-2 w-16"
        />
        <p className="text-gray-800 text-base font-semibold">Tulane win</p>
        <p className="text-gray-500 text-sm font-medium">3.2% edge</p>
      </div>

      {/* Footer Button */}
      <button className="w-full mt-4 py-2 text-blue-600 border border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition">
        See All Best Bets
      </button>
    </div>
  );
}

export default NextBestBet;
