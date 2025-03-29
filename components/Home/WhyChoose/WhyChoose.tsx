import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Section Heading */}
      <SectionHeading
        heading="Why Choose Us"
        description="Explore the beauty of national parks and nature during the cool winter months, offering relaxation and tranquility."
      />

      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 items-center mt-20">
        {/* Why Choose Us Card */}
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
