import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faContactBook, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import g from '../assets/gt.png'


export default function Nav() {
  return (
    <div className='bg-white p-3 sticky top-0 shadow-md z-40'>
        <div className='page-center flex items-center justify-between'>
            <div>
                <h1 className='font-medium italic flex items-center gap-2'>
                    <img src={g} alt="" className='size-8'/>
                    Aison0577
                </h1>
            </div>

            {/* Contacts */}
            {/* <div className='flex gap-5'>
                <h1 className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faPhone} className='size-5'/>
                    +233 59 300 6915/+233 20 395 0577
                </h1>
                <h1 className='flex items-center gap-2'>
                    <FontAwesomeIcon icon={faMailBulk} className='size-5'/>
                    jnrstarksciit@gmail.com
                </h1>
            </div> */}
            <div className='space-x-2 hidden md:block'>
                <button className='bg-gray-300 p-2 rounded-full size-12'>
                    <FontAwesomeIcon icon={faPhone}/>
                </button>
                <button className='bg-gray-300 p-2 rounded-full size-12'>
                    <FontAwesomeIcon icon={faMailBulk}/>
                </button>
                <button className='bg-blue-800 rounded-full p-3 text-white space-x-2 font-medium text-sm'>
                    <FontAwesomeIcon icon={faMessage} className='pr-2'/>
                    Apply for Service
                </button>
            </div>
        </div>
    </div>
  )
}
