import React from 'react'
import Images from '../../constants/Images'

export default function ProjectCards() {
  return (
    <div>
      <div className='h-[180px] overflow-hidden rounded-lg mb-3'>
        <img src={Images.test2} alt=""  className='object-cover h-full w-full'/>
      </div>
      <h1 className='text-xl mb-2'>Project Title</h1>
      <h1 className='text-gray-600 line-clamp-5'>I am a software developer with a strong foundation in building web applications using Laravel, HTML, CSS, JavaScript, and TailwindCSS. My passion for coding and problem-solving drives me to create clean, efficient, and user-centric designs. I focus on writing maintainable and scalable code while leveraging modern technologies to bring ideas to life. Whether building dynamic websites or working with complex backend systems, I enjoy every aspect of development and continually seek to expand my skills.</h1>
    </div>
  )
}
