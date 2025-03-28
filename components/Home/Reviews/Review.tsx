import React from "react";
import { FaStar } from "react-icons/fa6";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-gray-900">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-white ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            excepturi distinctio tenetur exercitationem possimus adipisci aut
            quisquam illo sit ipsa?
          </p>
          {/* Ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">4.99</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <FaStar className="w-4 h-4 text-amber-400" />
                <FaStar className="w-4 h-4 text-amber-400" />
                <FaStar className="w-4 h-4 text-amber-400" />
                <FaStar className="w-4 h-4 text-amber-400" />
                <FaStar className="w-4 h-4 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
