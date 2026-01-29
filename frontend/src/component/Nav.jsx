import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaCircleUser, FaBars, FaTimes } from "react-icons/fa";
import { IoSearchCircleSharp, IoSearchCircleOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "Collections", "About", "Contact"];

  /* ---------------- Handlers ---------------- */
  const closeAllOverlays = () => {
    setShowSearch(false);
    setShowProfile(false);
  };

  const handleLogOut = async () => {
    try {
      const res = await axios.get(
        `${serverUrl}/api/auth/logout`,
        { withCredentials: true }
      );
      if (res.data.success) {
        getCurrentUser();
        navigate("/login");
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <>
      <nav className="w-full h-[70px] bg-[#ecfafaec] fixed top-0 z-50 flex items-center justify-between px-4 md:px-[30px] shadow-md">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cartverse" className="w-[55px] md:w-[70px]" />
          <h1 className="text-[20px] md:text-[25px] font-semibold">
            Cartverse
          </h1>
        </div>

        {/* Overlay */}
        {(showProfile || showSearch) && (
          <div
            className="fixed inset-0 z-40"
            onClick={closeAllOverlays}
          />
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li
              key={item}
              className="text-[14px] cursor-pointer bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-[22px] relative z-50">
          
          {/* Search */}
          {showSearch ? (
            <IoSearchCircleSharp
              className="cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          ) : (
            <IoSearchCircleOutline
              className="cursor-pointer"
              onClick={() => setShowSearch(true)}
            />
          )}

          {/* User Icon */}
          <div
            className="w-[35px] h-[35px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name
              ? userData.name.charAt(0).toUpperCase()
              : <FaCircleUser />}
          </div>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute top-[120%] right-0 w-[220px] bg-black text-white rounded-lg p-3">
              <ul className="flex flex-col">
                {!userData && (
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                      closeAllOverlays();
                    }}
                  >
                    Login
                  </li>
                )}

                {userData && (
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      handleLogOut();
                      closeAllOverlays();
                    }}
                  >
                    Logout
                  </li>
                )}

                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  Orders
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  About
                </li>
              </ul>
            </div>
          )}

          {/* Cart */}
          <div className="relative">
            <TiShoppingCart className="text-[26px] cursor-pointer" />
            <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-black text-white rounded-full text-[10px] flex items-center justify-center">
              10
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[24px]"
            onClick={() => setMobileMenuOpen((p) => !p)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="absolute top-full left-0 w-full bg-slate-400/90 backdrop-blur-md py-6 z-40">
            <div className="relative w-[90%] md:w-[55%] mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-[50px] px-6 rounded-full outline-none"
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-[#ecfafa] shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-6">
            {menuItems.map((item) => (
              <li
                key={item}
                className="w-[80%] text-center bg-black text-white py-3 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
