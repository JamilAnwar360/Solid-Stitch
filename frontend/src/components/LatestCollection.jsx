import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products = [] } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10 mt-10 border-t border-white px-4 sm:px-6 lg:px-8">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-full max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover the newest trends and styles with our latest collections.
          Handpicked for quality and elegance.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-md shadow-lg transform transition duration-500 hover:scale-105"
          >
            <ProductItem id={item._id} image={item.image} name={item.name} />
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">
                OMR {item.price}
              </span>
              <button className="bg-customPink hover:bg-pink-600 text-white font-medium py-1 px-2 rounded-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
