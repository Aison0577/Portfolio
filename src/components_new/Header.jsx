import React from 'react'
import { Link } from 'react-router-dom'
import NavButton from './buttons/NavButton'
import { Avatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header({handleTheme,darktheme}) {
  return (
    <div className=' p-2 flex shadow-xl items-center justify-between sticky top-0 dark:border-b-[2px] border-stone-900 backdrop-blur-md'>
      <h1 className='dark:text-white text-black font-bold'>EOA</h1>

      <div className='flex items-center gap-20'>
        <nav className='items-center gap-4 hidden md:flex'>
            <NavButton
                link={'/'}
                name={'Explore'}
            />
            <NavButton
                link={'/about'}
                name={'About'}
            />
            <NavButton
                link={'/projects'}
                name={'Projects'}
            />
            <NavButton
                link={'/contact'}
                name={'Contact'}
            />
        </nav>
        <div>
            {/* <Avatar/> */}
            <button
                onClick={handleTheme}
                className=''
            >
                <FontAwesomeIcon
                    icon={darktheme?faSun:faMoon}
                    className='dark:text-white text-black p-3 rounded-2xl size-4 bg-white dark:bg-blue-800 hover:bg-black/10'
                />
            </button>
        </div>
      </div>

    </div>
  )
}
