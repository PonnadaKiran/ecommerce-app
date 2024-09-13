import React, { useContext } from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import { ShopContext } from '../../Context/ShopContext';

const Breadcrum = (props) => {
  const { product } = props;
  const { theme } = useContext(ShopContext);

  return (
    <div className={`flex items-center gap-2 text-sm md:text-base lg:text-lg font-semibold capitalize mx-4 md:mx-16 lg:mx-40 my-8 ${theme === 'dark' ? 'text-gray-600' : 'text-white'}`}>
      HOME <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      SHOP <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      {product.category} <img src={arrow_icon} alt="arrow" className="w-4 h-4" />
      {product.name}
    </div>
  );
};

export default Breadcrum;
