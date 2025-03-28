"use client";
import React from "react";
import Dashboard from "@/components/Home/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import LinearProgressCountUp from "@/components/LinearProgressCountUp/LinearProgress";

const Page = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);
  return <div>{loading ? <LinearProgressCountUp /> : <Dashboard />}</div>;
};

export default Page;
