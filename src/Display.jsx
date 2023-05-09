import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Works from './Works'
import Contact from './Contact'
import Navbar from './Navbar'
import Home from './Home'
import './App.css'
function Display() {
  return (
    // <div>Display</div>
    <BrowserRouter>
     <Navbar />
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    <Route path="/works" element={<Works />} />
    <Route path="/contact" element={<Contact />} />
    
    </Routes>
    </BrowserRouter>
  )
}

export default Display