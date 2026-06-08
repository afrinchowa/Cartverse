import React from "react";
import Title from "./Title";

function BestSeller() {
  let { products } = useContext(shopDataContext);
  let [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    let filterProduct = products.filter((item) => item.bestSeller);
    setBestSeller(filterProduct.slice(0, 4));
  }, [products]);
  return (
    <div>
      <div className="h-[8%] w-full text-center mt-[50px]  ">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p>
          Discover Our Best Sellers - Shop Now and Experience the Difference!
        </p>
      </div>
      <div className="h-[92%] w-full flex justify-center items-center gap-10 mt-[20px] ">
        {bestSeller.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            price={item.price}
            image={item.image1}
            id={item._id}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
