interface NewsCardItem {
  news_image: string;
  news_title: string;
  news_description: string;
  news_publisher: string;
  news_publishedAt: string;
  news_details_url: string;
}

import React from "react";

function NewsCard(props: NewsCardItem) {
  return (
    <div className="border p-2">
      <img
        className="rounded-md w-[500px] h-[200px]"
        src={props.news_image}
        alt={props.news_title}
      />
      <h3 className="text-lg font-semibold my-3 hover:underline cursor-pointer ">
        <a href={props.news_details_url} target="blank">
          {props.news_title}
        </a>
        {props.news_title}
      </h3>
      <p className="text-gray-500 font-light">{props.news_description}</p>
      <div className="">
        <p className="">{props.news_publisher}</p>
        <p>{new Date(props.news_publishedAt).toDateString()}</p>
      </div>
    </div>
  );
}

export default NewsCard;
