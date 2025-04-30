import { useEffect, useState } from "react";
import SearchBox from "@/components/Helper/SearchBox";
import BaseModal from "@/components/BaseModal/BaseModal";
import React from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
const Hero = () => {
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedNationalPark, setSelectedNationalPark] = useState<string>("");
  const router = useRouter();
  const handleSearchClick = () => {
    if (!text.trim() && !selectedProvince && !selectedNationalPark) {
      setIsModalOpen(true);
      return;
    }
    const query = new URLSearchParams();
    if (text) query.append("q", text);
    if (selectedProvince) query.append("province", selectedProvince);
    if (selectedNationalPark)
      query.append("nationalPark", selectedNationalPark);

    router.push(`/search/results?${query.toString()}`);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className="relative w-full h-[125vh] sm:h-[100vh] md:h-[100vh] lg:h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800  opacity-800 opacity-70"></div>
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute  w-full h-full  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center flex-col w-full h-full">
          <div data-aos="fade-up">
            <h1 className="text-[25px] mb-4 md:mb-0 p-4 md:p-0 text-center md:text-[35] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">
              สำรวจธรรมชาติ ค้นหาการผจญภัยใหม่
            </h1>
            <p className="md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">
              ค้นพบความงามธรรมชาติที่น่าทึ่งทั่วไทยและทั่วโลก
            </p>
          </div>
          <SearchBox
            text={text}
            setText={setText}
            selectedProvince={selectedProvince}
            setSelectedProvince={setSelectedProvince}
            selectedNationalPark={selectedNationalPark}
            setSelectedNationalPark={setSelectedNationalPark}
          />
          {isLoading ? (
            <Skeleton className="px-14 md:px-28 h-14 -mt-4 py-2.5 rounded-lg" />
          ) : (
            <div
              onClick={handleSearchClick}
              className="rounded cursor-pointer px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r
             hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
            >
              <span
                className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform 
            translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease:"
              ></span>
              <span className="relative font-bold">ค้นหา</span>
            </div>
          )}
          {isModalOpen && (
            <BaseModal
              onClose={() => setIsModalOpen(false)}
              open={isModalOpen}
              title={"กรุณาใส่ข้อมูลอย่างน้อย 1 ช่องเพื่อค้นหา"}
              content={""}
              className="mt-[25%] text-center"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
