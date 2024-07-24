import "@/app/globals.css"
import AppleImg from "./apple.jpg";
import HoneyImg from "./honey.jpg";
import EggImg from "./egg.jpg";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white w-full max-w-4xl p-8 rounded-lg shadow-lg m-6 animate-fade-in-up">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-8 animate-bounce">
          About Us
        </h1>
        <div className="text-gray-700 space-y-6">
          <p className="text-lg">
            At <span className="font-semibold text-purple-600">Farmer Products</span>, we are
            dedicated to connecting you with the freshest, most organic products directly sourced
            from local farmers. Our mission is to promote sustainable agriculture and support
            small-scale farmers by providing them with a platform to sell their produce directly to
            consumers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-8 mt-8">
            <div className="rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <Image
                src={AppleImg}
                height={500}
                width={600}
                alt="Fresh Organic Apples"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Fresh Organic Apples</h3>
                <p>Crisp and juicy apples directly from the orchard.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <Image src={HoneyImg} height={500} width={500} alt="Natural Honey" className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Natural Honey</h3>
                <p>Pure and natural honey sourced from local beekeepers.</p>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <Image src={EggImg} height={600} width={600} alt="Farm Fresh Eggs" className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">Farm Fresh Eggs</h3>
                <p>Organic eggs from free-range chickens.</p>
              </div>
            </div>
          </div>
          <p className="text-lg mt-8">
            Our journey started with a simple idea: to bridge the gap between farmers and consumers.
            We believe in the power of fresh, organic produce and the positive impact it can have on
            our health and the environment. By buying directly from farmers, you not only get the
            best quality products but also help in supporting the livelihoods of the farmers who
            work tirelessly to bring these products to your table.
          </p>
          <p className="text-lg">
            We are committed to:
          </p>
          <ul className="list-disc list-inside pl-4 text-lg">
            <li>Providing high-quality, fresh, and organic produce.</li>
            <li>Supporting local farmers and promoting sustainable agriculture.</li>
            <li>Offering a convenient and transparent platform for buying and selling farm products.</li>
            <li>Educating consumers about the benefits of organic farming and healthy eating.</li>
          </ul>
          <p className="text-lg mt-8">
            Thank you for being a part of our journey. Together, we can make a difference in the way
            we eat and support our local communities.
          </p>
        </div>
      </div>
    </div>
  );
}
