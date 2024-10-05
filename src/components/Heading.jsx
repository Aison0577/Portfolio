import React from 'react'

export default function Heading({head}) {
  return (
    <div className='max-w-min'>
        <h1 className='font-bold text-2xl text-center'>{head}</h1>
        <div className='p-[2px] bg-blue-700 w-[50%] my-4'/>      
    </div>
  )
}
