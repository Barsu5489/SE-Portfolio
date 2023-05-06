import React from 'react'

function Works() {
  return (
   <>
   <div className='project_imgs'>
   <div className='works_image_container'> 
      <h3>Fashionnova</h3>   
      <img src="https://images.unsplash.com/photo-1657812159103-1b2a52a7f5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM0fHxlY29tbWVyY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      <div class="overlay">
    <div class="overlay-content"> 
      <p>This ecommerce app lets users shop for fashionable clothing and accessories while providing an admin dashboard for the website owner to manage products, inventory, and sales.</p>

      <button></button>
    </div>
  </div>
  <div class="languages">
    <h4>Languages used:</h4>
    <ol>
      <li>Redux</li>
      <li>CSS</li>
      <li>Vanilla</li>
      <li>React</li>
      <li>Ruby</li>
      <li>Postgres</li>
    </ol>
  </div>
</div>
<div className='works_image_container'>   
<h3>Job App</h3>  
   <img src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Sm9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
   <div class="overlay">
    <div class="overlay-content">
      <p>Info about the image</p>
    </div>
  </div>
  <div class="languages">
    <h4>Languages used:</h4>
    <ul>
    <li>React</li>
      <li>Rails</li>
      <li>SQLite</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </div>
</div>   
<div className='works_image_container'>  
<h3>Crypto</h3>  
    <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyeXB0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    <div class="overlay">
    <div class="overlay-content">
      <p>Info about the image</p>
    </div>
  </div>
  <div class="languages">
    <h4>Languages used:</h4>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Vanilla JS</li>
    </ul>
  </div>
</div> 
  </div>
   <div className='works_title'>
<h2>Current <span>Works</span></h2>
   </div>
   <div className='project_imgs'>
   <div className='works_image_container'>    
      <h3>Portfolio</h3>
      <img src="https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBvcnRmb2xpbyUyMG1hbmFnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
      <div class="overlay">
    <div class="overlay-content">
      <p>Info about the image</p>
    </div>
  </div>
  <div class="languages">
    <h4>Languages used:</h4>
    <ul>

    <li>JavaScript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
      <li>Ruby</li>
      <li>SQLite</li>
      <li>Postman</li>
    </ul>
  </div>
  
</div>
<div className='works_image_container'>   
<h3>Printf</h3>  
    <img src="https://images.unsplash.com/photo-1603827457577-609e6f42a45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fERvbmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    <div class="overlay">
    <div class="overlay-content">
      <p>Info about the image</p>
    </div>
  </div>
  <div class="languages">
    <h4>Tech used:</h4>
    <ul>
      <li>C</li>
      <li>VIM</li>
    </ul>
  </div>
</div>   
<div className='works_image_container'> 
<h3>Shell</h3>  
     <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Qm9va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
     <div class="overlay">
    <div class="overlay-content">
      <p>Info about the image</p>
    </div>
  </div>
  <div class="languages">
    <h4>Tech used:</h4>
    <ul>
      <li>C</li>
      <li>VIM</li>
    </ul>
  </div>
</div>   </div>
   </>
  )
}

export default Works

// import React, { useState, useEffect, useRef } from "react";
// import normalizeWheel from "normalize-wheel";

// import "./works.scss";

// const App = () => {
//   const sliderRef = useRef(null);
//   const sliderFirstRef = useRef(null);
//   const sliderSecondRef = useRef(null);

//   const [scroll, setScroll] = useState({
//     current: 0,
//     target: 0,
//     ease: 0.1,
//   });

//   const [sliderBounds, setSliderBounds] = useState(null);
//   const [multiplier, setMultiplier] = useState(0);

//   useEffect(() => {
//     window.addEventListener("mousewheel", onMouseWheel);
//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("mousewheel", onMouseWheel);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (sliderRef.current) {
//       setSliderBounds(sliderRef.current.getBoundingClientRect());
//     }
//   }, [sliderRef]);

//   useEffect(() => {
//     const rafId = requestAnimationFrame(update);
//     return () => cancelAnimationFrame(rafId);
//   }, [scroll, sliderBounds, multiplier]);

//   const addEvents = () => {
//     window.addEventListener("mousewheel", onMouseWheel);
//     window.addEventListener("resize", onResize);
//   };

//   const onMouseWheel = (event) => {
//     const normalized = normalizeWheel(event);
//     const { pixelY } = normalized;
//     setScroll((prevScroll) => ({ ...prevScroll, target: prevScroll.target + pixelY }));
//   };

//   const onResize = () => {
//     if (sliderRef.current) {
//       setSliderBounds(sliderRef.current.getBoundingClientRect());
//     }
//   };

//   const update = () => {
//     setScroll((prevScroll) => ({
//       ...prevScroll,
//       current: prevScroll.current + (prevScroll.target - prevScroll.current) * prevScroll.ease,
//     }));
  
//     const maxScroll = sliderBounds.width * 2;
//     let newScroll = scroll.current + (scroll.target - scroll.current) * scroll.ease;
  
//     if (newScroll > maxScroll) {
//       newScroll -= maxScroll;
//     } else if (newScroll < 0) {
//       newScroll += maxScroll;
//     }
  
//     setScroll((prevScroll) => ({ ...prevScroll, current: newScroll }));
  
//     const multipliedScroll = newScroll * 1.1;
//     const multipliedIndex = (multipliedScroll / sliderBounds.width) * 2;
//     const newMultiplier = Math.floor(multipliedIndex) % 2;
  
//     if (sliderFirstRef.current && sliderSecondRef.current) {
//       sliderFirstRef.current.style.transform = `translateX(${
//         -multipliedScroll + (newMultiplier * sliderBounds.width) / 2
//       }px)`;
//       sliderSecondRef.current.style.transform = `translateX(${
//         -multipliedScroll + ((newMultiplier + 1) * sliderBounds.width) / 2
//       }px)`;
//     }
  
//     requestAnimationFrame(update);
//   };
  
  
  
  
//   return (
//     <div >
//       <section>
//         <div className="slider" ref={sliderRef}>
//           <div className="first-slider" ref={sliderFirstRef}>
//             <div className="slider-section">
//               <div className="slider-image-wrapper">
//                 <img
//                   className="slider-image"
//                   src="https://source.unsplash.com/1600x900/?nature,water"
//                   alt=""
//                 />
//                 <h2 className="slider-title">Title 1</h2>
//               </div>
//             </div>
//             <div className="slider-section">
//               <div className="slider-image-wrapper">
//                 <img
//                   className="slider-image"
//                   src="https://source.unsplash.com/1600x900/?nature,water"
//                   alt=""
//                 />
//                 <h2 className="slider-title">Title 2</h2>
//               </div>
//             </div>
//           </div>
//           <div className="second-slider" ref={sliderSecondRef}>
// <div className="slider-section">
// <div className="slider-image-wrapper">
// <img
//                className="slider-image"
//                src="https://source.unsplash.com/1600x900/?nature,water"
//                alt=""
//              />
// <h2 className="slider-title">Title 3</h2>
// </div>
// </div>
// {/* <div className="slider-section">
// <div className="slider-image-wrapper">
// <img
//                className="slider-image"
//                src="https://source.unsplash.com/1600x900/?nature,water"
//                alt=""
//              />
// <h2 className="slider-title">Title 4</h2>
// </div>
// </div> */}
// </div>
// </div>
// </section>
// </div>
// );
// };

// export default App;
