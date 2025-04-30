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
        {/* เนื้อหาข้อความ */}
        <div>
          <h1 className="text-2xl font-semibold text-white">
            ลูกค้าของเรากำลังพูดถึงอะไรบ้าง?
          </h1>
          <p className="mt-6 text-white ">
            รายละเอียดในส่วนนี้จะแสดงถึงภาพรวมของการท่องเที่ยวที่ผ่านมาของนักท่องเที่ยวที่ใช้บริการ
          </p>
          {/* คะแนนรีวิว */}
          <div className="mt-6 flex items-center space-x-6">
            <div>
              <p className="text-2xl font-bold text-white">{averageRating}</p>
              <p className="text-white mb-2">คะแนนรวมทั้งหมด</p>
              <div className="flex items-center">
                <RatingComponent rating={averageRating} />
              </div>
            </div>
          </div>
        </div>
        {/* สไลเดอร์ */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
