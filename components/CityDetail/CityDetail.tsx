"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Cities } from "@/data/city";
import Link from "next/link";
import BaseIcon from "@/components/BaseIcons/BaseIcon";
const CityDetail = () => {
  const params = useParams();
  const { cityId } = params;
  const city = Cities.find((c) => c.cityId === parseInt(cityId as string, 10));

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
