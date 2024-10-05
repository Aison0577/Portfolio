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
        <Personal icon={faUser} title={'Eric Ofori Asomani'}/>
        <Personal icon={faLocation} title={'Cape Coast'}/>
        <Personal icon={faBirthdayCake} title={'21st June, 2001'}/>
        {/* <SectionElements title={'Name'}/> */}
      </div>
      <hr className='my-2'/>
    </div>
  )
}
