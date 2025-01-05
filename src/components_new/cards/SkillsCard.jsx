import React from 'react'

export default function SkillsCard({skill}) {
  return (
    <div className='text-black dark:text-white p-3 border-2 rounded-xl border-gray-300 dark:border-gray-800'>
      <h1 className='space-x-3'>
        &lt;/&gt; {skill}
      </h1>
    </div>
  )
}
