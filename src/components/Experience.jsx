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
          description={'At the University of Cape Coast MIS, I gained valuable experience in web development, particularly with Tailwind CSS. This opportunity allowed me to create responsive and visually appealing web interfaces, enhancing my skills in modern web design and development.'}
        />
        <SectionElements 
          date={'2023-2024'} 
          company={'Joandy Grafix, Koforidua'} 
          title={'Graphic Designer'}
          description={'During my internship at Joandy Grafix, a premier graphic design company in Koforidua, I gained hands-on experience in creating compelling visual designs, collaborating with clients, and mastering tools essential for professional graphic design. This experience honed my creativity and strengthened my ability to deliver impactful designs.'}
        />
      </div>
      <hr className='my-2'/>
    </div>
  )
}
