import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { TiTickOutline } from "react-icons/ti";
import { navigate } from "react-router-dom";
function Sidebar() {
  return (
    <div className="w-18% min-h-100vh border-r-[1px] py-[60px] fixed left-0 top-0">
      <div className="flex flex-col gap-4 pt-40px pl-20% text-15px">
        <div className="flex items-center justify-center md:justify-start gap-3 border border-grey-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89]  " onClick={()=>navigate('/add')}>
          <IoMdAddCircleOutline className="h-20px w-20px " />
          <p className="hidden md:block">Add Items</p>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 border border-grey-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] " onClick={()=>navigate('/list')}>
          <CiCircleList className="h-20px w-20px " />
          <p className="hidden md:block">List Items</p>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 border border-grey-200 border-r-0 px-3 py-2 cursor-pointer hover:bg-[#2c7b89] " onClick={()=>navigate('/orders')}>
          <TiTickOutline className="h-20px w-20px " />
          <p className="hidden md:block">Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
