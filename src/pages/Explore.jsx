import React from 'react'
import MyDetailsSection from '../components_new/sections/ExploreSections/MyDetailsSection'
import AboutmeSection from '../components_new/sections/ExploreSections/AboutmeSection'
import ProjectsSection from '../components_new/sections/ExploreSections/ProjectsSection'
import SkillsSection from '../components_new/sections/ExploreSections/SkillsSection'
import Education_Certs from '../components_new/sections/ExploreSections/Education_Certs'

export default function Explore() {
  return (
    <section className='w-full p-4'>
      <MyDetailsSection/>
      <AboutmeSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <Education_Certs/>
    </section>
  )
}
