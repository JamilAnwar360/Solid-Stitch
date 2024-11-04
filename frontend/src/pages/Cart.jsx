import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const {
    products = [],
    currency,
    cartItems = {},
    updateQuantity,
    removeFromCart, // Ensure this function is provided by context
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  // Calculate subtotal, tax, and total
  const calculateSubtotal = () => {
    return cartData.reduce((total, item) => {
      const product = products.find(product => product._id === item._id);
      return product ? total + product.price * item.quantity : total;
    }, 0);
  };

  const deliveryCharges = 5.0;
  const taxRate = 0.01; // 1% tax rate
  const subtotal = calculateSubtotal();
  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount + deliveryCharges;

  return (
    <div className="border-t pt-20 min-h-screen flex flex-col lg:flex-row lg:justify-between gap-8 px-4">
      <div className="text-3xl mb-8 font-bold text-gray-800 lg:w-2/3">
        <Title text1="YOUR" text2="CART" />
        <div className="space-y-2 mt-10">
          {cartData.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <svg
                id="icon-cart-emty"
                widht="100"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path>
              </svg>
              <h1 className="pt-6 text-3xl font-semibold">
                Your Cart is Empty
              </h1>
              <p className="pt-6 text-lg font-normal">
                Looks like you haven't added anything to your cart yet. Start
                shopping now!
              </p>
            </div>
          ) : (
            cartData.map((item, index) => {
              const productData = products.find(
                product => product._id === item._id
              );

              if (!productData) return null;

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start gap-6">
                    <img
                      src={productData.image[0]}
                      alt={productData.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex flex-col">
                      <p className="font-semibold">{productData.name}</p>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm font-semibold text-gray-800 mt-2">
                        {currency} {productData.price}
                      </p>
                    </div>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity - 1)
                      }
                      disabled={item.quantity === 1} // Disable if quantity is 1
                    >
                      -
                    </button>
                    <p className="mx-4">{item.quantity}</p>
                    <button
                      className="px-2 py-1 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 transition-colors duration-200"
                      onClick={() =>
                        updateQuantity(item._id, item.size, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <div className="pr-2">
                      <img
                        onClick={() => removeFromCart(item._id, item.size)} // Use removeFromCart here
                        className="w-4 mr-4 sm:w-5 cursor-pointer"
                        src={assets.bin_icon}
                        alt="Remove"
                      />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Order Summary */}
      <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
        <div className="text-gray-700 space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              {currency} {subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>
              {currency} {taxAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>
              {currency} {deliveryCharges.toFixed(2)}
            </span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>
              {currency} {totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
        <button className="mt-6 w-full bg-black text-white py-3 font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
