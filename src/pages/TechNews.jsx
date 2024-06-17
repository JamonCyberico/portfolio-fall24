import React, { useEffect, useState } from "react";
import axios from "axios";

const TechNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              category: "technology",
              country: "us",
              apiKey: "a72136277cc94604ad166d1609274607",
            },
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="w-full min-h-screen bg-primary text-white">
      <div className="max-w-[1000px] mx-auto px-4 py-[100px] flex flex-col w-full h-full justify-center items-center">
        <div>
          <p className="text-white text-3xl font-bold inline border-b-4 border-pink-700">
            Tech News
          </p>
          <p className="text-gray-300 py-3">
            Some tech updates to stay in the loop
          </p>
        </div>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3">
          {news.map((article, index) => (
            <div className="border rounded-lg bg-tertiary p-4 shadow-lg ">
              <a
                href={article.url}
                target="blank"
                className="text-lg font-bold hover:underline"
              >
                {article.title}
              </a>
              <p className="text-md">{article.description}</p>
              <img src={article.urlToImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechNews;
