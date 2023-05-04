import React, { useState, useEffect, useRef } from "react";
import normalizeWheel from "normalize-wheel";

import "./works.scss";

const App = () => {
  const sliderRef = useRef(null);
  const sliderFirstRef = useRef(null);
  const sliderSecondRef = useRef(null);

  const [scroll, setScroll] = useState({
    current: 0,
    target: 0,
    ease: 0.1,
  });

  const [sliderBounds, setSliderBounds] = useState(null);
  const [multiplier, setMultiplier] = useState(0);

  useEffect(() => {
    window.addEventListener("mousewheel", onMouseWheel);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousewheel", onMouseWheel);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderBounds(sliderRef.current.getBoundingClientRect());
    }
  }, [sliderRef]);

  useEffect(() => {
    const rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [scroll, sliderBounds, multiplier]);

  const addEvents = () => {
    window.addEventListener("mousewheel", onMouseWheel);
    window.addEventListener("resize", onResize);
  };

  const onMouseWheel = (event) => {
    const normalized = normalizeWheel(event);
    const { pixelY } = normalized;
    setScroll((prevScroll) => ({ ...prevScroll, target: prevScroll.target + pixelY }));
  };

  const onResize = () => {
    if (sliderRef.current) {
      setSliderBounds(sliderRef.current.getBoundingClientRect());
    }
  };

  const update = () => {
    setScroll((prevScroll) => ({
      ...prevScroll,
      current: prevScroll.current + (prevScroll.target - prevScroll.current) * prevScroll.ease,
    }));
  
    // arbitrary value to allow more scroll
    const multipliedScroll = scroll.current * 1.1;
    const multipliedIndex = (multipliedScroll / sliderBounds.width) * 2;
    let newMultiplier = Math.floor(multipliedIndex);
  
    if (newMultiplier >= 4) {
      newMultiplier = 0;
    }
  
    setMultiplier(newMultiplier);
  
    if (sliderFirstRef.current && sliderSecondRef.current) {
      sliderFirstRef.current.style.transform = `translateX(${
        -multipliedScroll + (newMultiplier * sliderBounds.width) / 2
      }px)`;
      sliderSecondRef.current.style.transform = `translateX(${
        -multipliedScroll + (newMultiplier * sliderBounds.width) / 2
      }px)`;
    }
  
    requestAnimationFrame(update);
  };
  
  return (
    <div >
      <section>
        <div className="slider" ref={sliderRef}>
          <div className="first-slider" ref={sliderFirstRef}>
            <div className="slider-section">
              <div className="slider-image-wrapper">
                <img
                  className="slider-image"
                  src="https://source.unsplash.com/1600x900/?nature,water"
                  alt=""
                />
                <h2 className="slider-title">Title 1</h2>
              </div>
            </div>
            <div className="slider-section">
              <div className="slider-image-wrapper">
                <img
                  className="slider-image"
                  src="https://source.unsplash.com/1600x900/?nature,water"
                  alt=""
                />
                <h2 className="slider-title">Title 2</h2>
              </div>
            </div>
          </div>
          <div className="second-slider" ref={sliderSecondRef}>
<div className="slider-section">
<div className="slider-image-wrapper">
<img
               className="slider-image"
               src="https://source.unsplash.com/1600x900/?nature,water"
               alt=""
             />
<h2 className="slider-title">Title 3</h2>
</div>
</div>
<div className="slider-section">
<div className="slider-image-wrapper">
<img
               className="slider-image"
               src="https://source.unsplash.com/1600x900/?nature,water"
               alt=""
             />
<h2 className="slider-title">Title 4</h2>
</div>
</div>
</div>
</div>
</section>
</div>
);
};

export default App;
