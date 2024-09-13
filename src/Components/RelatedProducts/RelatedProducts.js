import React, { useContext } from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const RelatedProducts = () => {
  const { theme } = useContext(ShopContext);

  return (
    <div className="flex flex-col items-center gap-4 h-[90vh] p-4">
      <h1 className={`text-4xl font-semibold ${theme === 'light' ? 'text-white' : 'text-gray-900'}`}>Related Products</h1>
      <hr className={`w-48 h-1 rounded-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`} />
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
