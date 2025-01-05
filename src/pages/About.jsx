import React from 'react'
import HeroSection from '../components_new/sections/AboutSections/HeroSection'
import AboutmeSection from '../components_new/sections/ExploreSections/AboutmeSection'
import Education_Certs from '../components_new/sections/ExploreSections/Education_Certs'
import MySkills from '../components_new/sections/AboutSections/MySkills'
import TechStacks from '../components_new/sections/AboutSections/TechStacks'

export default function About() {
  return (
    <section className='p-4 h-auto'>
      <HeroSection/>
      <AboutmeSection
        showmore={true}
      />
      <Education_Certs
        showcerts={false}
      />
      <MySkills/>
      <TechStacks/>
    </section>
  )
}
