import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
function OurPolicy() {
  return (
<div className='w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col bg-gradient-to-lfrom-[#141414] to-[#0c2025] gap-[50px] '>
<div className='w-[100%] md:w-[70%] h-[8%] text-center mt-[70px]'>
<Title text1={"Our"} text2={"Policy"}/>
<p className='text-blue-100 m-auto text-13px md:text-20px px-10px '>
 Customer friendly policies - Committed to Your Satisfaction and Safety.
</p>
</div>
<div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]'>
  <div className='w-[400px] md:max-w-[90%] h-[60%] flex flex-col items-center justify-center gap-[10px]'>
    <RiExchangeFundsFill className='md:w-[60px] w-[30px] md:h-[60px] text-[#90b9ff' />
    <p className='font-semibold md:text-25px text-19px text-[#a5e8f7] text-center'>Exchange policy</p>
    <p className='font-semibold md:text-18px text-12px text-[aliceblue] text-center'>Exchange Made Easy - Quick,simple , and Customer-Friendly process</p>
  </div>
</div>
    </div>
  )
}

export default OurPolicy