import React from 'react'
import { FaCode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { RxSlash } from "react-icons/rx";
const Skills = () => {
  return (
    <div id='skills'>
      <div className="container">
        <h1 className='sub-title'>My Capabilities</h1>
        <div className="services-list">
            <div>
            <FaCode className='FaCode' />
                <h2>Frontend Developer</h2>
                <p>Skilled in building interactive and responsive websites, creating user-friendly experiences, and delivering optimized frontend solutions focused on performance and accessibility.</p>
                <a href='#'>Learn More</a>
            </div>
            <div>
            <RiNextjsFill  className='FaCode'/>
                <h2>NextJs</h2>
                <p>Experienced in developing fast, SEO-friendly, and scalable applications with Next.js, utilizing advanced routing and server-side rendering for dynamic content.</p>
                <a href='#'>Learn More</a>
            </div>
            <div>
            <SiTypescript  className='FaCode'/><RxSlash className='FaCode' /><SiJavascript className='FaCode' />
                <h2>TypeScript/JavaScript</h2>
                <p>Proficient in JavaScript and TypeScript, using advanced features for clean, error-free code and object-oriented programming. Skilled in data manipulation and UI interactions.</p>
                <a href='#'>Learn More</a>
            </div>
            <div>
            <FaHtml5 className='FaCode' /><RxSlash className='FaCode' /><FaCss3Alt  className='FaCode'/>
                <h2>HTML/CSS</h2>
                <p>Adept in writing semantic HTML and creating responsive CSS layouts that work seamlessly across screen sizes, leveraging modern CSS techniques and Flexbox/Grid.</p>
                <a href='#'>Learn More</a>
            </div>
            <div>
            <SiTailwindcss className='FaCode' />
                <h2>Tailwind CSS</h2>
                <p>Expert in Tailwind CSS for quickly creating customized design solutions with a utility-first approach, delivering clean and consistent UI.</p>
                <a href='#'>Learn More</a>
            </div>
            <div>
            <SiCanva  className='FaCode'/>
                <h2>Canva Designer</h2>
                <p>Proficient in creating visually appealing and professional designs with Canva, ideal for social media graphics, presentations, and website visuals.</p>
                <a href='#'>Learn More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
