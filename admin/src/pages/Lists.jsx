import React from 'react'

function Lists() {

  return (
    <div className='w-screen min-h-screen bg-gradient-to-1from[#141414]to-[#0c2025] text-white flex items-center justify-center'>
<Nav/>
<div className='w-100% h-100% flex items-center justify-start'>
<Sidebar/>
<div className='w-[82%] h-full lg:md-[320px] md:ml-57.5 mt-17.5 flex flex-col gap-7.5 overflow-x-hidden py-12.5 ml-25'>
<div className='w-100 h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white'>
All listed products
</div>
<div className='w-full h-[80%] bg-[#1c1c1c] rounded-lg flex items-center justify-center text-[20px] text-gray-400'>
No products listed yet
</div>
</div>
</div>
    </div>
  )
}

export default Lists