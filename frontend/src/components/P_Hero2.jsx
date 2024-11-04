import React from 'react';
import { assets } from '../assets/assets';

const P_Hero2 = () => {
  return (
    <div className="flex flex-col sm:flex-row pt-12">
      {/* Left Side with an Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <img
          className="w-full max-w-md sm:max-w-xs object-contain h-auto" // Responsive adjustments
          src={assets.hero_logo}
          alt="Hero Left Image"
        />
      </div>

      {/* Right Side with an Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <img
          className="w-full max-w-md sm:max-w-xs object-contain h-auto" // Responsive adjustments
          src={assets.hero_img4}
          alt="Hero Right Image"
        />
      </div>
    </div>
  );
};

export default P_Hero2;
