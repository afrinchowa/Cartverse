import React from "react";
import Title from "./Title";

function BestSeller() {
  let {products} = useContext(shopDataContext);
  return (
    <div>
      <div className="h-[8%] w-full text-center mt-[50px]  ">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p>
          Discover Our Best Sellers - Shop Now and Experience the Difference!
        </p>
      </div>
      <div className="h-[92%] w-full flex justify-center items-center gap-10 mt-[20px] ">
products.map((product) => {
  return (
    <div className="h-[300px] w-[200px] bg-[#f5f5f5] rounded-lg flex flex-col justify-center items-center gap-3">
      <img src={product.image} alt={product.name} className="h-[150px] w-[150px] object-cover rounded-lg" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
})
      </div>
    </div>
  );
}

export default BestSeller;
