import React from 'react'
import './Home.css';
import linkedin from '../images/linkedin.svg'
import github from '../images/gihubd.svg'
import insta from '../images/insta.svg'
import leetcode from '../images/leetcode.svg'
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className='footer-container'>
      <span className='footer-left'>Designed and Developed by Akshit Bariya</span>
        <div className='footer-icon-container'>
        <Link to="https://www.linkedin.com/in/akshit-bariya/" > <img src={linkedin} alt="" className='footer-icon'/></Link>
          <Link to="https://github.com/akshitbariya" ><img src={github} alt="" className='footer-icon'/></Link>
          <Link to="https://leetcode.com/adb02bariya/" > <img src={leetcode} alt="" className='footer-icon'/></Link>
          <Link to="https://www.instagram.com/akshit_1703/" >  <img src={insta} alt="" className='footer-icon'/></Link>
        </div>
   </div>
  )
}

export default Footer
