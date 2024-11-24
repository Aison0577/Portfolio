import React from 'react'
import bg from '../assets/bg.jpg'

export default function Hero() {
  return (
    <div className='h-screen w-full relative mt-[-68px] bg-gradient-to-tr from-black to-stone-900'>
        <img src={bg} alt="" className='object-cover w-full h-full absolute mix-blend-overlay'/>
        <div className='page-center relative text h-full flex items-center justify-center flex-col text-white'>
            <h1 className='text-3xl md:text-5xl mb-4 font-extrabold text-center'>Creative Minds at Work:<br/> Explore My Portfolio</h1>
            <p className='text-center text-gray-400  text-sm md:text-base w-[98%]'>Discover a showcase of my innovative projects, crafted through the lens of computer science expertise. From elegant algorithms to sleek software solutions, explore how I translate concepts into code. Dive into my portfolio to witness the synergy of creativity and computational mastery, culminating in transformative digital experiences.</p>
        </div>
      
    </div>
  )
}
