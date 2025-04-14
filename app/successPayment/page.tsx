import React from "react";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-700">Thank you for your booking.</p>
    </div>
  );
};

export default Success;
