import React from 'react';
import * as Components from './Components';

const LoginSignup = () => {
  const [signIn, toggle] = React.useState(true);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center py-8">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <div className="flex flex-col items-center justify-center">
          {signIn ? (
            <Components.Form>
              <h1 className="text-3xl font-bold mb-6">Sign In</h1>
              <input
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="password"
                placeholder="Password"
              />
              <a
                className="text-sm text-blue-500 hover:underline mb-6"
                href="#"
              >
                Forgot your password?
              </a>
              <button
                className="w-full bg-red-500 text-white p-4 rounded font-bold hover:bg-red-600 transition-colors"
                onClick={() => toggle(!signIn)}
              >
                Sign In
              </button>
              <p className="text-gray-600 mt-4">
                Don't have an account?{' '}
                <button
                  className="text-red-500 font-semibold hover:underline"
                  onClick={() => toggle(false)}
                >
                  Sign Up
                </button>
              </p>
            </Components.Form>
          ) : (
            <Components.Form>
              <h1 className="text-3xl font-bold mb-6">Create Account</h1>
              <input
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full p-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
                type="password"
                placeholder="Password"
              />
              <button
                className="w-full bg-red-500 text-white p-4 rounded font-bold hover:bg-red-600 transition-colors"
                onClick={() => toggle(!signIn)}
              >
                Sign Up
              </button>
              <p className="text-gray-600 mt-4">
                Already have an account?{' '}
                <button
                  className="text-red-500 font-semibold hover:underline"
                  onClick={() => toggle(true)}
                >
                  Sign In
                </button>
              </p>
            </Components.Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
