import React from "react";
import { IconProps } from "../IconProps";

const Arrow: React.FC<IconProps> = ({
  className = "",
  color = "currentColor",
  size = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      height={size}
      width={size}
      className={className}
    >
      <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill={color}
      ></path>
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill={color}
      ></path>
    </svg>
  );
};

export default Arrow;
