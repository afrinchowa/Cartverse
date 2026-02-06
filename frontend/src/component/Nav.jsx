import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoSearchCircleSharp, IoSearchCircleOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { userDataContext } from "../context/UserContext";
import { authDataContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContactEmergency } from "react-icons/md";
const Nav = () => {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Collections", path: "/collections" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  /* ---------------- Helpers ---------------- */
  const closeAll = () => {
    setShowSearch(false);
    setShowProfile(false);
    setMobileMenuOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    closeAll();
  };

  const handleLogOut = async () => {
    try {
      const res = await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });
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
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          <img src={logo} alt="Cartverse" className="w-[55px] md:w-[70px]" />
          <h1 className="text-[20px] md:text-[25px] font-semibold">
            Cartverse
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className="text-[14px] cursor-pointer bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 text-[22px] relative">
          {/* Search */}
          {showSearch ? (
            <IoSearchCircleSharp
              className="cursor-pointer"
              onClick={() => setShowSearch(false)}
            />
          ) : (
            <IoSearchCircleOutline
              className="cursor-pointer"
              onClick={() => {
                setShowSearch(true);
                setShowProfile(false);
              }}
            />
          )}

          {/* User */}
          <div
            className="w-[35px] h-[35px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              setShowProfile((p) => !p);
              setShowSearch(false);
            }}
          >
            {userData?._id ? (
              userData.name.charAt(0).toUpperCase()
            ) : (
              <FaCircleUser />
            )}
          </div>

          {/* Profile Dropdown */}
          {showProfile && (
            <div className="absolute top-[120%] right-0 w-[220px] bg-black text-white rounded-lg p-3 z-50">
              <ul className="flex flex-col">
                {!userData?._id && (
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleNavigate("/login")}
                  >
                    Login
                  </li>
                )}

                {userData?._id && (
                  <>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleNavigate("/orders")}
                    >
                      Orders
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Logout
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => handleNavigate("/cart")}
          >
            <TiShoppingCart className="text-[26px]" />
            <span className="absolute -top-2 -right-2 w-[18px] h-[18px] bg-black text-white rounded-full text-[10px] flex items-center justify-center">
              10
            </span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[24px]"
            onClick={() => setMobileMenuOpen((p) => !p)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="w-full h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
          <button className="text-white flex items-center justify-center flex-col gap-2">
            <IoMdHome className="w-30px h-30px text-white md:hidden "/>
            Home
          </button>
          <button className="text-white flex items-center justify-center flex-col gap-2">
            <HiOutlineCollection className="w-30px h-30px text-white md:hidden "/>
            Collection
          </button>
          <button className="text-white flex items-center justify-center flex-col gap-2">
            <MdContactEmergency className="w-30px h-30px text-white md:hidden "/>
            Contact
          </button>
          <button className="text-white flex items-center justify-center flex-col gap-2">
            <TiShoppingCart className="w-30px h-30px text-white md:hidden "/>
            Cart
          </button>
        
        </div>
      </nav>

      {/* Search Bar */}
      {showSearch && (
        <div className="fixed top-[70px] left-0 w-full bg-slate-400/90 backdrop-blur-md py-6 z-40">
          <input
            type="text"
            placeholder="Search products..."
            className="w-[90%] md:w-[55%] mx-auto block h-[50px] px-6 rounded-full outline-none"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-[#ecfafa] shadow-md md:hidden z-40">
          <ul className="flex flex-col items-center gap-4 py-6">
            {menuItems.map((item) => (
              <li
                key={item.label}
                onClick={() => handleNavigate(item.path)}
                className="w-[80%] text-center bg-black text-white py-3 rounded-lg"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
