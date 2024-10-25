import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';


const Products = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext); 
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');


  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((item) => item._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setImage(foundProduct.image[0]);
      }
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

            {/* Small images */}
              {
                productData.image.map((item, index) => (
                  <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt={`Product Image ${index}`} onClick={() => setImage(item)}/>
                ))
                }
                </div>

            {/* Main image */}
            <div className='w-full sm:w-[80%]'>
              <img src={image} alt="Selected Product" className='w-full h-auto rounded-lg shadow-lg object-contain' />
            </div>
        </div>

        {/* Product Details Section */}
        <div className='flex-1'>
          <h1 className='font-medium text-4xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
          <img src= {assets.star_icon} alt="" className="w-3 5" />
          <img src= {assets.star_icon} alt="" className="w-3 5" />
          <img src= {assets.star_icon} alt="" className="w-3 5" />
          <img src= {assets.star_icon} alt="" className="w-3 5" />
          <img src= {assets.star_dull_icon} alt="" className="w-3 5" />
          <p className='p1-2'>(122)</p>
          </div>
          <p className='mt-5 text-2xl font-semibold text-gray-800 mt-20'> {currency} {productData.price}</p>
          <p className='mt-5 md:w-4/5  mt-60'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
            {productData.sizes.map((item, index) =>(
              <button onClick={() => setSize(item)} className= {`border ру-2 px-4 bg-gray-100 ${item === size ? 'border-gray-800' : ''}`} key={index}>{item}</button>
            ))}
              </div>
            </div>
            <button className='bg-black text-white px-8 ру-3 text-sm shadow-lg active:bg-gray-700'> ADD TO CART </button>
            <hr className= 'mt-8 sm:w-4/5' />
            <div className='text-sm text-gray-800 mt-5 flex flex-col gap-1'>
              <p>100% Original product. </p>
              <p>Cash on delivery is available on this product. </p>
              <p>Easy return and exchange policy within 7 days. </p>
            </div>
        </div>
      </div>
      {/*Product Description*/}
      <div className='mt-20'>
        <div className='flex'>
            <b className=' px-5 ру-3 text-sm'>Description</b>
            <p className=' рх-5 ру-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 px-6 ру-6 text-sm text-gray-800 pt-2'>
          <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
          <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      {/*Related Product */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>

}

export default Products;
