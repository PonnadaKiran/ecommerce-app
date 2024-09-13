import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Contact = () => {
  const { theme } = useContext(ShopContext);

  return (
    <div className={`container-my_${theme} p-6 md:p-12`}>
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white" id="myheading">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        This is the official page of Shopnix, where you can share all your queries, feedback, complaints, or any concern you may have about our products.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        In case of any grievance, don't hesitate to get in touch with us on our official contact number xxxxxxxxxx. Or you can write to us at xyz@gmail.com.
      </p>
    </div>
  );
};

export default Contact;
