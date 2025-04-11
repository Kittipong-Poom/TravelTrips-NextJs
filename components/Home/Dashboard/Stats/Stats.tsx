import React from "react";
import { DataCount } from "@/data/datacount";
import { IoIosTrendingUp } from "react-icons/io";
const Stats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {DataCount.map((data) => (
        <div key={data.id}>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-base font-semibold">{data.name}</h2>
            <div className="mt-12 flex items-center justify-between">
              <h1 className="text-3xl font-bold ml-3">{data.count}</h1>
              <div className="flex items-center text-green-900 rounded-full w-20  justify-center p-1 bg-green-200 ">
                <span className="text-base flex items-center">
                  <IoIosTrendingUp className="mr-3" />
                  <span className="font-light text-sm">{data.percent}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
