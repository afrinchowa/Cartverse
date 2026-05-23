import React from 'react'

function Title({text1 ,text2}) {
  return (
    <div className='inline-flex gap-2 items-center text-center mb-3 text-[35px] md:text-[40px]'>
      <p>{text1}</p>
      <p>{text2}</p>
     </div>
  )
}

export default Title