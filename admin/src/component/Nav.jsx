import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
function Nav() {
    const navigate = useNavigate();
  return (
    <>
      <nav className="w-full h-[70px] bg-[#ecfafaec] fixed top-0 z-50 flex items-center justify-between px-4 overflow-x-hidden shadow-black md:px-[30px] shadow-md">
         <div
                  className="w-[30%]  flex items-center justify-start  gap-2  cursor-pointer "
                  onClick={() => navigate("/")}
                >
                  <img src={logo} alt="Cartverse" className="w-13.75 md:w-17.5" />
                  <h1 className="text-[20px] text-black font-sans md:text-[25px] font-semibold">
                    Cartverse
                  </h1>
                </div>
        </nav>
    </>
  )
}

export default Nav