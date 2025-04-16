"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { nationalParks } from "@/data/nationalPark";
import Image from "next/image";
import RatingComponent from "../Rating/RatingComponent";
import { motion } from "framer-motion";

type NationalPark = {
  id: number;
  name: string;
  province: string;
  imageUrl?: string;
  fee?: number;
  trails?: string[];
  rating?: number;
  isPopular?: boolean;
};

const SearchResults = () => {
  const searchParams = useSearchParams();

  const q = searchParams.get("q")?.toLowerCase() || "";
  const province = searchParams.get("province")?.toLowerCase() || "";
  const nationalPark = searchParams.get("nationalPark")?.toLowerCase() || "";

  const [results, setResults] = useState<NationalPark[]>([]);

  useEffect(() => {
    const filtered = nationalParks.filter((p) => {
      const matchesText =
        p.name.toLowerCase().includes(q) ||
        p.province.toLowerCase().includes(q);

      const matchesProvince = province
        ? p.province.toLowerCase().includes(province)
        : true;

      const matchesPark = nationalPark
        ? p.name.toLowerCase().includes(nationalPark)
        : true;

      return matchesText && matchesProvince && matchesPark;
    });

    setResults(filtered);
  }, [q, province, nationalPark]);

  return (
    <div className="min-h-screen pt-32 px-6 bg-gradient-to-r from-blue-50 to-gray-50">
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((p) => (
            <div
              key={p.id}
              className="relative group border rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={p.imageUrl ?? "/"}
                  alt={p.name}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.isPopular && (
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    แนะนำ
                  </span>
                )}
              </div>
              <div className="p-5 space-y-3">
                <h2 className="text-2xl font-bold text-green-800 truncate">
                  🌳 {p.name}
                </h2>
                <p className="text-sm text-gray-600">จังหวัด: {p.province}</p>
                <div className="text-sm text-gray-500">
                  <p>ค่าธรรมเนียม: {p.fee ?? "ไม่มีข้อมูล"} บาท</p>
                  <p>เส้นทางเดินป่า: {p.trails?.length ?? 0} เส้นทาง</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-yellow-500 space-x-2">
                    <span className="text-base font-semibold flex w-[150px] items-center">
                      <RatingComponent rating={p.rating ?? 0} /> {p.rating ?? 0}
                    </span>
                  </div>
                  <Link href={`/search/${p.id}?query=${p.name}`}>
                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0px 8px 20px rgba(62, 170, 71)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative text-sm bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full shadow-lg overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition duration-500"></span>
                      <span className="relative z-10">ดูรายละเอียด</span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh] text-xl text-gray-500">
          ไม่พบผลลัพธ์ที่ตรงกับคำค้น
        </div>
      )}
    </div>
  );
};

export default SearchResults;
