import Banner1 from "@/public/Assets/banner1.jpg";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="my-4 flex items-center justify-center">
      <div className="bg-white w-full">
        <div className="relative bg-black h-[80vh] flex items-center justify-center text-center">
          <Image
            src={Banner1} // Replace with your banner image
            alt="Farm Products"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 p-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              Fresh Products Directly from Farmers
            </h1>
            <p className="text-lg text-white mb-6">
              Experience the freshness of organic produce sourced directly from
              local farmers.
            </p>
            <a
              href="#products"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
