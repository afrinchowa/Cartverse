import React from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#0b1220] to-[#0c2025] text-white relative overflow-hidden">

      {/* Sidebar + Nav */}
      <Sidebar />
      <Nav />

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* Main Content */}
      <div className="ml-[18%] flex items-center justify-center min-h-screen px-6">

        <div className="text-center max-w-4xl">

          {/* Badge */}
          <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/40 text-cyan-300 text-sm mb-6">
            Admin Dashboard v1.0
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Your{" "}
            <span className="text-cyan-400">Digital Commerce Engine</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-300 text-sm md:text-lg leading-relaxed">
            A scalable admin system designed for modern product management,
            inventory control, and real-time business operations.
            Built for performance, clarity, and operational efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-7 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/20">
              Get Started <FaArrowRight />
            </button>

            <button className="border border-gray-600 hover:border-cyan-400 hover:text-cyan-300 transition px-7 py-3 rounded-xl font-semibold">
              Learn More
            </button>

          </div>

          {/* Stats Row */}
          <div className="mt-14 grid grid-cols-3 gap-6 text-center text-gray-300">

            <div>
              <h3 className="text-2xl font-bold text-white">99.9%</h3>
              <p className="text-sm">Uptime</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Fast</h3>
              <p className="text-sm">Performance</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">Secure</h3>
              <p className="text-sm">Architecture</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;