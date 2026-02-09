import React from 'react'

const Hero = ({heroData,heroCount,setHeroCount}) => {
  return (
    <div className='w-40% h-full relative '>
     <div className='absolute text-[#88d933] text-20px md:text-[40px] lg:text-[55px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-2.5 '>
<p>{heroData.text1}</p>
<p>{heroData.text2}</p>
<div>

</div>
     </div>
     </div>
  )
}

export default Hero