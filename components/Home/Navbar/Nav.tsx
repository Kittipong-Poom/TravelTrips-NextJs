"use client";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GiBurningForest } from "react-icons/gi";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState<boolean>(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`${
        navBg ? "bg-gray-900 shadow-md text-white" : "bg-transparent text-black"
      } transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-col">
            <GiBurningForest className="w-6 h-6 text-white" />
          </div>
          <h1
            className={`text-xl md:text-2xl uppercase font-bold ${
              isHome ? "text-white" : navBg ? "text-white" : "text-black"
            }`}
          >
            NatureTrip
          </h1>
        </div>
        {/* NaveLinks */}
        <div className="hidden lg:flex items-center space-x-5">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className={`relative text-base font-medium w-fit block 
                  after:block after:content-[''] after:absolute after:bottom-0 after:left-0 
                  after:h-[2px] after:w-full after:bg-green-500 after:scale-x-0 
                  after:transition-transform after:duration-300 after:origin-left 
                  hover:after:scale-x-100 
                  ${isHome ? "text-white" : navBg ? "text-white" : "text-black"}
                `}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4  ">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Book Now
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
