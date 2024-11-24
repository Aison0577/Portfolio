import React from 'react'
import TechStackCard from './TechStackCard'
import node from '../assets/node.png'
import react from '../assets/react.png'
import php from '../assets/php.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tw from '../assets/tw.png'
import mysql from '../assets/mysql.png'
import mongodb from '../assets/mongodb.png'

export default function TechStacks() {
  return (
    <div className='overflow-hidden w-full'>
        <div className='flex w-[calc(100%*8)] gap-4 animate-slide'>
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
                logo={html}
            />
            <TechStackCard
                name={'Hello'}
                logo={css}
            />
            <TechStackCard
                name={'Hello'}
                logo={tw}
            />
            <TechStackCard
                name={'Hello'}
                logo={mysql}
            />
            <TechStackCard
                name={'Hello'}
                logo={mongodb}
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
            <TechStackCard
                name={'Hello'}
                logo={html}
            />
            <TechStackCard
                name={'Hello'}
                logo={css}
            />
            <TechStackCard
                name={'Hello'}
                logo={tw}
            />
            <TechStackCard
                name={'Hello'}
                logo={mysql}
            />
            <TechStackCard
                name={'Hello'}
                logo={mongodb}
            />

        </div>
    </div>
  )
}
