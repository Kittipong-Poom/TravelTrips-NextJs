import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import NewsCards from "./NewsCards";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      {/* หัวข้อส่วน */}
      <SectionHeading heading="ข่าวการเดินทางที่น่าตื่นเต้นสำหรับพวกคุณ" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div
          className="mt-7"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <NewsCards
            image="/images/newsmai.jpg"
            title="10 สถานที่ท่องเที่ยวที่ต้องไปในเชียงใหม่"
            date="20 มกราคม 2025"
            newsId="chiangmai-2025"
          />
        </div>
        <div
          className="mt-7"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCards
            image="/images/tennan.jpg"
            title="10 สถานที่ท่องเที่ยวในน่าน"
            date="25 มกราคม 2025"
            newsId="nan-2025"
          />
        </div>
        <div
          className="mt-7"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <NewsCards
            image="/images/tench.png"
            title="10 จุดชมวิวที่สวยที่สุดในเชียงราย"
            date="23 มกราคม 2025"
            newsId="chaingrai-2025"
          />
        </div>
        <div
          className="mt-7"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <NewsCards
            image="/images/tenkrabi.jpg"
            title="10 สิ่งมหัศจรรย์ธรรมชาติที่ดีที่สุดในกระบี่"
            date="28 มกราคม 2025"
            newsId="krabi-2025"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
