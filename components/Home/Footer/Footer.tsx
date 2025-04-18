import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 1st part */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">About us</h1>
          <p className="text-gray-800 font-medium text-sm">
            Explore natural tourist attractions
          </p>
        </div>
        {/* 2nd part */}
        <div className="space-y-5 lg:text-center">
          <h1 className="text-lg font-bold">Contact us</h1>
          <p className="text-gray-800 font-medium text-sm">+012 1234 1612</p>
          <p className="text-gray-800 font-medium text-sm">example@gmail.com</p>
        </div>
        {/* 3rd part */}
        <div className="space-y-5 ">
          <h1 className="text-lg font-bold lg:text-end">Follow Me</h1>
          <div className="flex space-x-4 lg:justify-end">
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaFacebook />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-800">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 text-center text-gray-600 text-sm">
        <p>Copyright © 2025 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
