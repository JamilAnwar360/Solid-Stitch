import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, currency }) => {
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden relative flex flex-col items-center">
        <img
          className="w-full h-auto hover:scale-110 transition-transform ease-in-out duration-300"
          src={image[0]}
          alt={name}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-white p-2 shadow-md">
          <p className="pt-3 pb-1 text-sm text-center">{name}</p>
          <p className="text-sm font-medium text-center">
            {currency} {price} {/* Display price with currency */}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
