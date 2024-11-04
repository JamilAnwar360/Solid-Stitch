import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 mt-10 border-t border-white pt-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'BEST'} text2={'SELLERS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut debitis,
          odit fugit labore molestiae voluptate fuga temporibus! Placeat, unde
          aperiam!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 mt-8">
        {bestSeller.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-md shadow-lg transform transition duration-500 hover:scale-105"
          >
            <ProductItem id={item._id} image={item.image} name={item.name} />
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                OMR {item.price}
              </span>
              <button
                className="
                  bg-customPink 
                  hover:bg-pink-600 
                  text-white 
                  font-medium 
                  py-2 px-4 
                  sm:py-1 sm:px-2 
                  text-sm sm:text-base 
                  rounded-lg 
                  transition duration-300 
                  w-full sm:w-auto
                "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
