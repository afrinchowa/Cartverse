import React from 'react'
import Title from './Title'
import Card from './Card'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { shopDataContext } from '../context/shopDataContext'
function LatestCollection() {
  let {products} = useContext(shopDataContext)
  let [latestProducts, setLatestProducts] = useState([])
  useEffect(() => {

    setLatestProducts(products.slice(0,8));
  }, [products]);
  return (
    <div className=''>
<div className='h-[8%] w-full text-center md:mt-[50px]'>
<Title text1={"LATEST"} text2={"COLLECTIONS"}/>
<p>Step Into Style New COllection Dropping This Sesason!</p>
</div>
<div className='w-full h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
  {
    latestProducts.map((item,index)=>(
      <Card key={index} name={item.name} image={item.image1}  id={item._id} price={item.price}/>
    ))
  }
</div>
    </div>
   
  )
}

export default LatestCollection