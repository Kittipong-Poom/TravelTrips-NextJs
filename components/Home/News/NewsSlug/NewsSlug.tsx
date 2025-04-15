"use client";
import React from "react";
import { useParams } from "next/navigation";
import { newsData } from "@/data/newsData";
import HoverCard from "@/components/Home/News/NewsSlug/HoverCard";
import { motion } from "framer-motion";
import NotFound from "@/components/404NotFound/NotFound";
const NewsDetailPage = () => {
  const { newsId } = useParams();
  const newsItem = newsData.find((news) => news.id === newsId);
  if (!newsItem) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
  return (
    <div className="pt-36 pb-16 w-[80%] mx-auto ">
      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl md:text-5xl text-center p-6 border w-[70%] mx-auto rounded-lg font-extrabold bg-gradient-to-r from-green-700 via-lime-600 to-green-800 text-transparent bg-clip-text shadow-lg shadow-green-300/50 hover:shadow-xl hover:shadow-green-400/70 transform hover:-translate-y-2 transition-all duration-500 ease-in-out"
      >
        {newsItem?.title}
      </motion.h1>

      {newsItem?.places && (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {newsItem?.places?.map((place, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="700"
              >
                <HoverCard place={place} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetailPage;
