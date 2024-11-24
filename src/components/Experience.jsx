import React from 'react'
import Heading from './Heading'
import SectionElements from './SectionElements'

export default function Experience() {
  return (
    <div className='page-center p-3'>
        <Heading head={'Experiences'}/>
      {/* <h1 className='font-bold text-3xl text-center'>Qualifications</h1> */}
      <div className='w-full'>
        <SectionElements 
          date={'2023-2024'} 
          company={'University of Cape Coast, MIS'} 
          title={'Junior Programmer'}
          description={'This experinece helped me achieve effieciency in web deveopment using Tailwind CSS, with the aim of creating Responsive UI'}
        />
        <SectionElements 
          date={'2023-2024'} 
          company={'Joandy Grafix, Koforidua'} 
          title={'Graphic Designer'}
          description={'This experinece helped me achieve effieciency in web deveopment using Tailwind CSS, with the aim of creating Responsive UI'}
        />
      </div>
      <hr className='my-2'/>
    </div>
  )
}
