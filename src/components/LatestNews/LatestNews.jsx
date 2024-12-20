import React, { useEffect, useState } from "react";

function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((response) => response.json())
      .then((newsData) => setNews(newsData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-gray-900 text-lg font-bold mb-4">Latest News</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-4 bg-white border rounded-lg shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="text-gray-800 font-medium text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.league}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestNews;
