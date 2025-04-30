import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* หัวข้อส่วนนี้ */}
      <SectionHeading
        heading="ทำไมถึงเลือกเรา"
        description="สำรวจความงามของอุทยานแห่งชาติและธรรมชาติในช่วงฤดูหนาวที่เย็นสบาย มอบความผ่อนคลายและความสงบสุขให้กับคุณ"
      />

      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 items-center mt-20">
        {/* การ์ดเหตุผลที่เลือกเรา */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="/images/c1.svg" title="รับประกันราคาดีที่สุด" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard image="/images/c2.svg" title="จองง่ายและรวดเร็ว" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="บริการลูกค้าตลอด 24 ชั่วโมง"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
