import React from 'react'
import Footer from './Footer';
import Header from './Header';
import Projectcard from './Projectcard'
// import Footer from '../'
const Projects = () => {
  return (
    <>
    <Header/>
    <div className='project'>
    <div className='project-heading'>My Projects</div>
    <div className='project-main'>
    <Projectcard/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Projects
