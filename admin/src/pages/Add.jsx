import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import upload from "../assets/upload.png";
function Add() {
  let [image1, setImage1] = useState(false);
  let [image2, setImage2] = useState(false);
  let [image3, setImage3] = useState(false);
  let [image4, setImage4] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);
let {serverUrl} = useContext(authDataContext);
const [loading, setLoading] = useState(false);
  const handleAddProduct =async (e) => {
    e.preventDefault();
try{
 // Create a FormData object to hold the product data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("price", price);
    formData.append("bestSeller", bestSeller);
formData.append("sized", JSON.stringify(sizes));
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
}
catch(err){
  console.error("Error adding product:", err);
  setLoading(false);
  
}
   



  return (
    <div className="w-100%  min-h-screen bg-linear-to-r from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />
      <div className="w-[80%] h-screen absolute top-0 right-0 flex items-center justify-start overflow-x-hidden bottom-[5%] ">
        <form onSubmit={handleAddProduct} className="w-full md:w-[90%] h-full bg-[#1a1a1a] mt-17.5  py-15 px[30px] md:px[60px] rounded-lg flex flex-col items-center justify-center gap-7.5">
          <div>
            Add Product Page
            <div className="w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px] ">
              <p className="text-20px md:text-25px font-semibold">
                Upload Image
              </p>
              <div className="w-full h-full flex items-center justify-start">
                <label
                  htmlFor="image1"
                  className="w-65px h-65px md:w-100px md:h-100px cursor-pointer hover:border-[#46d1f7]"
                >
                  <img
                    src={!image1 ? upload : URL.createObjectURL(image1)}
                    alt=""
                    className="w-[80%] h-[80%]  rounded-lg shadow-2xl hover:border-[#1d1d1d]  border-[2px] object-cover  "
                  />
                  <input
                    type="file"
                    id="image1"
                    hidden
                    onChange={(e) => setImage1(e.target.files[0])}
                  />
                </label>
                <label
                  htmlFor="image2"
                  className="w-65px h-65px md:w-100px md:h-100px cursor-pointer hover:border-[#46d1f7]"
                >
                  <img
                    src={!image2 ? upload : URL.createObjectURL(image2)}
                    alt=""
                    className="w-[80%] h-[80%]  rounded-lg shadow-2xl hover:border-[#1d1d1d]  border-[2px] object-cover  "
                  />
                  <input
                    type="file"
                    id="image2"
                    hidden
                    onChange={(e) => setImage2(e.target.files[0])}
                  />
                </label>
                <label
                  htmlFor="image3"
                  className="w-65px h-65px md:w-100px md:h-100px cursor-pointer hover:border-[#46d1f7]"
                >
                  <img
                    src={!image3 ? upload : URL.createObjectURL(image3)}
                    alt=""
                    className="w-[80%] h-[80%]  rounded-lg shadow-2xl hover:border-[#1d1d1d]  border-[2px] object-cover  "
                  />
                  <input
                    type="file"
                    id="image3"
                    hidden
                    onChange={(e) => setImage3(e.target.files[0])}
                  />
                </label>
                <label
                  htmlFor="image4"
                  className="w-65px h-65px md:w-100px md:h-100px cursor-pointer hover:border-[#46d1f7]"
                >
                  <img
                    src={!image4 ? upload : URL.createObjectURL(image4)}
                    alt=""
                    className="w-[80%] h-[80%]  rounded-lg shadow-2xl hover:border-[#1d1d1d]  border-[2px] object-cover  "
                  />
                  <input
                    type="file"
                    id="image4"
                    hidden
                    onChange={(e) => setImage4(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="w-[80%] h-full flex items-start justify-center flex-col gap-2.5 ">
            <p className="text-20px md:text-25px font-semibold">Product Name</p>
            <input
              type="text"
              placeholder="Type here"
              className="w-600px max-w-98% h-40px rounded-lg hover:border-[#46d1f7] border-2px cursor-pointer bg-slate-600 px-20px text-18px placeholder:text-[#ffffffc2"
            />
          </div>
          <div className="w-[80%]  flex items-start justify-center flex-col gap-2.5 ">
            <p className="text-20px md:text-25px font-semibold">
              Product Description
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="w-600px max-w-98% h-40px rounded-lg hover:border-[#46d1f7] border-2 cursor-pointer bg-slate-600 px-5 py-2.5 text-18px placeholder:text-[#ffffffc2"
            />
          </div>

          <div className="md:w-[80%] flex items-center gap-5 flex-wrap">
            <div className="md:w-[30%] w-full flex items-start sm:justify-center flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-100%  ">
                Product Category
              </p>
              <select
                name=""
                id=""
                className="bg-slate-600 w-60% px-10px py-7px rounded-lg hover:border-[#46d1f7] border-2px"
              >
                <option value="">Select a category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>
          </div>
          <div className="md:w-[80%] flex items-center gap-5 flex-wrap">
            <div className="md:w-[30%] w-full flex items-start sm:justify-center flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-100%  ">
                Sub-Category
              </p>
              <select
                name=""
                id=""
                className="bg-slate-600 w-60% px-10px py-7px rounded-lg hover:border-[#46d1f7] border-2px"
              >
                <option value="">Select a category</option>
                <option value="TopWear">Top Wear</option>
                <option value="BottomWear">Bottom Wear</option>
                <option value="Winterwear">Winter Wear</option>
              </select>
            </div>
          </div>
          <div className="w-[80%]  flex items-start justify-center flex-col gap-2.5 ">
            <p className="text-20px md:text-25px font-semibold">
              Product Price
            </p>
            <input
              type="number"
              placeholder="$2000"
              className="w-600px max-w-98% h-40px rounded-lg hover:border-[#46d1f7] border-2 cursor-pointer bg-slate-600 px-5 py-2.5 text-18px placeholder:text-[#ffffffc2"
            />
          </div>
          <div className="flex items-center justify-start gap-2.5 flext-wrap">
            <div
              className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#46f1f7 border[2px] cursor-pointer $sizes.includes("S")? "bg-green-200 text-black border-[#46d1f7] " : ""`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((item) => item !== "S")
                    : [...prev, "S"],
                )
              }
            >
              S
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#46f1f7 border[2px] cursor-pointer $sizes.includes("M")? "bg-green-200 text-black border-[#46d1f7] " : ""`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((item) => item !== "M")
                    : [...prev, "M"],
                )
              }
            >
              M
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#46f1f7 border[2px] cursor-pointer $sizes.includes("L")? "bg-green-200 text-black border-[#46d1f7] " : ""`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((item) => item !== "L")
                    : [...prev, "L"],
                )
              }
            >
              L
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#46f1f7 border[2px] cursor-pointer $sizes.includes("XL")? "bg-green-200 text-black border-[#46d1f7] " : ""`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XL")
                    ? prev.filter((item) => item !== "XL")
                    : [...prev, "XL"],
                )
              }
            >
              XL
            </div>
            <div
              className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] hover:border-[#46f1f7 border[2px] cursor-pointer $sizes.includes("XXL")? "bg-green-200 text-black border-[#46d1f7] " : ""`}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((item) => item !== "XXL")
                    : [...prev, "XXL"],
                )
              }
            >
              XXL
            </div>
            <div className="w-80% flex items-center justify-start gap-10px mt-20px ">
              <input type="checkbox" id="checkbox" className="w-[25px] h-[25px] cursor-pointer" onChange={() =>setBestSeller(prev => !prev)}  />
            <label htmlFor="checkbox" className="text-[18px] md:text-[22px] font-semibold"></label>
            Add to Best Sellers
            </div>
          </div>

          <button className="w-[140px] px-20px py-20px rounded-xl bg-[65d8f7] flex items-center gap-10px text-black active:bg-slate-700 active:text-white active:border-[2px] border-white ">
            Add Product
          </button>
        
        </form>
      </div>
    </div>
  );
}
}
export default Add;
