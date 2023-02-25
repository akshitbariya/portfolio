import React from 'react'
import linkedin from '../images/linkedin.svg'
import github from '../images/gihubd.svg'
import insta from '../images/insta.svg'
import leetcode from '../images/leetcode.svg'
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import './Home.css';


const Contact = () => {

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `https://www.youtube.com/`; 
  //   navigate(path);
  // }
  return (
    <>
    <div className='contact-container'>
        <span className='conact-heading'>FIND ME ON</span>
        <div className='contact-icon-container'>
          
          <Link to="https://github.com/akshitbariya" ><img src={github} alt="" className='contact-icon'/></Link>
          <Link to="https://www.linkedin.com/in/akshit-bariya/" ><img src={linkedin} alt="" className='contact-icon' /></Link>
          <Link to="https://leetcode.com/adb02bariya/" ><img src={leetcode} alt="" className='contact-icon'/></Link>
          <Link to="https://www.instagram.com/akshit_1703/" ><img src={insta} alt="" className='contact-icon'/></Link>
          
          
          
          
        </div>
    </div>
    </>
  )
}

export default Contact
