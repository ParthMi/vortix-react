import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    console.log(formData);
  };

  return (
    <section id="contact" className="py-10 md:py-14 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4 justify-center items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src="/images/contact-us.jpg" // Replace this with your actual image path
              alt="Contact Us"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 px-4">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-6 text-3xl font-bold text-black">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="mobile" className="block mb-2 text-sm font-medium">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Enter your message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-orange text-white font-semibold rounded-md hover:bg-opacity-90 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
