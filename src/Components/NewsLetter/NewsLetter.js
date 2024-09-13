import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validate = () => {
    const approvedDomains = [".com", ".in", ".org", ".net", ".edu"];
    const regex = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})$/;

    if (regex.test(email)) {
      const domain = email.split("@")[1];
      const isValidDomain = approvedDomains.some((approvedDomain) =>
        domain.endsWith(approvedDomain)
      );

      if (isValidDomain) {
        setMessage("Subscribed to the Newsletter!");
      } else if (!isValidDomain) {
        setMessage("Please enter a valid email with an approved domain");
      } else {
        setMessage("");
      }
    } else if (!regex.test(email) && email !== "") {
      setMessage("Please enter a valid email ID");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center p-6 bg-gradient-to-b from-purple-100 to-green-50 gap-8">
      <h1 className="text-gray-700 text-3xl sm:text-5xl font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-gray-700 text-lg sm:text-2xl">
        Subscribe to Our Newsletter and Stay Updated
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <input
          type="email"
          placeholder="Your Email ID"
          value={email}
          onChange={handleOnChange}
          className="w-full sm:w-96 p-4 border-2 border-black rounded-full focus:outline-none text-gray-600"
        />
        <button
          onClick={validate}
          className="w-36 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
        >
          Subscribe
        </button>
      </div>
      {message && (
        <p
          className={`text-lg mt-4 ${
            message.includes("Subscribed") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsLetter;
