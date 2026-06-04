import React from "react";
import Title from "./Title";

function BestSeller() {
  return (
    <div>
      <div className="h-[8%] w-full text-center mt-[50px]  ">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p>
          Discover Our Best Sellers - Shop Now and Experience the Difference!
        </p>
      </div>
      <div className="h-[92%] w-full flex justify-center items-center gap-10 mt-[20px] "></div>
    </div>
  );
}

export default BestSeller;
