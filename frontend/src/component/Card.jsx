import React from "react";
import { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
// eslint-disable-next-line no-unused-vars
function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext);
  return (
    <div
      className="w-[300px] max-w-[90%]
     h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px]cursor-pointer border-[1px] border-[#90909049]"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[80%] object-cover rounded-sm"
      />
      <div className="text-[#c3f6fa] text-[18px] py-[10px]">
        {name.length > 20 ? name.slice(0, 20) + "..." : name}
      </div>
      <div className="text-[#f3f6fa] text-[14px] py-[10px]">
        {currency} {price}
      </div>
    </div>
  );
}

export default Card;
