import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const WhyChooseCard = ({ image, title }: Props) => {
  return (
    <div className="text-center">
      {/* รูปภาพ */}
      <Image
        src={image}
        width={70}
        height={70}
        alt={title}
        className="mx-auto"
      />
      {/* เนื้อหา */}
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">
        {title === "รับประกันราคาดีที่สุด"
          ? "สัมผัสประสบการณ์การท่องเที่ยวธรรมชาติในราคาที่ดีที่สุด สนุกกับการเดินทางโดยไม่มีค่าใช้จ่ายแอบแฝง"
          : title === "จองง่ายและรวดเร็ว"
          ? "จองที่พักหรือกิจกรรมในอุทยานแห่งชาติได้ง่ายและรวดเร็ว โดยไม่มีความยุ่งยาก"
          : "เรามีบริการลูกค้าตลอด 24 ชั่วโมง เพื่อให้การพักผ่อนในธรรมชาติของคุณราบรื่นและปลอดภัย"}
      </p>
    </div>
  );
};

export default WhyChooseCard;
