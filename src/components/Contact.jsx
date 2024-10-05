import React from 'react'
import Heading from './Heading'
import { faMailReply, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import Personal from './Personal'

export default function Contact() {
  return (
    <div className='page-center p-3'>
      <Heading head={'Contact'}/>
      <div className='w-full'>
        <Personal icon={faPhone} title={'+233 59 300 6915/ +233 20 395 0577'}/>
        <Personal icon={faMessage} title={'jnrstarksciit@gmail.com'}/>
      </div>
      <hr className='my-2'/>
    </div>
  )
}
