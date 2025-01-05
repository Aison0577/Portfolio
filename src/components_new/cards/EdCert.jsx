import React from 'react'

export default function EdCert({year,course,school}) {
  return (
    <div className='py-4 '>
      <h1 className='text-sm text-blue-700'>{year}</h1>
      <h1 className='text-base md:text-lg font-medium'>{course}</h1>
      <h1 className='text-base md:text-lg font-medium'>{school}</h1>
    </div>
  )
}
