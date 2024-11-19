import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const MenuList = () => (
    <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-red-800 font-bold text-xl">
      <li>
        <Link to="/men">Men</Link>
      </li>
      <li>
        <Link to="women">Women</Link>
      </li>
      <li>
        <Link to="kids">Kids</Link>
      </li>
      <li>
        <Link to="electronics">Electronics</Link>
      </li>
      <li>
        <Link to="Shoes">Shoes</Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav>
        <div className=" flex justify-between items-center space-x-2 px-6 md:px-12 py-4 bg-red-200 ">
          {/* Logo Section */}
          <div>
            <h1 className="text-2xl  font-bold text-red-800">Logo</h1>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <MenuList />
          </div>
          {/* Hamburger Menu Section */}

          <div className=" block md:hidden">
            <TiThMenu
              className=" rounded-full text-2xl cursor-pointer text-red-800"
              onClick={handleMenu}
            />
          </div>
        </div>
        {/* Mobile View Navbar */}

        <div
          className={`${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } bg-red-200 block md:hidden rounded-md m-4 p-4 transition-all duration-500 ease-in-out overflow-hidden`}
        >
          <MenuList />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
