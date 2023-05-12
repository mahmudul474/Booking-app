import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserinfoContext } from "../../Context/AuthContext/UserContext";
import logo from "../../asates/mainlogo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logout } = useContext(UserinfoContext);
 

  const handlelogout = () => {
    logout(() => {});
  };

  const navitem = (
    <>
      <Link to="/">
        <li  onClick={() => setIsMenuOpen(false)}
          aria-label="Product pricing"
          title="Product pricing"
          className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Home
        </li>
      </Link>

      <Link to="/Chauffervehicles">
        <li  onClick={() => setIsMenuOpen(false)}
          aria-label="Product pricing"
          title="Product pricing"
          className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Chauffer Vehicles
        </li>
      </Link>

      <Link to="/daytour">
        <li  onClick={() => setIsMenuOpen(false)}
          aria-label="Product pricing"
          title="Product pricing"
          className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Day Tour
        </li>
      </Link>

      <Link to="/contact">
        <li  onClick={() => setIsMenuOpen(false)}
          aria-label="Product pricing"
          title="Product pricing"
          className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Contact us
        </li>
      </Link>
      <li  onClick={() => setIsMenuOpen(false)}
        aria-label="Product pricing"
        title="Product pricing"
        className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
        <button className=" cursor-pointer  bg-green-950 btn hover:bg-green-950">
          Book Now
        </button>
      </li>

      {user ? (
        <>
          <Link to="/dashboard">
            <li  onClick={() => setIsMenuOpen(false)}
              aria-label="Product pricing"
              title="Product pricing"
              className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Dashboard
            </li>
          </Link>
          <li 
            aria-label="Product pricing"
            title="Product pricing"
            className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {user?.displayName}
          </li>

          <li
            onClick={handlelogout}
            aria-label="Product pricing"
            title="Product pricing"
            className=" cursor-pointer  font-medium tracking-wide text-red-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            logout
          </li>
        </>
      ) : (
        <>
          <Link to="/register">
            <li  onClick={() => setIsMenuOpen(false)}
              aria-label="Product pricing"
              title="Product pricing"
              className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Register
            </li>
          </Link>

          <Link to="/login">
            <li  onClick={() => setIsMenuOpen(false)}
              aria-label="Product pricing"
              title="Product pricing"
              className=" cursor-pointer  font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Login
            </li>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className=" cursor-pointer  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
     
     
      
      <div className=" cursor-pointer  relative flex items-center justify-between">
        <div className=" cursor-pointer  flex items-center">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className=" cursor-pointer  inline-flex items-center mr-8"
          >
            <img className=" cursor-pointer  h-16 " src={logo} alt="logo" />
          </a>
        </div>
        <ul className=" cursor-pointer  flex items-center hidden space-x-8 lg:flex">
          {navitem}
        </ul>
        <div className=" cursor-pointer  lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className=" cursor-pointer  p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              className=" cursor-pointer  w-5 text-gray-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className=" cursor-pointer  absolute top-0 left-0 w-full z-40">
              <div className=" cursor-pointer  p-5 bg-gray-300  z-40 border rounded shadow-sm">
                <div className=" cursor-pointer  flex items-center justify-between mb-4">
                  <div>
                    <img src={logo} alt="logo"/>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className=" cursor-pointer  p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        className=" cursor-pointer  w-5 text-gray-600"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className=" cursor-pointer  space-y-4">{navitem}</ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
