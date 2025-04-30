import React, { useState } from "react";
import Image from "next/image";
import { Place } from "@/types/PlaceTravel";
const HoverCard = ({ place }: { place: Place }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      className="relative w-80 h-96 bg-green-100 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-[80%] overflow-hidden">
        <Image
          src={place.image}
          width={600}
          height={600}
          alt={place.name}
          className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500"
        />
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full bg-white p-5 transition-all duration-500 ${
          hovered ? "h-[45%]" : "h-[25%]"
        }`}
        style={{
          borderTopLeftRadius: "10% 25px",
          borderTopRightRadius: "10% 25px",
        }}
      >
        <h2 className="text-lg font-bold text-green-900">{place.name}</h2>
        <p className="text-gray-600 text-sm">2 ชั่วโมงที่แล้ว</p>
        <p
          className={`text-gray-500 mt-2 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {place.description}
        </p>
      </div>
    </div>
  );
};

export default HoverCard;
