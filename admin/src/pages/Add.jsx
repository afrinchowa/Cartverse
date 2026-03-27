import React from 'react'

function Add() {
  return (
    <div className='w-100%  min-h-screen bg-linear-to-r from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative'>
      <Nav/>
      <Sidebar/>
      <div className='w-[80%] h-screen absolute top-0 right-0 flex items-center justify-start overflow-x-hidden '>

  <form className='w-full md:w-[90%] h-full bg-[#1a1a1a] mt-17.5  py-15 px[30px] md:px[60px] rounded-lg flex flex-col items-center justify-center gap-7.5'>
<div>
  Add Product Page
  <div>
    
    </div>
</div>
    <h1 className='text-3xl font-bold'>Add New Product</h1>
    <input type="text" placeholder='Product Name' className='w-[80%] p-2 rounded-md bg-[#333] text-white focus:outline-none'/>
    <input type="number" placeholder='Price' className='w-[80%] p-2 rounded-md bg-[#333] text-white focus:outline-none'/>
    <textarea placeholder='Description' className='w-[80%] p-2 rounded-md bg-[#333] text-white focus:outline-none'></textarea>
    <button type='submit' className='px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300'>Add Product</button>
  </form>
      </div>


    </div>
  )
}

export default Add