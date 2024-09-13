import React, { useContext } from 'react';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const NewCollections = () => {
  const { theme } = useContext(ShopContext);

  return (
    <div className="flex flex-col items-center gap-6 mb-24">
      <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-gray-900' : 'text-white'}`}>
        NEW COLLECTIONS
      </h1>
      <hr className={`w-52 h-1 rounded-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {new_collection.map((item, i) => (
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
    </div>
  );
};

export default NewCollections;
