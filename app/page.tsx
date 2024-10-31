import React from 'react'
import Hero from './components/hero'
import About from './components/about'
import Contact from './components/contact'
import Skills from './components/skills'
import Project from './components/project'

function HomePage (){
  return (
    <div>
      <Hero/>
      <br/>
      <br/>
      <br/>
      <br/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default HomePage