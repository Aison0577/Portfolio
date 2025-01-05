import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TechStacksCard({icon}) {
  return (
    <div className='size-14 dark:text-white inline-flex mr-6 mb-3 group'>
      <FontAwesomeIcon icon={icon} className='w-full h-full  group-hover:scale-110 duration-300'/>
    </div>
  )
}
