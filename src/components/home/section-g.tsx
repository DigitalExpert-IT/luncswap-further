import React from "react";
import { NewsCard } from "../ui/news-card";
import { NEWS } from "@/constant/dummy";

export const SectionG = () => {
  return (
    <div className="container mb-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl">Featured News</h1>
      </div>
      <div className="space-y-10 md:flex md:space-x-10 md:space-y-0">
        {NEWS.map((item, idx) => (
          <NewsCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};
