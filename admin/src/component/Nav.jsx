import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";

function Nav() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const auth = useContext(authDataContext);
  const admin = useContext(adminDataContext);

  const serverUrl = auth?.serverUrl;
  const getAdmin = admin?.getAdmin;

  const logOut = async () => {
    try {
      setLoading(true);

      await axios.get(`${serverUrl}/api/auth/logout`, {
        withCredentials: true,
      });

      if (getAdmin) await getAdmin();

      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="w-full h-[70px] bg-[#ecfafaec] fixed top-0 z-50 flex items-center justify-between px-4 md:px-[30px] shadow-md">

      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="Cartverse" className="w-10 md:w-12" />
        <h1 className="text-[20px] md:text-[25px] font-semibold text-black">
          Cartverse
        </h1>
      </div>

      {/* Logout */}
      <button
        disabled={loading}
        onClick={logOut}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition disabled:opacity-50"
      >
        {loading ? "Logging out..." : "Logout"}
      </button>

    </nav>
  );
}

export default Nav;