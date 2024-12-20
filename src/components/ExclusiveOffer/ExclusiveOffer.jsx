import React from "react";

const ExclusiveOffers = () => {
  const offers = [
    {
      logo: "bet365",
      badge: "TRENDING",
      title: "Bet $5 Get $150 in Bonus Bets! Code DIMERS",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
    {
      logo: "FANDUEL",
      badge: "NEW PLAYERS",
      title: "Bet $5, Get $150 in Bonus Bets if Your Bet Wins",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
    {
      logo: "CAESARS",
      badge: "NEW",
      title: "Bet $1, Double Your Winnings Your Next 10 Bets",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
    {
      logo: "DRAFTKINGS",
      badge: "HOT DEAL",
      title: "Bet $10, Win $200 in Free Bets Instantly",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
    {
      logo: "POINTSBET",
      badge: "LIMITED OFFER",
      title: "Risk-Free Bet up to $2,000 on Your First Wager",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
    {
      logo: "BETMGM",
      badge: "EXCLUSIVE",
      title: "Bet $10, Get $100 Free on Casino Slots",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
    {
      logo: "UNIBET",
      badge: "BEST VALUE",
      title: "Get $25 Free Bets No Deposit Required",
      terms: "T&C’s apply.",
      button: "Claim Now",
      links: ["Read review", "How to claim"],
    },
  ];

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">EXCLUSIVE OFFERS</h2>
      {offers.map((offer, idx) => (
        <div
          key={idx}
          className="mb-4 space-y-4 p-4 rounded-lg shadow-md border border-gray-300"
        >
          <h1 className="bg-blue-400 rounded-t-lg text-center py-3 text-2xl font-bold text-gray-800">
            {offer.logo}
          </h1>
          <div className="space-y-2 bg-gray-100 p-3">
            <p className="text-sm font-semibold text-blue-500 mb-2">
              {offer.badge}
            </p>
            <h3 className="text-md font-bold mb-2">{offer.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{offer.terms}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mb-2 w-full">
              {offer.button}
            </button>
            <div className="flex justify-between text-sm text-blue-500">
              {offer.links.map((link, linkIndex) => (
                <a key={linkIndex} href="#" className="hover:underline">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExclusiveOffers;
