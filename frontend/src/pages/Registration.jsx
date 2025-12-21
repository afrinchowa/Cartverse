import React from "react";
import Logo from "../assets/logo.png";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
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
      <div className="w-full h-[100px] flex items-center justify-center flex-col gap-2.5">
        <span className="text-[25px] font-semibold text-black">
          Registration page
        </span>
        <span className="text-[16px] text-gray-400">
          Welcome to CartVerse,Place your Order
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg  flex items-center justify-center">
        {/* Registration form can be added here */}
        <form action="" className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-5 ">
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg  flex  items-center justify-center gap-2.5 py-5 cursor-pointer">
            <img src={google} alt="" className="w-7" />
            Registration with Google
          </div>
          <div className="w-full h-5 flex items-center justify-center gap[10px] ">
<div className="w-full ">

</div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
