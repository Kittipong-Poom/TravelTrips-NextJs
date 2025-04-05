import React from "react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  image: string;
  title: string;
  date: string;
  newsId: string;
};
const NewsCards = ({ image, title, date, newsId }: Props) => {
  return (
    <div>
      <Link href={`/${newsId}`} passHref>
        <div className="h-[300px] relative overflow-hidden rounded-lg group cursor-pointer">
          <Image
            src={image}
            width={500}
            height={500}
            alt={title}
            className="w-full h-full object-cover rounded-lg cursor-pointer absolute inset-0 transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      {/* Text Content */}
      <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-gray-900 transition-all duration-200 cursor-pointer">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
};

export default NewsCards;
