import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// react icons import compom......
import { FaSquareInstagram } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs"

function Navbar() {
    // define the state
    const [show , setshow] = useState(false);
  return (
    <>
        <nav className = {show ? "navbar show_navbar" : "navbar"}>
            <div className='logo'>
                <img src="Fronted/public/logo.jpg" alt="logo" />
            </div>
            <div className='links'>
                <ul>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/donate"}>Donate</Link></li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
                <ul>
                    {/* making the icons from the react icon  */}
                    <li><Link to={"/"}><FaSquareInstagram /></Link></li>
                    <li><Link to={"/"}><IoCallSharp />
                    </Link></li>
                    <li><Link to={"/"}><BsLinkedin/></Link></li>
                </ul>
            </div>
 
        </nav>
      
    </>
  )
}

export default Navbar
