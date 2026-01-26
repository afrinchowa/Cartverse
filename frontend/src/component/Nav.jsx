import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSearchCircleSharp, IoSearchCircleOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { userDataContext } from "../context/UserContext";

const Nav = () => {
  const {getCurrentUser,  userData } = useContext(userDataContext);
  const {serverUrl} = useContext(authDataContext);
const handleProfileToggle = () => {
  setShowProfile((prev) => !prev);
};
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "Collections", "About", "Contact"];
let navigate = useNavigate();
const handleLogOut = () => {
  try{
    const result =await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
    console.log(result.data)
    getCurrentUser();
    if(result.data.success){
      navigate("/login");
    }
  }catch(error){
    console.log("Error logging out:", error);
  }
}
  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-[70px] bg-[#ecfafaec] fixed top-0 z-50 flex items-center justify-between px-4 md:px-[30px] shadow-md shadow-black relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Cartverse" className="w-[55px] md:w-[70px]" />
          <h1 className="text-[20px] md:text-[25px] font-semibold">Cartverse</h1>
        </div>

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
        <div className="flex items-center gap-4 text-[22px] relative">
          {/* Search Toggle */}
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
  className="w-[35px] h-[35px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer"
  onClick={handleProfileToggle}
>
  {userData ? userData.name.slice(0, 1).toUpperCase() : <FaCircleUser />}
</div>


          {/* Profile Dropdown */}
          {showProfile  && (
            <div className="absolute top-[110%] right-0 w-[220px] bg-[#000000d7] border border-[#aaa9a9] rounded-[10px] z-10 p-4 flex flex-col gap-2">
              <ul className="w-100% h-100% flex items-start justify-around flex-col text-[17px] py-2.5 text-white ">
               {!userData &&  <li className="w-full hover:bg-[#2f2f2f] px-[15px] py-2.5 cursor-pointer " onClick={()=>{
                navigate("/login") ; setShowProfile(false);
               }}>Login</li> }
               { userData && <li className="w-full hover:bg-[#2f2f2f] px-[15px] py-2.5 cursor-pointer " onClick={()=>{
                handleLogOut(); setShowProfile(false);
               }}>Logout</li>}
                <li className="w-full hover:bg-[#2f2f2f] px-[15px] py-2.5 cursor-pointer ">Orders</li>
                <li className="w-full hover:bg-[#2f2f2f] px-[15px] py-2.5 cursor-pointer ">About</li>
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[24px]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="absolute top-[100%] left-0 w-full bg-slate-400/90 backdrop-blur-md flex justify-center py-6 z-40">
            <div className="relative w-[90%] md:w-[55%]">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">
                <IoSearchCircleOutline />
              </span>
              <input
                type="text"
                placeholder="Search products, collections..."
                className="w-full h-[50px] pl-12 pr-12 rounded-full text-black outline-none focus:ring-2 focus:ring-white transition"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full bg-[#ecfafa] shadow-md md:hidden transition-all duration-300 ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setMobileMenuOpen(false)}
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
