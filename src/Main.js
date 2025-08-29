import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Project from './components/Project'
import Skills from './components/Skills'
import About from './components/About'

const Main = () => {
    const homeRef = useRef(null)
    const projectRef = useRef(null)
    const skillref = useRef(null)
    const aboutRef = useRef(null)
    const scrollSection = (ref) => {
        ref.current.scrollIntoView({
            behavior:"smooth"
        })
   }
  return (
    <div>
          <Navbar
              onHomeClick={() => scrollSection(homeRef)}
              onProjectClick={() => scrollSection(projectRef)}
              onSkillsClick={() => scrollSection(skillref)}
              onAboutClick={()=>scrollSection(aboutRef)}
          />
          <div ref={homeRef} >
              <Home/>
          </div>
          <div ref={projectRef}>
              <Project/>
          </div>
          <div ref={skillref}>
              <Skills/>
          </div>
          <div ref={aboutRef}>
              <About/>
          </div>
    </div>
  )
}

export default Main
