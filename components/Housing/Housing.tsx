import React from "react";
import { Housing } from "@/data/housing";
import Image from "next/image";
import RatingComponent from "@/components/Rating/RatingComponent";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const housing = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Housing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 mt-3">
        {Housing.map((data) => (
          <div
            key={data.id}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4"
          >
            <div className="h-full rounded-lg relative max-w-xs overflow-hidden">
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-xl font-semibold">{data.name}</p>
                <p className="text-sm font-light underline text-gray-500">
                  {data.location}
                </p>
                <p className="text-sm mt-5 font-light">{data.date}</p>
              </div>
              <div className="text-sm font-semibold">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <p>{data.rating}</p>
                  <RatingComponent rating={data.rating} />
                </div>
                <div className="flex justify-between">
                  <p>{data.price}</p>
                  <div className="p-1  bg-green-200 flex items-center rounded-full w-[70px] ">
                    <IoIosCheckmarkCircleOutline className="mr-2 w-5 h-5" />
                    <p className="font-light">{data.pay}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default housing;
