import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const MAX_PRICE = 1000;
const MIN_PRICE = 0;

const marks = [
  { value: MIN_PRICE, label: `${MIN_PRICE}` },
  { value: MAX_PRICE, label: `${MAX_PRICE}` },
];

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  // States for filters
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('relevant'); // State for sorting

  const categories = [
    'New Arrivals',
    'Women',
    'Kids',
    'Beauty',
    'Scarf',
    'Accessories',
    'Special Offers',
  ];
  const types = [
    'Unstitched',
    'Ready to Wear',
    'Shirts',
    'Dupattas',
    'Tops',
    'Bottoms',
  ];
  const fabrics = [
    'Arabic Lawn',
    'Bedford',
    'Blended Chiffon',
    'Blended Tissue',
    'Brochea Jacquard',
    'Cambric',
  ];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleCategoryChange = event => {
    const { value } = event.target;
    setSelectedCategories(prev =>
      prev.includes(value)
        ? prev.filter(cat => cat !== value)
        : [...prev, value]
    );
  };

  const handleTypeChange = event => {
    const { value } = event.target;
    setSelectedTypes(prev =>
      prev.includes(value)
        ? prev.filter(type => type !== value)
        : [...prev, value]
    );
  };

  const handleFabricChange = event => {
    const { value } = event.target;
    setSelectedFabrics(prev =>
      prev.includes(value)
        ? prev.filter(fabric => fabric !== value)
        : [...prev, value]
    );
  };

  const handleSizeChange = event => {
    const { value } = event.target;
    setSelectedSizes(prev =>
      prev.includes(value)
        ? prev.filter(size => size !== value)
        : [...prev, value]
    );
  };

  const handleClearFilters = () => {
    setPriceRange([MIN_PRICE, MAX_PRICE]);
    setSelectedCategories([]);
    setSelectedTypes([]);
    setSelectedFabrics([]);
    setSelectedSizes([]);
    setSortOption('relevant'); // Reset sort option
  };

  const handleSortChange = e => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    let filtered = products;

    // Filter by search query
    if (search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by types
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(product =>
        selectedTypes.includes(product.type)
      );
    }

    // Filter by fabrics
    if (selectedFabrics.length > 0) {
      filtered = filtered.filter(product =>
        selectedFabrics.includes(product.fabric)
      );
    }

    // Filter by sizes
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        selectedSizes.includes(product.size)
      );
    }

    // Sorting the filtered products
    if (sortOption === 'low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [
    products,
    priceRange,
    selectedCategories,
    selectedTypes,
    selectedFabrics,
    selectedSizes,
    sortOption,
    search, // Add search as a dependency
  ]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-10">
      {/* Filter Options */}
      <div className="min-w-60 flex-shrink-0">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
          {/* Clear Filters Button */}
          <button
            onClick={handleClearFilters}
            className="mx-2 bg-white text-black text-sm font-normal py-0.5 px-2 rounded hover:bg-gray-200 transition duration-300"
          >
            Clear all
          </button>
        </p>
        {/* Price Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">PRICE</p>
          <Box sx={{ width: 200 }}>
            <Slider
              marks={marks}
              step={100}
              value={priceRange}
              valueLabelDisplay="auto"
              min={MIN_PRICE}
              max={MAX_PRICE}
              onChange={handlePriceChange}
              sx={{
                color: '#4b5563',
                '& .MuiSlider-thumb': { backgroundColor: '#ffff' },
              }}
            />
          </Box>
        </div>
        {/* Category Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {categories.map(category => (
              <p className="flex gap-2" key={category}>
                <input
                  type="checkbox"
                  value={category}
                  onChange={handleCategoryChange}
                  checked={selectedCategories.includes(category)} // Controlled checkbox
                />
                {category}
              </p>
            ))}
          </div>
        </div>
        {/* Type Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {types.map(type => (
              <p className="flex gap-2" key={type}>
                <input
                  type="checkbox"
                  value={type}
                  onChange={handleTypeChange}
                  checked={selectedTypes.includes(type)} // Controlled checkbox
                />
                {type}
              </p>
            ))}
          </div>
        </div>
        {/* Fabric Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">FABRIC</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {fabrics.map(fabric => (
              <p className="flex gap-2" key={fabric}>
                <input
                  type="checkbox"
                  value={fabric}
                  onChange={handleFabricChange}
                  checked={selectedFabrics.includes(fabric)} // Controlled checkbox
                />
                {fabric}
              </p>
            ))}
          </div>
        </div>
        {/* Size Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SIZE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {sizes.map(size => (
              <p className="flex gap-2" key={size}>
                <input
                  type="checkbox"
                  value={size}
                  onChange={handleSizeChange}
                  checked={selectedSizes.includes(size)} // Controlled checkbox
                />
                {size}
              </p>
            ))}
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select
            className="border-1 border-black text-sm px-2"
            style={{ backgroundColor: '#ffa1b3', color: 'black' }}
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-md shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105"
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
    </div>
  );
};

export default Collection;
