'use client'
import Image from 'next/image'
import React from 'react'


function About(){
 
 

  return (
    <div id='about'>
        <div className='container'>
            <div className='row'>
            <div className='about-col-1'>
                <Image
                alt="about"
                src={require("../../public/IMAGE/Untitled design (1).png")}/>
            </div>
            <div className='about-col-2'>
                <h1 className='sub-title'>About Me</h1>
                <br/>
                <p className='para'>I am a matriculation student at TCF School with a strong passion for computer science and IT, specializing in TypeScript and Next.js. Through courses in freelancing and communication skills at DigiSkills.
                <br/>
                <br/>
                My ultimate career goal is to integrate my technical skills with a lifelong passion for aviation by joining the Air Forces. Beyond academics, I actively pursue aviation interests and seek opportunities in IT and software development to contribute meaningfully and achieve personal growth.
                </p>
            </div>
            <a target="_blank" download href='/DOC/Brown and White Simple Corporate Resume.pdf' className='btn3 btn2'>Download CV</a>
            </div>
        </div>
        </div>
  )
}

export default About