"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hotelsData } from "@/data/data";
import BaseIcon from "@/components/BaseIcons/BaseIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@/components/ui/button";
const HotelDetailPage = () => {
  const params = useParams();
  const hotelId = parseInt(params.hotelId as string, 10);
  const hotel = hotelsData.find((h) => h.hotelId === hotelId);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };
  if (!hotel) return <p className="text-red-500">Hotel not found!</p>;
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6 pt-28">
      <div className=" w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative h-[400px]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-[400px] rounded-lg shadow-md"
          >
            {(hotel.images ?? []).map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`${hotel.name} - ${index + 1}`}
                  fill
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => openModal(img)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"></div>
        </div>
        {/* Hotel Details */}
        <div className="p-8">
          <h1 className="text-black text-3xl font-bold text-center">
            {hotel.name}
          </h1>
          <div className="mt-6  justify-between grid grid-cols-2 items-center">
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {hotel.location}
              </h2>
              <p className="mt-2 text-gray-600 ">{hotel.description}</p>
            </div>
            {/* ปุ่ม Book Now */}
            <div className="flex justify-end mr-4">
              <button className="relative bg-[#FF6F00] text-white mt-4 w-[200px] font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#c98c3c] group">
                <Link
                  href={`/hotel/${hotel?.hotelId}${hotel?.name}/${hotel?.bookingId}${hotel?.name}`}
                  className="flex justify-end"
                >
                  <span className="mr-10">Book Now</span>
                  <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] top-[0.3em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#c98c3c] active:scale-95">
                    <BaseIcon icon="Arrow" className="w-5 h-5  text-black" />
                  </div>
                </Link>
              </button>
            </div>
          </div>

          {/* Rating & Price */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 ml-3">
              <span className="text-yellow-500 text-lg font-bold">
                ⭐ {hotel.rating}
              </span>
              <span className="text-gray-600 text-sm">
                ({hotel.reviews} Reviews)
              </span>
            </div>
            <span className="text-xl p-2 border rounded-lg bg-red-100 text-red-500 font-bold">
              {hotel.price}฿
            </span>
          </div>
        </div>
        <div className="mt-6 p-8 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-md">
          <h2 className="text-2xl text-center font-semibold text-gray-800">
            Why Choose {hotel.name}?
          </h2>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-center text-gray-800">
                Highlights
              </h3>
              <ul className="mt-2 text-gray-600 list-disc pl-4 space-y-2">
                {(hotel.highlights ?? []).map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-center  text-gray-800">
                Facilities
              </h3>
              <ul className="mt-2 text-gray-600 list-disc pl-4 space-y-2">
                {(hotel.availableFacilities ?? []).map((facility, index) => {
                  if (
                    typeof facility === "object" &&
                    "label" in facility &&
                    "icon" in facility
                  ) {
                    const { icon: Icon, label } = facility;
                    return (
                      <li key={index} className="flex items-center gap-2">
                        <Icon className="text-xl text-green-500" />
                        {label}
                      </li>
                    );
                  }
                  return <li key={index}>{facility}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        {hotel && hotel.nearbyPlaces && hotel.nearbyPlaces.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-center text-gray-800">
                Nearby Attractions
              </h3>
              <ul className="mt-2 text-gray-600 list-disc pl-4 space-y-2">
                {(hotel.nearbyPlaces ?? []).map((place, index) => (
                  <div key={index} className="flex justify-between">
                    {place.name}{" "}
                    <span className="text-sm text-gray-500 ">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-center text-gray-800">
                Cafés & Restaurants
              </h3>
              <ul className="mt-2 text-gray-600 list-disc pl-4 space-y-2">
                {(hotel.cafesAndRestaurants ?? []).map((cafe, index) => (
                  <div key={index} className="flex justify-between">
                    {cafe.name}{" "}
                    <span className="text-sm text-gray-500 ">
                      {cafe.distance}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        )}
        {/* Back Button */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/" className="translate-x-3 cursor-pointer">
            <button
              className="bg-gray-100  text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
              type="button"
            >
              <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <BaseIcon icon="Arrow-left" className="w-5 h-5 text-black" />
              </div>
              <span className="ml-4">Go Back</span>
            </button>
          </Link>
        </div>
      </div>
      <FullScreenImage
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default HotelDetailPage;
