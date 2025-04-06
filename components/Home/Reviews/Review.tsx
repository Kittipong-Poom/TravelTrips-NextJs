import React from "react";
import ReviewSlider from "./ReviewSlider";
import { reviewData } from "@/data/data";
import RatingComponent from "@/components/Rating/RatingComponent";

const Review = () => {
  const averageRating =
    reviewData.reduce((sum, review) => sum + review.rating, 0) /
    reviewData.length;
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-gray-900">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-white ">
            The details here will tell the overall picture of the past tourism
            of tourists who use the service.
          </p>
          {/* Ratings */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">{averageRating}</p>
              <p className="text-white mb-2">Overall Rating</p>
              <div className="flex items-center">
                <RatingComponent rating={averageRating} />
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
