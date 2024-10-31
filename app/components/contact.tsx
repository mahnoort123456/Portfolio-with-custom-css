import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div id="contact">
      <div className='container'>
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><IoIosSend className='IoIosSend' />
            mahanoortahir14@gmail.com</p>
            <p><FaPhoneAlt  className='IoIosSend' />
            03438908235</p>
            <div className='social-icons'>
              <Link target='_blank' className='Links' href='https://www.facebook.com/profile.php?id=100070114595720'><FaFacebook  /></Link>
              <Link target='_blank'  className='Links' href='https://www.instagram.com/mahnoor_mk14/'>
              <FaInstagram  />
              </Link>
              <Link target='_blank' className='Links'  href='https://github.com/mahnoort123456' >
              <FaGithub />
              </Link>
              <Link target='_blank' className='Links'  href='https://www.linkedin.com/in/mahnoortahir29/'>
              <FaLinkedin />
              </Link>
            </div>

            <a target="_blank" download href='/DOC/Brown and White Simple Corporate Resume.pdf' className='btn btn2'>Download CV</a>

          </div>
          <div className="contact-right">
            <form>
              <input type='text' name="Name" placeholder='Your Name' required/>
              <input type='email' name="email" placeholder='Your Email' required/>
              <textarea name="Message" rows={6} placeholder='Your Message'></textarea>
              <button type='submit' className='btn btn2'>Submit</button>
            </form>
          </div>
          <div className='copyright'>
            <p>© 2024 Mahnoor Tahir —</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact