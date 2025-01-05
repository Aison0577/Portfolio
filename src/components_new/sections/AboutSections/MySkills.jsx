import React from 'react'
import MainSkillsCard from '../../cards/MainSkillsCard'
import { DeviceHub, Devices, Public, Storage } from '@mui/icons-material'

export default function MySkills() {
  return (
    <div className='p-4 text-black dark:text-white border-b-[1px] border-gray-800'>
      <h1 className='mb-7 font-semibold text-2xl'>Skills</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
        <MainSkillsCard
            icon={<Public/>}
            head={'Frontend Development'}
            description={'Desgin and implement User-friendly User interfaces'}
        />
        <MainSkillsCard
            icon={<Storage/>}
            head={'Backend Development'}
            description={'Develop server-side logics and databases'}
        />
        <MainSkillsCard
            icon={<Devices/>}
            head={'Responsive Web Design'}
            description={'Ensure websites are optimized for all devices'}
        />
        <MainSkillsCard
            icon={<DeviceHub/>}
            head={'API Integration'}
            description={'Design and integrate application programming interfaces'}
        />
      </div>
    </div>
  )
}
