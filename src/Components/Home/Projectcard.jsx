import React from 'react';
import pro2 from '../images/pro3.svg';
import pro3 from '../images/bg22.webp';
import Chatimg from '../images/chatapp.png';
import Covid from '../images/covidchat.png';

import JS from '../images/javascript.svg'
import ol from '../images/ol.svg'
import mySQL from '../images/mysql.svg'
import python from '../images/python.svg'
import reactimg from '../images/react.svg'
import Mui from '../images/materialui.svg'
import firebase from '../images/firebase-icon.svg'
import DGallery from '../images/dynamic-gallery.png'
import SQLDB from '../images/SQL-Database.png'
import SQLICON from '../images/SQL-ICON.png'
import jupyter from '../images/jupyter.jpg'
import mynotes from '../images/my-notes.png'
import nextjs from '../images/nextjs-icon.svg'
import mongod from '../images/mongodb.svg'
import todo from '../images/Todo app.png'
import { Link } from 'react-router-dom';



const Projectcard = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
    <div className='project-cards'>

    <div className='project-card-main'>
    <div>
<Link to="https://to-do-app-using-nextjs.vercel.app/login">
      <img src={todo} alt=''
       className='project-cards-img'/>
       </Link>
       </div><div>
      <div className='card-heading'>
        TO DO Application
      </div>
      <p className='card-p'>
        <li>
        A real-time chat application for web communication.
         </li>
         <br/>
         <li>For Authentication and real-time chat messages Firebase has been used.</li>
         <br/>
         <li>Clean and intuitive UI using HTML, CSS, JavaScript and SASS .</li>
        
      </p>
      <div className='project-card-icons-container'>
        <img src={nextjs} alt ="" className='project-card-icons'/>
        <img src={mongod} alt ="" className='project-card-icons'/>
        <img src={JS} alt ="" className='project-card-icons'/>
        <img src={reactimg} alt ="" className='project-card-icons'/>
        {/* <img src={jscript} alt =""/> */}
        {/* <img src={Firebase} alt =""/> */}
</div>
      </div>
</div>
    </div>




    
    <div className='project-cards'>
    <div className='project-card-main'>

    <div>
    <Link to ="https://dynamic-gallery-omega.vercel.app/">

      <img src={DGallery} alt='' className='project-cards-img' onclick="window.open('anotherpage.html', '_blank');"/>
    </Link>
      </div>
      <div>
      <div className='card-heading'>
      Dynamic Gallery
      </div>
      <p className='card-p'>
        <li>
        Worked with predefined API to show data on frontend using ReactJS.
         </li>
         <br/>
         <li> The website contains trending series of different OTT platforms.
         </li>
     
      </p>
      <br/>
      <br/>

      <div className='project-card-icons-container'>
        <img src={reactimg} alt ="" className='project-card-icons'/>
        <img src={JS} alt ="" className='project-card-icons'/>
        {/* <img src={firebase} alt ="" className='project-card-icons'/> */}
        {/* <img src={jscript} alt =""/> */}
        {/* <img src={Firebase} alt =""/> */}

      </div>
      </div></div>
    </div>
    
    <div className='project-cards'>
    <div className='project-card-main'>
<div>
    <Link to="https://covid-19-tracker-app-rouge.vercel.app/" >
      <img src={Covid} 
      
      alt='' className='project-cards-img'/>
      </Link></div>
       <div>
      <div className='card-heading'>
      Live COVID-19 Tracker App
      </div>
      <p className='card-p'>
        <li>
        Built a real-time Covid-19 tracker using ReactJS.
         </li>
         <br/>
         <li> Integrated data from reliable API sources on cases, deaths, and recoveries.</li>
         <br/>
         <li>Implemented a responsive design for optimal user experience on different devices.</li>
        
      </p>
      <br/>

      <div className='project-card-icons-container'>
        <img src={reactimg} alt ="" className='project-card-icons'/>
        <img src={JS} alt ="" className='project-card-icons'/>
        {/* <img src={firebase} alt ="" className='project-card-icons'/> */}
        {/* <img src={jscript} alt =""/> */}
        {/* <img src={Firebase} alt =""/> */}

      </div>
      </div>

