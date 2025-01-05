import React from 'react'
import EdCert from '../../cards/EdCert'

export default function Education_Certs() {
  return (
    <div className='p-4 text-black dark:text-white border-b-[1px] border-gray-800'>
        <h1 className='mb-3 font-semibold text-2xl'>Education</h1>
            <div className='grid md:grid-cols-2'>
                <EdCert
                    year={'2017-2020'}
                    course={'Science ICT'}
                    school={'Suhum Senior High Technical School'}
                />
                <EdCert
                    year={'2021-2024'}
                    course={'BEd, Computer Science'}
                    school={'University of Cape Coast'}
                />
            </div>
        <hr className='border-b-[1px] border-gray-800 mb-5'/>

        <h1 className='mb-3 font-semibold text-2xl'>Certifications</h1>
            <div className='grid md:grid-cols-2'>
                <EdCert
                    year={'2024'}
                    course={"Bachelor's Degree in Computer Science"}
                    school={'University of Cape Coast'}
                />
                <EdCert
                    year={'2023'}
                    course={"Robotics & IoT"}
                    school={'TransformMe Cape Coast Cohort'}
                />
            </div>
    </div>
  )
}
