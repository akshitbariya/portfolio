import React from 'react'
import Header from './Header';
import Footer from './Footer';
// import bg from '../images/home-bg.jpg';
import Homeleft1 from './Homeleft1';
import Homeright1 from './Homeright1';
import Homeleft2 from './Homeleft2';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  return (
  <>
    <Header/>
    <div className='home-main-1'>
        <div className='home-main-left1'>
            <Homeleft1/>
        </div>
        <div className='home-main-right1'>
          <Homeright1/>
        </div>
    </div>
    <div className='home-main-2'>
    <div>
        <div className='home-main-left2'>
            <Homeleft2/>
        </div>
        <br/>
    <Contact/>
   </div>
    </div>
    
    <Footer/>
  </>
  )
}

export default Home
