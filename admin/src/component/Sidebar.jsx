import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      name: "Add Items",
      path: "/add",
      icon: <IoMdAddCircleOutline />,
    },
    {
      name: "List Items",
      path: "/list",
      icon: <CiCircleList />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <TiTickOutline />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <TiTickOutline />,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: <TiTickOutline />,
    },

  ];

  return (
    <div className="w-[18%] min-h-screen border-r border-gray-800 py-[60px] fixed left-0 top-0 bg-[#0f0f0f]">

      <div className="flex flex-col gap-3 px-4 text-[15px]">

        {menu.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition
                ${
                  isActive
                    ? "bg-cyan-500 text-black"
                    : "hover:bg-[#1f2a2e] text-white"
                }`}
            >
              <span className="text-lg">{item.icon}</span>

              <p className="hidden md:block font-medium">
                {item.name}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

export default Sidebar;