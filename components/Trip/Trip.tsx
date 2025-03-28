"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AnniversaryTrip } from "@/data/trip";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/globals.css";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { CiLocationOn, CiCircleCheck, CiCirclePlus } from "react-icons/ci";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2">
      <div className="relative">
        <div className="h-[220px] bg-gray-300 rounded-lg flex items-center justify-center">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="w-full h-full rounded-xl"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {AnniversaryTrip.map((data) => {
              return (
                <SwiperSlide
                  key={data.id}
                  className="w-full h-full flex flex-col items-center justify-center text-lg font-semibold text-center relative rounded-xl  overflow-hidden"
                >
                  <Image
                    src={data.image}
                    width={500}
                    height={500}
                    alt="client"
                    className="object-fit w-full h-full rounded-xl object-cover  transition duration-300 ease-in-out hover:scale-110"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-base font-semibold">Anniversary Trip</h1>
        <h2 className="text-xl font-semibold">
          {AnniversaryTrip[activeIndex].name}
        </h2>
        <div className="flex items-center font-light text-sm text-gray-600">
          <CiLocationOn />
          <p className="ml-2">{AnniversaryTrip[activeIndex].location}</p>
        </div>
        <p className="text-sm text-gray-500">
          {AnniversaryTrip[activeIndex].date}
        </p>
        <div className="text-sm mt-4 font-normal ">
          <p className="text-gray-600 flex ">
            Housing{" "}
            <span className="ml-7 p-0.5 flex items-center  bg-green-100 w-[89px] rounded-full text-green-600">
              <CiCircleCheck className="text-green-900 mr-2 w-4 h-4" />
              {AnniversaryTrip[activeIndex].housing}
            </span>
          </p>
          <p className="text-gray-600 flex mt-1">
            Transport{" "}
            <span className="ml-4 p-0.5 flex items-center  bg-green-100 w-[89px] rounded-full text-green-600">
              <CiCircleCheck className="text-green-900 mr-2 w-4 h-4" />
              {AnniversaryTrip[activeIndex].transport}
            </span>
          </p>
          {AnniversaryTrip[activeIndex].activities && (
            <p className="text-gray-600 flex mt-1">
              Activities{" "}
              <span className="ml-[21px] p-0.5 flex items-center bg-purple-100 w-[120px] rounded-full text-purple-600">
                <CiCirclePlus className="text-purple-900 mr-2 w-4 h-4" />
                {AnniversaryTrip[activeIndex].activities}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
