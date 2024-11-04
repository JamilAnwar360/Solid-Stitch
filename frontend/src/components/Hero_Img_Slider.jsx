import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Hero_Img_Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <img
        className="w-full h-auto object-cover transition-transform duration-500 ease-in-out" // Use responsive classes
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
      />
    </div>
  );
};

// Define PropTypes for the component
Hero_Img_Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hero_Img_Slider;
