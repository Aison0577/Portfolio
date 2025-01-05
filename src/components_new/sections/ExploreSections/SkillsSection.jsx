import React from 'react'
import SkillsCard from '../../cards/SkillsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function SkillsSection() {
  return (
    <div className='p-4 text-black dark:text-white border-b-[1px] border-gray-800'>
      <h1 className='mb-7 font-semibold text-2xl'>Skills & TechStack</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            <SkillsCard
                skill={'Full-Stack Development'}
            />
            <SkillsCard
                skill={'Javascript'}
            />
            <SkillsCard
                skill={'Git'}
            />
            <SkillsCard
                skill={'APIs'}
            />
            <SkillsCard
                skill={'React'}
            />
            <SkillsCard
                skill={'Node js'}
            />
      </div>
        <h1 className='flex items-center justify-end gap-2 cursor-pointer text-blue-800 text-sm hover:underline  my-4'>
              Dive into what I can do <FontAwesomeIcon icon={faArrowRight}/>
        </h1>
    </div>
  )
}
