import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import Testimonial from '../components/Testimonial';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const MAX_PRICE = 1000;
const MIN_PRICE = 0;
const DISPLAY_LIMIT = 16;

const marks = [
  { value: MIN_PRICE, label: `${MIN_PRICE}` },
  { value: MAX_PRICE, label: `${MAX_PRICE}` },
];

const Collection = () => {
  const { products, search } = useContext(ShopContext);

  // States for filters
  const [showFilter, setShowFilter] = useState(false);
  const [priceRange, setPriceRange] = useState([MIN_PRICE, MAX_PRICE]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');

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

  const handlePriceChange = (event, newValue) => setPriceRange(newValue);
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
    setSortOption('relevant');
  };
  const handleSortChange = e => setSortOption(e.target.value);

  useEffect(() => {
    let filtered = products;

    if (search)
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    filtered = filtered.filter(
      product =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    if (selectedCategories.length > 0)
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      );
    if (selectedTypes.length > 0)
      filtered = filtered.filter(product =>
        selectedTypes.includes(product.type)
      );
    if (selectedFabrics.length > 0)
      filtered = filtered.filter(product =>
        selectedFabrics.includes(product.fabric)
      );
    if (selectedSizes.length > 0)
      filtered = filtered.filter(product =>
        selectedSizes.includes(product.size)
      );

    if (sortOption === 'low-high') filtered.sort((a, b) => a.price - b.price);
    else if (sortOption === 'high-low')
      filtered.sort((a, b) => b.price - a.price);

    setFilteredProducts(filtered);
  }, [
    products,
    priceRange,
    selectedCategories,
    selectedTypes,
    selectedFabrics,
    selectedSizes,
    sortOption,
    search,
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
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <input
                type="checkbox"
                value={category}
                onChange={handleCategoryChange}
              />
              <label className="ml-2 text-sm">{category}</label>
            </div>
          ))}
        </div>

        {/* Type Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          {types.map(type => (
            <div key={type} className="flex items-center">
              <input type="checkbox" value={type} onChange={handleTypeChange} />
              <label className="ml-2 text-sm">{type}</label>
            </div>
          ))}
        </div>

        {/* Fabric Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">FABRIC</p>
          {fabrics.map(fabric => (
            <div key={fabric} className="flex items-center">
              <input
                type="checkbox"
                value={fabric}
                onChange={handleFabricChange}
              />
              <label className="ml-2 text-sm">{fabric}</label>
            </div>
          ))}
        </div>

        {/* Size Filter */}
        <div
          className={`pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}
        >
          <p className="mb-3 text-sm font-medium">SIZE</p>
          {sizes.map(size => (
            <div key={size} className="flex items-center">
              <input type="checkbox" value={size} onChange={handleSizeChange} />
              <label className="ml-2 text-sm">{size}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 p-4 md:p-6">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select
            className="border border-black text-sm sm:text-base px-2 py-1"
            style={{ backgroundColor: '#ffa1b3', color: 'black' }}
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Display Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.slice(0, DISPLAY_LIMIT).map((item, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded-md shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105"
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
        {/* Components to Display Before Footer */}
        <div className="mt-10">
          <Testimonial />
          <OurPolicy />
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
};

export default Collection;
