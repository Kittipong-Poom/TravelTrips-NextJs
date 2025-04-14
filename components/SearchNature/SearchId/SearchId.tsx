"use client";

import { useParams } from "next/navigation";
import { nationalParks } from "@/data/nationalPark";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import RatingComponent from "@/components/Rating/RatingComponent";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
const ParkDetail = () => {
  const params = useParams();
  const { searchId } = params;
  const park = nationalParks.find((p) => p.id.toString() === searchId);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsOpen(true);
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!park) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl text-gray-500">
        ไม่พบข้อมูลอุทยานที่ต้องการ
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* PARALLAX HEADER */}
      <div className="h-[100vh] relative overflow-hidden">
        {park.video ? (
          <video
            className="absolute w-full h-full object-cover bg-center bg-cover parallax-video"
            src={park.video}
            autoPlay
            loop
            muted
            playsInline
            style={{
              transform: `translateY(${scrollY * 0.5}px)`, // Adjust the multiplier for the parallax effect
            }}
          />
        ) : (
          <div
            className="absolute w-full h-full bg-fixed bg-center bg-cover"
            style={{
              backgroundImage: `url(${park.imageUrl || "/images/default.jpg"})`,
            }}
          />
        )}
        {/* overlay + title */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <h1 className="text-white text-5xl md:text-6xl font-bold text-center tracking-wider drop-shadow-lg">
            🌳 {park.name}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* INTRO SECTION */}
        <section
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            ข้อมูลทั่วไป
          </h2>
          <div className="text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>จังหวัด:</strong> {park.province}
            </p>
            <p>
              <strong>ค่าธรรมเนียม:</strong> {park.fee ?? "ไม่มีข้อมูล"} บาท
            </p>
            <p>
              <strong>เส้นทางเดินป่า:</strong>{" "}
              {park.trails?.join(", ") || "ไม่มีข้อมูล"}
            </p>
            <div className="flex items-center">
              Rating : <RatingComponent rating={park.rating ?? 0} />
            </div>

            {park.isPopular && (
              <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm">
                แนะนำโดยทีมงาน
              </div>
            )}
          </div>
        </section>

        {/* ACTIVITIES SECTION */}
        <section
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            กิจกรรมยอดนิยม
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-lg list-disc list-inside">
            {park.activity?.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6">แกลเลอรี่</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {park?.images?.map((images, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <Image
                  src={images}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={500}
                  onClick={() => openModal(images)}
                  className="w-full h-52 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>
        {/* MAP SECTION */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            แผนที่อุทยาน
          </h2>
          {park.location ? (
            <div className="w-full rounded-xl overflow-hidden">
              <GoogleMap location={park.location} />
            </div>
          ) : (
            <div className="w-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-lg">
              ❌ ไม่มีข้อมูลแผนที่ของอุทยานนี้
            </div>
          )}
        </section>
        {/* REVIEWS SECTION */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            รีวิวจากนักท่องเที่ยว
          </h2>
          <div className="space-y-4">
            {[
              '"วิวสวยมาก เดินป่าเหนื่อยนิดหน่อยแต่คุ้มค่ามาก!" — คุณบีม',
              '"ธรรมชาติดีมากๆ อากาศเย็นสบาย มาอีกแน่นอน" — คุณอิง',
            ].map((review, i) => (
              <div
                key={i}
                className="bg-gray-100 p-4 rounded shadow text-gray-700"
              >
                {review}
              </div>
            ))}
          </div>
        </section>
      </div>
      <FullScreenImage
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default ParkDetail;
