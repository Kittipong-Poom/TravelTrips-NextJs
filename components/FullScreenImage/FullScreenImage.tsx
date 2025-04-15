import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { Button } from "../ui/button";

interface FullScreenImageProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

const FullScreenImage: React.FC<FullScreenImageProps> = ({
  isOpen,
  onClose,
  imageUrl,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    >
      <div className="relative w-full max-w-5xl">
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 text-black bg-white text-3xl font-bold z-10"
        >
          ✕
        </Button>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Full Screen Image"
            width={1200}
            height={800}
            className="rounded-lg shadow-lg mx-auto "
          />
        )}
      </div>
    </Dialog>
  );
};

export default FullScreenImage;
