import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCards from "./NewsCards";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <SectionHeading heading="Exciting Travel News for You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div
          className="mt-7"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <NewsCards
            image="/images/newsmai.jpg"
            title="Top 10 Must-Visit Destinations in Chiang Mai"
            date="20 January 2025"
            newsId="chiangmai-2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCards
            image="/images/tennan.jpg"
            title="10 Tourist attractions in Nan"
            date="25 January 2025"
            newsId="nan-2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCards
            image="/images/tench.png"
            title="Top 10 Scenic Spots in Chiang Rai"
            date="23 January 2025"
            newsId="chaingrai-2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCards
            image="/images/tenkrabi.jpg"
            title="10 Best Natural Wonders in Krabi"
            date="28 January 2025"
            newsId="krabi-2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
