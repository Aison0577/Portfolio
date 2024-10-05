import React from 'react'
import Heading from './Heading'
import SectionElements from './SectionElements'
import logo from '../assets/bg.jpg'

export default function Education() {
  return (
    <div className='page-center p-3'>
      <Heading head={'Education'}/>

      <div className='w-full'>
        <SectionElements date={'January 2020 - August 2024'} 
        title={'University of Cape Coast, Ghana'} 
        logo={logo}
        description={'Bachelor of Education Computer Science'}
        />

      </div>
      <hr className='my-2'/>

    </div>
  )
}
