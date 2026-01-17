import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaSearchLocation, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { userDataContext } from "../context/UserContext";

const Nav = () => {
  let { userData } = useContext(userDataContext);
  let { showSearch, setShowSearch } = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full h-[70px] bg-[#ecfafaec] z-50 fixed top-0 flex items-center justify-between px-4 md:px-[30px] shadow-md shadow-black relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cartverse" className="w-[55px] md:w-[70px]" />
          <h1 className="text-[20px] md:text-[25px] font-sans font-semibold">
            Cartverse
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-black font-medium">
          {["Home", "Collections", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="text-[14px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] text-white py-2 px-4 rounded-lg transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-[20px]">
          <FaSearchLocation className="cursor-pointer" />

          {!userData && <FaUserAlt className="cursor-pointer" />}
          {userData && (
            <div className="w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center gap-2">
              {userData?.name.slice(0, 1)}
            </div>
          )}
          <TiShoppingCart className="cursor-pointer text-[24px]" />
          <p className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-23">
            10
          </p>

          <div>
            <div className="w-[100%] h-[80px] bg-[#080808] absolute top-[100%] left-0 right-0 flex items-center justify-center text-white rounded-full flex items-center gap-2">
              <input type="text" className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] x-[50px]" placeholder="search-here" />
            </div>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[22px]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
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
              className="w-[80%] text-center text-[15px] bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-slate-600 transition"
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
