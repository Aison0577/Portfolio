import React, { useEffect, useState } from 'react'
import { getProjects } from '../constants/projects'
import ProjectCards from '../components_new/cards/ProjectCards'

export default function Projects() {

  const [allprojects, setProjects] = useState([])

 useEffect(()=>{
  // console.log(getProjects);
  setProjects(getProjects)
 },[])
  return (
    <div className='w-full p-4'>
     <h1 className='mb-7 font-semibold text-2xl'>Projects</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          allprojects.map((project, index)=>(
            <ProjectCards
              title={project.title}
              description={project.description}
              link={project.gitRepo}
              libs={project.libraries}
              image={project.image}
            />
          ))
        }
      </div>
    </div>
  )
}
