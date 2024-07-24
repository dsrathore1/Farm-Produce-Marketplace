"use client"
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-12">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-12 md:mt-0">
            <h2 className="text-2xl font-bold text-purple-600 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us for any queries or support.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                <p className="text-gray-700">
                  123 Farmer Street, Agriculture City, Country
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-700">+1 234 567 890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-700">contact@farmerproducts.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-700 hover:text-purple-600 transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557a9.995 9.995 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.175A4.916 4.916 0 0 0 16.847 3c-2.717 0-4.92 2.205-4.92 4.917 0 .39.045.765.13 1.126C7.728 8.765 4.1 6.828 1.671 3.149a4.921 4.921 0 0 0-.664 2.472c0 1.705.869 3.21 2.187 4.096a4.902 4.902 0 0 1-2.228-.616v.062c0 2.381 1.69 4.363 3.932 4.818a4.935 4.935 0 0 1-2.224.085c.624 1.954 2.438 3.38 4.588 3.418a9.868 9.868 0 0 1-6.1 2.104c-.396 0-.79-.023-1.17-.068a13.951 13.951 0 0 0 7.557 2.212c9.053 0 14-7.506 14-14.012 0-.213-.006-.427-.016-.637A9.93 9.93 0 0 0 24 4.557z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-purple-600 transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.675 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.326 24h21.348C23.407 24 24 23.406 24 22.674V1.326C24 .594 23.407 0 22.675 0zm-1.61 18.195c0 .361-.294.655-.655.655H3.587a.655.655 0 0 1-.655-.655V5.805c0-.361.294-.655.655-.655h16.823c.361 0 .655.294.655.655v12.39zM9.473 19.264V9.243l7.293 5.011-7.293 5.01z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-purple-600 transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.629 0H2.371A2.372 2.372 0 0 0 0 2.371v19.258A2.372 2.372 0 0 0 2.371 24h10.352v-9.294H9.958v-3.623h2.764v-2.672c0-2.737 1.676-4.234 4.125-4.234 1.17 0 2.176.087 2.176.087v2.416h-1.224c-1.202 0-1.572.746-1.572 1.508v1.898h2.68l-.428 3.623h-2.252V24h4.434a2.372 2.372 0 0 0 2.371-2.371V2.371A2.372 2.372 0 0 0 21.629 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
