const BASE_URL = '/api/products';

export const fetchProducts = async (filters) => {
  let url = BASE_URL;

  if (filters) {
    url += `?category=${filters.category}&sortBy=${filters.sortBy}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};
