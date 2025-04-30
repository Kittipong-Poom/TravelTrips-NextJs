"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Cities } from "@/data/city";
import Link from "next/link";
import BaseIcon from "@/components/BaseIcons/BaseIcon";
import RatingComponent from "../Rating/RatingComponent";
import NotFound from "@/components/404NotFound/NotFound";
import { Skeleton } from "@/components/ui/skeleton";
const CityDetail = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = useParams();
  const { cityId } = params;
  const city = Cities.find((c) => c.cityId === parseInt(cityId as string, 10));

  if (!city) return <NotFound />;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, [cityId]);
  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-28">
      <div className=" max-w-[1800px]">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          {isLoading ? (
            <Skeleton className="h-[500px]" />
          ) : (
            <div className="relative h-[500px]">
              <video
                src={city.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-white text-5xl font-extrabold font-mono text-shadow-lg">
                  {city.name}
                </h1>
              </div>
            </div>
          )}

          <div className="p-6">
            {isLoading ? (
              <Skeleton className="h-[70px] w-full" />
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md space-y-4 ">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-green-600 font-bold text-lg">
                    การเดินทาง:
                  </span>
                  <p className="text-lg font-medium text-gray-800">
                    {city.count} การเดินทางที่ได้สำรวจ
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed text-base flex justify-center">
                  มาค้นพบความงามและเสน่ห์ของ {city.name} กับธรรมชาติที่น่าทึ่ง
                  และประสบการณ์ที่น่าจดจำ—ตั้งแต่เส้นทางเดินป่าที่สวยงาม
                  ไปจนถึงแหล่งท่องเที่ยวที่น่าตื่นเต้น!
                </p>
              </div>
            )}
            {isLoading ? (
              <Skeleton className="h-[250px] w-full" />
            ) : (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-100 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold text-green-900 mb-4">
                    Highlights
                  </h2>
                  <div className="space-y-4">
                    {city.highlights.map((highlight, index) => {
                      const googleMapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
                        highlight
                      )}`;
                      return (
                        <div key={index} className="text-base">
                          <a
                            href={googleMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-green-600 hover:text-green-800 transition duration-300"
                          >
                            {highlight}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-green-200 p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-semibold text-green-900 mb-4">
                    Reviews
                  </h2>
                  {city.reviews && city.reviews.length > 0 ? (
                    <ul className="space-y-4">
                      {city.reviews.map((review, index) => (
                        <li
                          key={index}
                          className="border-b pb-3 border-gray-200"
                        >
                          <div className="flex items-center mb-2">
                            <span className="font-semibold text-gray-800">
                              {review.name}
                            </span>
                            <span className="text-gray-500 text-sm ml-2 flex items-center">
                              <p className="mr-1.5 font-normal text-gray-800">
                                {review.rating}
                              </p>
                              <RatingComponent rating={review.rating} />
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mt-1">
                            {review.review}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No reviews available.</p>
                  )}
                </div>
              </div>
            )}
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
