import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Personal({icon,title}) {
  return (
    <div className='flex gap-2 items-center my-2'>
      <FontAwesomeIcon icon={icon} className='size-4 text-blue-800 bg-gray-300 p-2 rounded-md'/>
      <h1 className='font-medium '>{title}</h1>
      {/* <FontAwesomeIcon icon={faUser}/> */}
    </div>
  )
}
