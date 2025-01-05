import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavButton({link,name,handleClick}) {
  const location = useLocation()
  const isActive =
    (link === '/' && location.pathname === '/') || 
    (link !== '/' && location.pathname.includes(link));

  return (
    <Link to={link}>
      <button
      onClick={handleClick}
        className={`${
          isActive ? 'text-blue-800 ' : 'dark:text-white text-black'
        } font-medium`}
      >
        {name}
        <div className={isActive ? 'mt-1 p-[1px] bg-blue-800 w-[50%]' : 'hidden'} />
      </button>
    </Link>
  )
}
