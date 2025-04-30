import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import React, { useEffect, useState } from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { FaMountain, FaUserGroup } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import { GoPlus, GoSearch } from "react-icons/go";
import { useDebounce } from "use-debounce";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import SpeechInput from "./SpeechInput";
import { nationalParks } from "@/data/nationalPark";
import { provinces } from "@/data/province";
import { MdClear } from "react-icons/md";
import { Button } from "../ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  text: string;
  setText: (text: string) => void;
  selectedProvince: string;
  setSelectedProvince: (province: string) => void;
  selectedNationalPark: string;
  setSelectedNationalPark: (park: string) => void;
}
dayjs.extend(buddhistEra);
const SearchBox = ({
  text,
  setText,
  selectedProvince,
  setSelectedProvince,
  selectedNationalPark,
  setSelectedNationalPark,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedStartDate, setSelectedDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenNationalPark, setIsOpenNationalPark] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [countAdult, setCountAdult] = useState<number>(1);
  const [countRoom, setCountRoom] = useState<number>(1);
  const [countChild, setCountChild] = useState<number>(0);
  const [filteredNationalParks, setFilteredNationalParks] =
    useState(nationalParks);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedText] = useDebounce(text, 500);
  const handleDateChange =
    (type: "start" | "end") => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if (type === "start") {
        setSelectedDate(value);
      } else {
        setEndDate(value);
      }
    };
  const formatToBuddhistEra = (date: string): string => {
    return date ? dayjs(date).locale("th").format("DD MMMM BBBB") : "";
  };
  const updateCount = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    setter((prevCount: number) => Math.max(0, prevCount + value));
  };
  const filterProvinces = (debouncedText: string) => {
    if (debouncedText) {
      const filtered = provinces
        .filter((province) => province.name_th.includes(debouncedText))
        .map((province) => province.name_th);
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };
  const filterNationalParks = () => {
    if (selectedProvince && searchQuery) {
      const filtered = nationalParks.filter(
        (park) =>
          park.province
            .toLowerCase()
            .includes(selectedProvince.toLowerCase()) &&
          (park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            park.province.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredNationalParks(filtered);
    } else if (selectedProvince) {
      const filtered = nationalParks.filter((park) =>
        park.province.toLowerCase().includes(selectedProvince.toLowerCase())
      );
      setFilteredNationalParks(filtered);
    } else if (searchQuery) {
      const filtered = nationalParks.filter(
        (park) =>
          park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          park.province.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredNationalParks(filtered);
    } else {
      setFilteredNationalParks(nationalParks);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    filterProvinces(debouncedText);
    if (debouncedText === "") {
      setFilteredData([]);
    }
  }, [debouncedText]);

  useEffect(() => {
    filterNationalParks();
  }, [searchQuery, selectedProvince, nationalParks]);

  return (
    <div
      className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 
    items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]"
    >
      <div className="col-span-1 flex justify-center items-center space-x-6 relative">
        {isLoading ? (
          <Skeleton className="h-[40px] w-full rounded-lg" />
        ) : (
          <div className="border-2 w-full border-gray-400 rounded-lg flex items-center p-2 shadow-lg">
            <GoSearch className="w-6 h-6 text-gray-900" />
            <input
              type="text"
              className="px-6 py-3.5 outline-none w-full"
              placeholder="คุณต้องการจะไปไหน?"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex items-center">
              {text && (
                <MdClear
                  className="text-black text-2xl mr-1 cursor-pointer"
                  onClick={() => {
                    setText("");
                    setSelectedProvince("");
                    setSearchQuery("");
                    setFilteredNationalParks([]);
                    setSelectedNationalPark("");
                    setFilteredData([]);
                  }}
                />
              )}
              <SpeechInput setText={setText} />
            </div>
          </div>
        )}
        {/* แสดงผลลัพธ์ที่กรองแล้วใน dropdown */}
        {filteredData.length > 0 && (
          <div className="absolute top-16 right-0 -left-6 z-30 w-full mt-1 border border-gray-400 rounded-lg bg-white shadow-lg">
            <ul className="max-h-60 overflow-y-auto scrollbar-hide">
              {filteredData.map((item, index) => (
                <li
                  key={index}
                  className="px-6 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedProvince(item);
                    setText(item);
                    setFilteredData([]);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {isLoading ? (
        <Skeleton className="h-[40px] w-full rounded-lg" />
      ) : (
        <div className="relative w-full ">
          <div
            className="flex items-center relative h-[72px] border-gray-400 border p-3 rounded-lg shadow-lg w-full cursor-pointer"
            onClick={() => setIsOpenNationalPark(!isOpenNationalPark)}
          >
            <FaMountain className="w-5 h-5 text-green-600" />
            <div className="flex flex-col items-start gap-1 ml-5">
              <p className="text-gray-500 text-sm">อุทยานแห่งชาติ</p>
              <p className="text-lg font-medium text-gray-900">
                {selectedNationalPark}
              </p>
            </div>

            {selectedNationalPark && (
              <MdClear
                className="w-5 h-5 text-gray-500 absolute right-10"
                onClick={() => setSelectedNationalPark("")}
              />
            )}
            <FaChevronDown className="w-5 h-5 text-gray-500 absolute right-3" />
          </div>
          {/* Dropdown */}
          {isOpenNationalPark && (
            <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto z-10">
              <input
                type="text"
                className="w-full p-2 border-b h-16 border-gray-300 outline-none"
                placeholder="ค้นหาอุทยานแห่งชาติ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {filteredNationalParks.map((nationalPark, index) => (
                <li
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedNationalPark(nationalPark.name);
                    setIsOpenNationalPark(false);
                    setSearchQuery("");
                  }}
                >
                  <p className="font-medium">🌳 {nationalPark.name}</p>
                  <p className="text-gray-500 text-sm">
                    จังหวัด: {nationalPark.province}
                  </p>
                </li>
              ))}
              {filteredNationalParks.length === 0 && (
                <li className="p-3 text-gray-500">
                  ไม่พบอุทยานแห่งชาติที่ค้นหา
                </li>
              )}
            </ul>
          )}
        </div>
      )}
      {/* 2nd search input */}
      {isLoading ? (
        <Skeleton className="h-[40px] w-full rounded-lg" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 border-gray-400 border p-3 rounded-lg shadow-lg ">
          <div className="flex items-center space-x-6">
            <FaCalendarWeek className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-lg font-medium mb-[0.2rem]">เริ่มวันที่</p>
              <input
                type="date"
                className="outline-none border-none"
                value={selectedStartDate}
                onChange={handleDateChange("start")}
              />
              {selectedStartDate && (
                <div className="border p-1 border-green-200 rounded-lg bg-green-400 text-black font-normal">
                  <p>วันที่เลือก: {formatToBuddhistEra(selectedStartDate)}</p>
                </div>
              )}
            </div>
          </div>
          {/* 3rd search input */}
          <div className="flex items-center space-x-6">
            <FaCalendarWeek className="w-6 h-6 text-green-600" />
            <div>
              <p className="text-lg font-medium mb-[0.2rem]">ถึงวันที่</p>
              <input
                type="date"
                onChange={handleDateChange("end")}
                value={endDate}
                className="outline-none border-none"
              />
              {endDate && (
                <div className="border p-1 border-green-200 rounded-lg bg-green-400 text-black font-normal">
                  <p>วันที่เลือก: {formatToBuddhistEra(endDate)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* 4th search input */}
      {isLoading ? (
        <Skeleton className="h-[40px] w-full rounded-lg" />
      ) : (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center space-x-6 border-gray-400 border p-3 rounded-lg shadow-lg ">
            <FaUserGroup className="w-6 h-6 text-green-600" />
            <DrawerTrigger asChild>
              <div className="p-1 border-green-300 w-full rounded-lg relative cursor-pointer">
                <p className="text-lg font-medium mb-[0.2rem]">จำนวนคน</p>
                <div className="flex">
                  <div className="mr-3">{countAdult} ผู้ใหญ่,</div>
                  <div>{countRoom} ห้อง</div>
                  {countChild > 0 && (
                    <div className="ml-3">{countChild} เด็ก</div>
                  )}
                </div>
                <FaChevronDown className="absolute right-2 top-7" />
              </div>
            </DrawerTrigger>
          </div>

          <DrawerContent>
            <div className="mx-auto w-full max-w-sm p-4">
              <DrawerHeader>
                <DrawerTitle>จำนวนคน</DrawerTitle>
              </DrawerHeader>

              {/* Room */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-base">ห้อง</span>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    onClick={() => updateCount(setCountRoom, -1)}
                    disabled={countRoom <= 1}
                  >
                    <IoRemoveOutline className="w-5 h-5" />
                  </Button>
                  <span>{countRoom}</span>
                  <Button
                    size="icon"
                    onClick={() => updateCount(setCountRoom, 1)}
                  >
                    <GoPlus className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Adult */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p>ผู้ใหญ่</p>
                  <p className="text-xs text-gray-500">อายุ 18 หรือ มากกว่า</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    onClick={() => updateCount(setCountAdult, -1)}
                    disabled={countAdult <= 1}
                  >
                    <IoRemoveOutline className="w-5 h-5" />
                  </Button>
                  <span>{countAdult}</span>
                  <Button
                    size="icon"
                    onClick={() => updateCount(setCountAdult, 1)}
                  >
                    <GoPlus className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Child */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p>เด็ก</p>
                  <p className="text-xs text-gray-500">อายุ 0-17 ปี</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="icon"
                    onClick={() => updateCount(setCountChild, -1)}
                    disabled={countChild <= 0}
                  >
                    <IoRemoveOutline className="w-5 h-5" />
                  </Button>
                  <span>{countChild}</span>
                  <Button
                    size="icon"
                    onClick={() => updateCount(setCountChild, 1)}
                  >
                    <GoPlus className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <DrawerFooter>
                <Button onClick={() => setIsOpen(false)}>บันทึก</Button>
                <DrawerClose asChild>
                  <Button variant="outline">ยกเลิก</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </div>
  );
};

export default SearchBox;
