import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
  const { theme } = useContext(ShopContext);

  return (
    <div className="w-[350px] transition-transform transform hover:scale-105">
      <Link to={`/product/${props.id}`} className="relative">
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="w-full h-auto"
        />
        {props.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {props.discount}% OFF
          </span>
        )}
      </Link>
      <div className="mt-4">
        <h5 className="text-lg font-bold">{props.name}</h5>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <span className={`${theme === 'dark' ? 'text-gray-800' : 'text-blue-300'} text-lg font-semibold`}>
              ${props.new_price}
            </span>
            <span className={`${theme === 'dark' ? 'text-gray-500' : 'text-white'} text-sm line-through`}>
              ${props.old_price}
            </span>
          </div>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            <span className="ml-2 text-sm">5.0</span>
          </div>
        </div>
        <Link to={`/product/${props.id}`} className="inline-flex items-center mt-3 px-4 py-2 bg-blue-500 text-white font-medium text-sm rounded-lg hover:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Item;
