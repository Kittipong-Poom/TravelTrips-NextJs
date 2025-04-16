"use client";

import { useParams } from "next/navigation";
import { nationalParks } from "@/data/nationalPark";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import RatingComponent from "@/components/Rating/RatingComponent";
import FullScreenImage from "@/components/FullScreenImage/FullScreenImage";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import { FaFacebookSquare, FaLine, FaPhoneAlt } from "react-icons/fa";

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
              backgroundImage: `url(${park.imageUrl})`,
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
            {park.highlight && (
              <p>
                <strong>จุดเด่น:</strong> {park.highlight}
              </p>
            )}
            {park.seasonalInfo && (
              <p>
                <strong>ฤดูท่องเที่ยว:</strong> {park.seasonalInfo}
              </p>
            )}
            {park.fee && (
              <p>
                <strong>ค่าธรรมเนียม:</strong> {park.fee} บาท
              </p>
            )}
            {park.trails && park.trails.length > 0 && (
              <p>
                <strong>เส้นทางเดินป่า:</strong> {park.trails.join(", ")}
              </p>
            )}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 w-[200px]">
                <span className="font-semibold">Rating:</span>
                <RatingComponent rating={park.rating ?? 0} />
              </div>
              <span className="text-gray-600">{park.rating ?? 0}</span>
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
        {park.accommodations && park.accommodations.length > 0 && (
          <section data-aos="fade-up">
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              ที่พักใกล้อุทยาน
            </h2>
            <div className="space-y-6">
              {park.accommodations.map((acc, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  {acc.imageUrl && (
                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {(Array.isArray(acc.imageUrl)
                        ? acc.imageUrl
                        : [acc.imageUrl]
                      ).map((img, i) => (
                        <div
                          key={i}
                          className="overflow-hidden rounded-xl cursor-pointer"
                        >
                          <Image
                            src={img}
                            alt={`${acc.name} ${i + 1}`}
                            width={800}
                            height={500}
                            onClick={() => openModal(img)}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    🛏️ {acc.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{acc.description}</p>
                  <p className="text-sm text-gray-500">📍 {acc.location}</p>
                  {acc.contact && (
                    <div className="mt-2 text-sm text-blue-600 space-y-1">
                      {acc.contact.phone && (
                        <p className="flex items-center text-lg">
                          <FaPhoneAlt className="h-8 w-8 mr-3" /> โทร:{" "}
                          {acc.contact.phone}
                        </p>
                      )}
                      {acc.contact.line && (
                        <p className="flex items-center text-lg">
                          <FaLine className="h-8 w-8 mr-3 text-green-500" />
                          <span className="mr-1">:</span>
                          <a
                            href={`https://line.me/R/ti/p/~${acc.contact.line.replace(
                              "@",
                              ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                          >
                            {acc.contact.line}
                          </a>
                        </p>
                      )}
                      {acc.contact.facebook && (
                        <div className="flex items-center text-lg">
                          <FaFacebookSquare className="h-8 w-8 mr-3" />
                          Facebook :
                          <a
                            href={acc.contact.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-800 truncate max-w-full sm:max-w-[75%] md:max-w-[50%]"
                          >
                            {acc.contact.facebook}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
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
