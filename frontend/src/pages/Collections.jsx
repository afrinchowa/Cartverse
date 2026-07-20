import { useContext, useEffect, useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Card from "../component/Card";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";

function Collections() {
const [showFilter, setShowFilter] = useState(false);
const { products, search, showSearch } = useContext(shopDataContext);
  const {
    products = [],
    search = "",
    showSearch,
  } = useContext(shopDataContext);

  const [filteredProduct, setFilteredProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Category Filter
  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

const applyFilter = () => {
    let productCopy = products.slice();
    if(category.length > 0 )
    {
      productCopy = productCopy.filter((item) => category.includes(item.category));
    }




  // SubCategory Filter
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  useEffect(() => {
    let productCopy = [...products];

    // Search Filter
    if (showSearch && search.trim() !== "") {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category Filter
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    // SubCategory Filter
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory),
      );
    }

    // Sorting
    if (sortType === "priceLowToHigh") {
      productCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceHighToLow") {
      productCopy.sort((a, b) => b.price - a.price);
    }

    setFilteredProduct(productCopy);
  }, [products, category, subCategory, sortType, search, showSearch]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-20">
      {/* Sidebar */}
      <div className="w-full md:w-64 border-r p-5">
        <div
          className="flex items-center gap-2 cursor-pointer md:cursor-default"
          onClick={() => setShowFilter(!showFilter)}
        >
          <h2 className="text-xl font-bold">FILTERS</h2>

          {showFilter ? (
            <FaAngleDown className="md:hidden" />
          ) : (
            <FaAngleRight className="md:hidden" />
          )}
        </div>

        {/* Category */}
        <div className={`mt-6 ${showFilter ? "block" : "hidden"} md:block`}>
          <h3 className="font-semibold mb-3">Categories</h3>

          <div className="space-y-2">
            <label className="flex gap-2">
              <input type="checkbox" value="Men" onChange={toggleCategory} />
              Men
            </label>

            <label className="flex gap-2">
              <input type="checkbox" value="Women" onChange={toggleCategory} />
              Women
            </label>

            <label className="flex gap-2">
              <input type="checkbox" value="Kids" onChange={toggleCategory} />
              Kids
            </label>
          </div>
        </div>

        {/* SubCategory */}
        <div className={`mt-8 ${showFilter ? "block" : "hidden"} md:block`}>
          <h3 className="font-semibold mb-3">Sub Categories</h3>

          <div className="space-y-2">
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

      {/* Products */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
          <Title text1="ALL" text2="COLLECTIONS" />

          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="border rounded px-4 py-2"
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <p className="text-gray-500 text-lg">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;
