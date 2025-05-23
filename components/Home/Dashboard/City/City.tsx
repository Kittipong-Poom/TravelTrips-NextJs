import React from "react";
import { MdChevronRight } from "react-icons/md";
import { Cities } from "@/data/city";
import Image from "next/image";
import Link from "next/link";

const City = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">สถานที่ท่องเที่ยวเข้าชมมาที่สุด</h2>
      <ul className="mt-3 space-y-2">
        {Cities.map((data) => (
          <li key={data.id} className="flex items-center text-sm">
            <div className="border-2 rounded-xl w-16 h-16 shrink-0 min-w-[4rem] min-h-[4rem]">
              <Image
                src={data.image}
                alt={data.name}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center w-full p-2 border-b">
              <span className="ml-3 flex-1 truncate">{data.name}</span>
              <div className="flex items-center justify-center w-[90px] text-lg font-semibold">
                <span>{data.count}</span>
              </div>
              <Link href={`/dashboard/${data.id}${data.name}`}>
                <button className="flex items-center text-xs text-black bg-green-200 px-3 py-1 rounded-full hover:bg-green-300 transition duration-200">
                  View Trips
                  <MdChevronRight className="ml-1 h-4 w-4" />
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default City;
