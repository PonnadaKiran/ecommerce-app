import React, { useContext } from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

const Popular = () => {
    const { theme } = useContext(ShopContext);
    const darkMode = theme === "dark";

    return (
        <div className="popular flex flex-col items-center gap-8 mb-24">
            <h1 className={`text-2xl sm:text-4xl font-semibold ${darkMode ? 'text-gray-900' : 'text-white'}`}>
                POPULAR IN WOMEN
            </h1>
            <hr className={`w-52 h-1 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`} />
            <div className="popular-item mt-12 flex flex-wrap justify-center gap-8">
                {data_product.map((item, i) => (
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

export default Popular;
