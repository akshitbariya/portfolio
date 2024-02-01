


import React from 'react'
import Header from './Header'
import Download from '../images/file.png'
import Footer from './Footer'
// import Resume from '../resume/resume.pdf';
const Resume = () => {
  return (
    <>
    <Header/>
    <div className='resume-container'>
    <div className='resume-main'>
      <div className='resume-heading'>Resume</div>
        <div className='resume-button'>
          <button className='resume-download-button'>     
             <a href={require("../resume/Akshit_Resume.pdf")} download="Akshitkumar's Resume" className='file'>Download file</a>
        </button>
        </div>
        
        </div>
    </div>
    <Footer/>
    </>  
  )
}

export default Resume

