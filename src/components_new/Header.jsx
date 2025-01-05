import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavButton from './buttons/NavButton'
import { Avatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header({handleTheme,darktheme}) {

    const [toggleMobileNav,settoggleMobileNav] = useState(false)
  return (
    <div className=' p-2 flex shadow-xl items-center justify-between sticky top-0 dark:border-b-[2px] border-stone-900 backdrop-blur-md z-20 '>
        <div className='flex gap-1 dark:text-white text-black font-bold items-center'>
            <button className='p-2 md:hidden' onClick={()=>{
                settoggleMobileNav(!toggleMobileNav)
            }}>
                <FontAwesomeIcon icon={toggleMobileNav?faClose:faBars} className='size-5 ease-in-out duration-150'/>
            </button>
            <h1 className=''>EOA</h1>
        </div>

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


        <div className={toggleMobileNav?'fixed md:hidden p-2 left-0 top-[60px] ease-in-out duration-500 backdrop-blur-md bg-black shadow-xl bottom-0 flex flex-col gap-3 w-[50%] h-screen uppercase':'fixed left-[-100%]'}>
            <NavButton
                link={'/'}
                name={'Explore'}
                handleClick={()=>{
                    settoggleMobileNav(false)
                }}
            />
            <NavButton
                link={'/about'}
                name={'About'}
                handleClick={()=>{
                    settoggleMobileNav(false)
                }}
            />
            <NavButton
                link={'/projects'}
                name={'Projects'}
                handleClick={()=>{
                    settoggleMobileNav(false)
                }}
            />
            <NavButton
                link={'/contact'}
                name={'Contact'}
                handleClick={()=>{
                    settoggleMobileNav(false)
                }}
            />
        </div>
  


    </div>
  )
}
