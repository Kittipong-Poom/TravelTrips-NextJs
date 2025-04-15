"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { nationalParks } from "@/data/nationalPark";
import Image from "next/image";

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
    <div className="min-h-screen pt-32 px-6 bg-gray-50 ">
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((p) => (
            <div
              key={p.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
            >
              <Image
                src={p.imageUrl ?? "/"}
                alt={p.name}
                width={500}
                height={500}
                className="w-full h-60 object-cover rounded mb-3"
              />
              <h2 className="text-xl font-bold text-green-800 mb-1">
                🌳 {p.name}
              </h2>
              <p className="text-gray-600 text-sm">จังหวัด: {p.province}</p>

              <div className="text-sm text-gray-500 mt-2 space-y-1">
                <p>ค่าธรรมเนียม: {p.fee ?? "ไม่มีข้อมูล"} บาท</p>
                <p>เส้นทางเดินป่า: {p.trails?.length ?? 0} เส้นทาง</p>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2 text-yellow-500">
                  <span>⭐️ {p.rating ?? 0}</span>
                  {p.isPopular && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      แนะนำ
                    </span>
                  )}
                </div>
                <Link href={`/search/${p.id}?query=${p.name}`}>
                  <button className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">
                    ดูรายละเอียด
                  </button>
                </Link>
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
