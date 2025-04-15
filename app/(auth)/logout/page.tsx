"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

const LogoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.push("/"), 3000);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md"
      >
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          You have successfully logged out.
        </h1>
        <p className="text-gray-600 mb-6">
          Redirecting you to the homepage. Please wait a moment...
        </p>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="h-full bg-green-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LogoutPage;
