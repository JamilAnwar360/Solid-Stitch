import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false); // Hide search on other routes
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="text-center">
      <div className="inline-flex items-center justify-center border border-gray-700 px-4 py-2 my-5 mx-3 rounded-full w-4/5 sm:w-3/4 md:w-1/2 lg:w-1/3">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          className="flex-1 outline-none bg-customPink text-sm placeholder-gray-500 placeholder:opacity-100 py-2 px-3 rounded-full"
          placeholder="Search"
        />
        <img className="w-5 h-5 ml-2" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-5 h-5 cursor-pointer mt-2"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;
