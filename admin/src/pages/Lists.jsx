import React, { useEffect } from 'react'

function Lists() {
  let [list,setList] = useState([])
  let {serverUrl} = useContext(authDataContext)
 
    const fetchList = async()=>{
      try {
        let res = await fetch({serverUrl}+"/api/product/list")
        setList(result.data)
        let data = await res.json()
        setList(result.data)
        console.log(result.data)
      } catch (error) {        console.log(error)
      }
    }
useEffect(()=>{
  fetchList()
},[])

  return (
    <div className='w-screen min-h-screen bg-gradient-to-1from[#141414]to-[#0c2025] text-white flex items-center justify-center'>
<Nav/>
<div className='w-100% h-100% flex items-center justify-start'>
<Sidebar/>
<div className='w-[82%] h-full lg:md-[320px] md:ml-57.5 mt-17.5 flex flex-col gap-7.5 overflow-x-hidden py-12.5 ml-25'>
<div className='w-100 h-12.5 text-[28px] md:text-[40px] mb-[20px] text-white'>
All listed products
</div>
{
  list?list.length >0 (
    list.map((item,index)=>{
      return(
        <div key={index} className='w-full h-[80%] bg-[#1c1c1c] rounded-lg flex items-center justify-between px-5 py-3'>
          <div className='flex items-center gap-5'>
            <img src={item.image} alt={item.name} className='w-20 h-20 rounded-lg object-cover'/>
            <div className='flex flex-col gap-1'>
              <div className='text-[18px] font-semibold'>{item.name}</div>
              <div className='text-[14px] text-gray-400'>{item.category}</div>
            </div>
          </div>
          <div className='text-[18px] font-semibold'>${item.price}</div>
        </div>
      )
    })
  )
  :
  (
   <div className='w-full h-[80%] bg-[#1c1c1c] rounded-lg flex items-center justify-center text-[20px] text-gray-400'>
No products listed yet
</div>
  )
}

</div>
</div>
    </div>
  )
}

export default Lists