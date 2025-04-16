import React, { useState, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { usePathname } from "next/navigation";
type Props = {
  isLoggedIn: boolean;
  userName: string | null;
};
const Notification = ({ isLoggedIn, userName }: Props) => {
  const [notifications, setNotifications] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const handleAddNotification = () => {
    setNotifications((prev) => [...prev, prev.length + 1]);
    toast(`New Notification #${notifications.length + 1}`, {
      description: "You have a new message.",
    });
  };
  const handleClearNotifications = () => {
    setNotifications([]);
  };
  const handleRemoveNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };
  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        handleAddNotification();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);
  if (pathname === "/login") {
    return null;
  }
  return (
    <div className="relative">
      <div
        className="p-3 rounded-xl mt-1 bg-white flex justify-center items-center mr-3 cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <FaBell className="text-2xl text-black" />
        {notifications.length > 0 && (
          <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
            {notifications.length}
          </div>
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50">
          <div className="p-4">
            <h3 className="text-sm font-medium text-black">Notifications</h3>
            {notifications.length > 0 && (
              <div
                onClick={handleClearNotifications}
                className="text-xs text-red-500 hover:underline flex items-center cursor-pointer"
              >
                Clear All
              </div>
            )}
            <ul className="mt-2 space-y-1">
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="text-sm bg-gray-100 p-2 rounded-md shadow-sm flex items-center justify-between"
                >
                  {isLoggedIn
                    ? `You are now logged in as ${userName}`
                    : `Notification #${notification}`}{" "}
                  <div
                    onClick={() => handleRemoveNotification(index)}
                    className="text-red-500 text-xs hover:underline cursor-pointer"
                  >
                    Remove
                  </div>
                </li>
              ))}
            </ul>
            {notifications.length === 0 && (
              <p className="text-sm text-gray-500">No notifications yet.</p>
            )}
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Notification;
