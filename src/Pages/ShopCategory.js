import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product, theme } = useContext(ShopContext);
  const productsPerPage = 12;
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState('');

  let filteredProducts;

  if (props.category === 'kids') {
    filteredProducts = all_product.filter(item => item.category === 'kids');
  } else {
    filteredProducts = all_product.filter(item => item.category === props.category);
    while (filteredProducts.length < 76) {
      filteredProducts = [...filteredProducts, ...filteredProducts];
    }
  }

  if (sorting === '0') {
    filteredProducts.sort((a, b) => a.new_price - b.new_price);
  } else if (sorting === '1') {
    filteredProducts.sort((a, b) => b.new_price - a.new_price);
  }

  const totalProducts = 76;

  const handleExploreMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const startIndex = (page - 1) * productsPerPage;
  let endIndex = startIndex + productsPerPage;

  endIndex = Math.min(endIndex, totalProducts);

  return (
    <div className="min-h-screen">
      <img className="block mx-auto my-8 w-4/5" src={props.banner} alt="" />
      <div className="flex justify-between items-center mx-20 mb-8">
        <p>
          <span className="font-semibold">{`Showing ${startIndex + 1}-${endIndex}`}</span> out of {totalProducts} products
        </p>
        <div className={`relative inline-block ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-3 rounded-full`}>
          <label htmlFor="shopcategory-sort" className="text-sm font-medium">
            Sort By
          </label>
          <select
            name="shopcategory-sort"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            className="ml-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="0">Low to High</option>
            <option value="1">High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16">
        {filteredProducts.slice(startIndex, endIndex).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {endIndex < totalProducts && (
        <div className="flex justify-center items-center mt-16">
          <button
            onClick={handleExploreMore}
            className="px-8 py-4 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition duration-200"
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
