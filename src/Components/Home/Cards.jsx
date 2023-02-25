import React from 'react'
import Firebase from '../images/firebase-icon.svg'
import clogo from '../images/C++-Logo.svg';
import JS from '../images/javascript.svg'
import ol from '../images/ol.svg'
import mySQL from '../images/mysql.svg'
import python from '../images/python.svg'
import reactimg from '../images/react.svg'
import Mui from '../images/materialui.svg'

const Cards = () => {
  return (
    <>
   
   
    <div className='card'>
      <img src={JS} alt='' className='icons'/>
    </div>
    <div className='card'>
      <img src={reactimg} alt='' className='icons'/>
    </div>  
    <div className='card'>
      <img src={Mui} alt='' className='icons'/>
    </div>
    <div className='card'>
      <img src={clogo} alt='' className='icons'/>
    </div>
    
    <div className='card'>
      <img src={ol} alt='' className='icons'/>
    </div>
    <div className='card'>
      <img src={mySQL} alt='' className='icons'/>
    </div>
    <div className='card'>
      <img src={python} alt='' className='icons'/>
    </div>
 
    <div className='card'>
      <img src={Firebase} alt='' className='icons'/>
    </div>


    </>
  )
}

export default Cards
