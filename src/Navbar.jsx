import React, { useState } from 'react'
import Works from './Works'
function Navbar() {
    const [display, setDisplay] = useState('about')
    const handleWorks = (info)=>{
setDisplay(info)
    }
  return (
    <>
    <div className='navbar'>
        <div> <h2>Emmanuel</h2></div>
        <div> 
            <ul className='nav_items'>
                <li>About</li>
                <li onClick={()=>handleWorks('works')}>Works</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
        {display === 'works' ? (<Works/>):('')}
        </>
  )
}

export default Navbar