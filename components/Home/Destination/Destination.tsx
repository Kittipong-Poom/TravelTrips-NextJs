import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* ส่วนหัวของหมวดหมู่ */}
      <SectionHeading
        heading="สำรวจจุดหมายปลายทางยอดนิยม"
        description="ผ่อนคลายและเพลิดเพลินไปกับจุดหมายปลายทางยอดนิยมที่มอบความสงบและวิวทิวทัศน์อันงดงาม"
      />
      {/* เนื้อหาในส่วนนี้ */}
      <div className="mt w-[80%] mx-auto">
        {/* สไลเดอร์ */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
