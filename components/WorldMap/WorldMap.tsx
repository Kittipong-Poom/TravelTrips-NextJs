import React from "react";
import dynamic from "next/dynamic";

const DynamicMapComponent = dynamic(() => import("@/components/MapOSM/Map"), {
  ssr: false,
});
const Map = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Maps</h2>
      <div className="mt-3 flex justify-between">
        <DynamicMapComponent />
      </div>
    </div>
  );
};

export default Map;
