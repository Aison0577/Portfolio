import React from 'react'
import Heading from './Heading'
import ProjectCard from './ProjectCard'
import p1 from '../assets/im.jpg'
import p2 from '../assets/HOME0.png'
import p3 from '../assets/wu.png'
import p4 from '../assets/rn.png'
// import { Stack } from '@mui/material'

export default function Projects() {
  return (
    <div className='page-center p-3'>
      <Heading head={'Projects'}/>
      <div className='w-full grid md:grid-cols-3 gap-3'>
        <ProjectCard link={'https://github.com/Aison0577/Management_Project'} name={'Inventory Management Application'} image={p1 }/>
        <ProjectCard link={'https://github.com/Aison0577/Ecomm'} name={'E-Commerce Website'} image={p2 }/>
        <ProjectCard link={'https://github.com/Aison0577/Ecomm'} name={'Write Up'} image={p3}/>
        <ProjectCard link={'https://github.com/Aison0577/Ecomm'} name={'Rede Naturals'} image={p4}/>
      </div>
      
      <hr className='my-2'/>
    </div>
  )
}
