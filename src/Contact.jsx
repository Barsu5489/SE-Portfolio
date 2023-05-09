import React, { useState } from 'react'
import './Contact.css'
function Contact() {
  const [classInfo, setClassInfo] = useState('')
  function handleAddClass(){
    // setClassInfo('sent')
     document.body.classList.add("sent");
  }
  return (
   <>
   <div className='conatact_container'>
   <small>Enter message (optional) and click button "Send"</small>
<div className="wrapper centered">
  <article className="letter">
    <div className="side">
      <h1 style={{color:'black'}}>Send Message</h1>
      <p>
        <textarea placeholder="Your message"></textarea>
      </p>
    </div>
    <div className="side">
      <p>
        <input type="text" placeholder="Your name" />
      </p>
      <p>
        <input type="email" placeholder="Your email" />
      </p>
      <p> 
        
        <button id="sendLetter" className={classInfo} onClick={handleAddClass}>Send</button>
      </p>
    </div>
  </article>
  <div className="envelope front"></div>
  <div className="envelope back"></div>
</div>
<p className="result-message centered">Thank you for your message</p>
   </div>
   </>
  )
}

export default Contact