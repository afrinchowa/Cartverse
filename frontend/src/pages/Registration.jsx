import React from "react";
import Logo from "../assets/logo.png";
import {useNavigate} from "react-router-dom";
export const Registration = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-gradient-to-1 from-[#141414] to[#0c2025] text-[white] flex flex-col items-center justyfy-start">
      <div
        className="w-full h-20 flex items-center justify-start px-[30px] gap-2.5 cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img className="w-10" src={Logo} alt="" />
        <h1 className="text-[22px] text-black font-sans">CartVerse</h1>
      </div>
      Registration
    </div>
  );
};
export default Registration;
