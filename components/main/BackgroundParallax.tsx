// components/ParallaxBackground.js
"use client";

import React, { useEffect } from "react";

const ParallaxBackground = ({
  children,
  starlessImg,
  starmaskImg,
  speedFactor,
}: any) => {
  const throttle = (func: any, limit: any) => {
    let inThrottle: any;
    return function () {
      const args = arguments;
      //@ts-ignore
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Your parallax effect logic here
      const element = document.querySelector(".starmask") as any;
      if (element !== null) {
        const parallaxOffset = offset > 100 ? (offset - 100) * speedFactor : 0;
        element.style.backgroundPositionY = `${parallaxOffset}px`;
      }
    };
    // throttle(, 100); // Adjust the limit as needed

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div className="starless" />
      <div className="starmask" />
      {children} {/* This is where your content will go */}
      <style jsx>{`
        .parallax-container {
          position: relative;
          overflow: visible;
          min-height: 100vh; // Ensure it covers at least the viewport height
        }
        .starless,
        .starmask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }
        .starless {
          background-image: url(${starlessImg});
          z-index: 1;
        }
        .starmask {
          background-position: center 0px; /* Adjust the initial Y offset as needed */

          background-image: url(${starmaskImg});
          z-index: 2;
          transform: translateZ(0);
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default ParallaxBackground;
