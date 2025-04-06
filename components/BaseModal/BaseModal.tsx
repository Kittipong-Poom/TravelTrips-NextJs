import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Image from "next/image";

interface InfoModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  imageSrc?: string;
  className?: string;
  button?: string;
}
const InfoModal: React.FC<InfoModalProps> = ({
  open,
  onClose,
  title,
  content,
  imageSrc,
  className,
  button,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className={`bg-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-52 ${className}`}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {imageSrc && (
          <div className="mb-4">
            <Image
              src={imageSrc}
              width={500}
              height={500}
              alt="modal content"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
        <p className="text-gray-600">{content}</p>
        <button
          onClick={onClose}
          className={`mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200 ${
            button ? button : "w-full"
          }`}
        >
          Close
        </button>
      </Box>
    </Modal>
  );
};

export default InfoModal;
