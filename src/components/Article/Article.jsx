import React from "react";

const Article = () => {
  const articles = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ542Qbz2L3BDd1h6Xfo9cpF7OjSmRsRi7ogg&s",
      title:
        "NBA Picks Today: Thursday's Best Bets Include[12/19/2024]",
      category: "NBA",
      author: "Ryan Leaver",
      date: "Dec 19, 2024",
    },
    {
      image:
        "https://imgix.cosmicjs.com/93395040-bca4-11ef-977e-d75e67ee8e9b-CHEATSHEETSARTICLE.jpg?w=750",
      title: "Dimers Pro Launches Player Prop Cheat Sheets",
      category: "ALL",
      author: "Jason Bevilacqua",
      date: "Dec 18, 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEczB0MmxBGdAtrdv0oNvHQ1waOeWLm0uSBA&s",
      title:
        "NFL Betting Strategy: How to Bet on Week 16 ",
      category: "NFL",
      author: "Dave Garofolo",
      date: "Dec 18, 2024",
    },
    {
      image: "https://i.ytimg.com/vi/jwozE3phyJA/maxresdefault.jpg",
      title: "NBA Player Props Today: Thursday's Top",
      category: "NBA",
      author: "Dave Garofolo",
      date: "Dec 19, 2024",
    },
    {
      image:
        "https://vsin.com/wp-content/uploads/2024/11/USATSI_22784245_168384654_lowres.jpg?w=1068&h=0&crop=1",
      title: "College Basketball Picks Today: plays [12/19/2024]",
      category: "CBB",
      author: "Dave Garofolo",
      date: "Dec 19, 2024",
    },
    {
      image:
        "https://res.cloudinary.com/rotowire/image/upload/ar_16:7,c_fill,dpr_3.0,f_auto,g_auto:custom_no_override,q_auto,w_450/jgnzkdk3kgnc4ciqj67b.jpg",
      title: "Tennis Picks Today: Bet the Best Matches",
      category: "Tennis",
      author: "John Doe",
      date: "Dec 20, 2024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1QWXxJh6J8n4WOHbEiVCCA7cKdjSoUUlGA&s",
      title: "Golf Betting Strategy: Master Your Swing",
      category: "Golf",
      author: "Emily",
      date: "Dec 21, 2024",
    },
    {
      image:
        "https://theanalyst.com/wp-content/uploads/2022/08/la-liga-relegation-chance-predicted-1024x1024.jpeg",
      title: "La Liga Predictions: Top Teams to Win",
      category: "La Liga",
      author: "Anna Smith",
      date: "Dec 22, 2024",
    },
    {
      image: "https://www.sportspro.com/wp-content/uploads/2023/10/GS-PLP.jpg",
      title: "Premier League Updates: Key Match Insights",
      category: "Premier League",
      author: "Tom Hardy",
      date: "Dec 23, 2024",
    },
  ];

  return (
    <div className="">
      <div className="card lg:card-side bg-base-100 shadow-2xl mb-2">
        <figure className="flex-1">
          <img
            className="h-[300px] object-center"
            src="https://images.actionnetwork.com/blog/2023/10/Best-Bets-10-27.jpg"
            alt="NBA bets"
          />
        </figure>
        <div className="card-body w-5/12 flex-1">
          <div className="flex items-center justify-between">
            <p>Ryan Leaver</p>
            <p>Dec 19,2024</p>
          </div>
          <a className="card-title underline cursor-pointer hover:text-red-400">
            {" "}
            NBA Picks Today: Thursday's Best Bets Include Two Spread Plays
            [12/19/2024]{" "}
          </a>
          <p>
            {" "}
            NBA betting is back for another pulse-pounding day on 12/19, and
            we're here to serve up our top basketball picks for Thursday's
            action.{" "}
          </p>
          <h1 className="text-md font-bold text-black">NBA</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="border h-[300px] flex flex-col justify-between rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <div className="text-xs text-gray-500 mb-2 flex justify-between">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-md font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-700 text-sm mb-4">
                {article.description}
              </p>
              <span className="text-blue-600 font-bold">
                {article.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
