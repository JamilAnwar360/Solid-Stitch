import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex pt-4 items-center justify-between ру-5 font-medium">
      <Link to={'/'}>
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <div className="relative">
          <div
            className="flex flex-col items-center gap-1 cursor-pointer"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <NavLink
              to="/collection"
              className="flex flex-col items-center gap-1"
            >
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </NavLink>
            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div
                className="absolute left-0 w-48 mt-6 bg-white shadow-lg rounded-md z-10 transition-transform transform scale-95 opacity-0 duration-200 ease-in-out"
                style={{
                  transform: dropdownVisible ? 'scale(1)' : 'scale(0.95)',
                  opacity: dropdownVisible ? 1 : 0,
                }}
              >
                <NavLink
                  to="/collection/2-piece"
                  className="block px-4 py-2 text-gray-700 hover:bg-customPink hover:text-white transition-colors duration-200 "
                  onClick={() => setVisible(false)}
                >
                  2 Piece
                </NavLink>
                <NavLink
                  to="/collection/3-piece"
                  className="block px-4 py-2 text-gray-700 hover:bg-customPink hover:text-white transition-colors duration-200"
                  onClick={() => setVisible(false)}
                >
                  3 Piece
                </NavLink>
                <NavLink
                  to="/collection/kids"
                  className="block px-4 py-2 text-gray-700 hover:bg-customPink hover:text-white transition-colors duration-200"
                  onClick={() => setVisible(false)}
                >
                  Kids
                </NavLink>
                <NavLink
                  to="/collection/abaya"
                  className="block px-4 py-2 text-gray-700 hover:bg-customPink hover:text-white transition-colors duration-200"
                  onClick={() => setVisible(false)}
                >
                  Abaya
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 ру-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="Cart Icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-gradient-to-b from-gray-100 to-white transition-transform transform ${
          visible
            ? 'translate-x-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3'
            : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full text-gray-800 shadow-lg rounded-l-lg">
          {/* Close Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-200 transition-colors rounded-tl-lg rounded-bl-lg"
          >
            <img
              className="h-5 rotate-180"
              src={assets.dropdown_icon}
              alt="back"
            />
            <p className="font-semibold">Back</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="text-lg font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
            >
              HOME
            </NavLink>
            <div className="relative">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <p className="text-lg font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200">
                  COLLECTION
                </p>
                <img
                  className={`h-4 transition-transform ${
                    dropdownVisible ? 'rotate-180' : 'rotate-0'
                  }`}
                  src={assets.dropdown_icon}
                  alt="Dropdown Icon"
                />
              </div>
              {dropdownVisible && (
                <div className="flex flex-col space-y-2 pl-4">
                  <NavLink
                    onClick={() => {
                      setVisible(false);
                      setDropdownVisible(false);
                    }}
                    to="/collection/2-piece"
                    className="text-md font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
                  >
                    2 Piece
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      setVisible(false);
                      setDropdownVisible(false);
                    }}
                    to="/collection/3-piece"
                    className="text-md font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
                  >
                    3 Piece
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      setVisible(false);
                      setDropdownVisible(false);
                    }}
                    to="/collection/kids"
                    className="text-md font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
                  >
                    Kids
                  </NavLink>
                  <NavLink
                    onClick={() => {
                      setVisible(false);
                      setDropdownVisible(false);
                    }}
                    to="/collection/abaya"
                    className="text-md font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
                  >
                    Abaya
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="text-lg font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className="text-lg font-medium hover:text-customPink transition-colors p-2 rounded-md hover:bg-gray-200"
            >
              CONTACT
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
