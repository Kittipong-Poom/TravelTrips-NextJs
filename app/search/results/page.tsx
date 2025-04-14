import Nature from "@/components/SearchNature/Nature";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense
        fallback={<div className="pt-32 text-center">กำลังโหลดผลลัพธ์...</div>}
      >
        <Nature />
      </Suspense>
    </div>
  );
};

export default page;