</div>

    </div>





    
    <div className='project-cards'>
    <div className='project-card-main'>
<div>
<Link to="https://my-notes-flame.vercel.app/">
      <img src={mynotes} alt='' className='project-cards-img'/>
      </Link>
      </div>    
      <div className='card-right'>
 <div className='card-heading'>
        My Notes
      </div>
      <p className='card-p'>
        <li>
          Worked on a web project that helps users for taking notes.
         </li>
         <br/>
         <li> Provide a search bar to filter specific to-do item quickly.</li>
         <br/>
         <li>Utilized Material UI for designing user interface.</li>
        
      </p>
      <div className='project-card-icons-container'>
        <img src={reactimg} alt ="" className='project-card-icons'/>
        <img src={JS} alt ="" className='project-card-icons'/>
        {/* <img src={firebase} alt ="" className='project-card-icons'/> */}
        {/* <img src={jscript} alt =""/> */}
        {/* <img src={Firebase} alt =""/> */}

      </div>
    </div>
</div></div>


    <div className='project-cards'>

<div className='project-card-main'>
<div>
  <img src={Chatimg} alt='' className='project-cards-img'/></div><div>
  <div className='card-heading'>
    Real-time Chat Application
  </div>
  <p className='card-p'>
    <li>
    A real-time chat application for web communication.
     </li>
     <br/>
     <li>For Authentication and real-time chat messages Firebase has been used.</li>
     <br/>
     <li>Clean and intuitive UI using HTML, CSS, JavaScript and SASS .</li>
    
  </p>
  <div className='project-card-icons-container'>
    <img src={reactimg} alt ="" className='project-card-icons'/>
    <img src={JS} alt ="" className='project-card-icons'/>
    <img src={firebase} alt ="" className='project-card-icons'/>
    {/* <img src={jscript} alt =""/> */}
    {/* <img src={Firebase} alt =""/> */}
</div>
  </div>
</div>
</div>

    
    <div className='project-cards'>
    <div className='project-card-main'>
<div>
      <img src={SQLDB} alt='' className='project-cards-img'/></div>
      <div className='card-right'>
      <div className='card-heading'>
      Indian Census Data Analysis
      </div>
      <p className='card-p'>
        <li>
        Performed insightful data analysis on large dataset containing district wise indian-census data.
         </li>
         <br/>
         <li>Worked with different functions such as group by, order by, join, limit on MySQL.</li>
         <br/>
         <li>Created required information from area, sex ratio, literacy rate, growth given in dataset.</li>
        
      </p>
      <div className='project-card-icons-container'>
        <img src={SQLICON} alt ="" className='project-card-icons'/>
        {/* <img src={JS} alt ="" className='project-card-icons'/>
        <img src={firebase} alt ="" className='project-card-icons'/> */}
        {/* <img src={jscript} alt =""/> */}
        {/* <img src={Firebase} alt =""/> */}
</div>
      </div>
</div>
    </div>

    
    <div className='project-cards'>
    <div className='project-card-main'>
<div>
      <img src={jupyter} alt='' className='project-cards-img'/></div>
      <div className='card-right'>

      <div className='card-heading'>
      Exploratory-Data-Analysis
      </div>
      <p className='card-p'>
          <li> Provide a search bar to filter specific to-do item quickly.
         </li>
         <br/>
         <li>Analyse data from excel sheet and plot graph for better analysis.</li>
        <br/>
      </p>
      <div className='project-card-icons-container'>
        <img src={python} alt ="" className='project-card-icons'/>
        {/* <img src={JS} alt ="" className='project-card-icons'/> */}
        {/* <img src={firebase} alt ="" className='project-card-icons'/> */}
        {/* <img src={jscript} alt =""/> */}
        {/* <img src={Firebase} alt =""/> */}
</div>
      </div>
    </div>
    </div>


    




    </>
  )
}

export default Projectcard
