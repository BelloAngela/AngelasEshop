// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import ProductSorting from './ProductSorting';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setSortedProducts(response.data); // Initialize sortedProducts with fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Function to handle sorting based on selected option
    const sortProducts = () => {
      switch (sortOption) {
        case 'price-asc':
          setSortedProducts([...products].sort((a, b) => a.price - b.price));
          break;
        case 'price-desc':
          setSortedProducts([...products].sort((a, b) => b.price - a.price));
          break;
        case 'title-asc':
          setSortedProducts([...products].sort((a, b) => a.title.localeCompare(b.title)));
          break;
        case 'title-desc':
          setSortedProducts([...products].sort((a, b) => b.title.localeCompare(a.title)));
          break;
        default:
          setSortedProducts([...products]);
          break;
      }
    };

    sortProducts();
  }, [products, sortOption]);

  const handleSortChange = (value) => {
    setSortOption(value);
  };

  return (
    <div>
      <ProductSorting handleSortChange={handleSortChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p className="text-gray-500">{product.category}</p>
            <img src={product.image} alt={product.title} className="w-full h-auto mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
