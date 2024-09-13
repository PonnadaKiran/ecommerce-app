import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <svg
          className="w-56 h-56"
          enableBackground="new 0 0 226 249.135"
          viewBox="0 0 226 249.135"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="113" cy="113" fill="#FFE585" r="109" />
          <line
            fill="none"
            opacity="0.29"
            stroke="#6E6E96"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            x1="88.866"
            x2="136.866"
            y1="245.135"
            y2="245.135"
          />
          <line
            fill="none"
            opacity="0.17"
            stroke="#6E6E96"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            x1="154.732"
            x2="168.732"
            y1="245.135"
            y2="245.135"
          />
          <line
            fill="none"
            opacity="0.17"
            stroke="#6E6E96"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            x1="69.732"
            x2="58.732"
            y1="245.135"
            y2="245.135"
          />
          <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
          <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
          <ellipse
            cx="67.732"
            cy="140.894"
            fill="#FF0000"
            opacity="0.18"
            rx="17.372"
            ry="8.106"
          />
          <ellipse
            cx="154.88"
            cy="140.894"
            fill="#FF0000"
            opacity="0.18"
            rx="17.371"
            ry="8.106"
          />
          <circle
            cx="113"
            cy="113"
            fill="none"
            r="109"
            stroke="#6E6E96"
            strokeWidth="8"
          />
        </svg>
        <div className="mt-4">
          <span className="block text-4xl font-bold text-gray-700">404</span>
          <span className="block text-lg text-gray-600 mt-2">
            Sorry, we couldn't find what you were looking for!
          </span>
        </div>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gray-300 text-gray-700 rounded-lg shadow-md hover:bg-gray-400 transition duration-200"
          >
            Go back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
