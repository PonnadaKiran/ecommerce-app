import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const About = () => {
  const { theme } = useContext(ShopContext);
  return (
    <div className={`about_page_${theme} bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <h1 className="text-center mt-4 text-3xl font-bold" id="aboutheading">
        About Us
      </h1>
      <div className="container-my flex flex-wrap items-center justify-center border shadow-lg rounded py-4 mx-4 md:mx-8">
        <div className="content max-w-4xl flex flex-col p-4">
          <p className="txt text-lg">
            The ShopNex app revolutionizes the way you shop for clothing, providing an immersive and convenient experience that caters to the diverse fashion needs of individuals and families alike. Seamlessly blending cutting-edge technology with a user-friendly interface, our app serves as a virtual fashion haven where the latest trends in men's, women's, and kids' apparel are just a tap away. Navigating through the app is a breeze, allowing you to explore curated collections, discover new arrivals, and effortlessly make secure purchases with confidence. The app's intuitive features provide a personalized touch, offering tailored recommendations and exclusive deals based on your preferences. Embracing the ethos of ShopNex, the app is not merely a transactional platform but a dynamic space for self-expression and discovery. It encapsulates the essence of a modern, tech-savvy wardrobe upgrade, where every click opens the door to a world of style possibilities. Your fashion journey begins with the ShopNex app – download it today to witness the seamless convergence of style, technology, and unparalleled shopping satisfaction.
          </p>
        </div>

        <div className="container-2 flex flex-col items-center justify-center border-1 p-4 mt-4">
          <h2 className="text-center text-xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <div className="accordion w-full max-w-4xl" id="accordionExample">
            <div className="accordion-item shadow">
              <h2 className="accordion-header">
                <button className="accordion-button text-light bg-red-600 hover:bg-red-700 focus:bg-red-700" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Affordable Online Shopping at Your Fingertips
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show text-body" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market. Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet.
                </div>
              </div>
            </div>
            <div className="accordion-item shadow mt-2">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed text-light bg-red-600 hover:bg-red-700 focus:bg-red-700" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  A Huge Collection of Clothes Across All Categories
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse text-body" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  We have a very wide range of clothes in all categories. For men, women, and kids. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
