"use client";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Transport from "@/components/Transport/Transport";
import Trip from "@/components/Trip/Trip";
import Stats from "@/components/Stats/Stats";
import WorldMap from "@/components/WorldMap/WorldMap";
import City from "@/components/City/City";
import RecentTrips from "@/components/RecentTrips/RecentTrips";
import Housing from "@/components/Housing/Housing";
const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen pt-32">
      <div className="grid  grid-cols-1 md:grid-cols-[auto,2fr,1fr] gap-6 ">
        <div className="space-y-6">
          <div className="bg-white shadow-md  rounded-2xl p-4">
            <div className="grid gap-1 text-center text-sm mt-3">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>
          <div className="bg-white shadow-md  rounded-lg p-4">
            <RecentTrips />
          </div>
        </div>
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2 md:col-span-2 xl:col-span-1">
          <Trip />
          {/* Housing */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <Housing />
          </div>
          {/* Transport */}
          <div className="bg-white shadow-md rounded-xl p-4">
            <Transport />
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="space-y-6 ">
          <Stats />
          <WorldMap />
          <City />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
