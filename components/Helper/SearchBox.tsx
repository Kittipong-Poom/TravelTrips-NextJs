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
type Props = {
  text: string;
  setText: (value: string) => void;
};
dayjs.extend(buddhistEra);
const SearchBox = ({ text, setText }: Props) => {
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
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedNationalPark, setSelectedNationalPark] = useState<string>("");
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
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const updateCount = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    setter((prevCount: number) => Math.max(0, prevCount + value));
  };
  const handleAdultChange = () => updateCount(setCountAdult, 1);
  const handleAdultRemove = () => updateCount(setCountAdult, -1);
  const handleRoomChange = () => updateCount(setCountRoom, 1);
  const handleRoomRemove = () => updateCount(setCountRoom, -1);
  const handleChildChange = () => updateCount(setCountChild, 1);
  const handleChildRemove = () => updateCount(setCountChild, -1);

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
        <div className="border-2 w-full border-gray-400 rounded-lg flex items-center p-2 shadow-lg">
          <GoSearch className="w-6 h-6 text-gray-900" />
          <input
            type="text"
            className="px-6 py-3.5 outline-none w-full"
            placeholder="Where are you going?"
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
              <li className="p-3 text-gray-500">ไม่พบอุทยานแห่งชาติที่ค้นหา</li>
            )}
          </ul>
        )}
      </div>
      {/* 2nd search input */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="flex items-center space-x-6">
          <FaCalendarWeek className="w-6 h-6 text-green-600" />
          <div>
            <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
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
            <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
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
      {/* 4th search input */}
      <div className="flex items-center space-x-6">
        <FaUserGroup className="w-6 h-6 text-green-600 cursor-pointer" />
        {/* Parent container ต้องใช้ relative */}
        <div className=" p-1 border-green-300 w-full rounded-lg relative cursor-pointer">
          <div onClick={toggleDropdown}>
            <p className="text-lg font-medium mb-[0.2rem]">People Count</p>
            <div className="flex ">
              <div className="mr-3">{countAdult} Adult,</div>
              <div>{countRoom} Room</div>
              {countChild > 0 && (
                <div className="ml-3"> {countChild} Child</div>
              )}
            </div>
            <FaChevronDown className="absolute right-2 top-7 hover:bg-green-300 cursor-pointer duration-200 rounded-lg" />
          </div>

          {/* Dropdown container */}
          {isOpen && (
            <div className="absolute left-0 top-full mt-2 bg-white shadow-md p-4 border rounded w-full z-50">
              <span className="text-base flex items-center justify-between mb-5">
                Room
                <div className="p-1 border ml-11 rounded-full hover:bg-gray-200 duration-200">
                  <IoRemoveOutline
                    onClick={handleRoomRemove}
                    className="w-6 h-6 "
                  />
                </div>
                {countRoom}
                <div className="p-1 border rounded-full hover:bg-gray-200 duration-200">
                  <GoPlus onClick={handleRoomChange} className="w-6 h-6" />{" "}
                </div>
              </span>
              <span className="text-base flex items-center justify-between mb-5">
                <div>
                  <p>Adult</p>
                  <p className="text-xs font-light text-gray-700">
                    Age 18 or more
                  </p>
                </div>
                <div className="p-1 border rounded-full hover:bg-gray-200 duration-200">
                  <IoRemoveOutline
                    onClick={handleAdultRemove}
                    className="w-6 h-6"
                  />
                </div>
                {countAdult}
                <div className="p-1 border rounded-full hover:bg-gray-200 duration-200">
                  <GoPlus onClick={handleAdultChange} className="w-6 h-6" />{" "}
                </div>
              </span>
              <span className="text-base flex items-center justify-between mb-5">
                <div>
                  <p>Child</p>
                  <p className="text-xs font-light text-gray-700">
                    Age 0-17 Years
                  </p>
                </div>
                <div className="p-1 border ml-1.5 rounded-full hover:bg-gray-200 duration-200">
                  <IoRemoveOutline
                    onClick={handleChildRemove}
                    className="w-6 h-6"
                  />
                </div>
                {countChild}
                <div className="p-1 border rounded-full hover:bg-gray-200 duration-200">
                  <GoPlus onClick={handleChildChange} className="w-6 h-6" />{" "}
                </div>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
