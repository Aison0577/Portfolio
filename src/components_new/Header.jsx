import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavButton from './buttons/NavButton'
import { Avatar } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faClose, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Images from '../constants/Images'

export default function Header({handleTheme,darktheme}) {

    const [toggleMobileNav,settoggleMobileNav] = useState(false)
  return (
    <div className=' p-2 flex shadow-xl items-center justify-between sticky top-0 dark:border-b-[2px] border-stone-800/95 backdrop-blur-md z-20 '>
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
            <div className='flex items-center justify-between gap-2'>
                <Avatar
                    src={Images.profileImage}
                    className='border-2 border-blue-900'
                />
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


        <div className={toggleMobileNav?'fixed md:hidden p-4 left-0 top-[60px] ease-in-out duration-500 bg-black shadow-xl bottom-0 flex flex-col gap-3 w-full h-screen':'fixed left-[-100%] ease-in-out duration-300 bottom-[-90%]'}>
          

                <Link to={'/'}>
                    <div className='w-full p-5 text-gray-500/85 border-b-2 border-gray-500/85 hover:border-white hover:text-white group flex items-center justify-between cursor-pointer'
                        onClick={()=>{
                            settoggleMobileNav(false)
                        }}
                    >
                        <div>
                            <h1 className='uppercase font-montserrat font-black text-2xl mb-2 group-hover:animate-bounce'>Explore</h1>
                            <p className=''>Explore my capabilities</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className='opacity-0 scale-0 transition-all ease-in-out transform-cpu duration-300 group-hover:opacity-100 group-hover:scale-100 size-8'/>
                    </div>
                </Link>
                <Link to={'/about'}>
                    <div className='w-full p-5 text-gray-500/85 border-b-2 border-gray-500/85 hover:border-white hover:text-white group flex items-center justify-between cursor-pointer'
                        onClick={()=>{
                            settoggleMobileNav(false)
                        }}
                    >
                        <div>
                            <h1 className='uppercase font-montserrat font-black text-2xl mb-2 group-hover:animate-bounce'>About</h1>
                            <p className=''>Explore my capabilities</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className='opacity-0 scale-0 transition-all ease-in-out transform-cpu duration-300 group-hover:opacity-100 group-hover:scale-100 size-8'/>
                    </div>
                </Link>
                <Link to={'/projects'}>
                    <div className='w-full p-5 text-gray-500/85 border-b-2 border-gray-500/85 hover:border-white hover:text-white group flex items-center justify-between cursor-pointer'
                        onClick={()=>{
                            settoggleMobileNav(false)
                        }}
                    >
                        <div>
                            <h1 className='uppercase font-montserrat font-black text-2xl mb-2 group-hover:animate-bounce'>Projects</h1>
                            <p className=''>Explore my capabilities</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className='opacity-0 scale-0 transition-all ease-in-out transform-cpu duration-300 group-hover:opacity-100 group-hover:scale-100 size-8'/>
                    </div>
                </Link>
                <Link to={'/contact'}>
                    <div className='w-full p-5 text-gray-500/85 border-b-2 border-gray-500/85 hover:border-white hover:text-white group flex items-center justify-between cursor-pointer'
                        onClick={()=>{
                            settoggleMobileNav(false)
                        }}
                    >
                        <div>
                            <h1 className='uppercase font-montserrat font-black text-2xl mb-2 group-hover:animate-bounce'>Contact</h1>
                            <p className=''>Explore my capabilities</p>
                        </div>
                        <FontAwesomeIcon icon={faArrowRight} className='opacity-0 scale-0 transition-all ease-in-out transform-cpu duration-300 group-hover:opacity-100 group-hover:scale-100 size-8'/>
                    </div>
                </Link>
       

        </div>
  


    </div>
  )
}
