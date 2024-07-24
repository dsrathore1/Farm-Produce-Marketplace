import Banner from "@/app/Components/Banner";
import AppleImg from "../about/apple.jpg";
import HoneyImg from "../about/honey.jpg";
import EggImg from "../about/egg.jpg";

import React from "react";
import Image from "next/image";
import Footer from "@/app/Components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Banner />
      {/* Features Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Organic & Fresh
              </h3>
              <p className="text-gray-700">
                Our produce is 100% organic and freshly harvested from local
                farms. No chemicals, just pure goodness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Direct from Farmers
              </h3>
              <p className="text-gray-700">
                We connect you directly with local farmers, ensuring fair trade
                and the best quality produce.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Fast Delivery
              </h3>
              <p className="text-gray-700">
                Enjoy quick and reliable delivery to your doorstep. Freshness
                guaranteed with every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8 bg-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                1. Choose Your Products
              </h3>
              <p className="text-gray-700">
                Browse our selection of fresh and organic produce, and select
                the items you wish to order.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                2. Place Your Order
              </h3>
              <p className="text-gray-700">
                Add your chosen items to the cart, and proceed to checkout for a
                secure payment process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                3. Enjoy Fresh Produce
              </h3>
              <p className="text-gray-700">
                Receive your order at your doorstep, and enjoy fresh, organic
                produce delivered right to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                height={500}
                width={500}
                src={AppleImg}
                alt="Product 1"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Organic Tomatoes
              </h3>
              <p className="text-gray-700 mb-4">
                Freshly picked organic tomatoes from our local farms.
              </p>
              <p className="text-lg font-bold text-purple-600">$5.99 per lb</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                height={500}
                width={500}
                src={HoneyImg}
                alt="Product 2"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Fresh Cucumbers
              </h3>
              <p className="text-gray-700 mb-4">
                Crisp and refreshing cucumbers, perfect for salads.
              </p>
              <p className="text-lg font-bold text-purple-600">$3.99 per lb</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                height={500}
                width={500}
                src={EggImg}
                alt="Product 3"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                Organic Apples
              </h3>
              <p className="text-gray-700 mb-4">
                Juicy and sweet apples, straight from the orchard.
              </p>
              <p className="text-lg font-bold text-purple-600">$6.99 per lb</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-600 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                What is your return policy?
              </h3>
              <p className="text-gray-700">
                We accept returns within 7 days of delivery. Please contact our
                support team for further assistance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                Do you offer delivery?
              </h3>
              <p className="text-gray-700">
                Yes, we offer delivery within a specified radius. Please check
                our delivery options at checkout.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">
                How do I contact support?
              </h3>
              <p className="text-gray-700">
                You can contact our support team via the Contact Us page, or
                email us at support@farmerproducts.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-600 text-white py-12 px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 text-lg leading-8">
            Be part of a movement towards healthier living. Subscribe to our
            newsletter for the latest updates and offers.
          </p>
          <Link
            href="/subscribe"
            className="inline-block bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100"
          >
            Subscribe Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
