import Radio from "@mui/joy/Radio";
import BaseModal from "@/components/BaseModal/BaseModal";
import { useState } from "react";
import { FaCcMastercard, FaCcVisa, FaCcPaypal } from "react-icons/fa6";
import { FaCcJcb } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";

const Payment = ({
  handleBack,
  timeLeft,
  formatTime,
}: {
  handleBack: () => void;
  timeLeft: number;
  formatTime: (seconds: number) => string;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedPayment, setSelectedPayment] = useState<string>("paypal");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

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
          <div>
            <label className="block text-sm font-medium">Name on card *</label>
            <input
              type="text"
              placeholder="e.g. my personal card"
              className="border rounded-lg p-2 w-full mt-1"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Card number *</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="border rounded-lg p-2 w-full mt-1"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Expiration *</label>
            <input
              type="text"
              placeholder="MM / YY"
              className="border rounded-lg p-2 w-full mt-1"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>

          <div>
            <label className=" text-sm font-medium flex justify-between">
              Card code *{" "}
            </label>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="XXX"
                className="border rounded-lg p-2 w-48 mt-1"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
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
          title="What is CVV?"
          content="CVV (Card Verification Value) is a 3-digit code on the back of your card, used for security purposes."
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

      <button
        onClick={handleBack}
        className="relative px-10 py-3.5 mt-5 rounded-lg overflow-hidden group bg-gradient-to-r from-gray-700 to-black  hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
      >
        <span className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"></span>
        <span className="relative text-xl font-semibold">Back</span>
      </button>
    </div>
  );
};

export default Payment;
