import React, { useState } from "react";
import { CgShoppingBag } from "react-icons/cg";
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { navLinks } from "../constants/index.js";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex  flex-col gap-8   lg:text-xl  lg:flex-row">
    {navLinks.map((item) => (
      <li key={item.id} className="p-2">
        <a href={item.href} className="hover:text-gray-400" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const SellerHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 right-0 z-50 py-5 text-white ">
      <nav className="container max-w-7xl mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold max-sm:text-lg">SHOES STORE</h1>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex ">
          <NavItems />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-lg  lg:space-x-8 lg:text-xl ">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="search..."
              className="w-[220px] h-[25px] px-3  rounded-md  text-black text-sm sm:hidden"
            />
            <CiSearch
              aria-label="Search"
              className=" hover:text-gray-400 cursor-pointer max-sm:text-black  max-sm:-ml-6"
            />
          </div>
          <LuUser2
            aria-label="User Profile"
            className="hover:text-gray-400 cursor-pointer"
          />
          <CgShoppingBag
            aria-label="Shopping Bag"
            className="hover:text-gray-400 cursor-pointer"
          />
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="lg:hidden  text-white text-lg "
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <TfiClose /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden absolute right-0 w-[350px] h-[70vh] flex items-center justify-center bg-gray-900 bg-opacity-30 ">          <NavItems onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default SellerHeader;
