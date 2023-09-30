import React from 'react'
import { useState } from 'react';
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [click, setclick]= useState(false);
  const [sidebarclik, setsidebarclick]=useState(false)
  const handleClick=()=>setclick(!click);
  const handleSideBarClick=()=> {
    setclick(false)
    setsidebarclick(!click);}

  


  return (
    <div className='navbar-container' >
      <Link  to="/">
        <div className="logo">
          <h1>MUSA FX</h1>
        </div>
      </Link>

      <ul className={click?"nav-menu active":"nav-menu"}>
        <li><Link to="/autopilotpro" onClick={()=>{handleClick()}}>AutoPilotpro</Link></li>
        <li><Link to=""onClick={()=>{handleClick()}}>Telegram</Link></li>
        <li><Link to="/contact" onClick={()=>{handleClick()}}>Support</Link></li>
        <li><Link to="/Brokers" onClick={()=>{handleClick()}}>Brokers</Link></li>
      </ul>
      <div>
     <Link to="/accountpage"> <i class="fa-solid fa-user"></i></Link>
      <i class="fa-solid fa-cart-arrow-down"></i>
      </div>
      <div className='hamburger' onClick={handleClick}>
            {click ? (<i class="fa-solid fa-circle-xmark"></i>): ( <i class="fa-solid fa-bars"></i>)} 
        </div>
           
    </div>
  )
}
