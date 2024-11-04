import React from 'react';
import Hero from '../components/Hero'; // Import your Hero component
import { assets } from '../assets/assets'; // Import assets to access images
import Title from '../components/Title'; // Import Title component
import Testimonial from '../components/Testimonial'; // Import Testimonial component
import NewsletterBox from '../components/NewsletterBox'; // Import NewsletterBox component
import OurPolicy from '../components/OurPolicy'; // Import OurPolicy component
import P_Hero2 from '../components/P_Hero2';
import BestSeller from '../components/BestSeller';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <P_Hero2 />
      <div className="text-center py-8 text-3xl">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Form Section */}
      <div className="text-left text-3xl">
        <h1>Privacy policy</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Text Section */}
          <p className="w-full max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600 mr-8">
            At Solid Stitch, we believe in creating fashion that embodies
            elegance and sophistication. Our designs are inspired by the latest
            trends, ensuring that you feel confident and stylish in every piece
            you wear. With a commitment to quality craftsmanship, we bring you
            unique clothing that celebrates your individuality.
          </p>
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <div className="w-full max-w-lg p-6 border rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Get in Touch
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-blue-500 placeholder-transparent text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-blue-500 placeholder-transparent text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    className="w-full p-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-black placeholder-transparent text-black"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-2 mt-4 bg-black text-sm text-white rounded-md hover:bg-blue-700 transition duration-200"
                  onClick={() => {
                    window.location.href = `mailto:contact@solidstitch.com?subject=Customer Inquiry&body=Hello Solid Stitch Team,%0D%0A%0D%0A[Your Message Here]`;
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <BestSeller />
      <Testimonial />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Contact;
