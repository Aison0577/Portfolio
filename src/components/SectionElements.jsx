import React from 'react'
// import { Avatar } from '@mui/material'

export default function SectionElements({logo,date,company,title,description,otherLength}) {
  return (
    <div className='flex gap-5 items-baseline mb-6 justify-start w-full'>
      <div className='w-[20%]'>
        <h1 className='font-medium text-gray-500 text-sm'>{date}</h1>
        <h1 className='text-sm italic font-medium'>{company}</h1>
      </div>
      <div className={`${otherLength} w-[80%]`}>
        <h1 className='text font-bold flex items-center gap-2'>
            {/* <Avatar src={logo}/> */}
            {title}
            </h1>
        <h1 className='text-gray-800'>{description}</h1>
      </div>
    </div>
  )
}
