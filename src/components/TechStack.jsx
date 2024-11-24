import React from 'react'
import Heading from './Heading'
import SectionElements from './SectionElements'
import TechStacks from './TechStacks'

export default function TechStack() {
  return (
    <div className='page-center p-3'>
      <Heading head={'TechStacks'}/>
      <TechStacks/>
      <hr className='my-2'/>
    </div>
  )
}
