import React, { useState } from "react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { AnniversaryTrip } from "@/data/trip";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlineDateRange } from "react-icons/md";
import TripDialog from "../../../TripDialog/TripDialog";
import { Trip } from "@/types/RecentTrips";
const RecentTrips = () => {
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  const handleOpenDialog = (trip: Trip) => {
    setSelectedTrip(trip);
  };

  const handleCloseDialog = () => {
    setSelectedTrip(null);
  };
  const latestTrip = {
    ...AnniversaryTrip[0],
    name_th: AnniversaryTrip[0].name_th || "",
  };
  return (
    <div>
      <h2 className="text-lg font-semibold">ทริปล่าสุด</h2>
      <div key={latestTrip.id}>
        <div className="place-items-center md:place-items-start">
          <div className="mt-3 h-40 rounded-xl relative w-full max-w-lg overflow-hidden">
            <Image
              src={latestTrip.image}
              alt={latestTrip.name}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="mt-3 font-medium text-center md:text-left">
            <p>{latestTrip.name}</p>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <TfiLocationPin className="mr-1 text-red-500" />
              <span className="text-xs text-gray-500">
                {latestTrip.location}
              </span>
            </div>
            <p className="text-xs text-gray-500">{latestTrip.date}</p>
          </div>
        </div>
        <ul className="mt-3 space-y-2">
          {AnniversaryTrip.slice(1, 5).map((trip) => {
            const tripWithDefaults: Trip = {
              ...trip,
              name_th: trip.name_th || "",
              description: trip.description || "",
            };
            return (
              <li
                key={tripWithDefaults.id}
                className="flex items-center pb-2 border-b border-gray-300 last:border-none"
              >
                <div className="w-12 h-12 bg-gray-700 rounded-lg">
                  <Image
                    src={tripWithDefaults.image}
                    alt={tripWithDefaults.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold">
                    {tripWithDefaults.name}
                  </p>
                  <div className="flex">
                    <TfiLocationPin className="mr-1 text-red-500" />
                    <p className="text-xs text-gray-500">
                      {tripWithDefaults.location}
                    </p>
                  </div>
                  <div className="flex mt-1">
                    <MdOutlineDateRange className="mr-1 text-green-500" />
                    <p className="text-xs text-gray-500">
                      {tripWithDefaults.date}
                    </p>
                  </div>
                </div>
                <div
                  className="ml-auto text-gray-500 cursor-pointer hover:bg-green-200 p-1 rounded-md"
                  onClick={() => handleOpenDialog(tripWithDefaults)}
                >
                  <GoChevronRight />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {selectedTrip && (
        <TripDialog trip={selectedTrip} onClose={handleCloseDialog} />
      )}
    </div>
  );
};

export default RecentTrips;
