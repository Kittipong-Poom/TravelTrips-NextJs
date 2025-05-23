import React, { lazy, Suspense } from "react";
const iconMap = {
  Arrow: lazy(() => import("./icons/Arrow")),
  "Arrow-left": lazy(() => import("./icons/Arrow-left")),
  Google: lazy(() => import("./icons/Google")),
  Github: lazy(() => import("./icons/Github")),
};

type IconName = keyof typeof iconMap;

interface BaseIconProps {
  icon: IconName;
  color?: string;
  size?: number;
  className?: string;
}

const BaseIcon: React.FC<BaseIconProps> = ({
  icon,
  color = "currentColor",
  size = 24,
  className = "",
}) => {
  const IconComponent = iconMap[icon];
  return (
    <Suspense fallback={<span>Loading icon...</span>}>
      <IconComponent color={color} size={size} className={className} />
    </Suspense>
  );
};

export default BaseIcon;
