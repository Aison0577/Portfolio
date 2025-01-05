import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
    const location = useLocation()
    
    const isActive = (path) => location.pathname === path || location.pathname.startsWith(path);

  return (
    <div className='wit p-4'>
      <div className='flex items-center justify-between text-gray-600 font-medium'>
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
    </div>
  )
}
