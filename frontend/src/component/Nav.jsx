import React from 'react'
import logo from '../assets/logo.png'
import { FaSearchLocation } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaUserAlt } from "react-icons/fa";
const Nav = () => {
  return (
    <div className='w-screen h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>

<div className='w-[30%] flex items-center justify-start gap-2.5 '>
    <img src={logo} alt="" className='w-30px  '/>
<h1 className='text-[25px] text-black font-sans '>Cartverse</h1>
</div>
<div className='w-[40%]'>
<ul className='w-full h-full flex items-center justify-center gap-10 text-black font-medium'>
    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-lg'>Home</li>
    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-lg'>Collections</li>
    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-lg'>About</li>
    <li className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-2.5 px-5 rounded-lg'>Contact</li>
</ul>
</div>
<div className='w-[30%] flex items-center justify-end gap-5'>
<FaSearchLocation />
<FaUserAlt />
<TiShoppingCart />
</div>
    </div>
  )
}

export default Nav