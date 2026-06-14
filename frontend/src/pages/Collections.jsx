import { Search, Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Collections() {
  let [showFilter, setShowFilter] = useState(false);
  return (
    <div className="md:w-[100vw] lg:w-[20vw] w-full min-h-screen bg-linear-to-l from-gray-[#141414] to-gray-[#0c2025] flex flex-col items-start md:flex-row justify-start pt-[70px] overflow-x-hidden z-2">
      <div
        className={`md:w-[30vw] lg:w-[20vw] w-[100vw] md:min-h-[100vh] ${showFilter ? "h-[45vh]" : "h-[100vh]"} p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] lg:fixed flex flex-col items-center justify-center gap-4`}
      >
        <p
          className="text-[25px] font-semibold flex gap-[5px] items-center justify-start cursor-pointer"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          FILTERS{""}
          {!showFilter && <FaAngleRight className="text-[18px] md:hidden" />}
          {showFilter && <FaAngleDown className="text-[18px] md:hidden" />}
        </p>

        <div
          className={`border-2px border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"}  md:block`}
        >
          <p className="text-[18px] text-[#f8fafa] font-medium">CATEGORIES</p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input type="checkbox" value={"Men"} className="w-3 h-3" /> Men
            </p>

            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input type="checkbox" value={"Women"} className="w-3 h-3" />{" "}
              Women
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input type="checkbox" value={"Kids"} className="w-3 h-3" /> Kids
            </p>
          </div>
        </div>
        <div
          className={`border-2px border-[#dedcdc] pl-5 py-3 mt-6 rounded-md bg-slate-600 ${showFilter ? "" : "hidden"}  md:block`}
        >
          <p className="text-[18px] text-[#f8fafa] font-medium">
            SUB-CATEGORIES
          </p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input
                type="checkbox"
                value={"TopWear"}
                className="w-3 h-3"
              />{" "}
              TopWear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input
                type="checkbox"
                value={"BottomWear"}
                className="w-3 h-3"
              />{" "}
              BottomWear
            </p>
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              {" "}
              <input
                type="checkbox"
                value={"WinterWear"}
                className="w-3 h-3"
              />{" "}
              WinterWear
            </p>
          </div>
        </div>
      </div>
      <div className="lg:pl-[20%] md:py-[10px]   w-full md:w-[70vw] lg:w-[80vw] min-h-screen flex items-start justify-start gap-4 flex-wrap p-[20px] pt-[30px]">
        <div className="w-[100vw] md:w-[80vw] p-20px flex justify-between flex col lg:flex-row lg:pz-50px  ">
          <Title text1={"All"} text2={"COLLECTIONS"}></Title>
          <select className="w-[60%] md:w-[200px] px-[10px]   h-[50px] bg-slate-600 text-white rounded-lg hover:border-[#46d1f7] border-2  ">
            <option className="w-full h-full" value="Short By: Relevant">
              Short By: Relevant
            </option>

            <option className="w-full h-full" value="priceLowToHigh">
              Price: Low to High
            </option>
            <option className="w-full h-full" value="priceHighToLow">
              Price: High to Low
            </option>
          </select>
        </div>
    <div className="w-full h-full lg:w-[80vw] md:w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]">

</div>
      </div>
    </div>
  );
}

export default Collections;
