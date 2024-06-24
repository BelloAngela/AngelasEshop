// ProductSorting.js

import React from 'react';

const ProductSorting = ({ handleSortChange }) => {
  return (
    <div className="my-4">
      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        className="ml-2 px-2 py-1 border border-gray-300 rounded-md"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="title-asc">Title: A to Z</option>
        <option value="title-desc">Title: Z to A</option>
      </select>
    </div>
  );
};

export default ProductSorting;
