import React from 'react'
import TechStacksCard from '../../cards/TechStacksCard'
import { faCss, faFigma, faGit, faGithub, faHtml5, faJs, faLaravel, faLinkedin, faNode, faNodeJs, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

export default function TechStacks() {
  return (
    <div className='p-4 text-black dark:text-white border-b-[1px] border-gray-800'>
      <h1 className='mb-3 font-semibold text-2xl'>Tech Stacks</h1>
      {/* <hr className='my-3 bg-gray-700'/> */}
      <div className='border-b-[1px] border-gray-800 mb-3'></div>

      <h1 className='mb-7 font-semibold text-xl'>Web Stack</h1>
      <div>
          <TechStacksCard
            icon={faReact}
            
          />
          <TechStacksCard
            icon={faPhp}
            
          />
          <TechStacksCard
            icon={faCss}
            
          />
          <TechStacksCard
            icon={faJs}
            
          />
          <TechStacksCard
            icon={faHtml5}
            
          />
          
          <TechStacksCard
            icon={faNodeJs}   
          />
          <TechStacksCard
            icon={faLaravel}   
          />

          <h1 className='mb-7 font-semibold text-xl'>Other Stack</h1>
          <TechStacksCard
            icon={faFigma}   
          />
          
          <TechStacksCard
            icon={faDatabase}   
          />
          <TechStacksCard
            icon={faGit}   
          />
          <TechStacksCard
            icon={faGithub}   
          />
          <TechStacksCard
            icon={faLinkedin}   
          />
          
      </div>
      
    </div>
  )
}
