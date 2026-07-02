import { useContext, useEffect, useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import Title from "../Components/Title";
import Card from "../Components/Card";
import { shopDataContext } from "../Context/ShopContext";

function Collections() {
  const [showFilter, setShowFilter] = useState(false);

  const { products } = useContext(shopDataContext);

  const [filteredProduct, setFilteredProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value;

    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  // Toggle Sub Category
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    if (subCategory.includes(value)) {
      setSubCategory(subCategory.filter((item) => item !== value));
    } else {
      setSubCategory([...subCategory, value]);
    }
  };

  useEffect(() => {
    let productCopy = [...products];

    // Category Filter
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // Sub Category Filter
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sorting
    if (sortType === "priceLowToHigh") {
      productCopy.sort((a, b) => a.price - b.price);
    }

    if (sortType === "priceHighToLow") {
      productCopy.sort((a, b) => b.price - a.price);
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFilteredProduct(productCopy);
  }, [products, category, subCategory, sortType]);

  return (
    <div className="md:w-screen lg:w-[20vw] w-[90vw] min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row pt-[70px] overflow-x-hidden">

      {/* Filter Section */}

      <div
        className={`md:w-[30vw] lg:w-[20vw] w-full md:min-h-screen ${
          showFilter ? "h-[45vh]" : "h-screen"
        } p-5 border-r border-gray-400 text-[#aaf5fa] lg:fixed flex flex-col items-center`}
      >
        <p
          className="text-[25px] font-semibold flex items-center gap-2 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS

          {!showFilter && (
            <FaAngleRight className="md:hidden text-lg" />
          )}

          {showFilter && (
            <FaAngleDown className="md:hidden text-lg" />
          )}
        </p>

        {/* Categories */}

        <div
          className={`border-2 border-gray-300 rounded-md bg-slate-600 p-5 mt-6 ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-lg font-semibold mb-4">CATEGORIES</p>

          <div className="space-y-3">

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Men"
                onChange={toggleCategory}
              />
              Men
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Women"
                onChange={toggleCategory}
              />
              Women
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="Kids"
                onChange={toggleCategory}
              />
              Kids
            </label>

          </div>
        </div>

        {/* Sub Categories */}

        <div
          className={`border-2 border-gray-300 rounded-md bg-slate-600 p-5 mt-6 ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-lg font-semibold mb-4">
            SUB-CATEGORIES
          </p>

          <div className="space-y-3">

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="TopWear"
                onChange={toggleSubCategory}
              />
              TopWear
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="BottomWear"
                onChange={toggleSubCategory}
              />
              BottomWear
            </label>

            <label className="flex gap-2">
              <input
                type="checkbox"
                value="WinterWear"
                onChange={toggleSubCategory}
              />
              WinterWear
            </label>

          </div>
        </div>
      </div>

      {/* Product Section */}

      <div className="lg:pl-[20%] w-full md:w-[70vw] lg:w-[80vw] min-h-screen p-5">

        <div className="flex justify-between items-center flex-wrap gap-4">

          <Title text1="All" text2="COLLECTIONS" />

          <select
            className="w-[200px] h-[45px] bg-slate-600 text-white rounded-lg border-2 border-transparent hover:border-cyan-400 px-3"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">
              Sort By: Relevant
            </option>

            <option value="priceLowToHigh">
              Price: Low to High
            </option>

            <option value="priceHighToLow">
              Price: High to Low
            </option>

          </select>

        </div>

        {/* Products */}

        <div className="mt-8 flex flex-wrap gap-8">

          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))
          ) : (
            <p className="text-white text-xl">
              No products found.
            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Collections;