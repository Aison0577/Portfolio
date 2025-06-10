import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProjectCards from '../../cards/ProjectCards'
import { getProjects } from '../../../constants/projects'
import { Link } from 'react-router-dom'

export default function ProjectsSection() {

  const projects = getProjects

  return (
    <div className='border-b-[1px] border-gray-800 p-4 text-black dark:text-white'>
      <h1 className='mb-7 font-semibold text-2xl'>Projects</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>

        {
          projects.slice(0,3).map((project,index)=>(
            <ProjectCards
              title={project.title}
                description={project.description}
                link={project.gitRepo}
                libs={project.libraries}
                image={project.image}
            />
          ))
        }
          {/* <ProjectCards/>
          <ProjectCards/> */}
      </div>
      <Link to={'/projects'}>
        <h1 className='flex items-center justify-end gap-2 cursor-pointer text-blue-800 text-sm hover:underline  my-4'>
          Learn more <FontAwesomeIcon icon={faArrowRight}/>
        </h1>
      </Link>
    </div>
  )
}
