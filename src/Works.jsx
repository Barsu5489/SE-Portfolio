import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Works() {
  function handleClick(url) {
    window.open(url, '_blank');

}
function  handleGithub(info){
  window.open(info, '_blank');
  console.log(info)
}

  return (
   <div className='works_parent_container'>
   
   <div className='project_imgs'>
   <div className='works_image_container' onClick={()=>handleClick('https://fashion-store-beta.vercel.app/')}> 
      <h3>Fashionnova</h3>   
      <img src="https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxlY29tbWVyY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      <div class="overlay">
    <div class="overlay-content"> 
      <p>This ecommerce app lets users shop for fashionable clothing and accessories while providing an admin dashboard for the website owner to manage products, inventory, and sales.</p>
   
     <i onClick={()=>handleWebsite('https://fashion-store-beta.vercel.app/')}>Website</i>  <span className='git_icon' 
     
     onClick={(event)=>  {
      event.stopPropagation();
     handleGithub('https://github.com/Lorraineken/fashion-store')}}><FontAwesomeIcon icon={faGithub} /></span>
    </div>
  </div>
  <div class="languages">
    <h4>Languages used:</h4>
    <ol>
      <li>Redux</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Ruby</li>
      <li>Postgres</li>
      <li>Figma</li>
      <li>GIT</li>
    </ol>
  </div>
</div>
<div className='works_image_container' onClick={()=>handleClick('https://job-app-user-interface.vercel.app/')}>   
<h3>Job App</h3>  
   <img src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Sm9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
   <div class="overlay">
    <div class="overlay-content">
      <p>This Job App is a web application that serves as a platform for recruiters to post job vacancies and job seekers to find and apply for their dream jobs.</p>
      <i onClick={()=>handleWebsite('https://job-app-user-interface.vercel.app/')}>Website</i>  <span className='git_icon' onClick={(event)=>  {
      event.stopPropagation();handleGithub('https://github.com/Barsu5489/Rails-Project')}}><FontAwesomeIcon icon={faGithub} /></span>
    </div>
  </div>
  <div class="languages">
    <h4>Tech stack used:</h4>
    <ol>
    <li>React</li>
      <li>Rails</li>
      <li>SQLite</li>
      <li>CSS</li>
      <li>Figma</li>
      <li>GIT</li>
    </ol>
  </div>
</div>   
<div className='works_image_container' onClick={()=>handleClick('https://barsu5489.github.io/Crypto/')}>  
<h3>CRYPTO INFO</h3>  
    <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    <div class="overlay">
    <div class="overlay-content">
      <p>This app allows users to easily access info about various cryptocurrencies. The app provides real-time data on the top cryptocurrencies in the market, such as their rank, price, market cap and trading volume.</p>
      <i onClick={()=>handleWebsite('https://barsu5489.github.io/Crypto/')}>Website</i>  <span className='git_icon'onClick={(event)=>  {
      event.stopPropagation();handleGithub('https://github.com/Barsu5489/Crypto')}}><FontAwesomeIcon icon={faGithub} /></span>
    </div>
  </div>
  <div class="languages">
  <h4>Tech stack used:</h4>
    <ol>
    <li>Vanilla JS</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>GIT</li>

    </ol>
  </div>
</div> 
  </div>
   <div className='works_title'>
<h2>Current <span>Works</span></h2>
   </div>
   <div className='project_imgs'>
   <div className='works_image_container' onClick={()=>handleClick('https://porfolio-application.vercel.app/')}>    
      <h3>Portfolio</h3>
      <img src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRmb2xpbyUyMG1hbmFnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      <div class="overlay">
    <div class="overlay-content">
      <p>This is web application enables users to manage their portfolio by adding, editing, and deleting projects and skills. The app is built using a RESTful API to ensure data persistence and reliable performance</p>
      <i onClick={()=>handleWebsite('https://porfolio-application.vercel.app/')}>Website</i>  <span className='git_icon' onClick={(event)=>  {
      event.stopPropagation();handleGithub('https://github.com/Barsu5489/PortfolioApplication')}}><FontAwesomeIcon icon={faGithub} /></span>
    </div>
  </div>
  <div class="languages">
    <h4>Tech stack used:</h4>
    <ol>

    <li>JavaScript</li>
      <li>HTML/CSS</li>
      <li>Ruby</li>
      <li>React</li>
      <li>Render</li>
      <li>SQLite</li>
      <li>Postman</li>
      <li>Figma</li>
      <li>GIT</li>
    </ol>
  </div>
  
</div>
<div className='works_image_container' onClick={()=>handleClick('https://github.com/Barsu5489/printf')}>   
<h3>Printf()</h3>  
    <img src="https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fERvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    <div class="overlay">
    <div class="overlay-content">
      <p>In this project we created our own _printf() function, that replicates the standard C lang printf() function</p>
      <i style={{display:'none'}}></i> <span className='git_icon' onClick={(event)=>  {
      event.stopPropagation();handleGithub('https://github.com/Barsu5489/printf')}}><FontAwesomeIcon icon={faGithub} /></span>
    </div>
  </div>
  <div class="languages">
    <h4>Tech used:</h4>
    <ol>
      <li>C</li>
      <li>VIM</li>
      <li>GIT</li>
    </ol>
  </div>
</div>   
<div className='works_image_container' onClick={()=>handleClick('https://github.com/Barsu5489/simple_shell')}> 
<h3>Simple Shell</h3>  
     <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Qm9va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
     <div class="overlay">
    <div class="overlay-content">
      <p>This project is an implementation of the shell created as a Milestone Project for the C code at ALX Africa Software Engineering.</p>
      <i style={{display:'none'}}></i>  <span className='git_icon' onClick={(event)=>  {
      event.stopPropagation();handleGithub('https://github.com/Barsu5489/simple_shell')}}><FontAwesomeIcon icon={faGithub} /></span>
    </div>
  </div>
  <div class="languages">
    <h4>Tech stack used:</h4>
    <ol>
      <li>C</li>
      <li>VIM</li>
      <li>GIT</li>
    </ol>
  </div>
</div>   </div>
   </div>
  )
}

export default Works
