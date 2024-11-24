import React from 'react'
import TechStackCard from './TechStackCard'
import node from '../assets/node.png'
import react from '../assets/react.png'
import php from '../assets/php.png'

export default function TechStacks() {
  return (
    <div className='overflow-hidden w-full'>
        <div className='flex w-[calc(200%)] gap-4 animate-slide'>
            <TechStackCard
                name={'Hello'}
                logo={node}
            />
            <TechStackCard
                name={'Hello'}
                logo={react}
            />
            <TechStackCard
                name={'Hello'}
                logo={php}
            />


            <TechStackCard
                name={'Hello'}
                logo={node}
            />
            <TechStackCard
                name={'Hello'}
                logo={react}
            />
            <TechStackCard
                name={'Hello'}
                logo={php}
            />
           
        </div>
    </div>
  )
}
