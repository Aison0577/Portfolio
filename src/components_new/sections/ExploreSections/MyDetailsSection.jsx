import React from 'react'
import Images from '../../../constants/Images'

export default function MyDetailsSection() {
  return (
    <section className='w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-5 border-b-[1px] border-gray-800'>
          <div className=' rounded-xl overflow-hidden shadow-xl'>
            <img src={Images.exploreIMage1} alt="" className='w-full h-[90%] object-cover shadow-xl rounded-lg overflow-hidden'/>
          </div>
    
          {/* INfomation */}
          <div>
              <h1 className='dark:text-white text-black font-bold text-3xl md:text-4xl mb-5'>Eric Ofori Asomani Here.</h1>
              <h1 className='text-black dark:text-white'>
              I’m a dedicated and passionate software engineer with a strong drive to create innovative, efficient, and user-friendly applications. I have honed my skills through hands-on experience, tackling challenges and continuously learning new technologies. Below, you’ll find some of the projects I’ve worked on and the key skills I bring to the table. I’m excited to showcase my work and share how I can contribute to building impactful solutions.
              </h1>
              <button className='bg-blue-800 p-2 mt-4 w-full text-white rounded-lg'>
                Get in touch
              </button>
          </div>
    </section>
  )
}
