import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
    const location = useLocation()
    
    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);

  return (
    <div className='wit p-4 flex flex-col gap-5 items-center justify-center'>
      <div className='flex items-center justify-between text-gray-600 w-[80%] mx-auto'>
        <Link to={'/'} className={isActive('/')?'hidden':'block'}>
            Explore
        </Link>
        <Link to={'/about'} className={isActive('/about')?'hidden':'block'}>
            About
        </Link>
        <Link to={'/projects'} className={isActive('/projects')?'hidden':'block'}>
            Projects
        </Link>
        <Link to={'/projects'} className={isActive('/contact')?'hidden':'block'}>
            Contact
        </Link>

      </div>
      <div className='space-x-2'>
        <button className='dark:text-white size-5 hover:text-blue-600'>
            <FontAwesomeIcon icon={faGithub} className='h-full w-full'/>
        </button>
        <button className='dark:text-white size-5 hover:text-blue-600'>
            <FontAwesomeIcon icon={faLinkedin} className='h-full w-full'/>
        </button>
      </div>
    </div>
  )
}
