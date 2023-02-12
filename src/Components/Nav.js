import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded lg:w-3/4 lg:m-auto">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="/favicon.ico"
            alt="Belen Logo"
            className="h-16 mr-3 sm:h-20"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            Belen Tejedor
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <Link to="/" className="hover:underline hover:underline-offset-4 text-pink-600">
              <li
                className="block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0 font-semibold"
                aria-current="About Me"
              >
                About Me
              </li>
            </Link>
            <Link to="courses" className="hover:underline hover:underline-offset-4 text-pink-600">
              <li 
              className="block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0 font-semibold">
                Courses
              </li>
            </Link>
            <Link to="gallery" className="hover:underline hover:underline-offset-4 text-pink-600">
              <li className="block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0 font-semibold">
                Gallery
              </li>
            </Link>
            <Link to="references" className="hover:underline hover:underline-offset-4 text-pink-600">
            <li className="block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0 font-semibold">
                References
              </li>
            </Link>
            <Link to="contact" className="hover:underline hover:underline-offset-4 text-pink-600">
              <li className="block py-2 pl-3 pr-4 text-gray-800 rounded md:p-0 font-semibold">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
