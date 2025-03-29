import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div className="text-center">
      {/* Image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt={title}
        className="mx-auto"
      />
      {/* Content */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">
        {title === "Best Price Guarantee"
          ? "Experience nature travel at the best price. Enjoy your trip without hidden costs."
          : title === "Easy & Quick Booking"
          ? "Book your stay or activities in national parks easily and quickly, no hassle."
          : "We provide 24/7 customer support to ensure your nature getaway is smooth and safe."}
      </p>
    </div>
  );
};

export default WhyChooseCard;
