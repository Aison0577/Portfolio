import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProjectCards from '../../cards/ProjectCards'

export default function ProjectsSection() {
  return (
    <div className='border-b-[1px] border-gray-800 p-4 text-black dark:text-white'>
      <h1 className='mb-7 font-semibold text-2xl'>Projects</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
          <ProjectCards/>
          <ProjectCards/>
          <ProjectCards/>
      </div>
      <h1 className='flex items-center justify-end gap-2 cursor-pointer text-blue-800 text-sm hover:underline  my-4'>
        Learn more <FontAwesomeIcon icon={faArrowRight}/>
      </h1>
    </div>
  )
}
