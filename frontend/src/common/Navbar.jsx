import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setSearchQuery } = useProducts();

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const MenuList = () => (
    <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-red-800 font-bold text-xl">
      <li>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            isActive ? "bg-red-300 px-2 py-1 rounded-md " : "px-2 py-1"
          }
        >
          Men
        </NavLink>
      </li>
      <li>
        <NavLink
          to="women"
          className={({ isActive }) =>
            isActive ? "bg-red-300 px-2 py-1 rounded-md" : "px-2 py-1"
          }
        >
          Women
        </NavLink>
      </li>
      <li>
        <NavLink
          to="kids"
          className={({ isActive }) =>
            isActive ? "bg-red-300 px-2 py-1 rounded-md" : "px-2 py-1"
          }
        >
          Kids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="electronics"
          className={({ isActive }) =>
            isActive ? "bg-red-300 px-2 py-1 rounded-md" : "px-2 py-1"
          }
        >
          Electronics
        </NavLink>
      </li>
      <li>
        <NavLink
          to="Shoes"
          className={({ isActive }) =>
            isActive ? "bg-red-300 px-2 py-1 rounded-md" : "px-2 py-1"
          }
        >
          Shoes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="cart"
          className={({ isActive }) =>
            isActive ? "bg-red-300 px-2 py-1 rounded-md" : "px-2 py-1"
          }
        >
          Cart
        </NavLink>
      </li>
    </ul>
  );

  return (
    <>
      <nav>
        <div className=" flex justify-between items-center space-x-2 px-6 md:px-12 py-4 bg-red-200 ">
          {/* Logo Section */}
          <div className="flex gap-4 items-center">
            <h1 className="text-2xl  font-bold text-red-800">
              {" "}
              <Link to={"/"}>Logo</Link>{" "}
            </h1>
            <input
              type="text"
              className=" rounded-md p-2 text-sm bg-slate-50 drop-shadow-sm  placeholder:text-red-800 placeholder:opacity-40"
              placeholder="Search..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
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
