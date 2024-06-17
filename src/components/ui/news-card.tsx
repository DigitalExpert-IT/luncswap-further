import React from "react";

type NewsCardType = {
  title: string;
  content: string;
  image: string;
  source: string;
  published: string;
};

export const NewsCard = ({
  title,
  content,
  image,
  source,
  published,
}: NewsCardType) => {
  return (
    <div>
      <img src={image} className="rounded-3xl" />
      <div className="flex justify-between">
        <span className="text-gray-500">source: {source}</span>
        <span className="text-gray-500">{published}</span>
      </div>
      <div className="my-5">
        <span className="text-3xl capitalize font-bold">{title}</span>
      </div>
      <div>
        <span>{content}</span>
      </div>
    </div>
  );
};
