import React from 'react';
import { assets } from '../assets/assets';
import Hero_Img_Slider from './Hero_Img_Slider';

const Hero = () => {
  const sliderImages = [
    assets.hero_img,
    assets.hero_img1,
    assets.hero_img2,
    assets.hero_img3,
  ];

  return (
    <div className="flex flex-col sm:flex-row pt-12 mx-auto max-w-screen-xl">
      {/* Hero Left Side with an Image */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <img
          className="w-full h-auto sm:w-3/4 lg:w-2/3 max-w-full object-contain"
          src={assets.hero_logo}
          alt="Hero Left Image"
        />
      </div>

      {/* Hero Right Side with Image Slider */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
        <Hero_Img_Slider images={sliderImages} />
      </div>
    </div>
  );
};

export default Hero;
