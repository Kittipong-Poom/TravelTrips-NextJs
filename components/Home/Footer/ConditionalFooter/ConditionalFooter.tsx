"use client";

import Footer from "@/components/Home/Footer/Footer";
import { usePathname } from "next/navigation";

const ConditionalFooter = () => {
  const pathname = usePathname();
  const hideFooterPaths = ["/successPayment", "/logout"];

  if (hideFooterPaths.includes(pathname)) {
    return null;
  }

  return <Footer />;
};

export default ConditionalFooter;
