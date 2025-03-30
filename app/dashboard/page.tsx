"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "@/components/Home/Dashboard/Dashboard";
import LinearProgressCountUp from "@/components/LinearProgressCountUp/LinearProgress";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedDashboard");
    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisitedDashboard", "true");
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, []);

  return <div>{loading ? <LinearProgressCountUp /> : <Dashboard />}</div>;
};

export default Page;
