import React, { useContext, useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import cart_icon_dark from '../Assets/cart_icon_dark.png';
import moonIcon from '../Assets/dark_mode.png';
import sunIcon from '../Assets/light_mode.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [icon, setIcon] = useState(cart_icon);
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems, theme, setTheme } = useContext(ShopContext);

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIcon(theme === "dark" ? cart_icon : cart_icon_dark);
    };

    return (
        <nav className={`flex justify-between items-center p-4 shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'} transition duration-500`} id="nav">
            <Link className="flex items-center gap-3" to="/">
                <img src={logo} alt="ShopNex Logo" className="h-12" />
                <p className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>ShopNex</p>
            </Link>
            <ul className="flex gap-8 text-lg font-medium">
                {['shop', 'men', 'women', 'kids'].map((category) => (
                    <li
                        key={category}
                        className={`flex flex-col items-center cursor-pointer ${menu === category ? 'text-red-500' : 'text-gray-600'}`}
                        onClick={() => setMenu(category)}
                    >
                        <Link to={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
                        {menu === category && <hr className="w-4/5 border-red-500 mt-1" />}
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-6">
                <Link to="/login">
                    <button className="px-6 py-2 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100 transition duration-300">Login</button>
                </Link>
                <Link to="/cart" className="relative">
                    <img src={icon} alt="Cart Icon" className="w-10" />
                    <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-sm flex items-center justify-center rounded-full">
                        {getTotalCartItems}
                    </div>
                </Link>
                <button onClick={toggle} className="w-12 h-12 flex justify-center items-center rounded-full border border-gray-300">
                    <img src={theme === 'dark' ? sunIcon : moonIcon} alt="Theme Icon" className="w-8 h-8" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
