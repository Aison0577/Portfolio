import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faContactBook, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import g from '../assets/gt.png'
import menu from '../assets/menu.png'


export default function Nav() {
 const [showMobileNav, setshowMobileNav] = useState(false)


 useEffect(()=>{
    setshowMobileNav(false)
 },[])

  return (
    <div className='bg-white p-3 sticky top-0 shadow-md z-40'>
        <div className='page-center flex items-center justify-between'>
            <div>
                <button className='font-medium italic flex items-center gap-2'>
                    <img src={g} alt="" className='size-8'/>
                    Aison0577
                </button>
            </div>


            {/* <div className='space-x-2 hidden md:block'>
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
            </div> */}

            {/* <div className='md:hidden'>
                <button className='p-2 bg-gray-200 rounded-xl ' onClick={()=>setshowMobileNav(!showMobileNav)}>
                    <img src={menu} alt="" className='size-5'/>
                </button>
            </div> */}

                {/* Mobile nav */}
            {/* <div className={showMobileNav?'fixed md:hidden p-2 right-0 top-[60px] ease-in-out duration-500 bg-white shadow-xl bottom-0 flex flex-col gap-3 w-[60%]':'fixed right-[-100%]'}>
                <button className='bg-gray-100 w-full p-2 rounded-xl size-12'>
                    <FontAwesomeIcon icon={faPhone}/>
                </button>
                <button className='bg-gray-100 w-full p-2 rounded-xl size-12'>
                    <FontAwesomeIcon icon={faMailBulk}/>
                </button>
                <button className='bg-blue-800 rounded-full p-3 text-white space-x-2 font-medium text-sm'>
                    <FontAwesomeIcon icon={faMessage} className='pr-2'/>
                    Apply for Service
                </button> 
            </div> */}

        </div>
    </div>
  )
}
