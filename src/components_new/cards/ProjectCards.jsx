import React, { useState } from 'react'
import Images from '../../constants/Images'
import { Link } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function ProjectCards({title,description,image,link, libs}) {

  const [showDetials, setShowDetails] = useState(false)

  const triggerShow =()=>{
    setShowDetails(prev=>!prev)
  }


  return (
    // <Link to={link}>
      <div className='h-full'>
        <button onClick={triggerShow} className='dark:bg-gray-900/55 rounded-md bg-gray-100 p-4 h-full'>
          <div className='h-[180px] overflow-hidden rounded-lg mb-3'>
            <img src={image} alt=""  className='object-cover h-full w-full'/>
          </div>
          <h1 className='text-xl mb-2 text-left font-medium'>{title}</h1>
          <h1 className='text-gray-600 line-clamp-5 text-left'>{description}</h1>
        </button>



        <Dialog open={showDetials} onClose={triggerShow} sx={{ backdropFilter:'2px'}}>
          <DialogContent>
            <h1 className='text-2xl font-bold mb-3'>{title}</h1>
            <h1 className='text-gray-500'>{description}</h1>


            {/*  */}
            <h1 className='mt-6 font-semibold'>Frameworks and Libraries</h1>

            <div className='flex flex-row w-full min-w-full max-w-full overflow-x-auto mb-3'>
              {
                libs.map((lib,index)=>(
                  <div className='text-black inline-flex mr-2 bg-gray-200 rounded-md px-4 py-2 text-sm'>{lib}</div>
                ))
              }           
            </div>


            <Link to={link}>
              <button className=' hover:text-blue-600 bg-black text-white px-4 py-2 rounded-md mt-4'>
                  <FontAwesomeIcon icon={faGithub} className='size-5 mr-2'/>
                  View Git Repository
              </button>
            </Link>
          </DialogContent>
          
        </Dialog>
      </div>
    // </Link>
  )
}
