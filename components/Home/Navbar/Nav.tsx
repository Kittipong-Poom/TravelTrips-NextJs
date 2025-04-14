"use client";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiBurningForest } from "react-icons/gi";
import LoginButton from "@/components/UserLogin/LoginLogoutButton";
import UserGreetText from "@/components/UserLogin/UserGreetText";
import { User } from "@supabase/auth-js";
import BaseIcon from "@/components/BaseIcons/BaseIcon";
import { Button } from "@/components/ui/button";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
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
        <div className="hidden lg:flex items-center space-x-5">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p
                  className={`relative text-base font-medium w-fit block 
                    after:block after:content-[''] after:absolute after:bottom-0 after:left-0 
                    after:h-[2px] after:w-full after:bg-green-500 after:scale-x-0 
                    after:transition-transform after:duration-300 after:origin-left 
                    hover:after:scale-x-100 ${
                      isHome
                        ? "text-white"
                        : navBg
                        ? "text-white"
                        : "text-black"
                    }`}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="flex flex-row lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-black">
          {user ? (
            <div className="relative">
              <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <UserGreetText user={user} />
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 lg:w-[300px] w-[300px] bg-white rounded-md shadow-lg z-50 py-2">
                  <div className="px-4 py-2 flex">
                    <div className="text-sm">
                      Hello,{" "}
                      <span className="font-semibold">
                        {user?.user_metadata?.full_name ?? "User"}
                      </span>
                      <span className="block">
                        {user?.user_metadata?.email ?? ""}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <LoginButton setUser={setUser} />
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100 text-center rounded-xl bg-black w-[271px]  ml-4 flex justify-center items-center">
                    <Link className="text-white" href="/settings">
                      Settings
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <LoginButton setUser={setUser} />
          )}

          <Button
            className="group flex lg:hidden ml-3 w-12 h-12  text-white items-center justify-center relative z-10 [transition:all_0.5s_ease] rounded-[0.375rem] p-[5px] cursor-pointer  border-[#999] outline-none focus-visible:outline-0"
            onClick={openNav}
          >
            <BaseIcon icon="Hamburger" className="w-7 h-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
