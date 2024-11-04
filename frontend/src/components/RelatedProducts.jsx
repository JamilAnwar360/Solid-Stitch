import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const { products, currency } = useContext(ShopContext); // Get currency from context
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      // Filter by category and subCategory
      productsCopy = productsCopy.filter(
        item => category === item.category && subCategory === item.subCategory
      );

      // Set the related products (limit to 5)
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);

  return (
    <div className="my-24 px-4 sm:px-6 lg:px-8">
      {' '}
      {/* Added padding for smaller screens */}
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {' '}
        {/* Responsive grid */}
        {related.map(item => (
          <ProductItem
            key={item._id} // Use a unique key
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            currency={currency} // Pass currency to ProductItem
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
