import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import upload from "../assets/upload.png";
function Add() {
  let [image1, setImage1] = useState(false);
  let [image2, setImage2] = useState(false);
  let [image3, setImage3] = useState(false);
  let [image4, setImage4] = useState(false);
  return (
    <div className="w-100%  min-h-screen bg-linear-to-r from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative">
      <Nav />
      <Sidebar />
      <div className="w-[80%] h-screen absolute top-0 right-0 flex items-center justify-start overflow-x-hidden ">
        <form className="w-full md:w-[90%] h-full bg-[#1a1a1a] mt-17.5  py-15 px[30px] md:px[60px] rounded-lg flex flex-col items-center justify-center gap-7.5">
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
              className="w-600px max-w-98% h-40px rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] py-[10px] text-18px placeholder:text-[#ffffffc2"
            />
          </div>

          <div className="md:w-[80%] flex items-center gap-5 flex-wrap">
            <div className="md:w-[30%] w-full flex items-start sm:justify-center flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-100%  ">
              
                Product Category
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
