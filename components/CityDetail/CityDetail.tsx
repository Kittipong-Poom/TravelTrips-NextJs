"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Cities } from "@/data/city";
import Link from "next/link";
import BaseIcon from "@/components/BaseIcons/BaseIcon";
const CityDetail = () => {
  const params = useParams();
  const { id } = params;
  const city = Cities.find((c) => c.id === parseInt(id as string, 10));

  if (!city) return <p>City not found!</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-28">
      <div className=" max-w-[1800px]">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="relative h-[500px]">
            <video
              src={city.video}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">{city.name}</h1>
            </div>
          </div>

          <div className="p-6">
            <p className="text-lg text-gray-600">
              Number of Trips: {city.count}
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Explore the beautiful city of {city.name} with stunning views,
              rich history, and cultural attractions.
            </p>

            <button className="relative bg-[rgb(52,110,218)] text-white mt-4 font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group">
              <span className="mr-10">Book Now</span>
              <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                <BaseIcon icon="Arrow" className="w-5 h-5 text-black" />
              </div>
            </button>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-lg font-bold">Highlights</h2>
                <ul className="mt-2 text-gray-600 list-disc pl-4">
                  <li>Beautiful landmarks</li>
                  <li>Rich history and culture</li>
                  <li>Delicious local food</li>
                </ul>
              </div>

              <div className="bg-gray-200 p-4 rounded-lg">
                <h2 className="text-lg font-bold">Reviews</h2>
                <p className="mt-2 text-gray-600">JaneDoe Prisma</p>
              </div>
            </div>
          </div>
          <div className="p-6 flex items-center ">
            <Link href="/dashboard" className="translate-x-3 cursor-pointer">
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
      </div>
    </div>
  );
};

export default CityDetail;
