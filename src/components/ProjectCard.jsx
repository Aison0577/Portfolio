import React from 'react'

export default function ProjectCard({link,image,name}) {
  return (
    <div className=' bg-white rounded-lg overflow-hidden border-[2px] border-blue-800'>
        <div className='w-full h-[200px] bg-black'>
            <img src={image} alt="" className='w-full object-cover h-full'/>
        </div>
        <div className='p-2'>
            <h1 className='font-semibold my-2'>{name}</h1>
            <a href={link}>
                <button className='w-full p-3 bg-blue-700 rounded-md text-white'>View</button>
            </a>
        </div>
    </div>
  )
}
