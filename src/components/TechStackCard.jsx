import React from 'react'

export default function TechStackCard({logo,name}) {
  return (
    <div className='w-full  md:w-[30%] flex items-center justify-center p-2 rounded-md bg-slate-100'>
        <img src={logo} alt=""  className='size-10'/>
      {/* {name} */}
    </div>
  )
}
