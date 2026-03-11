import React from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-[#141414] via-[#111827] to-[#0c2025] text-white relative overflow-hidden">

        {/* Navigation */}
        <Nav />
        <Sidebar />

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
            Build Your <span className="text-cyan-400">Digital Future</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl text-sm sm:text-base md:text-lg">
            A modern platform designed to simplify your workflow and help you
            manage everything efficiently. Experience speed, design, and
            productivity in one place.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
              Get Started <FaArrowRight />
            </button>

            <button className="border border-gray-400 hover:border-cyan-400 hover:text-cyan-400 transition px-6 py-3 rounded-xl font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      </div>
    </>
  );
}

export default Home;