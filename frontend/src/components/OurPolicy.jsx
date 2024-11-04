import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-8 sm:gap-4 text-center py-12 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="flex flex-col items-center">
        <img
          src={assets.exchange_icon}
          className="w-16 sm:w-12 mb-4"
          alt="Easy Exchange Policy"
        />
        <p className="font-semibold text-sm sm:text-base">
          Easy Exchange Policy
        </p>
        <p className="text-gray-700 text-xs sm:text-sm">
          We offer hassle-free exchange policy
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={assets.quality_icon}
          className="w-16 sm:w-12 mb-4"
          alt="7 Days Return Policy"
        />
        <p className="font-semibold text-sm sm:text-base">
          7 Days Return Policy
        </p>
        <p className="text-gray-700 text-xs sm:text-sm">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={assets.support_img}
          className="w-16 sm:w-12 mb-4"
          alt="Best Customer Support"
        />
        <p className="font-semibold text-sm sm:text-base">
          Best Customer Support
        </p>
        <p className="text-gray-700 text-xs sm:text-sm">
          We provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
