import React from 'react'
import Navbar from './Navbar'

function Home({showNewPage}) {
  return (
    <>
       <div className='new-page'>
    {/* <Navbar /> */}
   
   
      <section className='home_container'>
       
        <div className='text_about_me'> 
        <h1>Hello,</h1>
        <div className='profession'>
          <span>I am Emmanuel, a junior fullstack software engineer with a passion for creating exceptional user experiences.</span> 
        </div>
        <p> I specialize in Javascript and Ruby, with expertise in popular libraries and framework such as React, Redux, and Ruby on Rails.<br /> <br />
          My experience in these technologies, combined with my ability to implement and manage complex databases, such as mySQL, Postgres and SQLite, enable me to create high-performance applications that deliver value to users.</p> </div>
        <div className='my_image'>
          
          <img src="../public/profile.jpg" alt="" />
        </div>
        </section>
      {/* Your new page content goes here */}
    </div>

    </>
  )
}

export default Home