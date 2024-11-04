// src/__tests__/Collection.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Collection from '../pages/Collection'; // Adjust the path to your component
import { ShopContext } from '../context/ShopContext'; // Adjust according to your context path

// Mock data for the context
const mockProducts = [
  {
    _id: '1',
    name: 'Product 1',
    price: 2000,
    category: 'Women',
    type: 'Shirts',
    fabric: 'Cambric',
    size: 'M',
    image: 'product1.jpg',
  },
  {
    _id: '2',
    name: 'Product 2',
    price: 5000,
    category: 'Men',
    type: 'Trousers',
    fabric: 'Lawn',
    size: 'L',
    image: 'product2.jpg',
  },
];

describe('Collection Component', () => {
  const renderWithContext = (search = '', products = mockProducts) =>
    render(
      <ShopContext.Provider
        value={{
          products,
          search,
          setSearch: jest.fn(),
          showSearch: true,
          setShowSearch: jest.fn(),
        }}
      >
        <Collection />
      </ShopContext.Provider>
    );

  it('renders the collection with products', () => {
    renderWithContext();

    // Check if the products are rendered
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  });

  it('filters products by category', () => {
    renderWithContext();

    // Click on a category filter checkbox
    fireEvent.click(screen.getByLabelText(/Women/i));

    // Ensure only "Product 1" is displayed
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
  });

  it('filters products by price range', () => {
    renderWithContext();

    // Adjust the price filter
    const priceSlider = screen.getByRole('slider');
    fireEvent.change(priceSlider, { target: { value: [1000, 3000] } });

    // Ensure only "Product 1" is displayed
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
  });

  it('sorts products by price (low to high)', () => {
    renderWithContext();

    // Select the low to high sorting option
    fireEvent.change(screen.getByDisplayValue(/Sort by: Relevant/i), {
      target: { value: 'low-high' },
    });

    // Ensure products are sorted correctly (Product 1 should appear before Product 2)
    const productNames = screen.getAllByText(/Product/i);
    expect(productNames[0]).toHaveTextContent('Product 1');
    expect(productNames[1]).toHaveTextContent('Product 2');
  });

  it('searches and filters products by name', () => {
    renderWithContext('Product 1');

    // Ensure only "Product 1" is displayed after searching
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
  });
});
