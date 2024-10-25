import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row pt-12'>
      {/* Replaced Hero Left Side with an Image */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <img
          className='w-full sm:w-3/4 max-w-xs object-contain'
          src={assets.hero_logo}
          alt="Hero Left Image"
        />
      </div>
      
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Hero Right Image" />
    </div>
  );
};

export default Hero;
