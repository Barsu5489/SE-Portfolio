import React, { useState } from 'react'
import Works from './Works'
import App from './App'
import Contact from './Contact'
import Blank from './Blank'
import './works.css'
import './navbar.css'
import { Link } from 'react-router-dom'


function Navbar() {
    // const [display, setDisplay] = useState('')
    // const handleClick= (info)=>{
    // setDisplay(info)
    // }

  return (
    <>
    <div className='navbar'>
        <div> <h2><Link to="/home">Emmanuel</Link></h2></div>
        <div> 
            <ul className='nav_items'>
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/works">Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          
        </div>

        </div>
        {/* {display === 'works' ? (<Works/>): display === 'home' ? (<Blank />): display === 'contact' ? (<Contact/>): (null)} */}
        </>
  )
}

export default Navbar