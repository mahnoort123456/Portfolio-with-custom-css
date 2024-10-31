import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link"
import React from "react"
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <h1 className="bold-h"><b className="bold">P</b>ortfolio.</h1>
         
          <ul id="sidemenu">
            <li><Link href={'/'} className="Link">Home</Link></li>
            <li><Link href={'#about'} className="Link">About</Link></li>
            <li><Link href={'#project'} className="Link">Projects</Link></li>
            <li><Link href={'#skills'} className="Link">Skills</Link></li>
            <li><Link href={'#contact'} className="Link">Contact</Link></li>
            <FaTimes className="fas" />
          </ul>
          <GiHamburgerMenu className="fas"/>
        </nav>
 
      </div>


    </header>
  )
}

export default Header