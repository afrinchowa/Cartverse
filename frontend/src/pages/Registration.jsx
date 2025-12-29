import React from "react";
import Logo from "../assets/logo.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";
export const Registration = () => {
  let [show,setShow]=React.useState(false);
  let {serverUrl} = React.useContext(authDataContext);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-black text-[white] flex flex-col items-center justify-start">
      <div
        className="w-full h-20 flex items-center justify-start px-[30px] gap-2.5 cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img className="w-10" src={Logo} alt="" />
        <h1 className="text-[22px] text-white font-sans">CartVerse</h1>
      </div>
      <div className="w-full h-[100px] flex items-center justify-center flex-col gap-2.5">
        <span className="text-[25px] font-semibold text-white">
          Registration page
        </span>
        <span className="text-[16px] text-gray-400">
          Welcome to CartVerse,Place your Order
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg  flex items-center justify-center">
        {/* Registration form can be added here */}
        <form
          action=""
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-5 "
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg  flex  items-center justify-center gap-2.5 py-5 cursor-pointer">
            <img src={google} alt="" className="w-7" />
            Registration with Google
          </div>
          <div className="w-full flex  items-center justify-center gap-10">
            <div className="w-full  flex flex-col items-center justify-center gap-2.5">
              <div className="w-[40%] h-px bg-[#96969635]"></div>Or
              <div className="w-[40%] h-px bg-[#96969635]"></div>
              <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold"
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold"
                  required
                />
                <input
                  type={show?"text":"password"}
                  placeholder="Password"
                  className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold"
                  required
                />
                {show ? (
                  <MdOutlineRemoveRedEye className="w-5 h-5 bottom-[44%] right-[5%] cursor-pointer absolute " onClick={()=>setShow(prev =>!prev)} />
                ) : (
                  <IoEyeOffSharp className="w-5 h-5 bottom-[44%] right-[5%] cursor-pointer absolute " onClick={()=>setShow(prev =>!prev)} />
                )}
                <button className="w-full h-[50px] bg-[#42656cae] rounded-lg text-white font-semibold cursor-pointer hover:bg-[#42656ca0] transition-colors duration-300">
                  Create Account
                </button>
                <p className="text-[14px] text-gray-400">
                  Already have an account?{" "}
                  <a href="/login" className="text-blue-500 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Registration;
