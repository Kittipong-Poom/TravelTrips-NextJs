import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCards from "./NewsCards";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Section Heading */}
      <SectionHeading heading="Exciting Travel News for you" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <NewsCards
            image="/images/n1.jpg"
            title="Top 10 places to visit in China"
            date="20 January 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCards
            image="/images/n2.jpg"
            title="Top 10 places to visit in Thailand"
            date="25 January 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCards
            image="/images/n3.jpg"
            title="Top 10 places to visit in America"
            date="23 January 2023"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCards
            image="/images/n4.jpg"
            title="Top 10 places to visit in Mexico"
            date="28 January 2023"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
