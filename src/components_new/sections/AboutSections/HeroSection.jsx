import React from 'react'
import Images from '../../../constants/Images'

export default function HeroSection() {
  return (
    <section className='h-[300px] md:h-[400px] overflow-hidden rounded-xl relative shadow-lg'>
      <img src={Images.test2} alt="" className=' w-full object-cover h-[full absolute'/>
      <div className='bg-black/65 relative h-full flex items-center justify-center p-4'>
        <h1 className='text-white font-black text-2xl md:text-4xl text-center'>I'm a Javascript Developer with experince in frontend and backend frameworks</h1>
      </div>
    </section>
  )
}
