import React from 'react'
import Heading from './Heading'
import SectionElements from './SectionElements'
import Personal from './Personal'
import { faLocation, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons/faPerson'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons/faBirthdayCake'

export default function Profile() {
  return (
    <div className='page-center p-3'>
      <Heading head={'Profile'}/>
      <div className='w-full'>

        <h1 className='font-bold text-3xl md:text-4xl'>Eric Ofori Asomani</h1>
        <h1 className='font-medium text-sm text-gray-800 mb-1'>Web Developer | Software Developer | Graphic Designer | UI/UX Designer</h1>
        <h1 className='font-medium text-sm text-gray-800 mb-1'>Cape Coast Ghana | +233 203950577/ +233 593006915 | jnrstarksciit@gmail.com</h1>
       
      </div>
      <hr className='my-2'/>
    </div>
  )
}
