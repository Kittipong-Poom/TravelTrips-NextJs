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
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={color}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
    </svg>
  );
};

export default Arrow;
