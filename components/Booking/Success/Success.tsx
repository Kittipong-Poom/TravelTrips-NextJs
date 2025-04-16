"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PaymentSuccess = () => {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => router.push("/"), 5000);
    return () => clearTimeout(timeout);
  }, [router]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 to-green-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center bg-white shadow-xl rounded-lg p-8 max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-500 rounded-full"
        >
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </motion.div>
        <h1 className="text-3xl font-extrabold text-green-700 mb-2">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for your booking. You will be redirected shortly.
        </p>
        <p className="text-sm text-gray-500">Redirecting to homepage...</p>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
