import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6 lg:px-8">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are dedicated to bringing you the freshest organic produce
              directly from local farms. Our mission is to promote healthier
              living through sustainable practices.
            </p>
          </div>
          {/* Quick Links Section */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white"
                  href="/products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info Section */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Farm Lane, Freshville, FV 45678</p>
            <p className="text-gray-400">Email: support@farmerproducts.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          {/* Social Media Section */}
          <div className="mb-8 lg:mb-0">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t flex justify-center items-center border-gray-700 pt-6 mt-6">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Farmer Products. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
