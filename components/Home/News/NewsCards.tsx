import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCards = ({ image, title, date }: Props) => {
  return (
    <div>
      {/* Image */}
      <div className="h-[300px]">
        <Image
          src={image}
          width={500}
          height={500}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Text Content */}
      <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-gray-900 transition-all duration-200 cursor-pointer">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCards;
