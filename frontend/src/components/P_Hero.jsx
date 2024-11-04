import React from 'react';
import { assets } from '../assets/assets';

const P_Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row pt-12">
      {/* Hero Left Side with Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <img
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
          src={assets.hero_logo}
          alt="Hero Left Image"
        />
      </div>

      {/* Hero Right Side with Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <img
          className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
          src={assets.hero_img}
          alt="Hero Right Image"
        />
      </div>
    </div>
  );
};

export default P_Hero;
