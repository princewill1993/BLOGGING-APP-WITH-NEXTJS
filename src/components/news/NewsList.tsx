"use client";

import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

interface NewsItems {
  author: null | string;
  content: null | string;
  description: null | string;
  publishedAt: string;
  title: string;
  url: string;
  urlToImage: string;
  source: {
    id: string;
    name: string;
  };
}

function NewsList() {
  const [newsData, setNewsData] = useState([]);

  async function getNews() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_APIKEY}`
      );
      setNewsData(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  console.log(newsData);

  return (
    <div>
      <h3 className="text-4xl text-gray-500 font-bold mb-6">
        List of all the news
      </h3>

      <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {newsData.map((item: NewsItems, index: number) => {
          return item.description === null ||
            item.description === "[Removed]" ? null : (
            <div key={index}>
              <NewsCard
                news_title={item.title.slice(0, 50) + "..."}
                news_description={item.description.slice(0, 120) + "..."}
                news_image={item.urlToImage}
                news_publishedAt={item.publishedAt}
                news_publisher={item.source.name}
                news_details_url={item.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsList;
