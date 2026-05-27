import React from 'react'

function Card() {
  return (
    <div className='w-[300px] max-w-[90%]
     h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px]cursor-pointer border0[1px] border-[#90909049]'>
      <div className='w-full '>

        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='w-full h-[200px] object-cover rounded-lg' />
      </div>


     </div>
  )
}

export default Card