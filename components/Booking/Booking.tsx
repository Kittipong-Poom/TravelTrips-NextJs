"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Stepper from "@/components/Stepper/Stepper";
import { hotelsData } from "@/data/data";
import { useParams, useRouter } from "next/navigation";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import Payment from "./Payment";
import NotFound from "@/components/404NotFound/NotFound";
dayjs.extend(buddhistEra);

const Checkout = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60);
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [promoCode, setPromoCode] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    address: string;
  }>({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
  });
  const handleFormSubmit = () => {
    let formErrors = { ...errors };
    formErrors.email = email ? "" : "Email is required.";
    formErrors.phoneNumber = phoneNumber ? "" : "Phone number is required.";
    formErrors.firstName = firstName ? "" : "First name is required.";
    formErrors.lastName = lastName ? "" : "Last name is required.";
    formErrors.address = address ? "" : "Address is required.";
    setErrors(formErrors);
    if (!Object.values(formErrors).some((error) => error)) {
      handleNext();
    }
  };
  const params = useParams();
  const router = useRouter();
  const bookingId = parseInt(params.bookingId as string, 10);
  const booking = hotelsData.find((h) => h.bookingId === bookingId);
  const price = parseFloat(booking?.price || "0");
  const vat = (price * 7) / 107;
  const subtotal = price - vat;
  const grandTotal = price;
  const startTimer = useCallback(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const checkTimeout = useCallback(() => {
    if (timeLeft <= 0) {
      router.push("/");
    }
  }, [timeLeft, router]);
  useEffect(() => {
    const cleanup = startTimer();
    return cleanup;
  }, [startTimer]);

  useEffect(() => {
    checkTimeout();
  }, [timeLeft, checkTimeout]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  const handleSuccess = () => {
    setActiveStep(3);
    router.push("/successPayment");
  };

  const DateLongEN = (date: Date) => {
    dayjs.locale("en");
    return dayjs(date).format("DD MMMM YYYY");
  };
  if (!booking) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      {/* Stepper แยกออกมาและอยู่ด้านบนสุด */}
      <div className="w-full max-w-[1800px] pt-20 mb-5">
        <Stepper activeStep={activeStep} />
      </div>
      {/* Content หลักของ Checkout */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {activeStep === 0 ? (
          <div className="md:col-span-2 bg-white p-6 shadow-lg rounded-lg">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-4">Secure Checkout</h2>
              <span>{formatTime(timeLeft)}</span>
            </div>
            <p className="text-gray-600 mb-6">
              Checkout securely - it takes only a few minutes
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Contact Detail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  {errors.email && (
                    <span className="text-red-500 text-sm mb-1 block">
                      {errors.email}
                    </span>
                  )}
                  <input
                    type="email"
                    placeholder="Input email"
                    className="border p-2 w-full rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  {errors.phoneNumber && (
                    <span className="text-red-500 text-sm mb-1 block">
                      {errors.phoneNumber}
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Input phone number"
                    className="border p-2 w-full rounded"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="text-black flex items-center">
                  <input
                    className="dark:border-white-400/20 cursor-pointer dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <span className="ml-3">
                    Receive text message updates about your booking.
                  </span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Traveler Detail</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  {errors.firstName && (
                    <span className="text-red-500 text-sm mb-1 block">
                      {errors.firstName}
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="First name"
                    className="border p-2 w-full rounded"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  {errors.lastName && (
                    <span className="text-red-500 text-sm mb-1 block">
                      {errors.lastName}
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border p-2 w-full rounded"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                {errors.address && (
                  <span className="text-red-500 text-sm mb-1 block">
                    {errors.address}
                  </span>
                )}
                <input
                  type="text"
                  placeholder="Input your address"
                  className="border p-2 w-full rounded"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Promo Code</h3>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Input your code"
                  className="border p-2 w-full rounded"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button className="text-blue-500 p1 hover:bg-blue-200 transition-all duration-200 rounded-xl">
                  Find Promo Code?
                </button>
              </div>
            </div>

            <button
              onClick={handleFormSubmit}
              className="relative px-10 w-full py-3.5 mt-5 rounded-lg overflow-hidden group bg-gradient-to-r from-green-600 to-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 text-white transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-green-300 opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
              <span className="relative text-xl font-semibold">Next</span>
            </button>
          </div>
        ) : (
          <div className="md:col-span-2 bg-white  shadow-lg rounded-lg">
            <Payment
              handleBack={handleBack}
              handleSuccess={handleSuccess}
              timeLeft={timeLeft}
              formatTime={formatTime}
              booking={booking}
              vat={vat}
              subtotal={subtotal}
              grandTotal={grandTotal}
              price={price}
              DateLongEN={DateLongEN}
              email={email}
            />
          </div>
        )}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Review Order Details</h3>
          <div className="mb-4">
            <Image
              src={booking.image}
              alt={booking.name}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />
            <h4 className="font-semibold mt-2">{booking.name}</h4>
            <p className="text-sm text-gray-600">
              Rating : <span className="font-semibold">{booking.rating}</span>
            </p>
            <p className="text-sm text-gray-600">
              {booking.checkIn ? DateLongEN(booking.checkIn) : "N/A"} -{" "}
              {booking.checkOut ? DateLongEN(booking.checkOut) : "N/A"}
            </p>
          </div>
          <div className="border-t pt-4">
            <p className="flex justify-between text-gray-600">
              <span>VAT (7%)</span> <span>฿ {vat.toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-gray-600">
              <span>Subtotal</span> <span>฿ {subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold text-lg mt-2">
              <span>Grand Total</span> <span>฿ {grandTotal.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
