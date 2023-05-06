import React, { useState } from 'react'
import Works from './Works'
import App from './App'
import Contact from './Contact'
import './works.css'
function Navbar() {
    const [display, setDisplay] = useState('')
    const handleWorks = (info)=>{
setDisplay(info)
    }
    function handleHome(info){
setDisplay(info)
    }
    function handleContact(info){
      setDisplay(info)
    }
  return (
    <>
    <div className='navbar'>
        <div onClick={()=>handleHome('home')}> <h2>Emmanuel</h2></div>
        <div> 
            <ul className='nav_items'>
                <li onClick={()=>handleHome('home')}>About</li>
                <li onClick={()=>handleWorks('works')}>Works</li>
                <li onClick={()=> handleContact('contact')}>Contact</li>
            </ul>
        </div>
        </div>
        {display === 'works' ? (<Works/>): display === 'home' ? (<Contact />): display === 'contact' ? (<Contact/>): (null)}
        </>
  )
}

export default Navbar