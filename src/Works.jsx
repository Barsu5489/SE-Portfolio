import React from 'react'

function Works() {
  return (
   <>
   <section class="content">
    <p>Works</p>
				{/* <div class="content__title-wrap">
					<h2 class="content__title">Issey Maurice</span></h2>
					<h3 class="content__subtitle">Interior Design</span></h3>
				</div> */}
				<div class="grid-wrap">
					<div class="grid">
						<a class="grid__item" data-title="Rockbare Hub, NY"><span class="grid__item-img" style={{backgroundImage:"url(https://images.unsplash.com/photo-1682876190933-9fd15369b5df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)"}}></span></a>
						<a class="grid__item" data-title="Alo House, LA"><span class="grid__item-img" style="background-image:url(img/2.jpg)"></span></a>
						<a class="grid__item" data-title="Freedom Field, NY"><span class="grid__item-img" style="background-image:url(img/3.jpg)"></span></a>
						<a class="grid__item" data-title="Hollow Creek, AR"><span class="grid__item-img" style="background-image:url(img/4.jpg)"></span></a>
						<a class="grid__item" data-title="Coco's Place, VT"><span class="grid__item-img" style="background-image:url(img/5.jpg)"></span></a>
						<a class="grid__item" data-title="French Blanc, WY"><span class="grid__item-img" style="background-image:url(img/6.jpg)"></span></a>
						<a class="grid__item" data-title="Fantasy Garden, NY"><span class="grid__item-img" style="background-image:url(img/7.jpg)"></span></a>
						<a class="grid__item" data-title="Quegmire Denn, LA"><span class="grid__item-img" style="background-image:url(img/8.jpg)"></span></a>
						<a class="grid__item" data-title="Kurku Wax, NY"><span class="grid__item-img" style="background-image:url(img/9.jpg)"></span></a>
						<a class="grid__item" data-title="Jen's Hub, CO"><span class="grid__item-img" style="background-image:url(img/10.jpg)"></span></a>
						<a class="grid__item" data-title="Beluga Nest, AZ"><span class="grid__item-img" style="background-image:url(img/11.jpg)"></span></a>
						<a class="grid__item" data-title="Bibi Montes, FL"><span class="grid__item-img" style="background-image:url(img/12.jpg)"></span></a>
						<a class="grid__item" data-title="QX House, NY"><span class="grid__item-img" style="background-image:url(img/13.jpg)"></span></a>
						<a class="grid__item" data-title="Lola's Garden, DC"><span class="grid__item-img" style="background-image:url(img/14.jpg)"></span></a>
					</div>
				</div>
				{/* <div class="enter oh">
					<a class="enter__link oh__inner"> 
						<span>Enter</span> 
						<svg width="18px" height="18px" viewBox="0 0 24 24"><path vector-effect="non-scaling-stroke" d="M18.25 15.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-9a.75.75 0 000 1.5h7.19L6.22 16.72a.75.75 0 101.06 1.06L17.5 7.56v7.19c0 .414.336.75.75.75z"></path>
						</svg>
					</a> 
				</div> */}
			</section>
      <section class="works">
				<h2 class="works__title">
					<span class="oh"><span class="oh__inner">Selected</span></span>
					<span class="oh"><span class="oh__inner">Works</span></span>
				</h2>
				{/* <!-- grid gets flipped here --> */}
			</section>
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
