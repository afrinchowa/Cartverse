import React from 'react'
import { FaCircle } from "react-icons/fa";
const Hero = ({heroData,heroCount,setHeroCount}) => {
  return (
    <div className='w-40% h-full relative '>
     <div className='absolute text-[#88d933] text-20px md:text-[40px] lg:text-[55px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-2.5 '>
<p>{heroData.text1}</p>
<p>{heroData.text2}</p>
<div className='absolute md:top-400px  lg:top-500px top-40 left-[10%] flex items-center justify-center gap-10px '>
<FaCircle className={`w-3.5px ${heroCount === 0? "fill-orange-400 ": "fill-white" }`}  onClick={() =>setHeroCount(1)} />
<FaCircle className={`w-3.5px ${heroCount === 1? "fill-orange-400 ": "fill-white" }`} onClick={() =>setHeroCount(2)} />
<FaCircle className={`w-3.5px ${heroCount === 2? "fill-orange-400 ": "fill-white" }`} onClick={() =>setHeroCount(3)} />
<FaCircle className={`w-3.5px ${heroCount === 3? "fill-orange-400 ": "fill-white" }`} onClick={() =>setHeroCount(4)} />

</div>
     </div>
     </div>
  )
}

export default Hero