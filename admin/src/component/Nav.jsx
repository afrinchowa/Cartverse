import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
function Nav() {
    const navigate = useNavigate();
    let {serverUrl} = useContext(authDataContext);
    const {getAdmin} = useContext(adminDataContext);

    const logOut =async()=>{
    try {
       const result = await axios.get(serverUrl+"/api/auth/logout" , { withCredentials: true });
       console.log(result.data)
       getAdmin();
       navigate("/login");
        } catch (err) {
        console.error("Logout failed:", err);
      }
    }
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
                    <button className='ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition' onClick={logOut}>Logout</button>
        </nav>
    </>
  )
}

export default Nav