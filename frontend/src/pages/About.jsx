import React from 'react';
import Hero from '../components/Hero'; // Make sure to import your Hero component
import { assets } from '../assets/assets'; // Import assets to access images
import Title from '../components/Title'; // Import Title component
import Testimonial from '../components/Testimonial';
import NewsletterBox from '../components/NewsletterBox';
import OurPolicy from '../components/OurPolicy';
import P_Hero from '../components/P_Hero';
import BestSeller from '../components/BestSeller';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <P_Hero />
      <div className="text-center py-8 text-3xl">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="text-center py-8 text-3xl">
        <h1>Heading 1</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src={assets.hero_img} // Replace with your actual image path
              alt="Fashion representation" // Add an appropriate alt text
              className="w-90 h-80 mr-40 object-cover rounded-lg" // Adjust size and styles as needed
            />
          </div>
          {/* Text Section */}
          <p className="w-full max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            At Solid Stitch, we believe in creating fashion that embodies
            elegance and sophistication. Our designs are inspired by the latest
            trends, ensuring that you feel confident and stylish in every piece
            you wear. With a commitment to quality craftsmanship, we bring you
            unique clothing that celebrates your individuality.
          </p>
        </div>
      </div>
      <div className="text-left py-8 text-3xl">
        <h1>Heading 2</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Text Section */}
          <p className="w-full max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            At Solid Stitch, we believe in creating fashion that embodies
            elegance and sophistication. Our designs are inspired by the latest
            trends, ensuring that you feel confident and stylish in every piece
            you wear. With a commitment to quality craftsmanship, we bring you
            unique clothing that celebrates your individuality.
          </p>
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src={assets.hero_img} // Replace with your actual image path
              alt="Fashion representation" // Add an appropriate alt text
              className="w-90 h-80 ml-40 object-cover rounded-lg" // Adjust size and styles as needed
            />
          </div>
        </div>
      </div>
      <div className="text-center py-8 text-3xl">
        <h1>Heading 3</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              src={assets.hero_img} // Replace with your actual image path
              alt="Fashion representation" // Add an appropriate alt text
              className="w-90 h-80 mr-40 object-cover rounded-lg" // Adjust size and styles as needed
            />
          </div>
          {/* Text Section */}
          <p className="w-full max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
            At Solid Stitch, we believe in creating fashion that embodies
            elegance and sophistication. Our designs are inspired by the latest
            trends, ensuring that you feel confident and stylish in every piece
            you wear. With a commitment to quality craftsmanship, we bring you
            unique clothing that celebrates your individuality.
          </p>
        </div>
      </div>
      <BestSeller />
      <Testimonial />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
}

export default About;
