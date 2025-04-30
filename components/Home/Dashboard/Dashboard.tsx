"use client";
import React, { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import LinearProgressCountUp from "@/components/LinearProgressCountUp/LinearProgress";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Transport from "@/components/Home/Dashboard/Transport/Transport";
import Trip from "@/components/Home/Dashboard/Trip/Trip";
import Stats from "@/components/Home/Dashboard/Stats/Stats";
import WorldMap from "@/components/Home/Dashboard/WorldMap/WorldMap";
import City from "@/components/Home/Dashboard/City/City";
import RecentTrips from "@/components/Home/Dashboard/RecentTrips/RecentTrips";
import Housing from "@/components/Home/Dashboard/Housing/Housing";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLoadingSkeleton, setIsLoadingSkeleton] = useState<boolean>(true);
  const loaderDashboard = async () => {
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
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingSkeleton(false);
    }, 1300);
    loaderDashboard();
  }, []);

  return (
    <div>
      {loading ? (
        <LinearProgressCountUp />
      ) : (
        <div className="p-6 bg-gray-100 min-h-screen pt-32">
          <div className="grid grid-cols-1 md:grid-cols-[auto,2fr,1fr] gap-6">
            {/* Calendar Section */}
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-2xl p-4">
                {isLoadingSkeleton ? (
                  <Skeleton className="h-[350px] w-[350px]" />
                ) : (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                )}
              </div>
              <div className="bg-white shadow-md rounded-lg p-4">
                {isLoadingSkeleton ? (
                  <Skeleton className="h-[550px] w-[350px]" />
                ) : (
                  <RecentTrips />
                )}
              </div>
            </div>

            {/* Main Content Section */}
            <div className="space-y-6 lg:col-span-2 md:col-span-2 xl:col-span-1">
              {isLoadingSkeleton ? (
                <Skeleton className="h-48 w-full rounded-md bg-gray-200  " />
              ) : (
                <Trip />
              )}
              <div className="bg-white shadow-md rounded-lg p-4">
                {isLoadingSkeleton ? (
                  <Skeleton className="h-48 w-full" />
                ) : (
                  <Housing />
                )}
              </div>
              <div className="bg-white shadow-md rounded-xl p-4">
                {isLoadingSkeleton ? (
                  <Skeleton className="h-72 w-full" />
                ) : (
                  <Transport />
                )}
              </div>
            </div>

            {/* Right Side Section */}
            <div className="space-y-6">
              {isLoadingSkeleton ? (
                <Skeleton className="h-40 w-full bg-gray-200 border border-gray-300" />
              ) : (
                <Stats />
              )}
              {isLoadingSkeleton ? (
                <Skeleton className="h-40 w-full bg-gray-200 border border-gray-300" />
              ) : (
                <WorldMap />
              )}
              {isLoadingSkeleton ? (
                <Skeleton className="h-40 w-full bg-gray-200 border border-gray-300" />
              ) : (
                <City />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
