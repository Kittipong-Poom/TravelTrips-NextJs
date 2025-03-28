import React from "react";
import { Transports } from "@/data/transport";
import Image from "next/image";
const Transport = () => {
  return (
    <div className="mt-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
      <h2 className="text-lg font-semibold">Transport</h2>
      {Transports.map((data) => (
        <div
          key={data.id}
          className="flex justify-between items-center p-3 w-full rounded-xl border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full">
              <Image
                src={data.image}
                alt={data.transport}
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-col ">
              {data.icon && <data.icon />}
              <p className="text-sm font-semibold">{data.transport}</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base">{data.origin}</p>
            <p className="text-sm">{data.date}</p>
            <p className="text-[13px]">{data.from}</p>
          </div>
          <div className="border-2 border-gray-200 flex-1 mx-4"></div>
          <div className="flex flex-col items-center">
            <p className="text-base">{data.destination}</p>
            <p className="text-sm">{data.date}</p>
            <p className="text-[13px]">{data.to}</p>
          </div>
          <div className="flex items-center w-24 justify-center">
            <p
              className={`text-xs px-2 py-1 rounded ml-6 ${
                data.status === "Paid" ? "bg-green-200" : "bg-red-200"
              }`}
            >
              {data.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transport;
