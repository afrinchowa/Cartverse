import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import {
  IoSearchCircleSharp,
  IoSearchCircleOutline,
} from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { userDataContext } from "../context/UserContext";

const Nav = () => {
  const { userData } = useContext(userDataContext);

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[70px] bg-[#ecfafaec] fixed top-0 z-50 flex items-center justify-between px-4 md:px-[30px] shadow-md shadow-black relative">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cartverse" className="w-[55px] md:w-[70px]" />
          <h1 className="text-[20px] md:text-[25px] font-semibold">
            Cartverse
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {["Home", "Collections", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="text-[14px] cursor-pointer bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-[22px] relative">
          
          {/* Search Toggle */}
          {!showSearch ? (
            <IoSearchCircleOutline
              className="cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          ) : (
            <IoSearchCircleSharp
              className="cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          )}

          {/* User */}
          {!userData ? (
            <FaUserAlt className="cursor-pointer" />
          ) : (
            <div className="w-[32px] h-[32px] bg-black text-white rounded-full flex items-center justify-center font-semibold">
              {userData?.name?.slice(0, 1)}
            </div>
          )}

          {/* Cart */}
          <div className="relative">
            <TiShoppingCart className="cursor-pointer text-[26px]" />
            <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-black text-white rounded-full text-[10px] flex items-center justify-center">
              10
            </span>
          </div>
<div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-110% ">

</div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[24px]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Bar */}
{showSearch && (
  <div className="absolute top-[100%] left-0 w-full bg-slate-400/90 backdrop-blur-md flex justify-center py-6 z-40">
    <div className="relative w-[90%] md:w-[55%]">
      
      {/* Search Icon */}
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
        <IoSearchCircleOutline />
      </span>

      {/* Input */}
      <input
        type="text"
        placeholder="Search products, collections..."
        className="w-full h-[50px] pl-12 pr-12 rounded-full text-black outline-none focus:ring-2 focus:ring-white transition"
      />

      {/* Close Button */}
      <button
        onClick={() => setShowSearch(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
      >
        <FaTimes />
      </button>
    </div>
  </div>
)}

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full bg-[#ecfafa] shadow-md md:hidden transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {["Home", "Collections", "About", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => setOpen(false)}
              className="w-[80%] text-center bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-slate-600 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
