import Image from "next/image";

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-6 pt-28">
      <div>
        <p className="text-9xl font-bold font-mono text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 animate-textFade">
          404
        </p>
        <p className="text-4xl font-bold font-mono text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 animate-textFade">
          Not Found Page
        </p>
        <Image
          src="/images/404/whale404.png"
          alt="404"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-lg mt-6"
        />
      </div>
    </div>
  );
};

export default NotFound;
