"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import { reviewData } from "@/data/data";
import RatingComponent from "@/components/Rating/RatingComponent";
const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        effect={"cards"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
      >
        {reviewData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="bg-white rounded-3xl block">
              <div className="w-[80%] mx-auto mt-16">
                {/* Review text */}
                <p className="text-xs sm:text-sm md:text-base font-semibold">
                  {data.review}
                </p>
                {/* Icon */}
                <div className="flex items-center mt-4">
                  <RatingComponent rating={data.rating} />
                </div>
                {/* users profile */}
                <div className="mt-10">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={data.image}
                      alt="client"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm sm:text-lg font-semibold">
                        {data.name}
                      </p>
                      <p className="text-gray-600 text-xs sm:text-base">
                        Traveler
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ReviewSlider;
