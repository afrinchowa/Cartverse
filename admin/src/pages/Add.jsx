import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import upload from "../assets/upload.png";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";

function Add() {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const { serverUrl } = useContext(authDataContext);

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("bestSeller", bestSeller);
    formData.append("sizes", JSON.stringify(sizes));

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);

    await axios.post(serverUrl + "/api/products/addproduct", formData, {
      withCredentials: true,
    });
  };

  const inputStyle =
    "w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none transition";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#0c2025] text-white flex">
      <Sidebar />

      <div className="flex-1 ml-[18%]">
        <Nav />

        <div className="p-6 md:p-10 flex justify-center">
          <form
            onSubmit={handleAddProduct}
            className="w-full max-w-5xl bg-[#151515] rounded-2xl shadow-xl p-6 md:p-10 space-y-8"
          >
            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Add New Product
            </h2>

            {/* IMAGE UPLOAD */}
            <div>
              <p className="text-lg font-medium mb-3">Upload Images</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[image1, image2, image3, image4].map((img, i) => (
                  <label
                    key={i}
                    className="cursor-pointer border border-gray-700 rounded-lg p-2 hover:border-cyan-400 transition"
                  >
                    <img
                      src={!img ? upload : URL.createObjectURL(img)}
                      className="w-full h-28 object-cover rounded-md"
                    />
                    <input
                      type="file"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (i === 0) setImage1(file);
                        if (i === 1) setImage2(file);
                        if (i === 2) setImage3(file);
                        if (i === 3) setImage4(file);
                      }}
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* PRODUCT INFO */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                className={inputStyle}
                placeholder="Product Name"
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className={inputStyle}
                placeholder="Price"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <textarea
              className={inputStyle + " h-28 resize-none"}
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
            />

            {/* CATEGORY */}
            <div className="grid md:grid-cols-2 gap-6">
              <select
                className={inputStyle}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>

              <select
                className={inputStyle}
                onChange={(e) => setSubCategory(e.target.value)}
              >
                <option>TopWear</option>
                <option>BottomWear</option>
                <option>WinterWear</option>
              </select>
            </div>

            {/* SIZE */}
            <div>
              <p className="mb-3 font-medium">Select Sizes</p>
              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 rounded-lg border transition ${
                      sizes.includes(size)
                        ? "bg-cyan-400 text-black"
                        : "bg-gray-800 border-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* BEST SELLER */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5"
                onChange={() => setBestSeller((p) => !p)}
              />
              <span>Add to Best Sellers</span>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;