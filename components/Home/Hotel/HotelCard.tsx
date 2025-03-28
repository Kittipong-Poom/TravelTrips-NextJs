import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotel }: Props) => {
  const [likeCount, setLikeCount] = useState<number>(0);
  const [showHeart, setShowHeart] = useState<{ id: number; y: number }[]>([]);
  const [reviews, setReviews] = useState(hotel.reviews);
  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
    setShowHeart((prevHearts) => [
      ...prevHearts,
      { id: Date.now(), y: Math.random() * 20 },
    ]);
  };
  const getRandomReviews = () => {
    return Math.floor(Math.random() * (20000 - 1 + 1) + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setReviews(getRandomReviews().toString());
    }, 3000);
    // ทำการเคลียร์ interval เมื่อคอมโพเนนต์ถูกทำลาย
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
        {/* Add to fav button */}
        <div
          onClick={handleLike}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center
        flex-col"
        >
          <FaHeart className="w-3 h-3" />
          <AnimatePresence>
            {showHeart.map((heart) => (
              <motion.div
                key={heart.id}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -30 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute top-4 right-12 text-red-500 text-2xl"
              >
                ❤️
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* overLay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
        {/* Image */}
        <Image
          src={hotel.image}
          alt={hotel.name}
          width={500}
          height={500}
          className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110"
        />
      </div>
      {/* Content */}
      <div>
        <p className="mt-4 text-base font-semibold">
          Liked :{" "}
          <span className="p-2 w-8  bg-green-300 rounded-lg text-lg font-semibold">
            {likeCount}
          </span>
        </p>
        <h1 className="mt-4 text-lg font-semibold text-gray-900 hover:text-black cursor-pointer transition-all duration-200">
          {hotel.name}
        </h1>
        <p className="text-sm text-gray-600 mt-3 mb-6 font-medium">
          {hotel.location}
        </p>
        {/* Content */}
        <div className="flex items-center space-x-2">
          <div className="px-2 py-2 bg-gray-900 rounded-md font-bold text-white text-xs">
            {hotel.rating}
          </div>
          <p className="text-sm text-gray-800">Exceptional</p>
          <motion.p
            key={reviews} // ทำให้ Framer Motion รู้ว่าเมื่อค่ารีวิวเปลี่ยนแปลง จะต้องรีเซ็ทแอนิเมชั่น
            className="text-sm font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }} // ตั้งเวลาในการทำแอนิเมชั่น
          >
            {reviews} Reviews
          </motion.p>
        </div>
        {/* prices */}
        <p className="mt-3 text-gray-700 font-medium">
          Starting from{" "}
          <span className="text-red-600 font-bold">US${hotel.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
