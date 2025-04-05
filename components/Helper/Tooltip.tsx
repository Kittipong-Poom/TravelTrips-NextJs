import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <motion.div
          ref={tooltipRef}
          className="absolute origin-bottom-right  mb-2  text-white  font-medium text-sm bg-[#1A1F2C] rounded-lg  text-center p-2 w-max max-w-xs"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ whiteSpace: "pre-wrap" }}
        >
          {text}
        </motion.div>
      )}
    </div>
  );
};

export default Tooltip;
