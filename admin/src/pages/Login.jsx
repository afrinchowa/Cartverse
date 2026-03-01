import React, { useContext, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import axios from "axios";
import Logo from "../assets/logo.png";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { serverUrl } = useContext(authDataContext);
// eslint-disable-next-line no-unused-vars
const {adminData , getAdmin} = useContext(adminDataContext);
const navigate = useNavigate();
  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/adminLogin`,
        { email, password },
        { withCredentials: true }
      );
      console.log(res.data);
      getAdmin();
      navigate("/");
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <img src={Logo} alt="CartVerse" className="w-14 mb-3" />
          <h1 className="text-2xl font-semibold text-white">CartVerse</h1>
          <p className="text-sm text-gray-400 mt-1">
            Admin Login Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={AdminLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full h-12 rounded-lg bg-black/40 border border-white/15 text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full h-12 rounded-lg bg-black/40 border border-white/15 text-white px-4 pr-12 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {show ? (
              <MdOutlineRemoveRedEye
                className="absolute right-4 top-3.5 text-gray-300 cursor-pointer"
                onClick={() => setShow(false)}
              />
            ) : (
              <IoEyeOffSharp
                className="absolute right-4 top-3.5 text-gray-300 cursor-pointer"
                onClick={() => setShow(true)}
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-500 transition"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Secure Admin Access • CartVerse © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}

export default Login;