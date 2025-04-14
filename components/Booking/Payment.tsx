import Radio from "@mui/joy/Radio";
import BaseModal from "@/components/BaseModal/BaseModal";
import { useState } from "react";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa6";
import { FaCcJcb } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { Booking } from "@/types/Payment";

const Payment = ({
  handleBack,
  handleSuccess,
  booking,
  vat,
  grandTotal,
  price,
  subtotal,
  timeLeft,
  email,
  DateLongEN,
  formatTime,
}: {
  handleBack: () => void;
  handleSuccess: () => void;
  timeLeft: number;
  formatTime: (seconds: number) => string;
  booking: Booking;
  vat: number;
  price: number;
  email: string;
  DateLongEN: (date: Date) => string;
  subtotal: number;
  grandTotal: number;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("paypal");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardName, setCardName] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [cardErrors, setCardErrors] = useState<{
    cardName?: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
  }>({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleCompletePayment = () => {
    const errors: {
      cardName?: string;
      cardNumber?: string;
      expiryDate?: string;
      cvv?: string;
    } = {};
    if (!cardName) errors.cardName = "Please enter name on card";
    if (!cardNumber) errors.cardNumber = "Please enter card number";
    if (!expiryDate) errors.expiryDate = "Please enter expiration date";
    if (!cvv) errors.cvv = "Please enter CVV";
    setCardErrors(errors);
    if (Object.keys(errors).length === 0) {
      sendEmail();
    }
  };
  const paymentMethods = [
    {
      id: "visa",
      name: "Visa",
      icon: <FaCcVisa size={40} className="text-blue-600" />,
    },
    {
      id: "mastercard",
      name: "MasterCard",
      icon: <FaCcMastercard size={40} className="text-red-600" />,
    },
    {
      id: "promptpay",
      name: "PromptPay",
      icon: <FaCcJcb size={40} className="text-blue-600" />,
    },
  ];
  const formatExpiryDate = (value: string): string => {
    let input = value.replace(/\D/g, "");
    if (input.length > 4) input = input.slice(0, 4);
    if (input.length > 2) {
      return `${input.slice(0, 2)}/${input.slice(2)}`;
    }
    return input;
  };

  const formatCardNumber = (value: string): string => {
    let input = value.replace(/\D/g, "");
    if (input.length > 16) input = input.slice(0, 16);
    if (input.length > 4) {
      return `${input.slice(0, 4)} ${input.slice(4, 8)} ${input.slice(
        8,
        12
      )} ${input.slice(12, 16)}`;
    }
    return input;
  };
  const CardCode = (value: string) => {
    let input = value.replace(/\D/g, "");
    if (input.length > 3) input = input.slice(0, 3);
    return input;
  };
  const sendEmail = async () => {
    const userEmail = email;
    const maskedCard = cardNumber.replace(/\d{12}(\d{4})/, "**** **** **** $1");
    const fullImageUrl = booking?.image.startsWith("http")
      ? booking.image
      : `https://travel-trips-ten.vercel.app/${booking?.image}`;
    const templateParams = {
      order_id: "ORD-" + new Date().getTime(),
      to_email: userEmail,
      replyto: email,
      sendername: "TravelTrip noreply",
      from_email: "noreply@yourdomain.com",
      cost: {
        vat: vat.toFixed(2),
        subtotal: subtotal.toFixed(2),
        total: grandTotal.toFixed(2),
      },
      orders: [
        {
          image_url: fullImageUrl,
          name: booking?.name,
          card_number: maskedCard,
          payment_method: selectedPayment,
          price: price.toFixed(2),
          checkIn: DateLongEN(booking?.checkIn) || "N/A",
          checkOut: DateLongEN(booking?.checkOut) || "N/A",
        },
      ],
      hotel_details: {
        name: booking?.name,
        rating: booking?.rating,
        checkIn: DateLongEN(booking?.checkIn) || "N/A",
        checkOut: DateLongEN(booking?.checkOut) || "N/A",
      },
    };
    emailjs
      .send(
        "service_vn7u9um",
        "template_iwdwoc8",
        templateParams,
        "R5-PU5nVLE6bGHniG"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          handleSuccess();
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Error sending payment details. Please try again.");
        }
      );
  };
  return (
    <div className="flex flex-col p-6">
      <div className="flex justify-between">
        <h2 className="text-2xl text-left font-semibold mb-4 ">
          Payment Methods
        </h2>
        <span>{formatTime(timeLeft)}</span>
      </div>
      <div className="p-4 shadow-lg border flex rounded-lg justify-between">
        <Radio
          value="paypal"
          label="PayPal"
          className="flex items-center "
          checked={selectedPayment === "paypal"}
          onChange={() => setSelectedPayment("paypal")}
        />
        <FaCcPaypal className="h-9 w-9" />
      </div>
      <div className="p-4 shadow-lg mt-5 border flex rounded-lg justify-between">
        <Radio
          value="promptpay"
          label="PromptPay"
          className="flex items-center "
          checked={selectedPayment === "promptpay"}
          onChange={() => setSelectedPayment("promptpay")}
        />
        <BsQrCode className="h-9 w-9" />
      </div>
      <div className="border mt-5 p-5 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2">
            <Radio
              value="creditCard"
              name="paymentMethod"
              checked={selectedPayment === "creditCard"}
              onChange={() => setSelectedPayment("creditCard")}
            />
            <span className="font-medium">Credit card</span>
          </label>
          <div className="flex gap-2">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex">
                {method.icon}
              </div>
            ))}
          </div>
        </div>
        {/* Payment Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="mb-4">
            {cardErrors.cardName && (
              <span className="text-red-500 text-sm mb-1 block">
                {cardErrors.cardName}
              </span>
            )}
            <label className="block text-sm font-medium">Name on card *</label>
            <input
              type="text"
              placeholder="e.g. my personal card"
              className="border rounded-lg p-2 w-full mt-1"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            {cardErrors.cardNumber && (
              <span className="text-red-500 text-sm mb-1 block">
                {cardErrors.cardNumber}
              </span>
            )}
            <label className="block text-sm font-medium">Card number *</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="border rounded-lg p-2 w-full mt-1"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            />
          </div>

          <div className="mb-4">
            {cardErrors.expiryDate && (
              <span className="text-red-500 text-sm mb-1 block">
                {cardErrors.expiryDate}
              </span>
            )}
            <label className="block text-sm font-medium">Expiration *</label>
            <input
              type="text"
              placeholder="MM / YY"
              className="border rounded-lg p-2 w-full mt-1"
              value={expiryDate}
              onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
            />
          </div>

          <div className="mb-4">
            {cardErrors.cvv && (
              <span className="text-red-500 text-sm mb-1 block">
                {cardErrors.cvv}
              </span>
            )}
            <label className="text-sm font-medium flex justify-between">
              Card code *{" "}
            </label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="XXX"
                className="border rounded-lg p-2 w-48 mt-1"
                value={cvv}
                onChange={(e) => setCvv(CardCode(e.target.value))}
              />
              <span
                className="text-green-500 hover:bg-green-200 p-3 rounded-lg transition-all duration-200  text-sm ml-3 cursor-pointer"
                onClick={handleOpen}
              >
                What this?
              </span>
            </div>
          </div>
        </div>
        <BaseModal
          open={open}
          onClose={handleClose}
          title="Security code"
          content="The security code is the 3 digits on the back of your card."
          imageSrc="/images/cvv.jpg"
        />
        {/* Save Card Option */}
        <div className="flex items-center mt-4">
          <input type="checkbox" id="saveCard" className="accent-purple-500" />
          <label htmlFor="saveCard" className="ml-2 text-sm">
            Save card for future use
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-5">
        <button
          onClick={handleBack}
          className="relative px-10 py-3.5 mt-5 rounded-lg overflow-hidden group bg-gradient-to-r from-gray-700 to-black  hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
          <span className="relative text-xl font-semibold">Back</span>
        </button>

        <button
          onClick={handleCompletePayment}
          className="relative px-10 py-3.5 mt-5 rounded-lg overflow-hidden group bg-gradient-to-r from-green-700 to-green-900 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-800 text-white transition-all ease-out duration-300"
        >
          <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
          <span className="relative text-xl font-semibold">
            Complete Payment
          </span>
        </button>
      </div>
    </div>
  );
};

export default Payment;
