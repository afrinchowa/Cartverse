import React from "react";
import BestSeller from "../component/BestSeller";
import LatestCollection from "../component/LatestCollection";

function Product() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-1from-[#141414]to-[#0c2025] flex items-center justify-start flex-col py-[20px]">
      <div className="w-full min-h-[70px] flex items-center">
        <LatestCollection />
      </div>
      <div className="w-full min-h-[70px] flex items-center">
        <BestSeller />
      </div>
    </div>
  );
}

export default Product;
