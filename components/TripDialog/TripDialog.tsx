import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Image from "next/image";
import { CgCalendar } from "react-icons/cg";
import { TfiLocationPin } from "react-icons/tfi";
import Tooltip from "@/components/Helper/Tooltip"; // ปรับ path ตามโปรเจกต์ของคุณ

interface TripDialogProps {
  onClose: () => void;
  trip: {
    name: string;
    location: string;
    date: string;
    image: string;
    name_th: string;
    description: string;
  } | null;
}

const TripDialog: React.FC<TripDialogProps> = ({ trip, onClose }) => {
  if (!trip) return null;

  return (
    <AnimatePresence>
      {trip && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Animated modal container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-lg p-4 max-w-lg w-[500px]"
          >
            <div className="font-light ">
              <div className="mb-3">
                <Image
                  src={trip.image}
                  alt={trip.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-3xl hover:text-green-500 transition duration-200 ease-in-out font-semibold text-center">
                {trip.name}
              </h2>
              <div className="font-semibold ">
                <div className="flex items-center">
                  <TfiLocationPin className="mr-2 text-xl" />
                  <p className="mt-1 text-xl text-red-500 ">{trip.location}</p>
                </div>
                <div className="flex items-center">
                  <CgCalendar className="mr-2 text-xl" />
                  <p className="text-xl text-black">{trip.date}</p>
                </div>
              </div>
              <div>
                <Tooltip text={trip.description}>
                  <p className="mt-2 text-gray-900 line-clamp-2">
                    {trip.description}
                  </p>
                </Tooltip>
              </div>
              <button
                onClick={onClose}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full w-full hover:bg-red-700 transition duration-300 ease-in-out"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TripDialog;
