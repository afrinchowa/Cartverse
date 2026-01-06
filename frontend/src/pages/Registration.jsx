/* eslint-disable no-undef */
import React from "react";
import Logo from "../assets/logo.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import google from "../assets/google.png";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { auth, provider } from "../utils/Firebase";
import { signInWithPopup } from "firebase/auth";
import { authDataContext } from "../context/AuthContext";

const Registration = () => {
  const [show, setShow] = React.useState(false);
  const { serverUrl } = React.useContext(authDataContext);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();

  // Normal signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${serverUrl}/api/users/register`,
        {
          username: name.trim(),
          email: email.trim(),
          password,
        },
        { withCredentials: true }
      );

      console.log(result.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  // Google signup
  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const result = await axios.post(
        `${serverUrl}/api/auth/googleLogin`,
        {
          name: user.displayName,
          email: user.email,
        },
        { withCredentials: true }
      );

      console.log(result.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Google signup failed");
    }
  };

  return (
    <div className="w-screen h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <div
        className="w-full h-20 flex items-center px-8 gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-10" src={Logo} alt="logo" />
        <h1 className="text-2xl font-sans">CartVerse</h1>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Registration Page</h2>
        <p className="text-gray-400">
          Welcome to CartVerse, place your order
        </p>
      </div>

      {/* Card */}
      <div className="max-w-[600px] w-[90%] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex justify-center">
        <form
          onSubmit={handleSignup}
          className="w-[90%] py-8 flex flex-col gap-5"
        >
          {/* Google signup */}
          <button
            type="button"
            onClick={googleSignup}
            className="w-full h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-3 hover:bg-[#42656ca0] transition"
          >
            <img src={google} alt="google" className="w-7" />
            Registration with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex-1 h-px bg-gray-600" />
            OR
            <div className="flex-1 h-px bg-gray-600" />
          </div>

          {/* Inputs */}
          <input
            type="text"
            placeholder="Username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />

          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            {show ? (
              <MdOutlineRemoveRedEye
                className="eye"
                onClick={() => setShow(false)}
              />
            ) : (
              <IoEyeOffSharp
                className="eye"
                onClick={() => setShow(true)}
              />
            )}
          </div>

          {/* Submit */}
          <button className="w-full h-[50px] bg-[#42656cae] rounded-lg font-semibold hover:bg-[#42656ca0] transition">
            Create Account
          </button>

          <p className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
