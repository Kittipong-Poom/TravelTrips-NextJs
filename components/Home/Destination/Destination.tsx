import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading
        heading="Exploring Popular Destinations"
        description="Relax and unwind by discovering popular destinations that offer tranquil environments and stunning views."
      />
      {/* Section Content */}
      <div className="mt w-[80%] mx-auto">
        {/*Slider */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
