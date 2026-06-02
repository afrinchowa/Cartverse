import React from 'react'
import Title from './Title'

function BestSeller() {
  return (
    <div
    className="h-[8%] w-full text-center mt-[50px]  "
    >
      <Title text1={"BEST"} text2={"SELLERS"} />
      <p>Discover Our Best Sellers - Shop Now and Experience the Difference!</p>
    
    <div className="h-[80%] w-full bg-gray-200 mt-[20px]" 
    
    >
        <p className='text-[20px] text-gray-500 mt-[20px]'>Best sellers will be displayed here.</p>
    </div>
    </div>
  )
}

export default BestSeller