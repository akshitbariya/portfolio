import React from 'react'
import './Home.css';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import { Link } from "react-router-dom";


const Header = () => {
  return (
   <>
   <div className='header-container'>
   <div className='header-container-left'> Akshit Bariya</div>
   <div className='header-container-right'>
          <Link to="/" className='component'>Home</Link>
          <Link to="/Projects" className='component'>Projects</Link>
          <Link to="/Resume" className='component'>Resume</Link>
          </div>
          </div>
   </>
  )
}

export default Header