import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full min-h-screen bg-white'>
      <Nav/>
      {/* <div className='page-center'> */}
        <Hero/>
        <Profile/>
        <Education/>
        <Experience/>
        <Skills/>
        <Contact/>
        <Projects/>
      {/* </div> */}
      
    </div>
  )
}

export default App
