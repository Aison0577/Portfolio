import React from 'react'

export default function MainSkillsCard({icon,head,description}) {
  return (
    <div className='p-4 dark:bg-gray-800/65 border-[1px] dark:border-gray-700 rounded-xl flex flex-col gap-1'>
      {icon}
      <h1 className='text-sm'>{head}</h1>
      <h1 className='text-sm line-clamp-3 text-blue-800'>{description}</h1>
    </div>
  )
}
