'use client';
import React from 'react'
import Image from 'next/image'
import { FaLink } from "react-icons/fa";
import Link from 'next/link';

const Project = () => {
    return (
      <div id='project'>
        <div className='container'>
          <h1 className="sub-title">My Project Showcase</h1>
          <div className="project-list">
              <div className="work">
                  <Image
                  className='Image'
                  src={require('../../public/IMAGE/WhatsApp Image 2024-10-31 at 8.02.55 PM.jpeg')}
                  alt='image'/>
                  <div className='layer'>
                      <h3>Book-Library</h3>
                      <p>Welcome to the Book Library project! This web application allows users to manage and display books using a clean and intuitive interface.</p>
                      <Link target='_blank' className='Link4' href="https://github.com/mahnoort123456/CodeAlpha-Book-Library"><FaLink /></Link>
                  </div>
              </div>
              <div className="work">
                  <Image
                  className='Image'
                  src={require('../../public/IMAGE/WhatsApp Image 2024-10-31 at 8.02.55 PM (1).jpeg')}
                  alt='image'/>
                   <div className='layer'>
                      <h3>BMI Calculator</h3>
                      <p>BMI Calculator A simple BMI calculator CLI tool built with TypeScript, JavaScript, and Inquirer. Calculate your Body Mass Index quickly and easily.</p>
                      <Link target='_blank' className='Link4'  href="https://github.com/mahnoort123456/BMI-Calculator"><FaLink /></Link>
                  </div>
              </div>
              <div className="work">
                  <Image
                  className='Image'
                  src={require('../../public/IMAGE/WhatsApp Image 2024-10-31 at 8.02.57 PM.jpeg')}
                  alt='image'/>
                   <div className='layer'>
                      <h3>ATM</h3>
                      <p>An ATM project that simulates basic banking transactions like checking balance, withdrawing funds, and depositing money securely and efficiently.</p>
                      <Link  target='_blank' className='Link4'  href="https://github.com/mahnoort123456/ATM"><FaLink /></Link>
                  </div>
              </div>
              <div className="work">
                  <Image
                  className='Image'
                  src={require('../../public/IMAGE/WhatsApp Image 2024-10-31 at 8.02.57 PM (1).jpeg')}
                  alt='image'/>
                   <div className='layer'>
                      <h3>Currency Converter</h3>
                      <p>A currency converter project that allows users to easily convert amounts between different currencies using real-time exchange rates.</p>
                      <Link  target='_blank' className='Link4'  href="https://github.com/mahnoort123456/Currency-Converter"><FaLink /></Link>
                  </div>
              </div>

              <div className="work">
                  <Image
                  className='Image'
                  src={require('../../public/IMAGE/WhatsApp Image 2024-10-31 at 11.46.53 PM.jpeg')}
                  alt='image'/>
                   <div className='layer'>
                      <h3>Music Player</h3>
                      <p>Creating a simple Music Player using HTML and CSS. This project demonstrates the integration of basic web technologies to create a functional and visually appealing music player interface. </p>
                      <Link  target='_blank' className='Link4'  href="https://github.com/mahnoort123456/CodeAlpha_Project_Music_Player"><FaLink /></Link>
                  </div>
              </div>
             
              <div className="work">
                  <Image
                  className='Image'
                  src={require('../../public/IMAGE/WhatsApp Image 2024-10-31 at 11.34.17 PM.jpeg')}
                  alt='image'/>
                   <div className='layer'>
                      <h3>Student Management System</h3>
                      <p>A student management system focused on course enrollment, enabling students to easily register for classes, track their schedules, and manage their academic pathways.</p>
                      <Link  target='_blank' className='Link4'  href="https://github.com/mahnoort123456/Student-Management-System"><FaLink /></Link>
                  </div>
              </div>

          </div>
        </div>
      </div>
    )
  }
  
  export default Project