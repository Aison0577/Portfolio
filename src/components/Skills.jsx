import React from 'react'
import Heading from './Heading'
import SectionElements from './SectionElements'

export default function Skills() {
  return (
    <div className='page-center p-3 duration-500'>
      <Heading head={'Skills'}/>
      <div className='w-full'>
        <SectionElements
            date={'3 years Experience'}
            title={'Web Development'}
            description={'Developing website of all sort from  Advertisement to E-commerce using teach stacks like React js, Next js, HTML with CSS, Tailwind CSS along side with databases like MySQL and MongoDB. Specialize in Frontend and Backend of web tecnologies'}
        />
        <SectionElements
            date={'3 years Experience'}
            title={'UI/UX Design'}
            description={'Developing website of all sort from  Advertisement to E-commerce using tech stacks like React js, Next js, HTML with CSS, Tailwind CSS along side with databases like MySQL and MongoDB'}
        />

        <h1 className='font-semibold underline mb-2'>Other Key Skills</h1>
        <SectionElements
            date={'Experienced'}
            title={'RESTful services'}
        />
        <SectionElements
            date={'Experienced'}
            title={'Software debugging'}
        />
        <SectionElements
            date={'Experienced'}
            title={'Frontend & Backend frameworks'}
        />
        <SectionElements
            date={'Experienced'}
            title={'API Integration'}
        />
        <SectionElements
            date={'Experienced'}
            title={'Graphic designing'}
        />
      </div>
      <hr className='my-2'/>
    </div>
  )
}
