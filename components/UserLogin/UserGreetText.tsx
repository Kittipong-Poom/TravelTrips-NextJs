import React from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { UserGreetTextProps } from "@/types/User";

const UserGreetText = ({ user }: UserGreetTextProps) => {
  const fullName = user.user_metadata?.full_name || "User";
  const avatarUrl = user.user_metadata?.avatar_url || "";

  return (
    <div className="flex items-center gap-2 cursor-pointer backdrop:blur-sm p-2 rounded-md hover:bg-gray-200 transition-all duration-200 ease-in-out">
      {avatarUrl ? (
        <Image
          src={avatarUrl}
          alt={fullName}
          width={32}
          height={32}
          className="rounded-full"
        />
      ) : (
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm">
          {fullName.charAt(0)}
        </div>
      )}
      <div className="hidden lg:flex items-center gap-1">
        <p className="text-sm text-white mix-blend-difference">
          Hello, <span className="font-semibold">{fullName}</span>!
        </p>
        <FaChevronDown className="text-xs text-white mix-blend-difference" />
      </div>
    </div>
  );
};

export default UserGreetText;
