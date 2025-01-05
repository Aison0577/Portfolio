import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explore from './pages/Explore'
import Header from './components_new/Header'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Projects from './pages/Projects'
import Footer from './components_new/Footer'

function App() {

  const [darkmode,setdarkmode] = useState(true)

  const handleDarkmode = ()=>{
    setdarkmode(!darkmode)
  }

  return (
    <div  className={`${darkmode && 'dark'}`}>
      <BrowserRouter>
      <Header
        handleTheme={handleDarkmode}
        darktheme={darkmode}
      />
      <main className='dark:bg-black dark:text-white text-black bg-white min-h-screen mt-[-63px] pt-[70px]'>
        <div className='wit'>
          <Routes>
            <Route index element={<Explore/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contacts/>}/>
          </Routes>
        </div>
        <Footer/>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
